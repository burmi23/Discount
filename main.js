let container = document.querySelector(".container");

function titleStroke (name) {
  let title = document.createElement("h1");
  container.append(title);
  title.textContent = name;
}

// titleStroke ("Новая практика");

let btn = document.createElement("button");
let btnNewList = document.createElement("button")
let inputOne = document.createElement("input");
let inputTwo = document.createElement("input");
// let input = document.createElement("input");
let div = document.createElement("div");

inputOne.classList.add('form-control')
inputOne.classList.add('mb-2')
btnNewList.classList.add("btn");
btnNewList.classList.add("btn-dark");
btn.classList.add("btn");
btn.classList.add("btn-outline-primary");
div.classList.add('form-control')


// Генерация имен
// {

// container.append(input)
// container.append(btnNewList);
// container.append(btn);

// input.placeholder = 'Введите значение'
// btnNewList.textContent = "Добавить имя"
// btn.textContent = "Сгенерировать"

// // ГЕНЕРАЦИЯ ИМЕНИ

// // let math = Math.floor(Math.random()*10)+60
// // console.log(math);

// let nameWoman = ["Ира", "Катя", "Света", "Роза", "Маша", "Зоя"];

// let nameMan = ["Миша", "Саша", "Игорь", "Витя", "Виталий"];
// let allName = [];

// let newNames = [];



// // делаем генерацию имени рандомную из двух массивов выше
// function nameGeneration (names){
//   let nameWho;
// // соеденяем два массива.
//   for (let i = 0; i<nameWoman.length+nameMan.length; i++){
//     if(i<nameWoman.length){
//       allName[i] = nameWoman[i];
//     }
//     else
//       allName[i] = nameMan[i - nameWoman.length] ;
//   }
// // тут делаем генерацию рандомную по имени
//   for(let i = 0; i < names.length; i++){
//     nameWho = names[Math.floor(Math.random()*names.length)]
//     }
//   // возвращаем значение
//   return nameWho
// }
// // проверяем
// console.log(nameGeneration (allName))



// div.classList.add("name-window")
// // let nameNew = nameGeneration (allName)
// div.textContent = 'Тут будет имя'
// container.append(div);


// btnNewList.addEventListener('click', () =>{
//   newNames.push(input.value);
//   input.value = ''
//   console.log(`Имя равно =  ${newNames}`)

// });


// btn.addEventListener('click', () => {
//   // Генератор имен из массивов

//   div.textContent = nameGeneration (newNames)
//   if(newNames == ""){
//     div.style.background = 'red'
//     div.textContent = "Не добавлены имена"

//   }

//   else if(div.textContent == "Игорь")
//     div.style.background = 'red'

//   else
//     div.style.background = 'transparent'


// })


// }


// Просчет скидки
titleStroke ("Просчет скидки");
container.append(inputOne)
container.append(inputTwo)
container.append(btn);
container.append(div)

inputOne.placeholder = 'Введите новую сумму'
inputTwo.placeholder = 'Введите предыдущую сумму'
btn.textContent = 'Рассчитать'


inputTwo.classList.add('form-control')
inputTwo.classList.add('mb-2')
div.classList.add("window")
let num;



 btn.addEventListener('click', () =>{

  num = 100 - (inputOne.value / inputTwo.value * 100);
  div.textContent = "Скидка составляет: " + parseFloat(num).toFixed(1) + '%';
 })


