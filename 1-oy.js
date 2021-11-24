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

//                       homeworks
// 1 - misol
/*let obj1 = {
    plus: 15,
    minus: 10
}
function plusMinus(obj) {
    return Object.values(obj)[0] - Object.values(obj)[1]
}
console.log(plusMinus(obj1));*/

// 2 - misol
/*let obj1 = {
    width: 3,
    length: 5,
    height: 3
}
function kopaytirish(obj) {
    return Object.values(obj)[0] * Object.values(obj)[1] * Object.values(obj)[2]
}
console.log(kopaytirish(obj1));*/

// 3 - misol
/*function qosh(a) {
    son = 0
    for (let b = 0; b <= a; b++) {
        son += b
    }
    return son
}
console.log(qosh(13));*/

// 4 - misol
/*let name = {name: 'Xayrulloh'}
let age = {age: 19}
let job = {job: 'node js programmar'}
function obJect(name, age, job) {
    let date = new Date();
    let today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    obj1 = {
        name: Object.values(name)[0],
        age:Object.values(age)[0],
        job: Object.values(job)[0],
        date,
    }
    return obj1
}
console.log(obJect(name, age, job));*/

// Check hosil qilish
/*const id = ["998330060523","998995685689","111111111","22222222222","123456789","987654321","789456123","321654987","654987321","123987654"]
const place_of_cale = ['Beruniy', 'Malika', 'Qora-Qamish', 'Abu-Saxiy', 'Parkent bozori', 'Yangi obod bozori', 'O\'rikzor', 'Chilonzor', 'Sergeli mashina bozori', 'Farxod bozori']
const food = ['go\'sht', 'sabzi', 'non', 'guruch', 'shokolad', 'kartoshka', 'piyoz', 'salat', 'kolbasa', 'sir']
const money = [60000, 5000, 1600, 4000, 15000, 3000, 2000, 5000, 20000, 15000, ]
const date = Date()
let r = Math.round(Math.random()*9)

function generateCheck(id, place_of_cale, food, money, date) {
    obj1 = {
        id, 
        place_of_cale,
        food,
        money,
        date,
    }
    return obj1
}
console.log(generateCheck(id[r], place_of_cale[r], food[r], money[r], date));*/

// 1 - misol
/*let arr = [1, 2, 3, 4]
function del(arr) {
    return arr.splice(0, -1)
    // return arr.length = 0
    // return []
}
console.log(del(arr));*/

 // 2 - misol
 /*let arr1 = [5, 6, 7, 8]
 let arr = [1, 2, 3, 4]
 function qosh(arr1, arr) {
    return [...arr1, 'Xayrulloh', ...arr]
 }
console.log(qosh(arr1, arr));*/

// 3 - misol
/*let message = 'This is my first message'
message = message.split(" ")
console.log(message);
arr = [12, 3]
arr.push(message)
console.log(arr);*/

// 4 - misol
/*let arr2 = [2, 3, 1, 5, 6]
function sor(arr2) {
    let c = 0
    for (let a = 0; a <= arr2.length; a++) {
        for (let b = 0; b <= arr2.length; b ++) {
            if (arr2[a] < arr2[b]) {
                c = arr2[a]
                arr2[a] = arr2[b]
                arr2[b] = c
            }
        }
    }
    console.log(arr2);
}
sor(arr2)*/

// 5 - misol
/*function assUser(name,  email, password, ) {
    userid++
    let date = date => date.toISOString().slice(0, 10)
    array.push({
        user_id: userid,
        username: name,
        email: email,
        password: password,
        date: date(new Date)
    })
    return array
}
array = []
let userid = 0
console.log(assUser('Xayrulloh', 'xayrulloh.com', '2002'));
console.log(assUser('Xayrulloh', 'xayrulloh.com', '2002'));
console.log(assUser('Xayrulloh', 'xayrulloh.com', '2002'));*/

