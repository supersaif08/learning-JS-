
// let age=57
// console.log(age)
// age=90
// console.log(age)

// const hello_name='name'
// console.log(hello_name)
// const birth=1990;
// console.log(birth)

// var job='nothing'
// console.log(job)

// const ageSaif =2024-2003;
// console.log(ageSaif)

// const ageMW=30
// console.log (ageMW)

// console.log (ageSaif <= ageMW)
// console.log(ageMW>ageSaif)

// const firstName = "Saif_Ali"
// const age= 21
// const job = "student"

// const bio="hii i'm " +firstName + " and my age is " +age + " and im a "+job;
// console.log (bio)

// const boinwe=`I'm ${firstName} and I'm ${age} old and my job is ${job}`;
// console.log(boinwe)


// const myAge = 20


// if(myAge >=21){
//     console.log("i can get ps 5 😒")
// }else{
//     const yearLeft = 21-myAge
//     console.log(`i need to wait ${yearLeft} year to get a ps 5 😢`)
// // }
// const birthYear = 2000
// let centure;

// if (birthYear<=1999){
//     centure = '20th';
// }
// else{
//     centure='21st';
// }
// console.log (`He/She has born in ${centure} centure`)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// if (BMIMark>BMIJohn){
//     console.log(`BMI of mark , which is ${BMIMark} is greater`);
// }else{
//     console.log(`BMI of john , which is ${BMIJohn} is greater`)
// }

// Type Conversion and Coercion//

//type conversion 
// const inputYear = "2003";
// console.log (Number(inputYear));
// console.log(Number(inputYear) + 2024)

// // type coercion
// console.log('I am ' + 21 + ' years old')//here the 21 is automativcly converted to number
// console.log('21'+'21' + 3)//here the number are converted into string , when "+" is used , same goes for "*" and "/"
// console.log('21' - '21' - 3)//here the number are converted into actual number rather than string , when "-" is used

// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('saif'));
console.log(Boolean(''));

// example in "if else"
const money=0;
if(money){
    console.log("spend it all :))");
}else{
    console.log("get some !!")
}


const Height='';
if(Height){
    console.log("hohohoho")
}else{
    console.log("nonoonooooooooooo")
}