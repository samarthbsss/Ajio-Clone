// var Data=[{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"₹ 675.00",
//     stripped_price:" ₹ 2899",
//     off:"(73% off)",
//     sales_price:"Sales Price ₹ 600"
// },{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"₹ 599.00",
//     stripped_price:" ₹ 2009",
//     off:"(73% off)",
//     sales_price:"Sales Price ₹ 900"
// }]

let Data=JSON.parse(localStorage.getItem('WISH')||[]);

console.log(Data);


display(Data);
// fetching data from local storage//
function display(data){
    data.forEach(function(item,i){
var products=document.createElement("div");

products.setAttribute("id","products")
var img=document.createElement("img");
img.src=item.poster;

var brand=document.createElement("div");

var h2=document.createElement("h2");
h2.textContent=item.company_name; 

h2.setAttribute("class","brand_name"); 
var h3=document.createElement("h3");
h3.textContent=item.description;
h3.setAttribute("class","desc")

brand.append(h2,h3);

brand.setAttribute("class","brand");


var Price=document.createElement("div");
Price.setAttribute("class","Price");
var price=document.createElement("h4");
price.textContent=item.price;
console.log(i);
var stripped_price=document.createElement("h4");
stripped_price.textContent=item.original_price;
var off=document.createElement("h4");
off.textContent="("+item.discount+"% off)";
Price.append(price,stripped_price,off);
var sales_price=document.createElement("div");
sales_price.innerText="Sale price : Rs "+item.price;

const cartbox=document.createElement('div');
cartbox.setAttribute("class","cartbox")
const addtocart=document.createElement('button');
addtocart.setAttribute("class","addtocart")
addtocart.onclick=
function(){
    
    let cart=[];
    cart.push(data[i])
    console.log(cart);
    let cartdata= JSON.parse(localStorage.getItem('CART'))
    cartdata.push(Data);
    localStorage.setItem('CART',JSON.stringify(cartdata));
    console.log(cartdata);
    alert("Item added to cart");
  
}
addtocart.innerHTML="Add to Bag";

cartbox.append(addtocart);

sales_price.setAttribute("id","sales");

products.append(img,brand,Price,sales_price,cartbox);

// console.log((img,h2,price,stripped_price,off,sales_price));
document.getElementById("container").append(products);});}



// console.log(typeof(off))


/* <div id="products">            
<img src="https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg" alt="">

<h2>DENNISLINGO PREMIUM ATTIRE</h2>
<h3>Striped Slim Fit Shirt</h3>
<span id="price">
<h4>₹ 675.00</h4>
<h4>2988.00</h4>
<h4>(73%OFF)</h4>
</span>
<div id="sales_price">
Sales price ₹ 600</div>
</div> */