// unshift
/*function unshift (arr, ...son) {
    let arrays = []
    let len_arr = 0
    len_arr += arr.length
    arrays.push(...son)
    for (a = 0; a < len_arr; a++) {
        arrays.push(arr[a])
    }
    console.log(arrays);
}
unshift([1, 2, 3], 4, 5)*/

// function declaration
/*say()
function say(){
    console.log('nma gap');
}*/


// ananymous function expression
/*let sayHello = function() {
    console.log('mina');
}
sayHello()*/

// Named function expression
/*let go = function walk() {
    console.log('walk');
}
go()*/

// Hoisting --> function expression lani functionini tepaga ob ciqb qoyiwi

// Arguments --> tuzgan funksiyamizani qovusini ichiga yozilgan narsa
/*function getArgs(a, b) {
    console.log(arguments);*/
    
    // ichidan narsa olish korsatish 
    /*function getArgs(a, b) {
        for (const argument of arguments) {
        console.log(argument);
    }
}
getArgs(true, 45)*/

// Rest Operator --> berilgan qiymatlani yeg beradi
/*function getArgs(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
getArgs(true, 45)*/

// ES6 (ecma script 2015)
// default value
/*function getData(name, age, address, status = 'user') {
    return {
        name,
        age, 
        address,
        status
    }
}
const john = getData('John', 30, 'chilonzor')
console.log(john);*/

// get va set
/*const person = {
    firstname: 'John', 
    lastname: 'Doe',
    age: 30,
    get getFullName() { // get faqat malumoti oqidi ozgartiromid
        return `Full name is ${this.firstname}, ${this.lastname}`
    },
    set getFullName(name) { // set faqat ozgartiradi 
        const fullname = name.split(" ")
        this.firstname = fullname[0]
        this.lastname = fullname[1]
    }
}

person.getFullName = 'Xayrulloh Abduvohidov'
console.log(person);*/

// let vs var
/*let a = 'let'
var b = 'var'
console.log(a);
console.log(b);
function getAge(age) {
    if (typeof age !== 'number') throw new Error('input deeng')
    if (true) {
        var y = 'var'
        let x = 'let' // iwlamidi
    }
    console.log(y);
    console.log(x);
}
getAge(15)*/


// 1 - misol sinf ishi
/*function Circle(radius) {
    this.radius = radius
    let yuzasi = Math.PI * radius **2
    const obj = {
        radius,
        yuzasi,
    }
    return obj
}
console.log(new Circle(5));*/

// 1 - misol uy ishi
/*function getUser(firstname, lastname, email, pasword, phone, status) {
    let e = new Error('Input type is not a string');
    try {
        let id = Date.now()
        if (firstname.length >= 8 && lastname.length >= 8 && email.length >= 8 && pasword.length >= 8 && phone.length >= 8 && status === 'user' || status === 'admin' || status === 'maderator') {
            if (email.includes('@')) {
                if (phone.slice(0, 4) === '+998'){
                    let obj = {
                        id,
                        firstname,
                        lastname,
                        email,
                        pasword,
                        phone,
                        status
                    }
                    console.log(obj);
                }
                else {
                    throw(e)
                }
        }
        else {
            throw(e)
        }
    }
    else {
        throw(e)
    }
    } catch (e) {
        console.log(e.message);
    }
}
getUser('xayrulloh', 'abduvohidov', 'xayrullohabduvohidov@gmail.com', 'xayrulloh2002', '+998900088213', 'user')*/

// 2 - misol
/*arr = [1, 2, 3, 4, 5]
function rev(arr) {
    array = []
    for (let a = arr.length; a > 0; a--) {
        array.push(a)
    }
    console.log(array);
}
rev(arr)*/

// 3 - misol
/*arr = [1, 2, 4, 5, 6]
function smallBig(arr) {
    arr = arr.sort()
    let str = ''
    str += `en kichigi ${arr[0]} en kottase ${arr[arr.length-1]}`
    console.log(str);
}
smallBig(arr)*/

// 1 - misol without array, only numbers
/*function sum(...num) {
    let sanoq = 0
    for(son of num) {
        sanoq += son
    }
    return sanoq
}
console.log(sum(1, 2, 3));*/

