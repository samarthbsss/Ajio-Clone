
let button = document.getElementById("goToTopBtn");

let popUp = document.getElementById("popUp");

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function goToTop(){
  document.body.scrollTop = 0;// For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showPopUp(){
    popUp.innerHTML = "";
    popUp.style.display = "block";

    let para = document.createElement("h4");
    para.textContent = "Who do you want to shop for?";
    para.style.marginTop = "20px"

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.onclick = function(){
        popUp.style.display = "none";
    };

    let parentBox = document.createElement("div");

    let div1 = document.createElement("div")
    let p1 = document.createElement("h4")
    p1.textContent = "SHOP WOMEN"
    let image1 = document.createElement("img");
    image1.src = "https://assets.ajio.com/medias/sys_master/images/images/h83/hbd/10412172673054/women-first-pop-up-screen.jpg"
    div1.append(p1, image1);

    let div2 = document.createElement("div")
    let p2 = document.createElement("h4")
    p2.textContent = "SHOP MEN"
    let image2 = document.createElement("img");
    image2.src = "https://assets.ajio.com/medias/sys_master/images/images/h55/h6c/10412175196190/menfirstpopupscreen.jpg"
    div2.append(p2, image2);

    let div3 = document.createElement("div")
    let p3 = document.createElement("h4")
    p3.textContent = "SHOP KIDS"
    let image3 = document.createElement("img");
    image3.src = "https://assets.ajio.com/medias/sys_master/images/images/h9b/h59/10468934254622/kids-first-pop-up-screen.jpg";
    div3.append(p3, image3);

    let div4 = document.createElement("div")
    let p4 = document.createElement("h4")
    p4.textContent = "SHOP SALE"
    let image4 = document.createElement("img");
    image4.src = "https://assets.ajio.com/medias/sys_master/images/images/ha3/hd7/13007045623838/Sale-firstview-Tile-may-06-2019.jpg"
    div4.append(p4, image4);

    parentBox.append(div1, div2, div3, div4)
    parentBox.style.display = "flex"
    parentBox.style.justifyContent = "space-evenly"
    parentBox.style.marginTop = "80px"

    popUp.append(closeBtn, para, parentBox);
}
