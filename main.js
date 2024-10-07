//  Solution of problem-1

let numberOfRemainingApple = 25;
let numberOfAppleBought = 15;

let totalApple = numberOfRemainingApple + numberOfAppleBought;

console.log('Number of Total Apple is: '+ totalApple)




//  Solution of problem-2

let capitalAmmount = 500;
let JohnHasSpent = 200;

let remainingAmmount = capitalAmmount - JohnHasSpent;

console.log('The remaining ammount Jhon has TK. ' + remainingAmmount)



//  Solution of problem-3

let machineManufacturedIn_1hr = 120;
let timeDuration = 8;

let machineManufacturedIn_8hr = machineManufacturedIn_1hr * timeDuration;

console.log('Number of tutal manufactured in 8 hrs is: '+ machineManufacturedIn_8hr)





//  Solution of problem-4

let numOfTreeIn_1_Row = 12;
let numOfRow = 8;
let numOfNewPlant = 20;

let numOfTotalTree = numOfTreeIn_1_Row * numOfRow + numOfNewPlant;

console.log('The number of total tree in the garden is ' + numOfTotalTree);




//  Solution of problem-5

let numOfBox = 5;
let numOfOrangeIn_1box = 10;
let numOfGivenOrange = 12;

let remainingOrange = numOfBox * numOfOrangeIn_1box - numOfGivenOrange;

console.log('The number of remaining orange Rahim has ' + remainingOrange);



//  Solution of problem-6

let crossedDistance = 150;
let requiredTime = 3 ;

let crossedDistanceIn_1hr = crossedDistance / requiredTime ;

console.log('Crossed distance in an hr by the train is : ' + crossedDistanceIn_1hr);




//  Solution of problem-7

let numOfMachine = 6;
let numOfGoodsProducedDaily = 200;

let  numOfGoodsProducedDaily_by_1machine = numOfGoodsProducedDaily / numOfMachine;

let machineAdded = 2;

let totalMachine = numOfMachine +  machineAdded;

let numOfGoodsProduced = numOfGoodsProducedDaily_by_1machine * totalMachine;

let unsoldGoods = 3;

let numOfRemainingGoods = numOfGoodsProduced - unsoldGoods;

let NumOfRemainingGoods = numOfRemainingGoods.toFixed(0)

console.log('The number of remaining goods is ' + NumOfRemainingGoods)



//  Solution of problem-7(alternative solve.)

let NumOfMachine = 6;
let NumOfGoodsProducedDaily = 200;
let MachineAdded = 2;
let UnsoldGoods = 3;


let NumOf_RemainingGoods = (NumOfGoodsProducedDaily / NumOfMachine) * (NumOfMachine  + MachineAdded) - UnsoldGoods;

console.log('The number of remaining goods is ' + NumOf_RemainingGoods);




//  Solution of problem-8

let numOfChocolet = 120;
let numOfPacket = 9;

let numOf_RemainingChocolet = numOfChocolet %  numOfPacket;

console.log('The number of remaining chocolets are :' +  numOf_RemainingChocolet);