// 2 - misol
/*function arrayFromRange(arr){
    arr = arr.sort()
    return `${arr[0]} kichigi \n${arr[arr.length - 1]} kottasi`
}
console.log(arrayFromRange([5, 4, 1]));*/

// 3 - misol
/*const numbers = [1, 2, 3, 4, 5, 6]
function includes(arr, num) {
    if (typeof num === 'string' || typeof num === 'number' || typeof num === 'bigint' || typeof num === 'undefined' || typeof num === 'symbol' || typeof num === 'null') {
        for (let a = 0; a < arr.length; a++) {
            if (num === arr[a]) {
                return true
            }
        }
    }
    return false
}
console.log(includes(numbers, 8));*/

// 4 - misol
/*const numbers = [1, 2, 3, 4, 5, 6]
function except(array, arr) {
    for (son of arr) {
        const index = array.indexOf(son)
        array.splice(index, 1)
    }
    return array
}
console.log(except(numbers, [2, 3, 6]));*/

// 5 - misol
/*const numbers = [1, 2, 3, 4]
function move(array, olish, qoyish) {
    let element = array.splice(olish, 1)
    element = Number(element)
    array.splice(qoyish,0,element)
    console.log(array);
}
move(numbers, 0, 2)*/

// 6 - misol
/*function sum(...args) {
    let sum=0;
    if (Array.isArray(args[0])) {
        args = args[0]
    }
    for(let i of args){
        sum+=i
    }
    return sum
}

console.log(sum([1,2,3,4,5,6]));
console.log(sum(1,2,3,4,5,6));*/

// 7 - misol
/*function move(movies) {
    let arr = []
    let c = []
    for (movie of movies) {
        if (movie.year === 2020) {
            arr.push(movie)
        }
    }
    arr.sort((a, b) => b.rating - a.rating);
    arr.forEach((e) => {
    // console.log(`${e.title} ${e.year} ${e.rating}`);
    c.push(e.title)
})
    return c
}
const movies = [
    {title: 'a', year: 2021, rating: 4.5},
    {title: 'b', year: 2020, rating: 4.3},
    {title: 'c', year: 2019, rating: 3},
    {title: 'a', year: 2020, rating: 4.5}
]
console.log(move(movies));*/

// 1 - misol
/*function getUserProperty (number) {
    user = []
    id = []
    email = []
    password = []
    users = []
    
    for (son = 1; son <= number; son++) {
        user.push(`${son}user`)
    }
    for (son = 1; son <= number; son++) {
        id.push(`${son}${Date.now()}`)
    }
    for (son = 1; son <= number; son++) {
        email.push(`${son}@gmail.com`)
    }
    for (son = 1; son <= number; son++) {
        password.push(`${son}${son}${Date.now()}`)
    }
    for (son = 0; son < number; son++) {
        userr = {
            user: user[son],
            id: id[son],
            email: email[son],
            password: password[son],
        }
        users.push(userr)
    }
    return users
}
let userss = getUserProperty(5)
console.log(userss);*/

// 1 - misol
/*console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));*/

// 2 - misol
/*function array_Clone(arr) {
    let array = [...arr]
    array.push(1)
    return array
}
array_Clone([1, 2, 3])*/

// 3 - misol
/*function first(...arr) {
    if (Number.isInteger(arr[1])) {
        return arr[0]
    }
    return arr[0][0]
}
console.log(first([], 3));*/

// 4 - misol
/*function last(...arr) {
    if (Number.isInteger(arr[1])) {
        return arr[0]
    }
    let item = arr[0].splice(-1)
    return String(item)
}
console.log(last([7, 9, 0, -2], 3));*/

// 5 - misol
/*let array = ['Red', 'Green', 'White', 'Black']
array = array.join()
console.log(`"${array}"`);*/

