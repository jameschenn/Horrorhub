'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokemons', [
      { name: "bulbasaur", image: "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png", description: "Seed Pokémon", type: "grass/poison" },
      { name: "ivysaur", image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png", description: "Seed Pokémon Pokémon", type: "grass/poison" },
      { name: "venusaur", image: "https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png", description: "Seed Pokémon Pokémon", type: "grass/poison" },
      { name: "charmander", image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png", description: "Lizard Pokémon", type: "fire" },
      { name: "charmeleon", image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png", description: "Flame Pokémon", type: "fire" },
      { name: "charizard", image: "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png", description: "Flame Pokémon", type: "fire/flying" },
      { name: "squirtle", image: "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png", description: " Tiny Turtle Pokémon", type: "water" },
      { name: "wartortle", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png", description: "Turtle Pokémon", type: "water" },
      { name: "blastoise", image: "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png", description: "Shellfish Pokémon", type: "water" },
      { name: "caterpie", image: "https://archives.bulbagarden.net/media/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png", description: "Worm Pokémon", type: "bug" },
      { name: "metapod", image: "https://archives.bulbagarden.net/media/upload/thumb/c/cd/011Metapod.png/250px-011Metapod.png", description: "Cocoon Pokémon", type: "bug" },
      { name: "butterfree", image: "https://archives.bulbagarden.net/media/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png", description: "butterfly Pokémon", type: "bug'/flying" },
      { name: "weedle", image: "https://archives.bulbagarden.net/media/upload/thumb/d/df/013Weedle.png/250px-013Weedle.png", description: "Hair Bug Pokémon", type: "bug/poison" },
      { name: "kakuna", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png", description: "Cocoon Pokémon", type: "bug/poison" },
      { name: "beedrill", image: "https://archives.bulbagarden.net/media/upload/thumb/6/61/015Beedrill.png/250px-015Beedrill.png", description: "Poison Bee Pokémon", type: "bug/poison" },
      { name: "pidgey", image: "https://archives.bulbagarden.net/media/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png", description: "Tiny Bird Pokémon", type: "normal/flying" },
      { name: "pidgeotto", image: "https://archives.bulbagarden.net/media/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png", description: "Bird Pokémon", type: "normal/flying" },
      { name: "pidgeot", image: "https://archives.bulbagarden.net/media/upload/thumb/5/57/018Pidgeot.png/250px-018Pidgeot.png", description: "Bird Pokémon", type: "normal/flying" },
      { name: "rattata", image: "https://archives.bulbagarden.net/media/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png", description: "Mouse Pokémon", type: "normal" },
      { name: "raticate", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f4/020Raticate.png/250px-020Raticate.png", description: "Mouse Pokémon", type: "normal" },
      { name: "spearow", image: "https://archives.bulbagarden.net/media/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png", description: "Tiny Bird Pokémon", type: "normal/flying" },
      { name: "fearow", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png", description: "Beak Pokémon", type: "normal/flying" },
      { name: "ekans", image: "https://archives.bulbagarden.net/media/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png", description: "Snake Pokémon", type: "poison" },
      { name: "arbok", image: "https://archives.bulbagarden.net/media/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png", description: "Cobra Pokémon", type: "poison" },
      { name: "pikachu", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png", description: "Mouse Pokémon", type: "electric" },
      { name: "raichu", image: "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png", description: "Mouse Pokémon", type: "electric" },
      { name: "sandshrew", image: "https://archives.bulbagarden.net/media/upload/thumb/9/9e/027Sandshrew.png/250px-027Sandshrew.png", description: "Mouse Pokémon", type: "ground" },
      { name: "sandslash", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0b/028Sandslash.png/250px-028Sandslash.png", description: "Mouse Pokémon", type: "ground" },
      { name: "nidoran-f", image: "https://archives.bulbagarden.net/media/upload/thumb/8/81/029Nidoran.png/250px-029Nidoran.png", description: "Poison Pin Pokémon", type: "poison" },
      { name: "nidorina", image: "https://archives.bulbagarden.net/media/upload/thumb/c/cd/030Nidorina.png/250px-030Nidorina.png", description: "Poison Pin Pokémon", type: "poison" },
      { name: "nidoqueen", image: "https://archives.bulbagarden.net/media/upload/thumb/b/bf/031Nidoqueen.png/250px-031Nidoqueen.png", description: "Drill Pokémon", type: "poison/ground" },
      { name: "nidoran-m", image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/032Nidoran.png/250px-032Nidoran.png", description: "Poison Pin Pokémon", type: "poison" },
      { name: "nidorino", image: "https://archives.bulbagarden.net/media/upload/thumb/9/9f/033Nidorino.png/250px-033Nidorino.png", description: "Poison Pin Pokémon", type: "poison" },
      { name: "nidoking", image: "https://archives.bulbagarden.net/media/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png", description: "Drill Pokémon", type: "poison/ground" },
      { name: "clefairy", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png", description: "Fairy Pokémon", type: "normal" },
      { name: "clefable", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a9/036Clefable.png/250px-036Clefable.png", description: "Fairy Pokémon", type: "normal" },
      { name: "vulpix", image: "https://archives.bulbagarden.net/media/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png", description: "Fox Pokémon", type: "Fire" },
      { name: "ninetales", image: "https://archives.bulbagarden.net/media/upload/thumb/0/05/038Ninetales.png/250px-038Ninetales.png", description: "Fox Pokémon", type: "fire" },
      { name: "jigglypuff", image: "https://archives.bulbagarden.net/media/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png", description: "Balloon Pokémon", type: "fairy" },
      { name: "wigglytuff", image: "https://archives.bulbagarden.net/media/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png", description: "Balloon Pokémon", type: "fairy" },
      { name: "zubat", image: "https://archives.bulbagarden.net/media/upload/thumb/d/da/041Zubat.png/250px-041Zubat.png", description: "Bat Pokémon", type: "poison/flying" },
      { name: "golbat", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0c/042Golbat.png/250px-042Golbat.png", description: "Bat Pokémon", type: "poison/flying" },
      { name: "oddish", image: "https://archives.bulbagarden.net/media/upload/thumb/4/43/043Oddish.png/250px-043Oddish.png", description: "Weed Pokémon", type: "grass/poison" },
      { name: "gloom", image: "https://archives.bulbagarden.net/media/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png", description: "Weed Pokémon", type: "grass/poison" },
      { name: "vileplume", image: "https://archives.bulbagarden.net/media/upload/thumb/6/6a/045Vileplume.png/250px-045Vileplume.png", description: "Flower Pokémon", type: "grass/poison" },
      { name: "paras", image: "https://archives.bulbagarden.net/media/upload/thumb/d/d4/046Paras.png/250px-046Paras.png", description: "Mushroom Pokémon", type: "bug/grass" },
      { name: "parasect", image: "https://archives.bulbagarden.net/media/upload/thumb/8/80/047Parasect.png/250px-047Parasect.png", description: "Mushroom Pokémon", type: "bug/grass" },
      { name: "venonat", image: "https://archives.bulbagarden.net/media/upload/thumb/a/ad/048Venonat.png/250px-048Venonat.png", description: "Insect Pokémon", type: "bug/poison" },
      { name: "venomoth", image: "https://archives.bulbagarden.net/media/upload/thumb/d/d3/049Venomoth.png/250px-049Venomoth.png", description: "Poison Moth Pokémon", type: "bug/poison" },
      { name: "diglett", image: "https://archives.bulbagarden.net/media/upload/thumb/3/31/050Diglett.png/250px-050Diglett.png", description: "Mole Pokémon", type: "ground" },
      { name: "dugtrio", image: "https://archives.bulbagarden.net/media/upload/thumb/e/e5/051Dugtrio.png/250px-051Dugtrio.png", description: "Mole Pokémon", type: "ground" },
      { name: "meowth", image: "https://archives.bulbagarden.net/media/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png", description: "Scratch Cat Pokémon", type: "normal" },
      { name: "persian", image: "https://archives.bulbagarden.net/media/upload/thumb/1/13/053Persian.png/250px-053Persian.png", description: "Classy Cat Pokémon", type: "normal" },
      { name: "psyduck", image: "https://archives.bulbagarden.net/media/upload/thumb/5/53/054Psyduck.png/250px-054Psyduck.png", description: "Duck Pokémon", type: "water" },
      { name: "golduck", image: "https://archives.bulbagarden.net/media/upload/thumb/f/fe/055Golduck.png/250px-055Golduck.png", description: "Duck Pokémon", type: "water" },
      { name: "mankey", image: "https://archives.bulbagarden.net/media/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png", description: "Pig Monkey Pokémon", type: "fighting" },
      { name: "primeape", image: "https://archives.bulbagarden.net/media/upload/thumb/9/9a/057Primeape.png/250px-057Primeape.png", description: "Pig Monkey Pokémon", type: "fighting" },
      { name: "growlithe", image: "https://archives.bulbagarden.net/media/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png", description: "Puppy Pokémon", type: "fire" },
      { name: "arcanine", image: "https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png", description: "Legendary Pokémon", type: "fire" },
      { name: "poliwag", image: "https://archives.bulbagarden.net/media/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png", description: "Tadpole Pokémon", type: "water" },
      { name: "poliwhirl", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a9/061Poliwhirl.png/250px-061Poliwhirl.png", description: "Tadpole Pokémon", type: "water" },
      { name: "poliwrath", image: "https://archives.bulbagarden.net/media/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png", description: "Tadpole Pokémon", type: "water/fighting" },
      { name: "abra", image: "https://archives.bulbagarden.net/media/upload/thumb/6/62/063Abra.png/250px-063Abra.png", description: "Psi Pokémon", type: "psychic" },
      { name: "kadabra", image: "https://archives.bulbagarden.net/media/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png", description: "Psi Pokémon", type: "psychic" },
      { name: "alakazam", image: "https://archives.bulbagarden.net/media/upload/thumb/c/cc/065Alakazam.png/250px-065Alakazam.png", description: "Psi Pokémon", type: "psychic" },
      { name: "machop", image: "https://archives.bulbagarden.net/media/upload/thumb/8/85/066Machop.png/250px-066Machop.png", description: "Superpower Pokémon", type: "fighting" },
      { name: "machoke", image: "https://archives.bulbagarden.net/media/upload/thumb/8/8e/067Machoke.png/250px-067Machoke.png", description: "Superpower Pokémon", type: "fighting" },
      { name: "machamp", image: "https://archives.bulbagarden.net/media/upload/thumb/8/8f/068Machamp.png/250px-068Machamp.png", description: "Superpower Pokémon", type: "fighting" },
      { name: "bellsprout", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a2/069Bellsprout.png/250px-069Bellsprout.png", description: "Flower Pokémon", type: "grass/poison" },
      { name: "weepinbell", image: "https://archives.bulbagarden.net/media/upload/thumb/9/9f/070Weepinbell.png/250px-070Weepinbell.png", description: "Flycatcher Pokémon", type: "grass/poison" },
      { name: "victreebel", image: "https://archives.bulbagarden.net/media/upload/thumb/b/be/071Victreebel.png/250px-071Victreebel.png", description: "Flycatcher Pokémon", type: "grass/poison" },
      { name: "tentacool", image: "https://archives.bulbagarden.net/media/upload/thumb/4/4e/072Tentacool.png/250px-072Tentacool.png", description: "Jellyfish Pokémon", type: "water/poison" },
      { name: "tentacruel", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f6/073Tentacruel.png/250px-073Tentacruel.png", description: "Jellyfish Pokémon", type: "water/poison" },
      { name: "geodude", image: "https://archives.bulbagarden.net/media/upload/thumb/9/98/074Geodude.png/250px-074Geodude.png", description: "Rock Pokémon", type: "rock/ground" },
      { name: "graveler", image: "https://archives.bulbagarden.net/media/upload/thumb/7/75/075Graveler.png/250px-075Graveler.png", description: "Rock Pokémon", type: "rock/ground" },
      { name: "golem", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f2/076Golem.png/250px-076Golem.png", description: "Megaton Pokémon", type: "rock/ground" },
      { name: "ponyta", image: "https://bulbapedia.bulbagarden.net/wiki/File:077Ponyta.png", description: "Fire Horse Pokémon", type: "fire" },
      { name: "rapidash", image: "https://archives.bulbagarden.net/media/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png", description: "Fire Horse Pokémon", type: "fire" },
      { name: "slowpoke", image: "https://archives.bulbagarden.net/media/upload/thumb/7/70/079Slowpoke.png/250px-079Slowpoke.png", description: "Dopey Pokémon", type: "water/psychic" },
      { name: "slowbro", image: "https://archives.bulbagarden.net/media/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png", description: "Hermit Crab Pokémon", type: "water/psychic" },
      { name: "magnemite", image: "https://archives.bulbagarden.net/media/upload/thumb/6/6c/081Magnemite.png/250px-081Magnemite.png", description: "Magnet Pokémon", type: "electric/steel" },
      { name: "magneton", image: "https://archives.bulbagarden.net/media/upload/thumb/7/72/082Magneton.png/250px-082Magneton.png", description: "Magnet Pokémon", type: "electric/steel" },
      { name: "farfetchd", image: "https://archives.bulbagarden.net/media/upload/thumb/f/f8/083Farfetch%27d.png/250px-083Farfetch%27d.png", description: "Wild Duck Pokémon", type: "normal/flying" },
      { name: "doduo", image: "https://archives.bulbagarden.net/media/upload/thumb/5/54/084Doduo.png/250px-084Doduo.png", description: "Twin Bird Pokémon", type: "normal/flying" },
      { name: "dodrio", image: "https://archives.bulbagarden.net/media/upload/thumb/9/93/085Dodrio.png/250px-085Dodrio.png", description: "Triple Bird Pokémon", type: "normal/flying" },
      { name: "seel", image: "https://archives.bulbagarden.net/media/upload/thumb/1/1f/086Seel.png/250px-086Seel.png", description: "Sea Lion Pokémon", type: "water" },
      { name: "dewgong", image: "https://archives.bulbagarden.net/media/upload/thumb/c/c7/087Dewgong.png/250px-087Dewgong.png", description: "Sea Lion Pokémon", type: "water/ice" },
      { name: "grimer", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a0/088Grimer.png/250px-088Grimer.png", description: "Sludge Pokémon", type: "poison" },
      { name: "muk", image: "https://archives.bulbagarden.net/media/upload/thumb/7/7c/089Muk.png/250px-089Muk.png", description: "Sludge Pokémon", type: "poison" },
      { name: "shellder", image: "https://archives.bulbagarden.net/media/upload/thumb/4/40/090Shellder.png/250px-090Shellder.png", description: "Bivalve Pokémon", type: "water" },
      { name: "cloyster", image: "https://archives.bulbagarden.net/media/upload/thumb/1/1d/091Cloyster.png/250px-091Cloyster.png", description: "Bivalve Pokémon", type: "water/ice" },
      { name: "gastly", image: "https://archives.bulbagarden.net/media/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png", description: "Gas Pokémon", type: "ghost/poison" },
      { name: "haunter", image: "https://archives.bulbagarden.net/media/upload/thumb/6/62/093Haunter.png/250px-093Haunter.png", description: "Gas Pokémon", type: "ghost/poison" },
      { name: "gengar", image: "https://archives.bulbagarden.net/media/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png", description: "Shadow Pokémon", type: "ghost/poison" },
      { name: "onix", image: "https://archives.bulbagarden.net/media/upload/thumb/9/9a/095Onix.png/250px-095Onix.png", description: "Rock Snake Pokémon", type: "rock/ground" },
      { name: "drowzee", image: "https://archives.bulbagarden.net/media/upload/thumb/3/3e/096Drowzee.png/250px-096Drowzee.png", description: "Hypnosis Pokémon", type: "psychic" },
      { name: "hypno", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0a/097Hypno.png/250px-097Hypno.png", description: "Hypnosis Pokémon", type: "psychic" },
      { name: "krabby", image: "https://archives.bulbagarden.net/media/upload/thumb/a/a7/098Krabby.png/250px-098Krabby.png", description: "River Crab Pokémon", type: "water" },
      { name: "kingler", image: "https://archives.bulbagarden.net/media/upload/thumb/7/71/099Kingler.png/250px-099Kingler.png", description: "Pincer Pokémon", type: "water" },
      { name: "voltorb", image: "https://archives.bulbagarden.net/media/upload/thumb/d/da/100Voltorb.png/250px-100Voltorb.png", description: "Ball Pokémon", type: "electric" },
      { name: "electrode", image: "https://archives.bulbagarden.net/media/upload/thumb/8/84/101Electrode.png/250px-101Electrode.png", description: "Ball Pokémon", type: "electric" },
      { name: "exeggcute", image: "https://archives.bulbagarden.net/media/upload/a/af/102Exeggcute.png", description: "Egg Pokemon", type: "grass/psychic" },
      { name: "exeggutor", image: "https://archives.bulbagarden.net/media/upload/2/24/103Exeggutor.png", description: "Coconut Pokémon", type: "grass/psychic" },
      { name: "cubone", image: "https://archives.bulbagarden.net/media/upload/2/2a/104Cubone.png", description: "Lonely Pokémon", type: "ground" },
      { name: "marowak", image: "https://archives.bulbagarden.net/media/upload/9/98/105Marowak.png", description: "Bone Keeper Pokémon", type: "ground" },
      { name: "hitmonlee", image: "https://archives.bulbagarden.net/media/upload/3/32/106Hitmonlee.png", description: "Kicking Pokémon", type: "fighting" },
      { name: "hitmonchan", image: "https://archives.bulbagarden.net/media/upload/3/32/106Hitmonlee.png", description: "Punching Pokémon", type: "fighting" },
      { name: "lickitung", image: "https://archives.bulbagarden.net/media/upload/0/00/108Lickitung.png", description: "Licking Pokémon", type: "normal" },
      { name: "koffing", image: "https://archives.bulbagarden.net/media/upload/1/17/109Koffing.png", description: "Poison Gas Pokémon", type: "poison" },
      { name: "weezing", image: "https://archives.bulbagarden.net/media/upload/4/42/110Weezing.png", description: "Poison Gas Pokémon", type: "poison" },
      { name: "rhyhorn", image: "https://archives.bulbagarden.net/media/upload/9/9b/111Rhyhorn.png", description: "Spikes Pokémon", type: "ground/rock" },
      { name: "rhydon", image: "https://archives.bulbagarden.net/media/upload/4/47/112Rhydon.png", description: "Drill Pokémon", type: "ground/rock" },
      { name: "chansey", image: "https://archives.bulbagarden.net/media/upload/c/cd/113Chansey.png", description: "Egg Pokémon", type: "normal" },
      { name: "tangela", image: "https://archives.bulbagarden.net/media/upload/3/3e/114Tangela.png", description: "Vine Pokémon", type: "grass" },
      { name: "kangaskhan", image: "https://archives.bulbagarden.net/media/upload/4/4e/115Kangaskhan.png", description: "Parent Pokémon", type: "normal" },
      { name: "horsea", image: "https://archives.bulbagarden.net/media/upload/5/5a/116Horsea.png", description: "Dragon Pokémon", type: "water" },
      { name: "seadra", image: "https://archives.bulbagarden.net/media/upload/2/26/117Seadra.png", description: "Dragon Pokémon", type: "water" },
      { name: "goldeen", image: "https://archives.bulbagarden.net/media/upload/7/7b/118Goldeen.png", description: "Goldfish Pokémon", type: "water" },
      { name: "seaking", image: "https://archives.bulbagarden.net/media/upload/6/6a/119Seaking.png", description: "Goldfish Pokémon", type: "water" },
      { name: "staryu", image: "https://archives.bulbagarden.net/media/upload/4/4f/120Staryu.png", description: "Star Shape Pokémon", type: "water" },
      { name: "starmie", image: "https://archives.bulbagarden.net/media/upload/c/cd/121Starmie.png", description: "Mysterious Pokémon", type: "water/psychic" },
      { name: "mr-mime", image: "https://archives.bulbagarden.net/media/upload/e/ec/122Mr._Mime.png", description: "Barrier Pokémon", type: "psychic/fairy" },
      { name: "scyther", image: "https://archives.bulbagarden.net/media/upload/b/ba/123Scyther.png", description: "Mantis Pokémon", type: "bug/flying" },
      { name: "jynx", image: "https://archives.bulbagarden.net/media/upload/7/7c/124Jynx.png", description: "Human Shape Pokémon", type: "ice/psychic" },
      { name: "electabuzz", image: "https://archives.bulbagarden.net/media/upload/d/de/125Electabuzz.png", description: "Electric Pokémon", type: "electric" },
      { name: "magmar", image: "https://archives.bulbagarden.net/media/upload/8/8c/126Magmar.png", description: "Spitfire Pokémon", type: "fire" },
      { name: "pinsir", image: "https://archives.bulbagarden.net/media/upload/7/71/127Pinsir.png", description: "Stag Beetle Pokémon", type: "bug" },
      { name: "tauros", image: "https://archives.bulbagarden.net/media/upload/b/b8/128Tauros.png", description: "Wild Bull Pokémon", type: "normal" },
      { name: "magikarp", image: "https://archives.bulbagarden.net/media/upload/0/02/129Magikarp.png", description: "Fish Pokémon", type: "water" },
      { name: "gyarados", image: "https://archives.bulbagarden.net/media/upload/4/41/130Gyarados.png", description: "Atrocious Pokémon", type: "water/flying" },
      { name: "lapras", image: "https://archives.bulbagarden.net/media/upload/a/ab/131Lapras.png", description: "Transport Pokémon", type: "water/ice" },
      { name: "ditto", image: "https://archives.bulbagarden.net/media/upload/3/36/132Ditto.png", description: "Transform Pokémon", type: "normal" },
      { name: "eevee", image: "https://archives.bulbagarden.net/media/upload/e/e2/133Eevee.png", description: "Evolution Pokémon", type: "normal" },
      { name: "vaporeon", image: "https://archives.bulbagarden.net/media/upload/f/fd/134Vaporeon.png", description: "Bubble Jet Pokémon", type: "water" },
      { name: "jolteon", image: "https://archives.bulbagarden.net/media/upload/b/bb/135Jolteon.png", description: "Lightning Pokémon", type: "electric" },
      { name: "flareon", image: "https://archives.bulbagarden.net/media/upload/d/dd/136Flareon.png", description: "Flame Pokémon", type: "fire" },
      { name: "porygon", image: "https://archives.bulbagarden.net/media/upload/6/6b/137Porygon.png", description: "Virtual Pokémon", type: "normal" },
      { name: "omanyte", image: "https://archives.bulbagarden.net/media/upload/7/79/138Omanyte.png", description: "Spiral Pokémon", type: "rock/water" },
      { name: "omastar", image: "https://archives.bulbagarden.net/media/upload/4/43/139Omastar.png", description: "Spiral Pokémon", type: "rock/water" },
      { name: "kabuto", image: "https://archives.bulbagarden.net/media/upload/f/f9/140Kabuto.png", description: "Shellfish Pokémon", type: "rock/water" },
      { name: "kabutops", image: "https://archives.bulbagarden.net/media/upload/2/29/141Kabutops.png", description: "Shellfish Pokémon", type: "rock/water" },
      { name: "aerodactyl", image: "https://archives.bulbagarden.net/media/upload/e/e8/142Aerodactyl.png", description: "Fossil Pokémon", type: "rock/flying" },
      { name: "snorlax", image: "https://archives.bulbagarden.net/media/upload/f/fb/143Snorlax.png", description: "Sleeping Pokémon", type: "normal" },
      { name: "articuno", image: "https://archives.bulbagarden.net/media/upload/4/4e/144Articuno.png", description: "Freeze Pokémon", type: "ice/flying" },
      { name: "zapdos", image: "https://archives.bulbagarden.net/media/upload/e/e3/145Zapdos.png", description: "Electric Pokémon", type: "electric/flying" },
      { name: "moltres", image: "https://archives.bulbagarden.net/media/upload/1/1b/146Moltres.png", description: "Flame Pokémon", type: "fire/flying" },
      { name: "dratini", image: "https://archives.bulbagarden.net/media/upload/c/cc/147Dratini.png", description: "Dragon Pokémon", type: "dragon" },
      { name: "dragonair", image: "https://archives.bulbagarden.net/media/upload/9/93/148Dragonair.png", description: "Dragon Pokémon", type: "dragon" },
      { name: "dragonite", image: "https://archives.bulbagarden.net/media/upload/8/8b/149Dragonite.png", description: "Dragon Pokémon", type: "dragon/flying" },
      { name: "mewtwo", image: "https://archives.bulbagarden.net/media/upload/7/78/150Mewtwo.png", description: "Genetic Pokémon", type: "psychic" },
      { name: "mew", image: "https://archives.bulbagarden.net/media/upload/b/b1/151Mew.png", description: "New Species Pokémon", type: "psychic" }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pokemons', null, {});
  }
};
