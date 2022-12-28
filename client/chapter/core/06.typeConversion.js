/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(String(YEAR));

// undefined ->'undefined'
// null -> 'null'

console.log(String(undefined));


let days = null;
console.log(String(undefined));
console.log(String(null));

// boolean -> 'true'or'false'
let kind = true;
//console.log(String(kind));
console.log(Number(kind + ""));
console.log(Number("true")); //이런 이유로 NaN이 나옴
console.log(Number("")+Number(kind));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
console.log(Number(null));

// boolean
let test = true;
let test3 = false;
console.log(Number(test));
console.log(Number(test3));
console.log(test * 1);
console.log(test3 * 1);
// string 숫자형 문자
let test1 = "joo";
console.log(Number(test1));
// numeric string
let width = "32.23120px";

console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(123));
console.log(!!"");