// 6 - misol
/*function even(...num) {
    let arr = []
    for (let n = 0; n < num.length; n++) {
        arr.push(num[n])
        if (num[n]%2==0 && num[n+1]%2==0) {
            arr.push('-')
        }
    }
    return arr.join('')
}
console.log(even(0, 2, 5, 4, 6, 8));*/

// 7 - misol
/*let arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1, ]
arr1.sort()
let str = ''
for (n of arr1){
    str += `${n},`
}
console.log(str);*/

// 8 - misol
/*let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let nechta = 0
let son = 0
let nima = ''
for (n = 0; n < arr1.length; n++) {
    for (a = 0; a < arr1.length; a++) {
        if (arr1[a] === arr1[n]) {
            nechta ++
        }
    }
        if (son < nechta) {
            son = nechta
            nima = arr1[n]
        }
        nechta = 0
}
console.log(`${nima} ( ${son} times)`);*/

// 9 - misol
/*let str = 'The Quick Brown Fox'
let newStr = ''
for (a of str) {
    // if (typeof a === 'string') {
    //     console.log(a);
    // }
    if (a.toUpperCase() === a) {
        newStr += a.toLowerCase()
    }
    else {
        newStr += a.toUpperCase()
    }
}
console.log(newStr);*/

// 10 - misol
/*let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
let son = 0
for (a of arr) {
    console.log(`"row ${son}"`);
    for (b of a) {
        console.log(`"${b}"`);
    }
    son ++
}*/

// 1 - misol
/*function twoSum(arr, target) {
    for (a = 0; a <= arr.length; a++) {
        for (b = 1; b <= arr.length; b++) {
            if (target == arr[a] + arr[b]) {
                return [a, b]
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));*/

//  2 - misol
/*let array = [[1,2,1,21],[2,4,21,10],[34,2,1,12],[2,3,1,5],[42,1,1,3]];
let sum = 0
let summ = 99999999999999999999999999999999999999
let index = 0
let arr = []
for (let a = 0; a < array.length; a++) {
    sum = 0
    for (b of array[a]) {
        sum += b
    }
    if (summ > sum) {
        summ = sum
        index = a
        arr = array[a]
    }
}
console.log(arr);
console.log(index);*/

// -----------------------------------
// 1 - misol
/*let arr = []
let array = new Array
let array2 = Array*/

// 2 - misol
/*let arr = [1]*/

// 3 - misol
/*let array = [1, 1, 1, 1, 1]
console.log(array.length);*/

// 4 - misol
/*let arr = [1, 2, 3]
arr = String(arr)
arr += ''
console.log(typeof arr);*/

// 5 - misol
/*const arr = [4, 5, 6]
arr.unshift(1, 2, 3)
arr.push(7, 8, 9)
let sum = 0
let how_much = arr.length
for (a of arr) {
    sum += a
}
let middle = sum / how_much
console.log(middle);*/

// 6 - misol
/*function getValues(arr, start, end) {
    let newArr = []
    for (a = 0; a < arr.length; a++) {
        if (a >= start && a <= end) {
            newArr.push(arr[a])
        }
    }
    return newArr
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getValues(array, 2, 3));*/

// 7 - misol
// 1 - usul
/*let array = [1, 2, 3, 1, 5, 8, 5, 9, 2]
function delSame(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = a + 1; b < array.length; b++) {
            if (array[a] === array[b]) {
                array.splice(b, 1)
            }
        }
    }
    console.log(array);
}
delSame(array)*/

// 2 - usul
/*let array = [1, 2, 3, 1, 5, 8, 5, 9, 2]
function delSame(array) {
    let arr = []
    for (let a = 0; a < array.length; a++) {
        for (let b = a + 1; b < array.length; b++) {
            if (array[a] === array[b]) {
                array[b] = 'h' 
            }
        }
    }
    for (c of array) {
        if (typeof c !== 'string') {
            arr.push(c)
        }
    }
    console.log(arr);
}
delSame(array)*/

