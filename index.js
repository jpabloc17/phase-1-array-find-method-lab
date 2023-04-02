// code your solution here

function superbowlWin(record){
    const yearOfTheWin = record.find(object => object.result === "W");
    return yearOfTheWin ? yearOfTheWin.year: undefined;
} 




