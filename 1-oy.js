// 1 - misol
/*let obj2 = {
    name: 'john',
    surname: 'doe',
    addres: 'chilonzor'
};
let arr = [1, 2, 3]
// for(let item of arr){
//     console.log(item);
// };
for(let index in obj2){
    console.log(obj2[index]);
};*/

// 2 - misol
/*function max(a, b){
    return (a>b) ? 'kichkinasi ' + a : 'kottasi ' + b;
}
console.log(max(1,2)); */

// FizzBuzz - misol
/*function FizzBuzz(son){
    if (son){
        if (son%3==0&&son%5==0){
            console.log('FizzBuz');
        }
        else if (son%3==0){
            console.log('Fizz');
        }
        else if (son%5==0){
            console.log('Buzz');
        }
        else{
            console.log('input');
        }
    }
    else {
        console.log('Not number');
    }
    
}
FizzBuzz()*/

// 4 - misol
/*function showNumbers(array){
    for(let index of array){
        if(index%2==0){
            console.log(index + ' juft son');
        }
        if(index%2!=0){
            console.log(index + ' toq son');
        }
    }
} 
let array = [1, 6, 7]
showNumbers(array)*/

// 5 - misol
/*function Truthy(nimadir){
    if (nimadir){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

Truthy(4)*/

// Demerit points
/*function Limit(tezlik) {
    let sanoq = 0
    if (tezlik > 70) {
        for(let yetmush=70; yetmush<tezlik; yetmush+=5, sanoq+=1) {}
    }
    if (sanoq <= 12) {
        console.log('point = '+sanoq);
    }
    else {
        console.log('daang');
    }
}
Limit(130)*/

// 7 - misol
/*let son = 24
let uch = 3
let besh = 5
let yigindisi = 0
for(let tekshirish = 0; tekshirish <= son; tekshirish++) {
    if (tekshirish%uch==0 && tekshirish%besh==0) {
        yigindisi += tekshirish
    }
}
console.log(yigindisi);*/

// Stars
/*function showStars(son){
    let star = ''
    for(let nol = 0; nol < son; nol++){
        for(let nolcha = 0; nolcha <= nol; nolcha++){
            star += '*'
        }
        star += '\n'
    }
    console.log(star);
}
showStars(5)*/

// PrimeNumbers
/*function PrimeNumber(son){
    let tori = true;
    if (son === 1) {
        console.log("1 xich qachon tub son bolomidi holasayam iloji yo");
    }
    else if (son > 1) {
        for (let i = 2; i < son; i++) {
            if (son % i == 0) {
                tori = false;
                break;
            }
        }
        if (tori) {
            console.log(son + ' tub son');
        } else {
            console.log(son + ' tub son emas');
        }
    }
}
PrimeNumber(7)*/

// imtihon natijasi
/*function bahoni_Korsat(array){
    let umumiy_ball = 0
    let sanoq = 0
    for(let item of array){
        umumiy_ball += item
        sanoq += 1
    }
    umumiy_ball /= sanoq
    if (umumiy_ball >= 1 && umumiy_ball <= 59) {
        console.log('F --> qoniqarsiz');
    }
    if (umumiy_ball >= 60 && umumiy_ball <= 69) {
        console.log('D --> qoniqarli');
    }
    if (umumiy_ball >= 70 && umumiy_ball <= 79) {
        console.log('C --> yomonmas');
    }
    if (umumiy_ball >= 80 && umumiy_ball <= 89) {
        console.log('B --> yaxshi');
    }
    if (umumiy_ball >= 90 && umumiy_ball <= 100) {
        console.log('A --> chotki');
    }
}
let array = [80, 80, 50]
bahoni_Korsat(array)*/

// 11 - misol
/*let obj2 = {
    name: 'Xayrulloh',
    surname: 'Abduvohidov',
    age: 19,
    single: true,
    have_child: null,
    future: undefined
}
for(let item in obj2) {
    if (typeof obj2[item] === 'string') {
        console.log(obj2[item]);
    }
}*/

// Landscape Portrait
/*function Determinatior(boyi, eni){
    if (boyi > eni){
        console.log('Portrait mode');
    }
    else {
        console.log('Landscape mode');
    }
}
Determinatior(12, 25)*/

// if 1 - misol
/*let son = -5
if (son > 0) {
    son ++
}
console.log(son);*/

// if 2 - misol
/*let son = -2
if (son > 0) {
    son ++
}
else {
    son -= 2
}
console.log(son);*/