// 8 - misol
// 1 - usul
/*function qosh(arr1, arr2) {
    let array = []
    for (a of arr1) {
        array.push(a)
    }
    for (a of arr2) {
        array.push(a)
    }
    console.log(array);
}
qosh([1, 2, 3], [4, 5, 6])*/

// 2 - usul
/*function qosh(arr1, arr2) {
    for (a of arr2) {
        arr1.push(a)
    }
    console.log(arr1);
}
qosh([1, 2, 3], [4, 5, 6])*/

// 9 - misol
/*function sameadd(arr1, arr2) {
    let newarr = []
    for (a of arr2) {
        if (arr1.includes(a)){
            newarr.push(a)
        }
    }
    console.log(newarr);
}
sameadd([1, 2, 3], [4, 1, 2])*/

// 10 - misol

// 1 - usul

/*function empty(arr) {
    arr = []
    console.log(arr);
}
empty([1, 2, 3])*/

// 2 - usul
/*function empty(arr) {
    arr = new Array
    console.log(arr);
}
empty([1, 2, 3])*/

// 11 - misol
/*function stringToNumber(str) {
    let result = []
    for(let i of str) {
        result.push(Number(i))
    return result }
}
console.log(stringToNumber(["1","2","4"]));
function numberToString(arr) {
    let result = []
    for(let i of arr) result.push(String(i))
    return result
}
console.log(numberToString([1,2,3,4,5,6]));

function bothToBool(arr) {
    let result = []
    for(let i of arr) result.push(Boolean(i))
    return result
}
console.log(bothToBool([1,2,3,4,0,6]));*/

// 12 - misol
/*let array = ['a','b','c']
let object = Object.assign({}, array); 
console.log(object);*/

// 13 - misol
/*const array = [
    {name: 'Chris', work: 'dev'},
    {name: 'George', work: 'test'},
    {name: 'Jin', work: 'dev'},
    {name: 'Trey', work: 'test'},
];
function groupByKey(array, key) {
    console.log(array[0][key]);
}
groupByKey(array,'work')*/

// classwork
/*function potatoes(str) {
    return (str.match(/potato/g) || []).length
}
console.log(potatoes('potato'));*/

// classwork
/*function detectedWord(string) {
    let str = ''
    for (let a = 0; a < string.length; a++) {
        if (string[a] == string[a].toLowerCase()) {
            str += string[a]
        }
    }
    console.log(str);
}
detectedWord('FcJDSAJDFaKLSJFKSAJFJtD')*/

// classwork
/*function largestSwap(num, num2) {
    return num > num2 ? true : false
}
console.log(largestSwap(27, 72));*/

// classwork
/*function findCharacter(element, str) {
    let sum = 0
    for (a of str) {
        if (a === element) {
            sum ++
        }
    }
    return sum
}
console.log(findCharacter('e', 'edabit'))*/

// classwork
/*function big(num, num2) {
    if (num > num2) console.log('f');
    if (num < num2) console.log('g');
    if (num === num2) console.log('neither');
}
big(1, 2)*/

// classwork
/*function tuckIn(array, inarray) {
    let middle = array.length / 2
    inarray = inarray.reverse()
    for (a of inarray) {
        array.splice(middle, 0, a)
    }
    console.log(array);
}
tuckIn([1, 5], [2, 3, 4])*/

