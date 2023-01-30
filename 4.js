
power = 0;
function Device(name, include){
  this.name = name,
  this.include = include
}
Device.prototype.getPower = function(pow, include){
  if (include == 'on'){
    power = power + pow;    
  } 
}

function WeakDevice(name, color, power ){
  this.name = name,
  this.color = color,
  this.power = power
}
WeakDevice.prototype = new Device();

function PowerfulDevice(name, zone, power){
  this.name = name,
  this.zone = zone,
  this.power = power
}
PowerfulDevice.prototype = new Device();

const lamp = new WeakDevice ('lamp', 'gray', 54);
const toaster = new PowerfulDevice('toaster', 'kitchen', 1000);

let lampInclude = prompt('Введите 1 если хотите включить серую лампу, 0 - нет');
let toasterInclude = prompt('Введите 1 если хотите включить тостер, 0 - нет');


if (lampInclude == 1){
  lamp.getPower(60, 'on');
  console.log('Лампа включена!');
}
if (toasterInclude == 1){
  lamp.getPower(1000, 'on');
    console.log('Тостер включен!');
}
console.log(`Суммарная мощность: ${power} Вт`);
console.log(lamp);
console.log(toaster);