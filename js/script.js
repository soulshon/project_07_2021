//02 Основы JavaScript c 18/07/2021
//  console.log(12);
"use strict";
// a = 10; c активированным use strick не будет работать
// console.log(a);

// let number = 4.6;
// console.log(number);
//Вариант объявления строковых данных
// const persone = "Alex";
// const persone1 = `Alex`;
// const persone2 = 'Alex';

// let und;
// console.log(und); - будет undefined

// const obj = {
// name: 'Ваня',
// age: 25,
// isMarried: false
// };

// // console.log(obj.name);
// // console.log(obj["name"]]); - 2-й вариант обращения к значению ключа;

// //Массив является частным сулчаем объекта
// let arr = ['plum.png', 'orange.jpg', 'appel.bmp'];
// console.log(arr[1]); 
// alert('Hello');
// const result = confirm("Are you here?");
//по умолчани. от пользовтеля поступают значеия в виде строки (если поставить НАПРИМЕР +перед prompt - то можено будет получить числовое знаечни "number");
// const answer = +prompt("Вам есть 18?",'18');
// console.log(typeof(answer));

//пример того как ответы от пользовтеля могут сразу  формироваться в массив
// const answers = [];
// answers[0]= prompt('Как ваше имя?', '');
// answers[1]= prompt('Какая у вас фамилия?', '');
// answers[2]= prompt('Сколько вам лет?', '');

// document.write (answers);
//Интреполяция 19.07.2021
// const catregory = 'toys';
// console.log('https://someurl.com/'+catregory); //пример контикинации (склеивания) строки; 
// console.log(`https://someurl. com/${catregory}/5`);//пример интерполяции строки; 


// //Пример интреполяци 
// let user = 'Ivan';
// alert(user);
// Операторы
//+
//console.log (4+ +"5"); //+перед "5" называется унарным (использует 1 элемент для своей работы ) и присваивает строке числовое значение.
//Инкремент и дикремент
// let incr = 10,
//     decr = 10;
// // incr++;
// // decr--;
// console.log(++incr);
// console.log(--decr);
//  console. log(11%4);
//console.log(2*2+2!=='8');
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',''); //вариант из решебника const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
// //console.log (numberOfFilms);
let personalMovieDB = {
    count: `${numberOfFilms}`, //вариант из решебника  count: numberOfFilms
    movies: {},                  //вариант  из решебника  movies: {},
    actors: {},                  //вариант  из решебника  actors: {},
    genres: [],
    privat: false
};

// alert(personalMovieDB.count);

//твоя жалка попытка 1:
// let question1 = prompt('Один из последних просмотренных фильмов?'),
//     question2 = prompt('На сколько оцените его?'); 

// let question1Creat =  question1,
//     question2Creat =  question2;

// let movies = {
//     questFilm:question1Creat,
//     estimate:question2Creat};

// console.log(movies);
//твоя жалка попытка 2:
// let question1 = prompt('Один из последних просмотренных фильмов?'),
//     question2 = prompt('На сколько оцените его?'), 
//     question1Creat =  question1,
//     question2Creat =  question2;
// personalMovieDB.movies[question1] = question1Creat;
// personalMovieDB.movies[question2] = question2Creat;
// console.log(personalMovieDB);
//Что нужно было сделать на самом деле
let a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?'), 
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько оцените его?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);