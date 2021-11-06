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
/*function showNumbers(limit){
    for(let bir=1; bir<limit; bir++){
        if(bir%2==0){
            console.log(bir + ' juft son');
        }
        if(bir%2!=0){
            console.log(bir + ' toq son');
        }
    }
} 
showNumbers(15)*/

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













