// if 3 - misol
/*let son = 0
if (son > 0) {
    son ++
}
if (son < 0) {
    son -= 2
}
else {
    son = 10
}
console.log(son);*/

// if 4 - misol
/*const son1 = 5
const son2 = -5
const son3 = 1
let sanoq = 0
if (son1 > 0) {
    sanoq += 1
}
if (son2 > 0) {
    sanoq += 1
}
if (son3 > 0) {
    sanoq += 1
}
console.log('musbat sonlar jami ' + sanoq + 'ta');*/

// if 5 - misol
/*const son1 = 5
const son2 = -5
const son3 = 0
let musbat = 0
let manfiy = 0
if (son1 >= 0) {
    musbat += 1
}
if (son2 >= 0) {
    musbat += 1
}
if (son3 >= 0) {
    musbat += 1
}
if (son1 < 0) {
    manfiy += 1
}
if (son2 < 0) {
    manfiy += 1
}
if (son3 < 0) {
    manfiy += 1
}
console.log('musbat sonlar jami ' + musbat + 'ta\n' + 'manfiy son jami ' + manfiy + 'ta');*/

// if 6 - misol
/*const son1 = 5
const son2 = 6
if (son1 > son2) {
    console.log('kottasi ' + son1);
}
else {
    console.log('kottasi ' + son2);
}*/

// 7 - misol
/*const son1 = 5
const son2 = 4
if (son1 < son2) {
    console.log(son1 + ' kichkina');
}
else {
    console.log(son2 + ' kichkina');
}*/

// 8 - misol
/*const son1 = 5
const son2 = 10
if (son1 > son2) {
    console.log(son1 + ' kottasi\n' + son2 + ' kichkinasi');
}
else {
    console.log(son2 + ' kottasi\n' + son1 + ' kichkinasi');
}*/

// 9 - misol
/*let son1 = 3
let son2 = 4
son1 += son2
son2 = son1 - son2
son1 = son1 - son2
console.log(son1 + ' <-- son1', son2 + ' <-- son2');*/

// 10 - misol
/*let son1 = 1
let son2 = 4
if (son1 != son2) {
    son1 += son2
    son2 = son1
}
else {
    son1 = 0
    son2 = 0
}
console.log(son1, son2);*/

// 11 - misol
/*let son1 = 4
let son2 = 4
if (son1 != son2) {
    if (son1 > son2) {
        son2 = son1
    }
    else {
        son1 = son2
    }
}
else {
    son1 = 0
    son2 = 0
}
console.log(son1, son2);*/
// 12 - misol
/*const son1 = 4
const son2 = -6
const son3 = -5
if (son1 < son2 && son1 < son3) {
    console.log(son1);
}
if (son2 < son1 && son2 < son3) {
    console.log(son2);
}
else {
    console.log(son3);
}*/

// 13 - misol
/*const son1 = -5.5
const son2 = -6
const son3 = -5
if (son1 > son2 && son1 < son3 || son1 > son3 && son1 < son2) {
    console.log(son1);
}
else if (son2 > son1 && son2 < son3 || son2 > son3 && son2 < son1) {
    console.log(son1);
}
else {
    console.log(son3);
}*/

// 14 - misol
/*const son1 = 5
const son2 = -6
const son3 = -5
if (son1 < son2 && son1 < son3) {
    console.log(son1);
    if (son2 < son3) {
        console.log(son2);
        console.log(son3);
    }
    else {
        console.log(son3);
        console.log(son2);
    }
}
if (son2 < son1 && son2 < son3) {
    console.log(son2);
    if (son1 < son3) {
        console.log(son1);
        console.log(son3);
    }
    else {
        console.log(son3);
        console.log(son1);
    }
}
else {
    console.log(son3);
    if (son1 < son2) {
        console.log(son1);
        console.log(son2);
    }
    else {
        console.log(son2);
        console.log(son1);
    }
}*/

// 15 - misol
/*const son1 = 5
const son2 = 4
const son3 = -5
if (son1 > son2 && son1 > son3) {
    console.log(son1);
    if (son2 > son3) {
        console.log(son2);
    }
    else {
        console.log(son3);
    }
}
else if (son2 > son1 && son2 > son3) {
    console.log(son2);
    if (son1 > son3) {
        console.log(son1);
    }
    else {
        console.log(son3);
    }
}
else {
    console.log(son3);
    if (son1 > son2) {
        console.log(son1);
    }
    else {
        console.log(son2);
    }
}*/

