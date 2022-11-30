export function roll(sides, dice, rolls){
    var num = [];
    for（var i = 0; i < rolls; i++）{
        var variable = 0;
        for（var j = 0; j < dice; j++){
            variable = variable + Math.floor(Math.random() * sides) + 1;
        }
        num.push(variable);
    }
var result = {
    sides: sides,
    dice: dice,
    rolls: rolls;
    results: result;
};
return result;
}
