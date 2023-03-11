// var Data=[{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"675.00",
//     stripped_price:"2899.00",
//     off:"(73% off)",
//     sales_price:"600.00"
// },{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"599.00",
//     stripped_price:"2990.00",
//     off:"(73% off)",
//     sales_price:"900.00"
// },{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"675.00",
//     stripped_price:"2899.00",
//     off:"(73% off)",
//     sales_price:"600.00"
// },{
//     img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
//     title:"DENNISLINGO PREMIUM ATTIRE",
//     det:"Striped Slim Fit Shirt",
//     price:"599.00",
//     stripped_price:"2990.00",
//     off:"(73% off)",
//     sales_price:"900.00"
// }]

let Data=JSON.parse(localStorage.getItem('CART')||[]);

// console.log(Data); 

display(Data);
// fetching data from local storage//
function display(data){
    var disc=0;
var Total=0;
var totalAmt=0;
// var pro;
    document.getElementById("products").innerHTML="";
    data.forEach((item, index) => {
var product=document.createElement("div");
product.setAttribute("id","product")
var div1=document.createElement("div");
div1.setAttribute("id","detail")
var div2=document.createElement("div");

var img=document.createElement("img");
img.src=item.poster;
div2.append(img);
div2.setAttribute("id","first")
var title=document.createElement("h2");
title.textContent=item.description;  


//  pro= event.target.parentNode;

var Size=document.createElement("h3");
Size.textContent="Size";
var Qty=document.createElement("h3");
Qty.textContent="Qty";
var size=document.createElement("select")
size.name="Size";
size.setAttribute("selected","selected disabled");
var option1 = document.createElement("option");
option1.value = "9";
option1.text = "XXL";
size.add(option1);

var option2 = document.createElement("option");
option2.value = "8";
option2.text = "XL";
size.add(option2);

var option3 = document.createElement("option");
option3.value = "7";
option3.text = "L";
size.add(option3);

var option4 = document.createElement("option");
option4.value = "6";
option4.text = "M";
size.add(option4);

var option5 = document.createElement("option");
option5.value = "5";
option5.text = "S";
size.add(option5);
 
var qty=document.createElement("select")
var option1 = document.createElement("option");
option1.value = "1";
option1.text = "1";
qty.add(option1);

var option2 = document.createElement("option");
option2.value = "2";
option2.text = "2";
qty.add(option2);

var option3 = document.createElement("option");
option3.value = "3";
option3.text = "3";
qty.add(option3);

var option4 = document.createElement("option");
option4.value = "4";
option4.text = "4";
qty.add(option4);

var option5 = document.createElement("option");
option5.value = "5";
option5.text = "5";
size.add(option5);
 var saving=document.createElement("h2");
 saving.textContent="Saving : ₹ "+((3.33*(parseInt(item.price))-item.price)).toFixed(2);
 var stripped_price=document.createElement("h2")
 stripped_price.textContent="Rs " +(((100-item.discount)/10*(parseInt(item.price)))).toFixed(2);
 


  qty.addEventListener("change",function(){
    var pr=(qty.value)*(3*(parseInt(item.price)));
 saving.textContent="Saving : ₹ "+pr.toFixed(2);
 stripped_price.textContent="Rs " +((qty.value)*((parseInt(item.discount)/10)*parseInt(item.price))).toFixed(2);

 price.textContent="Rs "+((qty.value)*(item.price)).toFixed(2);

 det2.textContent="₹ -"+ (100*(parseInt(item.price)/parseInt(item.discount))).toFixed(2);


 bagTotal.textContent="₹ "+Math.abs(((qty.value)*(Total)).toFixed(2));

 document.getElementById("det4").textContent="₹ "+((qty.value)*(totalAmt)).toFixed(2);



        // location.href="cart.html"
});

// 
 var div5=document.createElement("div")
 div5.setAttribute("id","Price");
 
 var price=document.createElement("h3")
 price.textContent="Rs "+(item.price);
//  var hr=document.createElement("hr");

div5.append(price);
var div=document.createElement("div");
div.setAttribute("id","anchor")


//  delete functionality
 var del=document.createElement("button");
 del.innerText="Delete";
 del.setAttribute("id","btn1")
 del.addEventListener("click",function(index) {
    var del = document.getElementById("product");
   Data.splice(index,1);
   console.log(Data);
   display(Data)
    
//    var pr=(qty.value)*((parseInt(item.stripped_price)-parseInt(item.price)));
//    saving.textContent="Saving : ₹ "+pr.toFixed(2);
//    stripped_price.textContent="Rs " +((qty.value)*(item.stripped_price)).toFixed(2);
  
//    price.textContent="Rs "+((qty.value)*(item.sales_price)).toFixed(2);
  
//    det2.textContent="₹ -"+ ((qty.value)*(disc)).toFixed(2);
  
  
//    bagTotal.textContent="₹ "+((qty.value)*(Total)).toFixed(2)
  
//    document.getElementById("det4").textContent="₹ "+((qty.value)*(totalAmt)).toFixed(2);
  




  });

 //
 
 var wish=document.createElement("button");
 wish.setAttribute("id","btn1")
//  wish.innerHTML=<i class="fa-thin fa-heart"></i>
 wish.innerText="Move To Wishlist";
div.append(del,wish);
var div3=document.createElement("div");

div3.setAttribute("id","second")

var div4=document.createElement("div");
div4.setAttribute("id","third");
div4.append(saving,stripped_price,div5);
div3.append(div1,div);
div1.append(title,Size,size,Qty,qty);
product.append(div2,div3,div4)
var det2=document.getElementById("det2");
disc=+(3.33*(parseInt(item.price))-item.price).toFixed(2);
det2.textContent="₹ -"+ disc.toFixed(2);

var bagTotal=document.getElementById("det1");
Total+=parseInt((qty.value)*(item.price));
bagTotal.textContent="₹ "+Total.toFixed(2);

totalAmt+=parseFloat(Total-disc);
document.getElementById("det4").textContent="₹ "+totalAmt.toFixed(2);
document.getElementById("products").append(product);});




// btn.onclick=function(){
//   var data1={}
//   data1.push()
    
//   console.log(data1);
//   }}


document.getElementById("total_items").innerText="("+Data.length +" Items)";
// .innerText=Data.length;



// var Data1=[];
// btn.onclick=function(){
// var data={
//   bagTotal:bagTotal,
//   bagDiscount:disc,
// }
// }
// localStorage.setItem("bag",Data1);
// console.log(Data1);