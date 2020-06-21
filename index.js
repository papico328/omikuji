console.log(document.querySelectorAll("#result")[0]);
console.log('./omikuji_daikichi.png');

var daikichi = {image:'./omikuji_daikichi.png', comment:"やったね", className:"daikichi"};
var chuukichi = {image:'./omikuji_chuukichi.png', comment:"わーい"};
var syoukichi = {image:'./omikuji_syoukichi.png', comment:""};
var kichi = {image:'./omikuji_kichi.png', comment:""};
var suekichi = {image:'./omikuji_suekichi.png', comment:"いずれ・・・"};
var kyou = {image:'./omikuji_kyou.png', comment:""};
var daikyou = {image:'./omikuji_daikyou.png', comment:"いいことあるよ", className:"daikyou"};

var img = new Array (
    daikichi,chuukichi,syoukichi,kichi,suekichi,kyou,daikyou
);

var kuji = './syougatsu2_omijikuji2.png';

console.log(img[1]);

var button = document.getElementById('result');
var container = document.getElementsByClassName('container')[0];

function image() {
    var random = Math.floor(Math.random() * img.length);
    var result = `<img src = ${img[random].image} > <p class="${img[random].className}">${img[random].comment}</p>`;
    document.getElementById('result').innerHTML = result;
}

var start = 0;
var id;
var body = document.body;

// マウスアウトでおみくじの画像に戻る
window.addEventListener('click', (e)=> {
    console.log(e.target);
    if(start === 0 && !(e.target.id === 'result')){
    document.querySelectorAll("#result")[0].innerHTML = `<img src = ${kuji}>`;
    }
})


button.addEventListener('click', ()=> {
    if(start === 1){
        start = 0;
    }
    else{
        start = 1;
    }
    if(start === 1){
        var countup = function(){
            console.log(start);
                image();
                var id = setTimeout(countup, 300);
        if(start === 0){
            clearTimeout(id);
        }
        }
        countup();
    }
    // else{
    //     clearTimeout(id);　//idをclearTimeoutで指定している
    // }
})


// console.log(document.querySelectorAll("#btn")[0]);

// var img = new Array (
//     './omikuji_daikichi.png',
//     './omikuji_chuukichi.png',
//     './omikuji_syoukichi.png',
//     './omikuji_kichi.png',
//     './omikuji_suekichi.png',
//     './omikuji_kyou.png',
//     './omikuji_daikyou.png'
// );

// console.log(img[1]);

// var button = document.getElementById('btn');

// function image() {
//     var random = Math.floor(Math.random() * img.length);
//     var result = `<img src = ${img[random]} >`;
//     document.getElementById('result').innerHTML = result;
// }

// var click = 0;

// button.addEventListener('click', ()=> {
//     click = 1;
// })

// var count = 0;
// var countup = function(){
//     image();
//     var id = setTimeout(countup, 300);
//   if(click === 1){　
//     clearTimeout(id);　//idをclearTimeoutで指定している
//   }
// }
// countup();
// これが前のやつ

// button.addEventListener('click', () =>{
//     var random = Math.floor(Math.random() * img.length);
//     var result = '<img src =' + img[random] + '>';
//     // var result = `<img src = ${img[random]} >`;
//     // これがいつもの書き方
//     document.getElementById('result').innerHTML = result;
//     document.querySelectorAll("#btn")[0].innerHTML = "もう一度引く";
// })
// これが前の前のやつ

// consit random = Math.floor(Math.random() * img.length);
// consit result = '<img src =' +img[random]+'>';

// document.getElementById('result').innerHTML = result;

// ボタンクリック時にくじを引く
// let img = new Array (
//     './omikuji_daikichi.png',
//     './omikuji_chukiti.png',
//     './omikuji_daikyou.png',
//     './omikuji_kichi.png',
//     './omikuji_kyou.png',
//     './omikuji_suekichi.png',
//     './omikuji_syoukichi.png'
// );

// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//     let randomNumber = Math.floor(Math.random() * img.length);
//     let result = '<img src =' +img[randomNumber]+'>';
//     document.getElementById("result").setAttribute('src', `img${randomNumber}`);
//     document.querySelectorAll("btn")[0].innerHTML = "もう一度引く";
// })

