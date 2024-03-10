let age = prompt('Скільки вам років?', 100);

let count = age % 10

if (isNaN(age) || age < 1) {

    alert('Введіть правильний вік')

}else if (count === 1){ 

    alert(`Вам ${age} рік!`)

}else if (count >= 2 && count <= 4  ){

    alert(`Вам ${age} роки`)

}else {

    alert(`Вам ${age} років!`)
}



// alert(`Вам ${age} років!`);