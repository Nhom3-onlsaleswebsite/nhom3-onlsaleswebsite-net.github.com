function calculateMoney(x) {
    var price = document.getElementById("price" + x).innerHTML;
    price = price.substring(1, price.length)
    console.log(price)
    var quantity = document.getElementById("Quantity" + x).value;
    console.log(x)
    var money = Number(price) * Number(quantity);
    console.log(money)
    document.getElementById("Subtotal" + x).innerHTML  = "$"+money; 
    var  all = document.getElementById("all").innerHTML;
    all = all.substring(10, all.length -2 )
    document.getElementById("all").innerHTML  ="Tổng tiền"+ "$"+ Number(all)+money; 
  }