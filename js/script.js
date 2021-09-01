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

//let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',''); //вариант из решебника const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
// //console.log (numberOfFilms);
// let personalMovieDB = {
//     count: `${numberOfFilms}`, //вариант из решебника  count: numberOfFilms
//     movies: {},                  //вариант  из решебника  movies: {},
//     actors: {},                  //вариант  из решебника  actors: {},
//     genres: [],
//     privat: false
// };

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
//let a = prompt('Один из последних просмотренных фильмов?'),
    //b = prompt('На сколько оцените его?'), 
    //c = prompt('Один из последних просмотренных фильмов?'),
    //d = prompt('На сколько оцените его?');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);

//if/else 24/07/2021

// if (1) {
//     console.log('OK!');
// }else{
//     console.log('Error');
// }

// if (num<49){
//     console.log('Error');
// }else if (num > 100){
//     console.log('Много');
// }else {
//     console.log ('Ок!');
// }
// (num ===50) ? console.log('Ok!'): console.log('Error!');
// const num = 50;
// switch (num){
//     case 49:
//         console.log('Неверно');
//          break;
//     case 100:
//         console.log('Неверно');
//          break;
//     case 50:
//         console.log('В точку!');
//          break;
//     default:
//         console.log('Не в этот раз');
//       break;
// }
//Циклы
// let num = 50;
// // while (num<=55){
// //     console.log(num);
// //     num++;
// // }     

// // do {
// //     console.log (num);
// //     num++;
// // }
// // while (num<=55);
// //for(){}

// for (let i= 1; i<8; i++){
//     console.log(num);
//     num++;
// }
//цикл с преминением break ( break  - прерывание цикла на определенном этапе) 
// for (let i =1; i<10; i++){
//     if (i==6){
//         break;
//     }
//     console.log(i);           //1 2 3 4 5
// };
//цикл с преминением continue( continue - позволяет пропустить тот, шаг которйы нам не нужен, при этом цикл полностью не будет прерван)
// for (let i =1; i<10; i++){
//     if (i==6){
//         continue;
//     }
//     console.log(i);           //1 2 3 4 5 7 8 9
// };
//Практика от 26.07.2021 (Lesson015 циклы)
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
// let personalMovieDB = {
//     count: numberOfFilms, 
//     movies: {},                  
//     actors: {},                  
//     genres: [],
//     privat: false
// };

// for (let i=0; i<2; i++){
//     let question1 = prompt('Один из последних просмотренных фильмов?'),
//     question2 = prompt('На сколько оцените его?');
//         if(question1 != null&& question2 !=null&& question1 != null&&question2 !=''&& question1.length <50){
//             personalMovieDB.movies[question1] = question2;
//             console.log('done');
//         }else{
//     console.log('erorr');
//     i--; 
// }
       
// if (personalMovieDB.count <10){
//     console.log('Просмотрено довольно мало фильмов');    
//    }
// else if (personalMovieDB.count>=10&&personalMovieDB.count<30){
// console.log('Вы классический зритель');
// }else if (personalMovieDB.count>=30){
//     console.log('Вы киноман');
//     }else{
//         console.log('Произошла ошибка');
//     }
// }
// console.log(personalMovieDB);

//следующее задание описать код еще двумя способами while и do while

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
// let personalMovieDB = {
//     count: numberOfFilms, 
//     movies: {},                  
//     actors: {},                  
//     genres: [],
//     privat: false
// };

// let question1 = prompt('Один из последних просмотренных фильмов?'),
//     question2 = prompt('На сколько оцените его?');
// while (question1&&question2<2){
//        if(question1 != null&& question2 !=null&& question1 != null&&question2 !=''&& question1.length <50){
//         personalMovieDB.movies[question1] = question2;
//         console.log('done');
//     }else{
// console.log('erorr');
// question1||question2--;
// }
// }

//29/08/2021
// function showFirstMeesage(){
//     console.log('Hello World!');
// }
// showFirstMeesage(); 
// let num = 20; 
// function showFirstMeesage(text){
//     console.log(text);
//     let num = 10; 
// }
// showFirstMeesage('Hello World!'); 
// console.log (num);
// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));
// console.log(calc(4,3));
// console.log(calc(5,6));
// function calc(a, b){
//     return (a+b);
// }



// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function (){
// console.log("Hello");
// };
// logger();

// стрелочные функции
// const calc = (a,b) => {
//     console.log('Сейчас будет перемножение аргументов, приготовтесь!');
//     return a*b;
// }

// console.log (calc(3,2));
// const str = 'teSt';
// console.log(str.length);
// const arr = [1,2,3];
// console.log(arr.length);
// console.log(str[2]);
// console.log (str.toUpperCase());
// console.log(str);
// console.log (str.toLowerCase());

//  const fruit = "Some fruit";
//  console.log(fruit.indexOf("q"));

//  const logg = "Hello world";
//  console.log(logg.slice(6,11));
//  console.log(logg.slice(6,10));
//  console.log(logg.slice(6));
//  console.log(logg.slice(-5, -1));
//  console.log(logg.substring(6,11)); //world
//  console.log(logg.substr(0,6)); //hello

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));
// Практика урок 018 - Используем функции 
let numberOfFilms;

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms== ''||numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},                  
    actors: {},                  
    genres: [],
    privat: true
};

function rememberMyFilms() {
for (let i=0; i<2; i++){
    let question1 = prompt('Один из последних просмотренных фильмов?'),
    question2 = prompt('На сколько оцените его?');
        if(question1 != null&& question2 !=null&& question1 != null&&question2 !=''&& question1.length <50){
            personalMovieDB.movies[question1] = question2;
            console.log('done');
        }else{
    console.log('erorr');
    i--; 
        }
    }
}
// rememberMyFilms();      

function detectPersonalLevel(){
    if (personalMovieDB.count <10){
        console.log('Просмотрено довольно мало фильмов');    
       }
    else if (personalMovieDB.count>=10&&personalMovieDB.count<30){
    console.log('Вы классический зритель');
    }else if (personalMovieDB.count>=30){
        console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    }
    // detectPersonalLevel();

    console.log(personalMovieDB);

    //моя жалка попытка
    // function showMyDB (){
    //     if (personalMovieDB.genres==false){
    //         console.log('главный объект программы');
    //     }
    // }
    // showMyDB();

    function showMyDB (hidden){
        if (!hidden){
           console.log(personalMovieDB); 
        }
    }

    showMyDB (personalMovieDB.privat);

    function writeYourGenres(){
        for (let i = 1; i <=3; i++){
            // const genre = prompt(`'Ваш любимый жанр под номером ${i}', ''`); //вариант исполнения 1
            // personalMovieDB.genres[i-1]=genre;
            personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenres();
    //Повторить 04.09.2021 отдельным фйалом
    