// homework
/*const users = [
    {
        user_id: 1,
        username: 'Xayrulloh',
        age: 19,
        email: 'Xayrullohabduvohidov713@gmail.com',
        password: 20022002
    },
    {
        user_id: 3,
        username: 'Xayrulloh',
        age: 19,
        email: 'Xayrullohabduvohidov@gmail.com',
        password: 12345678
    }
]
function composeUser(username, age, email, password) {
    let daang = new Error('Xato narsa kiritib qoydingiz\n Tori kirit xato bosh');
    let user_id = Math.round(Math.random()*9)
    try {
        if (password.length >= 8) {
            if (typeof age == 'number') {
                if (email.includes('@')) {
                    let obj = {
                        user_id,
                        username, 
                        age,
                        email, 
                        password
                    }
                    users.push(obj)
                }
                else {
                    throw(daang)
                }
            }
            else {
                throw(daang)
            }
        }
        else {
            throw(daang)
        }
    }
    catch (daang) {
        console.log(daang.message);
    }
    console.log(users);
}
// composeUser('Abbos', 36, 'Iqbol@Qoch', '12344321')

function del(user_id) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    console.log(nechnchi_indexda);
    users.splice(nechnchi_indexda, 1)
    console.log(users);
}
// del(3)

function update(user_id, values) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    let value = Object.values(values)
    value = String(value)
    users[nechnchi_indexda][Object.keys(values)] = value
    console.log(users);
}
// update(1, {username: 'Kallenga'})

function getUser(user_id) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    console.log(users[nechnchi_indexda]);
}
// getUser(3)*/

// homework 2
/*let arr = [
    {name: "Stiv", work: "dev"},
    {name: "asad", work: "dev"},
    {name: "deft", work: "test"},
    {name: "doe", work: "test"}
]
function simple(arr, work) {
    for (a = 0; a < arr.length; a++) {
        if (arr[a].work === work) {
            console.log(arr[a]);
        }
    }
}
simple(arr, 'test')*/

// 1 - misol
/*function filterArray(array) {
    let newArr = []
    for (a of array) {
        if (typeof a === 'number') {
            newArr.push(a)
        }
    }
    console.log(newArr);
}
filterArray([1, 2, 'a', 'b'])*/

// 2 - misol
/*function split(num) {
    let arr = []
    let yarmi = 0
    let yarmi2 = 0
    yarmi = num / 2
    yarmi = Math.floor(yarmi)
    arr.push(yarmi)
    yarmi2 = num - yarmi
    arr.push(yarmi2)
    console.log(arr);
}
split(11)*/

// 3 - misol
/*function isItTrue(str) {
    let index = 0
    let amal = ''
    for (a = 0; a < str.length; a++) {
        if (str[a] === '=' || str[a] === '<' || str[a] === '>') {
            index = a
            amal += str[a]
        }
    }
    let num1 = Number(str.slice(0, index))
    let num2 = Number(str.slice(index + 1))
    switch (amal) {
        case '=':
            return num1 == num2
        case '>':
            return num1 > num2
        case '<':
            return num1 < num2
        case '<=':
            return num1 <= num2
        case '>=':
            return num1 >= num2
    }
}
console.log(isItTrue('123>32123'));*/

// 4 - misol
/*function sortByLength(array) {
    const arr = array.sort((a,b) => a.length - b.length);
    console.log(arr);
}
sortByLength(['a', 'bbbb', 'ccc', 'ee'])*/

// 5 - misol
/*function sumOfCubes(array) {
    let sum = 0
    for (a of array) {
        sum += a**3
    }
    console.log(sum);
}
sumOfCubes([1, 5, 9])*/

// 6 - misol
/*class SportsPlayer {
    constructor(name, age, height, weight) {
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
    getAge() {
        console.log(`${this.name} is age ${this.age}`);
    }
    getHeight() {
        console.log(`${this.name} is ${this.height}sm`);
    }
    getWeight() {
        console.log(`${this.name} weighs ${this.weight}kg`);
    }
}
Sayfulloh = new SportsPlayer('Sayfulloh', 16, 170, 60)
Sayfulloh.getAge()
Sayfulloh.getHeight()
Sayfulloh.getWeight()*/

// 7 - misol
/*class Employee {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    }
    fullname() {
        console.log(`${this.name} ${this.surname}`);
    }
    email() {
        console.log(`${this.name}.${this.surname}@company.com`);
    }
    firstname() {
        console.log(this.name);
    }
}
emp1 = new Employee('Sayfulloh', 'Abduvohidov')
emp1.fullname()
emp2 = new Employee('Xayrulloh', 'Abduvohidov')
emp2.email()
emp3 = new Employee('Rahmatilla', 'Abduvohidov')
emp3.firstname()*/

