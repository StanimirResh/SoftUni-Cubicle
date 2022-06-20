const cubes = require('../database.json');

exports.search = (query) => {
    let search = query.search;
    let fromDifficulty = query.from;
    let toDifficulty = query.to;

    
    if (search || fromDifficulty || toDifficulty){
        if (fromDifficulty == ''){
            fromDifficulty = 0
        }
        if (toDifficulty == ''){
            toDifficulty = 6
        }
        return cubes.filter(x => {
            if (x.difficulty >= fromDifficulty && x.difficulty <= toDifficulty){
                if (x.name.toLowerCase().includes(search.toLowerCase())){
                    return -1;
                }
            }
        })
    }
    else{
        return cubes;
    }
}