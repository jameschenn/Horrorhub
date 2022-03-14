'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catchlist = sequelize.define('Catchlist', {
    catchstatus: DataTypes.STRING,
    trainerId: DataTypes.INTEGER
  }, {});
  Catchlist.associate = function(models) {
    // associations can be defined here
    Catchlist.belongsTo(model.Trainer, {foreignKey: 'pokemonId'});

    const columnMapping = {
    foreignKey: 'catchlistId',
    through: 'CatchlistJoinPokemon',
    otherKey: 'pokemonId'
    };
    Catchlist.belongsToMany(models.Pokemon, columnMapping);
    };
    return Catchlist;
};