// 1 - exercise
/*class Person {
    constructor (name, age) {
        this.name = name,
        this.age = age
    }
    compareAge(person2) {
        if (this.age > person2.age) {
            console.log(`${person2.name} is younger than me`);
        }
        else if (this.age < person2.age) {
            console.log(`${person2.name} is older than me`);
        }
        else console.log(`${person2.name} is the same age as me`);
    }
}
p1 = new Person('Sayfulloh', 16)
p2 = new Person('Xayrulloh', 19)
p3 = new Person('Diyor', 16)
p1.compareAge(p2)
p2.compareAge(p1)
p1.compareAge(p3)*/

// 2 - exercise
/*let arr = []
class User {
    constructor(name) {
        this.name = name
        arr.push(this.name)
    }
    userName() {
        console.log(this.name);
    }
    static userCount() {
        console.log(arr.length);
    }
}
u1 = new User('Sayfulloh')
User.userCount()
u2 = new User('Xayrulloh')
User.userCount()
u3 = new User('Rahmatilla')
User.userCount()
u1.userName()
u2.userName()
u3.userName()*/

// 3 - exercise
/*class Calculator {
    add(num1, num2) {
        console.log(num1 + num2);
    }
    substract(num1, num2) {
        console.log(num1 - num2);
    }
    multiply(num1, num2) {
        console.log(num1 * num2)
    }
    divide(num1, num2) {
        console.log(num1 / num2);
    }
}
calculator = new Calculator()
calculator.add(10, 5)
calculator.substract(10, 5)
calculator.multiply(10, 5)
calculator.divide(10, 5)*/

// point
/*const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


function totalVotes(arr) {
    let result = arr.reduce(function(count, item) {
        return count + (item['voted'] === true ? 1 : 0)
    }, 0)
    console.log(result);
}
totalVotes(voters)*/

// 1 - exercise
"use strict"
/*function inBetween( a, b) {
    return (value) => value > a && value < b
}
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter((inBetween(3, 6))))*/

// 
// 2 - exercise
/*function inArray(arr) {
    return (value) => arr.includes(value)
}
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(inArray([1, 2, 10])));*/

// 3 - exercise
/*function byField(name) {
    return ((a, b) => a[name] > b[name] ? 1 : -1)
}
let users = [
    {name: 'John', age: 20, surname:'Johnson'},
    {name: 'Pete', age: 18, surname:'Peterson'},
    {name: 'Ann', age: 19, surname:'Annson'},
]
console.log(users.sort(byField('surname')));*/

// 4 - exercise
/*function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let change = i
        let shooter = function() { 
        console.log(change); 
        };
      shooters.push(shooter); 
      i++;
    }
  
    return shooters;
}
let army = makeArmy();
army[0]()
army[4]()*/

// class work 1
/*function isSymmetrical(num) {
    let reversed = num.toString().split('').reverse().join('') * Math.sign(num)
    return num === reversed ? true : false
}
console.log(isSymmetrical(7227))
console.log(isSymmetrical(12567))
console.log(isSymmetrical(44444444))
console.log(isSymmetrical(9939))
console.log(isSymmetrical(1112111))*/

// class work 2
/*function howManySeconds(soat) {
    console.log(`${soat} soat ${soat * 60 * 60} sekund`);
}
howManySeconds(2)
howManySeconds(10)
howManySeconds(24)*/

// class work 3
/*function findLargestNum(arr) {
    let array = []
    for (const a of arr) {
        a.sort((a, b) => a > b ? 1 : -1)
    }
    for (const a of arr) {
        array.push(a[a.length - 1])
    }
    console.log(array);
}
findLargestNum([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

users.sort((a, b) => a.name > b.name ? 1 : -1);*/

// 1 - exercise
/*let room = {
    number: 23
}
let meetup = {
    title: 'Conference',
    occupiedBy: [{name: 'John'}, {name: 'Alice'}],
    place: room
}
room.occupiedBy = meetup
meetup.self = meetup
console.log(JSON.parse(JSON.stringify(room, function replacer(key, value) {
    return key === 'occupiedBy' ? undefined : value
}, 2)));
console.log(JSON.parse(JSON.stringify(room, function replacer(key, value) {
    if (key === 'place' || key === 'self') return undefined
    return value
}, 2)));*/

