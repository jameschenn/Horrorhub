const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const db = require('../db/models')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const session = require('express-session');
const { userLogin, userRestore, requireAuth, userLogout } = require('../auth')


const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};



router.get('/:trainerId(\\d+)', asyncHandler(async (req, res) => {
    if (req.session.auth) {
        const trainerId = parseInt(req.params.trainerId, 10)
        // const catchlists = await db.Catchlist.findAll(trainerId,{

        //     include: [db.Catchlist,
        //     {
        //         model: db.CatchlistJoinPokemon,
        //         include: [db.Pokemon]
        //     }]

        // })


        const catchlists = await db.Catchlist.findAll({  //get 3 catchlists for single user
            where: { trainerId }
        })


        res.render('profile', { title: 'Profile', catchlists })


    }
}))



router.get('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async (req, res) => {
    //run query on join table where catchlistId is catchlistId
    const trainerId = parseInt(req.params.trainerId, 10)
    const trainer = await db.Trainer.findByPk(trainerId)
    const catchlistId = parseInt(req.params.catchlistId, 10)
    // console.log('type')
    // const jointable = await db.CatchlistJoinPokemon.findAll(
    //     {
    //     include: {
    //         model: db.Pokemon,
    //         include: db.Catchlist
    //     }
    //     // where: {
    //     //     catchlistId
    //     // }
    // }
    // )
    const pokemons = await db.Catchlist.findAll({
        include: db.Pokemon,
        where: {id: catchlistId}

    })
        const pokemonList = pokemons[0].Pokemons
        // console.log('POKEMONS ---->', pokemons[0].id)
    // console.log('CatchList ---->', pokemon[0].Pokemons.length)
    res.render('catchlist', { title: 'catchlists', pokemonList, trainer, catchlistId })

}))

// router.post('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async(req, res) => {
//     const catchlistId = parseInt(req.params.catchlistId, 10)
//     const trainerId = parseInt(req.params.trainerId, 10)
//     // post the pokemon to the catchlist associated to the trainer
//     if(req.session.auth) {
//         res.redirect(`/${trainerId}/${catchlistId}`);
//     }
// }))

const catchlistValidator = [
    check('catchlist_name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a Catch List name')
        .isLength({ max: 60 })
        .withMessage('Catch List name must not be more than 60 characters long')
]

router.get('/add', csrfProtection, asyncHandler(async(req, res, next) => {
    if(req.session.auth) {
        const trainerId = parseInt(req.params.trainerId, 10)
        const catchlist = db.Catchlist.build();
        res.render('new-list', {
            title: "Create new Catchlist",
            catchlist,
            trainerId,
            csrfToken: req.csrfToken()
        });
    }
}))

router.post('/add', csrfProtection, catchlistValidator, asyncHandler(async (req, res) => {
    const { name, trainerId } = req.body;

    const catchlist = db.Catchlist.build({ name, trainerId });

    const validationErrors = validationResult(req);
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('new-list', {
        title: 'Create New Catchlist',
        catchlist,
        trainerId,
        errors,
        csrfToken: req.csrfToken()
    });
    res.redirect('/:trainerId(\\d+)')
}))

router.delete('/:trainerId(\\d+)/:catchlistId(\\d+)/:pokeId(\\d+)', asyncHandler(async (req, res) => {
    const catchlistId = parseInt(req.params.catchlistId, 10)
    const pokeId = parseInt(req.params.pokeId, 10)
    console.log(catchlistId)
    console.log(pokeId)
    // const pokemons = await db.Catchlist.findAll({
    //     include: db.Pokemon,
    //     where: { id: catchlistId }
    // })
    const pokemon = await db.CatchlistJoinPokemon.findOne({
        where: {
            catchlistId,
            pokemonId: pokeId
        }
    })
    console.log("POKEMON ---------> ", pokemon);
    // const pokemonId = pokemon.id
    if(pokemon) {
        await pokemon.destroy()
        res.json({message: 'Success'});
    } else {
        res.json({message: 'Fail'})
    }

//     // const pokemonList = pokemons[0].Pokemons

}))


module.exports = router;