// 16 - misol
/*let son1 = 1
let son2 = 6
let son3 = 3
if (son1 < son2 && son1 < son3 && son2 > son1 && son2 < son3 && son3 > son1 && son3 > son1) {
    son1 *= 2
    son2 *= 2
    son3 *= 2
}
else {
    son1 -= (son1 * 2)
    son2 -= (son2 * 2)
    son3 -= (son3 * 2)
}
console.log(son1, son2, son3);*/

// 17 - misol
/*let son1 = 1
let son2 = 2
let son3 = 3
if (son1 > son2 && son1 > son3 && son2 < son1 && son2 > son3 && son3 < son1 && son3 < son1) {
    son1 *= 2
    son2 *= 2
    son3 *= 2
}
else if (son1 < son2 && son1 < son3 && son2 > son1 && son2 < son3 && son3 > son1 && son3 > son1) {
    son1 *= 2
    son2 *= 2
    son3 *= 2
}
else {
    son1 -= (son1 * 2)
    son2 -= (son2 * 2)
    son3 -= (son3 * 2)
}
console.log(son1, son2, son3);*/

// 18 - misol
/*const son1 = 4
const son2 = 4
const son3 = 1
if (son1 != son2 && son1 != son3) {
    console.log(son1);
}
if (son2 != son1 && son2 != son3) {
    console.log(son2);
}
else {
    console.log(son3);
}*/

// 19 - misol
/*const son1 = 4
const son2 = 4
const son3 = 1
const son4 = 4
if (son1 != son2 && son1 != son3 && son1 != son4) {
    console.log(son1);
}
if (son2 != son1 && son2 != son3 && son2 != son4) {
    console.log(son2);
}
if (son3 != son1 && son3 != son2 && son3 != son4) {
    console.log(son3);
}
else {
    console.log(son4);
}*/

// 20 - misol
/*let A = 4
let B = 8
let C = 6
let bniki = B - A
let cniki = C - A
if (bniki < cniki) {
    console.log(B + ' A ga yaqini shu');
}
else {
    console.log(C + ' A ga yaqini shu');
}*/

// 21 - misol
/*let array = [2, 0]
if (array[0] == 0 && array[1] == 0) {
    console.log(0);
}
else if (array[0] != 0 && array[1] == 0) {
    console.log(1);
}
else if (array[0] == 0 && array[1] != 0) {
    console.log(2);
}
else {
    console.log(3);
}*/

// 22 - misol
/*const array = [9, -4]
if (array[0] > 0 && array[1] > 0) {
    console.log('1 - chorakda yotipti');
}
else if (array[0] < 0 && array[1] > 0) {
    console.log('2 - chorakda yotipti');
}
else if (array[0] < 0 && array[1] < 0) {
    console.log('3 - chorakda yotipti');
}
else {
    console.log('4 - chorakda yotipti');
}*/

// 23 - misol
/*const uchi1 = -4
const uchi2 = 0
const uchi3 = 4
let array = []
array.push(uchi1)
array.push(uchi3)
console.log('4 chi uchi ' + array);*/

// 24 - misol
/*function hisoblash(x) {
    if (x > 0) {
        x *= 2
    }
    else {
        x -= 6
    }
    console.log(x);
}
hisoblash(-6)*/

// 25 - misol
/*function hisoblash(x) {
    if (x < -2 || x > 2) {
        x *= 2
    }
    else {
        x *= -3
    }
    console.log(x);
}
hisoblash(1)*/

// 26 - misol
/*function hisoblash(x) {
    if (x <= 0) {
        x -= (x * 2)
    }
    else if (x > 0 && x < 2) {
        x *= x
    }
    if (x >= 2) {
        x = 4
    }
    console.log(x);
}
hisoblash(0)*/

// 27 - misol
/*function hisoblash(x) {
    if (x < 0) {
        x = 0
    }
    else if (x % 2 == 0 && x == 0) {
        x = 1
    }
    else if (x % 2 != 0) {
        x = -1
    }
    console.log(x);
}
hisoblash(3)*/

// 28 - misol
/*let yil = 2020
if (yil % 400 == 0) {
    console.log('kabisa yil');
}
else if (yil % 4 == 0 && yil % 100 != 0) {
    console.log('kabisa yil');
}
else {
    console.log('kabisa yil emas');
}*/

