//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Вам уже есть 18?', '');
//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt("Как вас зовут?" , "");
//answers[1] = prompt("Сколько вам лет?" , "");
//answers[2] = prompt("Как дела?" , "");

//document.write(answers);
//console.log(answers);

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);


//=========================//=========================//=========================
//const user = "Serg";

//alert(`Hallo, ${user}`);
//=========================//=========================//=========================

//et incr = 10,
    //decr = 10;

//incr++; //увеличение значения на единичку
//decr--; //уменшение значения на единичку

//console.log(incr);
//console.log(decr);
//=========================//=========================//=========================

/*&& означает как 'и'
|| означает как 'или'
! оператор отрицания 
!= переводиться как Не равен

prompt - команда Задать вопрос пользователю*/

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?,' '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);