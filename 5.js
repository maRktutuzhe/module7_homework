
power = 0;

class Device{
  constructor(name, include){
    this.name = name;
    this.include = include;
  }
  getPower(pow, include){
    if (include == 'on'){
    power = power + pow;   
    }
  }
}
class WeakDevice extends Device{
  constructor(name, color, power ){
    super(name);
    this.color = color;
    this.power = power;
  }  
} 
class PowerfulDevice extends Device{
  constructor(name, zone, power){
    super(name);
    this.zone = zone;
    this.power = power;
  }
}
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