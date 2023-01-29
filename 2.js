function check(str, obj){
  if(obj[str] == undefined){
    return false;
  }
  return true;
}

const person = {
  name: "Mark",
  date: 12.06
}

if (check("name", person) == true){
  console.log("name: ", person.name);
}
if(check("surname", person) == false){
  console.log('У объекта отсутствует свойство surname');
}