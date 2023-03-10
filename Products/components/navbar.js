// function navbar() {

    // return
    
    let nav=`<div id="navbar">
        <a href="/Index.html">
          <img
            id="ima_head"
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            alt="header"
          />
        </a>
        <div id="links">
          <div class="dropdown" >
            <a class="active" href="" id="test">MEN</a>
            <div class="dropdown-content">
              <div class="d1">
                <div class="catog">
                  <p>Shop By:</p>
                  <p>CATEGORIES</p>
                  <p>BRANDS</p>
                </div>
                <div class="part">
                  <div>
                    <h5>NEW IN: CLOTHING</h5>
                    <h5>NEW IN: FOOTWEAR & ACCS</h5>
                    <h5>INTERNATIONAL BRANDS</h5>
                    <h5>WESTERN WEAR</h5>
                    <p>
                      <button onclick="cato(menjackets)">Jackets & Coats</button>
                    </p>
                    <p><button onclick="cato(menpants)">Jeans</button></p>
                    <p><button onclick="cato(menshirts)">Shirts</button></p>
                    <p>
                      <button onclick="cato(menpants)">Shorts & 3/4ths</button>
                    </p>
                    <p>
                      <button onclick="cato(menjackets)">
                        Seatshirts & Hoodies
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(mentrackpants)">Tracks Pants</button>
                    </p>
                    <p>
                      <button onclick="cato(menpants)">Trousers & Pants</button>
                    </p>
                    <p><button onclick="cato(menshirts)">T-Shirts</button></p>
                    <h5>ETHNIC & FESTIVE</h5>
                    <p>
                      <button onclick="cato(Kurtas)">Kurtas And Shirts</button>
                    </p>
                    <p><button onclick="cato(Kurtas)">Nehru Jackets</button></p>
                  </div>
                  <div>
                    <h5>FOOTWEAR</h5>
                    <p><button onclick="cato(menshoe)">Casual Shoes</button></p>
                    <p>
                      <button onclick="cato(menshoe)">
                        Flip-Flops & Slippers
                      </button>
                    </p>
                    <p><button onclick="cato(menshoe)">Formal Shoes</button></p>
                    <p><button onclick="cato(menshoe)">Sandals</button></p>
                    <p><button onclick="cato(menshoe)">Sneakers</button></p>
                    <p><button onclick="cato(menshoe)">Sports Shoes</button></p>
                    <h5>NIGHT & LOUNGEWEAR</h5>
                    <p><button onclick="cato(menpants)">Briefs</button></p>
                    <p><button onclick="cato(menpants)">Trunks</button></p>
                    <p><button onclick="cato(menshirts)">Vests</button></p>
                  </div>
                  <div>
                    <h5>ACCESSORIES</h5>
                    <p><button>Backpacks</button></p>
                    <p><button>Bags & Wallets</button></p>
                    <p><button>Belts</button></p>
                    <p><button>Caps & Hats</button></p>
                    <p><button>Fashion Accesories</button></p>
                    <p><button>Socks</button></p>
                    <p><button>Sunglasses & Frames</button></p>
                    <p><button>Wallets</button></p>
                    <p><button>Watches</button></p>
                    <h5>WINTERWEAR</h5>
                    <h5>PRECIOUS JEWELLERY</h5>
                    <h5>HOME & KITCHEN</h5>
                    <h5>GROOMING</h5>
                  </div>
                  <div>
                    <h5>FEATURED</h5>
                    <p><button>Bags Under 1499</button></p>
                    <p>
                      <button onclick="cato(menshoe)">Footwear Under 1499</button>
                    </p>
                    <p>
                      <button onclick="cato(menpants)">Jeans Under 1199</button>
                    </p>
                    <p>
                      <button onclick="cato(menpants)">
                        Shorts & 3/4ths Under 699
                      </button>
                    </p>
                    <h5>#AJIORECOMMENDS</h5>
                    <p><button>Play Time</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <a class="active" href="">WOMEN</a>
            <div class="dropdown-content">
              <div class="d1">
                <div class="catog">
                  <p>Shop By:</p>
                  <p>CATEGORIES</p>
                  <p>BRANDS</p>
                </div>
                <div class="part">
                  <div>
                    <h5>NEW IN: CLOTHING</h5>
                    <h5>NEW IN: FOOTWEAR & ACCS</h5>
                    <h5>WESTERN WEAR</h5>
                    <p><button onclick="cato(WTops)">Tops</button></p>
                    <p><button onclick="cato(WTshirt)">T-Shirts</button></p>
                    <p>
                      <button onclick="cato(WJeans)">Jeans & Jeggings</button>
                    </p>
                    <p><button onclick="cato(WDress)">Dresses</button></p>
                    <p>
                      <button onclick="cato(WJeans)">Trousers & Pants</button>
                    </p>
                    <p><button onclick="cato(Wshirts)">Shirts</button></p>
                    <p><button onclick="cato(WJeans)">Tracks Pants</button></p>
                    <p><button onclick="cato(WDress)">Skirts & Shorts</button></p>
                    <p><button onclick="cato(WTops)">Jackets & Coats</button></p>
                    <p>
                      <button onclick="cato(WTops)">Jumpsuits & Playsuits</button>
                    </p>
                    <p><button onclick="cato(WTops)">Shrugs & Boleros</button></p>
                    <p>
                      <button onclick="cato(WTops)">Seatshirts & Hoodies</button>
                    </p>
                    <p>
                      <button onclick="cato(WTops)">Sweater & Cardigans</button>
                    </p>
                  </div>
                  <div>
                    <h5>ETHNIC WEAR</h5>
                    <p><button onclick="cato(WKurtis)">Kurtas</button></p>
                    <p>
                      <button onclick="cato(WKurtis)">Salwars & Churidars</button>
                    </p>
                    <p>
                      <button onclick="cato(WKurtis)">Kurtis & Tunics</button>
                    </p>
                    <p><button onclick="cato(WSarees)">Sarees</button></p>
                    <p><button onclick="cato(WKurtis)">Dupattas</button></p>
                    <p><button onclick="cato(WDress)">Dress Material</button></p>
                    <p>
                      <button onclick="cato(WKurtis)">Kurta Suit sets</button>
                    </p>
                    <p><button onclick="cato(WTops)">Blouses</button></p>
                    <p><button onclick="cato(WJeans)">Leggings</button></p>
                    <p><button onclick="cato(WTops)">Jackets & Shrugs</button></p>
                    <p>
                      <button onclick="cato(Wshirts)">Shirts & Ghagras</button>
                    </p>
                    <p><button onclick="cato(WKurtis)">Shawls & Wraps</button></p>
                    <p>
                      <button onclick="cato(WDress)">Palazzos & Culottes</button>
                    </p>
                    <h5>LINGERIE & INNERWEAR</h5>
                    <p><button onclick="cato(WTops)">Bras</button></p>
                    <p><button onclick="cato(WJeans)">Panties</button></p>
                    <p>
                      <button onclick="cato(WJeans)">Camisoles & Slips</button>
                    </p>
                  </div>
                  <div>
                    <h5>WINTER</h5>
                    <h5>PRECIOUS JEWELLERY</h5>
                    <h5>HOME & KITCHEN</h5>
                    <h5>NIGHT & LOUNGEWEAR</h5>
                    <h5>ATHLEISURE</h5>
                    <h5>BEAUTY</h5>
                    <h5>FUSION WEAR</h5>
                    <p><button>Dresses & Gowns</button></p>
                    <p><button>Kurtas</button></p>
                    <p>
                      <button onclick="cato(WKurtis)">Kurtis & Tunics</button>
                    </p>
                    <p><button onclick="cato(WJeans)">Pants & Shorts</button></p>
                    <p><button onclick="cato(WTops)">Jackets & Shrugs</button></p>
                    <p>
                      <button onclick="cato(Wshirts)">
                        Shirts, Tops & Tunics
                      </button>
                    </p>
                    <h5>FASHION JEWELLERY</h5>
                    <h5>BAGS, BELTS & WALLETS</h5>
                  </div>
                  <div>
                    <h5>FOOTWEAR</h5>
                    <p><button onclick="cato(WSandals)">Casual Shoes</button></p>
                    <p><button onclick="cato(WSandals)">Flats Sandals</button></p>
                    <p><button onclick="cato(WSandals)">Sports Shoes</button></p>
                    <p>
                      <button onclick="cato(WSandals)">
                        Flip Flop & Slippers
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(WSandals)">Heeled Sandals</button>
                    </p>
                    <p><button onclick="cato(WSandals)">Heeled Shoes</button></p>
                    <p><button onclick="cato(WSandals)">Boots</button></p>
                    <h5>SUNGLASSES & FRAMES</h5>
                    <h5>WATCHES</h5>
                    <h5>FEATURED</h5>
                    <p>
                      <button onclick="cato(WDress)">Dresses Under 999</button>
                    </p>
                    <p>
                      <button onclick="cato(WSandals)">Footwear Under 799</button>
                    </p>
                    <p>
                      <button onclick="cato(WSarees)">Sarees Under 799</button>
                    </p>
                    <p><button onclick="cato(WTops)">Top Under 499</button></p>
                    <h5>#AJIORECOMMENDS</h5>
                    <p><button>Play Time</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <a class="active" href="">KIDS</a>
            <div class="dropdown-content">
              <div class="d1">
                <div class="catog">
                  <p>Shop By:</p>
                  <p>CATEGORIES</p>
                </div>
                <div class="part">
                  <div>
                    <h5>NEW IN: CLOTHING</h5>
                    <h5>NEW IN: FOOTWEAR & ACCS</h5>
                    <h5>INNERWEAR & SLEEPWEAR</h5>
                    <h5>BOYS</h5>
                    <p>
                      <button onclick="cato(kidsShirts)">
                        Denims & Trousers
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(kidsShirts)">
                        Joggers & Tracks Pants
                      </button>
                    </p>
                    <p><button onclick="cato(kidsShirts)">Outerwear</button></p>
                    <p><button onclick="cato(kidsShirts)">Shirts</button></p>
                    <p>
                      <button onclick="cato(kidsShirts)">Shorts & 3/4ths</button>
                    </p>
                    <p><button onclick="cato(kidsShirts)">T-Shirts</button></p>
                    <h5>SHOP BY AGE</h5>
                    <p><button onclick="cato(kidsShirts)">0-2 Years</button></p>
                    <p><button onclick="cato(kidsShirts)">2-5 Years</button></p>
                    <p><button onclick="cato(kidsShirts)">5-10 Years</button></p>
                    <p><button onclick="cato(kidsShirts)">10-14 Years</button></p>
                  </div>
                  <div>
                    <h5>FEATURED</h5>
                    <p>
                      <button onclick="cato(kidsShirts)">Denims Under 799</button>
                    </p>
                    <p>
                      <button onclick="cato(kidsShirts)">Shirts Under 599</button>
                    </p>
                    <p><button>T-Shirts Under 399</button></p>
                    <h5>GIRLS</h5>
                    <p>
                      <button onclick="cato(girlsDress)">Dresses & Frocks</button>
                    </p>
                    <p>
                      <button onclick="cato(girlsDress)">Jeans & Jeggings</button>
                    </p>
                    <p><button onclick="cato(girlsDress)">Leggings</button></p>
                    <p><button onclick="cato(girlsDress)">Outerwear</button></p>
                    <p>
                      <button onclick="cato(girlsDress)">Skirts & Shorts</button>
                    </p>
                    <p>
                      <button onclick="cato(girlsDress)">Tops & T-Shirts</button>
                    </p>
                    <h5>SHOP BY AGE</h5>
                    <p><button onclick="cato(girlsDress)">2-5 Years</button></p>
                    <p><button onclick="cato(girlsDress)">5-10 Years</button></p>
                    <p><button onclick="cato(girlsDress)">10-14 Years</button></p>
                    <h5>FEATURED</h5>
                    <p>
                      <button onclick="cato(girlsDress)">
                        Dresses Under 499
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(girlsDress)">Tops Under 399</button>
                    </p>
                  </div>
                  <div>
                    <h5>BABY</h5>
                    <p><button>Sets</button></p>
                    <h5>TOYS AND BABYCARE</h5>
                    <p><button>Action-Figurine & Collectibles</button></p>
                    <p><button>Creative & Educational Toys</button></p>
                    <p><button>Gaming, Robots & Vehicles</button></p>
                    <p><button>Infant Toys</button></p>
                    <p><button>Role & Pretend Play</button></p>
                    <p><button>School, Party Supplies & Books</button></p>
                    <p><button>Soft Toys</button></p>
                    <p><button>Toy-Guns & Accessories</button></p>
                    <h5>COLLECTIONS</h5>
                    <h5>AJIO EXCLUSIVES</h5>
                    <h5>FOOTWEAR & ACCESSORIES</h5>
                  </div>
                  <div>
                    <h5>FEATURED</h5>
                    <p><button>Crocs</button></p>
                    <p><button>Flying Machine Kids</button></p>
                    <p><button>MINI KLUB</button></p>
                    <p><button>Gini & Jony</button></p>
                    <p><button>Hamleys</button></p>
                    <p><button>Mothercare</button></p>
                    <p><button>Marks & Spencer</button></p>
                    <p><button>Pepe Jeans</button></p>
                    <p><button>Peppermint</button></p>
                    <p><button>UCB Kids</button></p>
                    <p><button>U.S.P.A Kids</button></p>
                    <p><button>MILA BABY</button></p>
                    <p><button>Under Armour</button></p>
                    <p><button>MUJI</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <a class="active" href="">INDIE</a>
            <div class="dropdown-content">
              <div class="d1">
                <div class="catog">
                  <p>Shop By:</p>
                  <p>CATEGORIES</p>
                </div>
                <div class="part">
                  <div>
                    <h5>NEW IN: CLOTHING</h5>
                    <h5>NEW IN: SAREES</h5>
                    <h5>NEW IN: JEWELLERY</h5>
                    <h5>NEW IN: FOOTWEAR & ACCS</h5>
                    <h5>NEW IN: HOME</h5>
                    <h5>CLOTHING</h5>
                    <p><button onclick="cato(Indie_Saree)">Sarees</button></p>
                    <p><button onclick="cato(kurtas)">Kurtas</button></p>
                    <p><button onclick="cato(Dresses)">Dresses</button></p>
                    <p><button onclick="cato(Tops)">Tops & Tunics</button></p>
                    <p><button onclick="cato(Tops)">Dupattas</button></p>
                    <p>
                      <button onclick="cato(Dresses)">Dress Materials</button>
                    </p>
                    <p>
                      <button onclick="cato(Tops)">
                        Blouses & Blouse Fabrics
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(Dresses)">
                        Pants Skirts & Palazzos
                      </button>
                    </p>
                    <h5>FOOTWEAR</h5>
                    <p><button onclick="cato(WSandals)">Chappals</button></p>
                    <p><button onclick="cato(Juttis)">Juttis</button></p>
                  </div>
                  <div>
                    <h5>FASHION JEWELLERY</h5>
                    <p><button>Bracelets</button></p>
                    <p><button>Earrings & Rings</button></p>
                    <p><button>Necklaces & Pendants</button></p>
                    <h5>SILVER JEWELLERY</h5>
                    <h5>ACCESSORIES</h5>
                    <p><button>Bags & Belts</button></p>
                    <p><button>Shawls & Wraps</button></p>
                    <p><button>Stoles & Scarves</button></p>
                    <h5>MENSWEAR</h5>
                    <p><button onclick="cato(Kurtas)">Kurtas</button></p>
                    <p>
                      <button onclick="cato(menshirts)">
                        Nehru Jackets and Ties
                      </button>
                    </p>
                    <p><button onclick="cato(menshirts)">Shirts</button></p>
                    <p><button onclick="cato(Juttis)">Footwear</button></p>
                    <h5>HOME</h5>
                    <h5>WORLD CRAFTS</h5>
                  </div>
                  <!-- bababoey -->
                  <div>
                    <h5>REGIONAL SPECIALTIES</h5>
                    <p><button>Ajrak</button></p>
                    <p><button>Bagh</button></p>
                    <p><button>Bagru</button></p>
                    <p><button>Bananas & Brocades</button></p>
                    <p><button>Chanderi & Maheshwari</button></p>
                    <p><button>Indigo</button></p>
                    <p><button>Kalamkari</button></p>
                    <p><button>Kerala Kasavu</button></p>
                    <p><button>Kosa & Tussar</button></p>
                    <p><button>Kullu</button></p>
                    <p><button>Kutch Embroidery</button></p>
                    <p><button>Linen</button></p>
                    <p><button>Mangalgiri</button></p>
                    <p><button>Orissa Ikat</button></p>
                    <p><button>Pochampally Ikat</button></p>
                    <p><button>Shibori</button></p>
                    <p><button>South Cotton</button></p>
                    <p><button>South Silks</button></p>
                    <p><button>Tant Tangail & Jamdani</button></p>
                  </div>
                  <div>
                    <h5>FEATURED BRANDS</h5>
                    <p>
                      <button onclick="cato(Indie_Saree)">Indie Picks</button>
                    </p>
                    <p>
                      <button onclick="cato(Indie_Saree)">
                        Indie Picks By AJIO
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(Indie_Saree)">
                        Indie Picks Essentials
                      </button>
                    </p>
                    <p><button onclick="cato(Indie_Saree)">Molcha</button></p>
                    <p><button onclick="cato(WDress)">Pretty Woman</button></p>
                    <p><button>Swadesh</button></p>
                    <p><button>Pothys</button></p>
                    <p><button>Rudrakaashe By MSU</button></p>
                    <h5>FEATURED</h5>
                    <p>
                      <button onclick="cato(Indie_Saree)">
                        Sarees Under 999
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(kurtas)">
                        Kurtas And Sets At 1499
                      </button>
                    </p>
                    <p><button>Dupattas Undedr 499</button></p>
                    <p><button>Earring Under 299</button></p>
                    <h5>CELEBRATION</h5>
                    <p><button>Handpicked Loom</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <a class="active" href="">HOME & KITCHEN</a>
            <div class="dropdown-content" id="men">
              <div class="d1">
                <div class="catog">
                  <p>Shop By:</p>
                  <p>CATEGORIES</p>
                </div>
                <div class="part">
                  <div>
                    <h5>NEW IN: HOME</h5>
                    <h5>BED LINEN</h5>
                    <p><button onclick="cato(bedsheet)">Bedsheeets</button></p>
                    <p>
                      <button onclick="cato(Bedcover_sets)">
                        Bedcovers & Sets
                      </button>
                    </p>
                    <p>
                      <button onclick="cato(blanket)">
                        Blankets, Dohars & Quilts
                      </button>
                    </p>
                    <h5>CUSHIONS & COVERS</h5>
                    <h5>CURTAINS & ACCESSORIES</h5>
                    <h5>CARPETS, RUGS & DHURRIES</h5>
                    <h5>DINING & KITCHEN</h5>
                    <h5>BATH</h5>
                    <h5>HOME DECOR</h5>
                    <p><button>Aromas & Candles</button></p>
                    <p><button>Artifacts</button></p>
                    <p><button>Wall Arts</button></p>
                    <h5>STATIONERY</h5>
                  </div>
                  <div>
                    <h5>FEATURED STORIES</h5>
                    <p><button>Cushion Covers Under 499</button></p>
                    <p><button>Bedsheet Under 999</button></p>
                    <p><button>Wall Painting Under 499</button></p>
                    <p><button>Curtains Under 1499</button></p>
                    <p><button>Mats Under 499</button></p>
                    <p><button>Gift Zone Upto 75 Percecnt Off</button></p>
                    <p><button>Heritage Of India</button></p>
                    <h5>EXCLUSIVE BRANDS</h5>
                    <p><button>Indie Picks</button></p>
                    <p><button>Muji</button></p>
                  </div>
                  <div>
                    <h5>FEATURED BRANDS</h5>
                    <p><button>Swayam</button></p>
                    <p><button>Ddecor</button></p>
                    <p><button>Maspar</button></p>
                    <p><button>Trident</button></p>
                    <p><button>Story At Home</button></p>
                    <p><button>Raymond Home</button></p>
                    <p><button>Sej By Nisha Gupta</button></p>
                    <p><button>Chumbak</button></p>
                    <p><button>Layers</button></p>
                    <p><button>Bellacasa</button></p>
                    <p><button>Romee</button></p>
                    <p><button>Arrabi</button></p>
                    <p><button>Bianca</button></p>
                    <p><button>Home Sizzler</button></p>
                    <p><button>House This</button></p>
                    <p><button>Houzzcode</button></p>
                    <p><button>Salona Bichona</button></p>
                    <p><button>Sheen Decor</button></p>
                    <p><button>Shades of Life</button></p>
                    <p><button>Soumya</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="searLink">
          <div id="mini-lnk">
            <a href="" id="user_info"></a>
            <a href="/myaccount.html">My Account</a>
            <button id="s_IN" onclick="sign()">Sign Up</button>
            <a href="/customerCare.html">Customer Care</a>
          </div>
          <div id="sear_block">
            <form>
              <input type="text" placeholder="   SearchAJIO" id="inp" />
            </form>
            <div class="A">
              
            </div>
            <a href="/closet.html" id="closet">
             
             <img src='https://assets.ajio.com/static/img/wishlistIcon.svg'>
            </a>
            <a href="/bag.html" id="cart">
           <img src="../resources/img/cartico2.png">
              
            </a>
          </div>
        </div>
      </div>`;
//   }
  // var abb = [];
  // function cato(arr) {
  //   console.log(5);
  //   var len = abb.length;
  //   if (len != 0) {
  //     abb = [];
  //   }
  //   abb.push(arr);
  //   let ABB = JSON.stringify(abb);
  //   localStorage.setItem("CATO", ABB);
  //   window.open("mens.html");
  // }
  
document.getElementById('nav-bar').innerHTML = nav;
//   export default navbar;
  