// 2 - exercise
/*let obj = {
    name: 'John',
    age: 19,
    password: 'josus 007'
}
obj = JSON.stringify(obj)
let parsed = JSON.parse(obj)
parsed.name = 'Xayrulloh'
console.log(parsed);
console.log(obj);*/

// 3 - exercise
/*let obj = {
    "squadName": "Super hero squad", // < here
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man", // < here
        "age": 29, // < here
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast" // < here
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality", 
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
let {squadName, members: [{name, age, powers: [,,Radiation]}]} = obj
console.log(squadName, name, age, Radiation);*/

// farmer problem
/*function animals(chickens, cows, horse) {
    return (chickens * 2) + (cows * 4) + (horse * 4)
}
console.log(animals(2, 3, 5));*/

// 2 - exercise
/*function isOmnipresent(arr) {
    let array = arr[0]
    let son = 0
    for (let c = 0; c < array.length; c++) {
        for (let a = 1; a < arr.length; a++) {
            if (arr[a].includes(array[c])) {
                son++
            }
        }
        if (son === arr.length - 1) {
            return true
        }
        son = 0
    }
    return false
}
console.log(isOmnipresent([[1, 2, 3], [5, 2, 3, 48], [4, 7, 5, 3]]));*/

// 3 - exercise
/*function highLow(str) {
    str = str.split(' ')
    let arr = []
    for (const a of str) {
        arr.push(parseInt(a))
    }
    str = ''
    arr.sort((a, b) => a >= b ? 1 : -1)
    str += `${arr[0]} ${arr.length - 1}`
    console.log(str);
}
highLow('5, 4, 3, 2, 1')*/

// 4 - exercise
/*function missingNum(arr) {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let son = 0
    for (const item of array) {
        if (!(arr.includes(item))) {
            son = item
        }
    }
    console.log(son);
}
missingNum([1, 2, 3, 4, 5, 6, 7, 9, 10])*/

// time
// 1 - exercise
/*function run(number) {
    console.log(`I started at ${Date.now()}`);
    setTimeout(() =>{console.log(`I finished at ${Date.now()}`)},number)
}
run(1000)*/

// 2 - exercise
/*function interval(every, after, name) {
    let time = setInterval(() => {console.log(name)}, every)
    setTimeout(() => {clearInterval(time)}, after);
}
interval(2000, 6000, 'xayrulloh')*/

// promise
// 1 - exercise
/*const pr = new Promise((res, rej) => {
    setTimeout(() => {res('3 sekund')}, 3000);
})
pr.then((value) => {
    setTimeout(() => {console.log('run after 2 second')}, 2000);
    console.log(value);
    console.timeEnd('timer')
})
.then((value) => setTimeout(() => {console.log('run after 4 second')}, 4000))
console.time('timer')*/

// classwork 1
/*function sortDescending(num) {
    let arr = Array.from(String(num), num => Number(num))
    let item = 0
    for (let a = 0; a < arr.length;  a++) {
        for (let b = 0; b < arr.length;  b++) {
            if (arr[a] > arr[b]) {
                item = arr[b]
                arr[b] = arr[a]
                arr[a] = item
            }
        }
    }
    console.log(arr);
}
sortDescending(789654)*/

// classwork 2 
/*function afterNYears(object, num) {
    let error = new Error('you haven\'t input object\n Please enter carefully')
    try {
        if (typeof object == 'object') {
            for (let a in object) {
                object[a] += num
            }
            console.log(object);
        }
        else throw error
    } catch (error) {console.log(error)}
}
afterNYears({
    'Xayrulloh' : 19,
    'Sayfulloh' : 16,
    'Rahmatilla' : 23
}, 7)*/

// classwork 3 
function types()



