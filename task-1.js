"use strict";

let stroke1 = "i am in the easycode";
let arr = stroke1.split(" ");
console.log(arr);

for (let i = 0; i < arr.length; i++);
{
  let b = arr[i].toUpperCase();
  console.log(b);
}
//while (stroke1 == "i am in the easycode") {
///stroke1.toUpperCase();
//console.log(stroke1.toUpperCase());
//}
/*
console.log(str.slice(0, 1) + str.slice(-1));
console.log(
  str.slice(0, 1).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase()
);
Богдан Кириленко19: 27
stR = str.slice(str[str.length - 1]) + str[str.length - 1].toUpperCase();
Алёна Гавриленко19: 27
let lastLetter = string[string.length - 1];
Владимир Пахомов19: 29
let string3 = "aaaa";
console.log(string3.slice(0, 1).toUpperCase() + string3.slice(1, string3.length - 1) + string3.slice(Math.max(1, string3.length - 1)).toUpperCase());
Владимир Пахомов19: 35
let a = 20, b = 16
let string = "" + a + b
console.log(string)
: D
Богдан Кириленко19: 50
let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
}

let price1 = parseInt(item.price.replace(/\D+/g, ""))
let discount1 = parseInt(item.discount.replace(/\D+/g, ""))
let sale = (price1 * discount1) / 100

if (item.discount && item.price) {
  item.priceWithDiscount = price1 - sale
  console.log(item.priceWithDiscount)
}
Владимир Пахомов19: 53
сложнааа
let item = {
  //     name: 'Intel core i7',
  //     price: '100$',
  //     discount: '15%',
  // }

  // let finalPrice;
  // if (item.price && item.discount) {
  //     let priceNumber = "";
  //     for (i = 0; i < item.price.length; i++) {
  //         if (item.price[i] >= "0" && item.price[i] <= "9") {
  //             priceNumber += item.price[i];
  //         }
  //     }

  //     let discountNumber = "";
  //     for (k = 0; k < item.discount.length; k++) {
  //         if (item.discount[k] >= "0" && item.discount
  Ievgenii Shvidler20: 12
String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

let str = "i am in the easycode";
  let arr = str.split(' ');
  let result = '';
  for(let i = 0; i<arr.length; i++) {
    if (i == arr.length - 1) {
  result += arr[i].firstLetterCaps()
} else {
  result += arr[i].firstLetterCaps() + ' '
}
}
console.log(result); // I Am In The Easycode