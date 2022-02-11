const snacksController = require('./controllers/snackController');


const confirmHealth = (snack) => {
    if(snack.protein >= 5 && snack.added_sugar < 5 || snack.fiber >= 5 && snack.added_sugar < 5){
        return true;
    }
    return false;
};

module.exports = confirmHealth;
