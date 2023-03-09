var Data=[{
    img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
    title:"DENNISLINGO PREMIUM ATTIRE",
    det:"Striped Slim Fit Shirt",
    price:"675.00",
    stripped_price:"2899.00",
    off:"(73% off)",
    sales_price:"600.00"
},{
    img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
    title:"DENNISLINGO PREMIUM ATTIRE",
    det:"Striped Slim Fit Shirt",
    price:"599.00",
    stripped_price:2990.00,
    off:"(73% off)",
    sales_price:"900.00"
}]
var disc=0;
var Total=0;
var totalAmt=0;
display(Data);
// fetching data from local storage//
function display(data){
    data.forEach(function(item){
var product=document.createElement("div");
product.setAttribute("id","product")
var div1=document.createElement("div");
div1.setAttribute("id","details")
var div2=document.createElement("div");

var img=document.createElement("img");
img.src=item.img;
div2.append(img);
div2.setAttribute("id","first")
var title=document.createElement("h2");
title.textContent=item.title;  

var size=document.createElement("select")
size.options="9";
size.options="8";
size.options="7";
size.options="6";
size.options="5";
 
var qty=document.createElement("select")
 var saving=document.createElement("h2");
 saving.textContent="Saving : ₹ "+((parseInt(item.stripped_price)-parseInt(item.price))).toFixed(2);
 var stripped_price=document.createElement("h2")
 stripped_price.textContent="Rs " +(item.stripped_price);
 
  
 var div5=document.createElement("div")
 div5.setAttribute("id","Price");

 var price=document.createElement("h3")
 price.textContent="Rs "+(item.sales_price);
div5.append(price);
var div=document.createElement("div");
div.setAttribute("id","anchor")
 var del=document.createElement("a");
 del.innerText="Delete";
 var wish=document.createElement("a");
//  wish.innerHTML=<i class="fa-thin fa-heart"></i>
 wish.innerText="Move To Wishlist";
div.append(del,wish);
var div3=document.createElement("div");

div3.setAttribute("id","second")

var div4=document.createElement("div");
div4.setAttribute("id","third");
div4.append(saving,stripped_price,div5);
div3.append(div1,div);
div1.append(title,size,qty);
product.append(div2,div3,div4)
var det2=document.getElementById("det2");
disc+=+((parseInt(item.stripped_price)-parseInt(item.price))).toFixed(2);
det2.textContent="₹ -"+ disc.toFixed(2);

var bagTotal=document.getElementById("det1");
Total+=parseInt(item.stripped_price)
bagTotal.textContent="₹ "+Total.toFixed(2);

totalAmt+=parseFloat(item.sales_price);
document.getElementById("det4").textContent="₹ "+totalAmt;
document.getElementById("products").append(product);});}

document.getElementById("total_items").innerText="("+Data.length +" Items)";
// .innerText=Data.length;
