const types_html = document.querySelector('#types');
const data = ['字串 string','數字 number','布林 boolean','undefined','null','symbol'];

let innerHtmlStr = '';
data.forEach(function(item,index){
    innerHtmlStr += `<li>${data[index]}</li>`;
});

types_html.innerHTML = innerHtmlStr;


// var 宣告一個可隨意更改內容的變數
// let 宣告一個可歲意更改內容的`區塊區域變數`
// const 宣告一個只可讀取，不可修改的常數

// var也是宣告變數的方式，類似let
// 不太建議使用var

// 宣告變數let,常數const
let a = 1;
const b = 3;
console.log(a,b);

a = 10; console.log(a);
b = 30; console.log(b);
// TypeError：b為常數，所以資料無法被修改



