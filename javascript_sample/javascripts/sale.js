const priceElement = document.getElementById("product")
const numberElement = document.getElementById("number")
let purchases = [];


function add() {
  const price = priceElement.value;
  // const number = numberElement.value;

  // let purchase = {
  //   price: parseInt(price),
  //   number: parseInt(number),
  // };

  const selectedProductId = parseInt(priceElement.value);
  const selectedProduct = product[`product${selectedProductId}`];
  const number = parseInt(numberElement.value);

//   let purchase = {
//     id: selectedProduct.id,
//     name: selectedProduct.name,
//     number: number,
// };

let newPurchase = true;

purchases.forEach((item) => {
  if(item.id === selectedProductId) {
    newPurchase = false;
    item.number += number;
  }
})

if (newPurchase) {
  purchases.push({
      id: selectedProductId,
      name: selectedProduct.name,
      number: number,
  });
}

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

function display(){
  return purchases.map(purchase => {
    const selectedProduct = product[`product${purchase.id}`];
    return `${selectedProduct.name} - ${selectedProduct.price}円が${purchase.number}点`;

    // return `${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

function subtotal(){
  return purchases.reduce((prev, purchase) => {
    const selectedProduct = product[`product${purchase.id}`];
    return prev + selectedProduct.price * purchase.number
  }, 0);

}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value="";
  numberElement.value="";
}

function calcPostageFromPurchase(sum){
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
    return 500;
  } else {
    return 250;
  }

}

const product = {
  "product1": {id: 1, name: "オリジナルブレンド200g", price: 500 },
  "product2": {id: 2, name: "オリジナルブレンド500g", price: 900 },
  "product3": {id: 3, name: "スペシャルブレンド200g", price: 700 },
  "product4": {id: 4, name: "スペシャルブレンド500g", price: 1200 },
}