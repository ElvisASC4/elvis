function superhero(realName, ability, gender, archEnemy){
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archEnemy = archEnemy
    this.newAbility = function(ability2){
        this.ability = ability2;
    }
}

var batman = new superhero("Bruce", "Dat money","male","joker");
var staticShock = new superhero("virgil","electricity","male", "Ebon");
console.log(staticShock.ability);
staticShock.newAbility("Drop kik");
console.log(staticShock.ability);