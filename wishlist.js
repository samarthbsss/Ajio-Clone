var Data=[{
    img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
    title:"DENNISLINGO PREMIUM ATTIRE",
    det:"Striped Slim Fit Shirt",
    price:"₹ 675.00",
    stripped_price:" ₹ 2899",
    off:"(73% off)",
    sales_price:"Sales Price ₹ 600"
},{
    img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
    title:"DENNISLINGO PREMIUM ATTIRE",
    det:"Striped Slim Fit Shirt",
    price:"₹ 599.00",
    stripped_price:" ₹ 2009",
    off:"(73% off)",
    sales_price:"Sales Price ₹ 900"
}]



display(Data);
// fetching data from local storage//
function display(data){
    data.forEach(function(item){
var products=document.createElement("div");
products.setAttribute("id","products")
var img=document.createElement("img");
img.src=item.img;
var h2=document.createElement("h2");
h2.textContent=item.title;  
var h3=document.createElement("h3");
h3.textContent=item.det;
var Price=document.createElement("div");
Price.setAttribute("class","Price");
var price=document.createElement("h4");
price.textContent=item.price;
var stripped_price=document.createElement("h4");
stripped_price.textContent=item.stripped_price;
var off=document.createElement("h4");
off.textContent=item.off;
Price.append(price,stripped_price,off);
var sales_price=document.createElement("div");
sales_price.innerText=item.sales_price;
sales_price.setAttribute("id","sales");
products.append(img,h2,h3,Price,sales_price);

// console.log((img,h2,price,stripped_price,off,sales_price));
document.getElementById("wishlist").append(products);});}



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