// 29 - misol
/*let son = 0
if (son == 0) {
    console.log('son nolga teng');
}
else if (son = 0) {
    if (son % 2 ==0) {
        console.log('musbat juft son');
    }
    else {
        console.log('musbat toq son');
    }
}
else {
    if (son % 2 ==0) {
        console.log('manfiy juft son');
    }
    else {
        console.log('manfiy toq son');
    }
}*/

// 30 - misol
/*let son = 112
if (son < 100) {
    if (son % 2 == 0) {
        console.log('2 xonali juft son');
    }
    else {
        console.log('2 xonali toq son');
    }
}
else {
    if (son % 2 == 0) {
        console.log('3 xonali juft son');
    }
    else {
        console.log('3 xonali toq son');
    }
}*/

// 1 - misol
/*let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let yigindisi = 0
for (let item of arr_1) {
    yigindisi += item
}
for (let item of arr_2) {
    yigindisi += item
}
console.log(yigindisi);*/

// 2 - misol
/*const son = 22
let soz = ''
for (let juft = 2; juft <= son; juft += 2) {
    soz += juft + ' '
}
console.log(soz);*/

// 3 - misol
/*let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let soz = ''
for (let item of arr.reverse()){
    soz += item + ' '
}
console.log(soz);*/

// 4 - misol
/*let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let arr_1 = []
for (let item = 0; item < arr_4.length; item++){
    arr_1.push(arr_3[item ] + arr_4[item])
}
console.log(arr_1);*/

// 5 - misol
/*let str1 = "javascript";
let str2 = ''
for (let item = 0; item < str1.length; item++) {
    if (item % 2 != 0) {
        str2 += 'Z'
    }
    else {
        str2 += str1[item]
    }
}
console.log(str2);*/

// 6 - misol
/*let str2 = "don’t know why";
let y = 'y'
if (str2.includes(y)) {
    console.log('yes');
}
else {
    console.log('no');
}*/

// 7 - misol
/*let n2 = 4;
let factorial = 1
for (let bir = 1; bir <= n2; bir++) {
    factorial *= bir
}
console.log(factorial);*/

// 9 - misol
/*let str3 = "racecar";
let str1 = ''
for (let item = str3.length - 1; item >= 0; item--) {
    str1 += str3[item]
}
if (str3 == str1) {
    console.log('Palindrome');
}
else {
    console.log('Not Palindrome');
}*/

// 10 - misol
/*let son = 8
let yigindisi = 0
for (let bir = 1; bir <= son; bir++) {
    yigindisi += bir
}
console.log(yigindisi);*/

// 11 - misol
/*function getlistofdivisiblenumber(son) {
    obj1 = {
        3: [],
        5: []
    }
    for (let nol = 1; nol <= son; nol++) {
        if (nol % 3 == 0){
            obj1[3].push(nol)
        }
        if (nol % 5 == 0) {
            obj1[5].push(nol)
        }
    }
    console.log(obj1);
}
getlistofdivisiblenumber(10)*/

// 12 - misol
/*arr = [['a', 2], ['b', 3]]
let obj = {}
for (item of arr) {
    obj[item[0]]=item[1]
}
console.log(obj);*/


// uy ishikan
/*function chopish(array, son, so){
    let arr = []
    for (item of array){
        if (item != son && item != so){
            arr.push(item)
        }
    }
    array = arr
    console.log(array);
}
let array = [1, 2, 3, 1, 2]
chopish(array, 1, 2)*/

// 1 - misol
/*let addres = {
    address: 'Qora - Qamish',
    mahalla: 'Qayirma',
    uy: 46
}
function print(obje) {
    for (i in obje){
    console.log(i + ' key, ' + obje[i] + ' value');
    }
}
print(addres)*/

// 2 - misol
/*function doObject(street, city, zipcode) {
    return  obj1 = {
            street,
            city,
            zipcode
        }
    
}
console.log(doObject('Qayirma', 'Tashkent', '2 - misol'));*/

// 3 - misol
/*function Return(street, city, zipcode) {
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}
console.log(new Return ('Qayirma', "Tashkent", '3 - misol'));*/

// 4 - misol
/*function Check(obj1, obj2) {
    for (a in obj2) {
        if (obj2[a] !== obj1[a]) {
            return false
        }
        return true
    }
}
let obj1 = {}
let obj2 = {}
function Tuzish(key, value){
    this.key = key,
    this.value = value
}
obj1 = new Tuzish('kalit', 'qiymat')
obj2 = new Tuzish('kalit', 'qiymat')
console.log(Check(obj1, obj2));*/



















































