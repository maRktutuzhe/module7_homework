function writeOwnProperty(obj){
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
      console.log(obj[key]);
    }   
  }
}
const first = {a: 1, b: 2};
const second = Object.create(first);
second.c = 3;
writeOwnProperty(second);