const products = [
  { 
    color:"grey",
    company_name: 'ROADSTER',
    description: 'Graphic Regular Fit Crew- Neck T-shirt',
    price: '330',
    id:1,
    original_price: 'Rs. 1,099',
    discount: '70',
    quantity: 1,
    poster:'https://assets.ajio.com/medias/sys_master/root/20210803/HqmY/61095db37cdb8cb824e872d4/-1117Wx1400H-460419438-grey-MODEL.jpg',
    poster2:'https://assets.ajio.com/medias/sys_master/root/20210803/ZJcc/610965a9f997dd85166aa890/-1117Wx1400H-460419438-grey-MODEL2.jpg',
    poster3:'https://assets.ajio.com/medias/sys_master/root/20210803/H0i7/610966a8aeb269a268671299/-1117Wx1400H-460419438-grey-MODEL3.jpg',
    poster4:'https://assets.ajio.com/medias/sys_master/root/20210803/19OU/6109678f7cdb8cb824e8947a/-1117Wx1400H-460419438-grey-MODEL4.jpg',
 },

  {
    color:"blue",
        id:2,
    company_name: 'DNMX',
    description: 'Mid-Rise Fitted Jeans',
    price: '679',
    original_price: 'Rs. 799',
    discount: '70',
    quantity: 1,
    poster:
    'https://assets.ajio.com/medias/sys_master/root/20210316/JrrR/6050ca22aeb269698187e889/-473Wx593H-460601683-blue-MODEL.jpg',
    poster2:
    'https://assets.ajio.com/medias/sys_master/root/h26/h68/15814080462878/-473Wx593H-460601683-blue-MODEL3.jpg',
    poster3:
    'https://assets.ajio.com/medias/sys_master/root/h31/hc6/15814079545374/-473Wx593H-460601683-blue-MODEL4.jpg',
    poster4:
    'https://assets.ajio.com/medias/sys_master/root/20210316/47fm/6050cc797cdb8c1f1464ef69/-473Wx593H-460601683-blue-MARKETING.jpg',
},
  {
    color:"yellow",
    id:3,
    company_name: "Indie Picks",
    description: "Cotton Dobby Short Kurta",
    price: "559",
    original_price: "Rs. 1,299",
    discount: "57",
    quantity: 1,
    poster:
    'https://assets.ajio.com/medias/sys_master/root/20210311/bsKn/60491288aeb26969817f46bd/-473Wx593H-460842258-mustard-MODEL.jpg',
    poster2:
    'https://assets.ajio.com/medias/sys_master/root/20210311/Zs4H/60491b71aeb26969817f5d6d/-473Wx593H-460842258-mustard-MODEL3.jpg',
    poster3:
    'https://assets.ajio.com/medias/sys_master/root/20210311/wSsm/604918a8aeb26969817f56a0/-473Wx593H-460842258-mustard-MODEL5.jpg',
  poster4:
    'https://assets.ajio.com/medias/sys_master/root/20210311/bqVi/604912097cdb8c1f145db484/-473Wx593H-460842258-mustard-MODEL7.jpg',
},
  {
    color:"black",
    id:4,
    company_name: "DNMX",
    description: "Cotton Washed Oxford Stand-Collar Shirt",
    price: "1990",
    original_price: "Rs. 1,910",
    discount: "20",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg"
  },
  {
    color:"blue",
    id:5,
    company_name: "Indie Picks",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "69",
    quantity: 1,
    poster:
    'https://assets.ajio.com/medias/sys_master/root/20210403/Yf0g/60687031aeb269a9e33233f6/-473Wx593H-461135251-blue-MODEL3.jpg',
    poster2:
    'https://assets.ajio.com/medias/sys_master/root/20210403/GmQ4/60687031aeb269a9e33233f3/-473Wx593H-461135251-blue-MODEL5.jpg',
    poster3:
    'https://assets.ajio.com/medias/sys_master/root/20210403/vHdZ/60687031aeb269a9e3323410/-473Wx593H-461135251-blue-MODEL6.jpg',
    poster4:
    'https://assets.ajio.com/medias/sys_master/root/20210403/Yf0g/60687031aeb269a9e33233f6/-473Wx593H-461135251-blue-MODEL3.jpg',
},
  {
    color:"blue",
    id:6,
    company_name: 'ROADSTER',
    description: 'Columbia Lightly Washed Skinny Fit Jeans',
    price: '1715',
    original_price: 'Rs. 3,299 ',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210212/LQXd/6026a890aeb26969816477e8/-473Wx593H-460827661-ltblue-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg'
  },
  {
    color:"white",
    id:7,
    company_name: "Calvin Klein Jeans",
    description: "Slim Fit Shirt with Spread Collar",
    price: "4249",
    original_price: "Rs. 4,999",
    discount: "15",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg"
  },
  {
    color:"none",
    id:8,
    company_name: "DNMX",
    description: "Cotton Washed Oxford Stand-Collar Shirt",
    price: "1990",
    original_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg"
  },
  {
    color:"red",
    id:9,
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "69",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    color:"red",
    id:10,
    company_name: "ROADSTER",
    description: "Band Collar Slim Fit Shirt",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "69",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg"
  },
  {
    color:"white",
    id:11,
    company_name: "DNMX",
    description: "Floral Print Slim Fit Shirt with Patch Pocket",
    price: "630",
    original_price: "Rs. 2,099",
    discount: "70",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    color:"blue",
    id:12,
    company_name: 'IVOC',
    description: 'Mid-Rise Jogger Jeans with Zip Pocket',
    price: '792',
    original_price: 'Rs. 1,799',
    discount: '80',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/-473Wx593H-461094398-blue-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg'
  },
  {
    color:"orange",
    id:13,
    company_name: "ROADSTER",
    description: "Mandarin-Collar South-Cotton Kurta",
    price: "1400",
    orginal_price: "Rs. 3,499",
    discount: "60",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg"
  },
  {
    color:"cream",
    id:14,
    company_name: 'DENNISLINGO PREMIUM ATTIRE',
    description: 'Full Sleeves Slim Fit Classic Shirt',
    price: '573',
    original_price: 'Rs.1849',
    discount: '10',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg'
  },
  {
    color:"white",
    id:15,
    company_name: 'DENNISLINGO PREMIUM ATTIRE',
    description: 'Full Sleeves Slim Fit Shirt',
    price: '573',
    original_price: 'Rs. 1849',
    discount: '65',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg'
  },
  {
    color:"yellow",
    id:16,
    company_name: "DNMX",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "51",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    color:"white",
    id:17,
    company_name: "GLITO",
    description: "Colourblock Slim Fit Shirt",
    price: "420",
    original_price: "Rs. 1,199",
    discount: "65",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg"
  },
  {
    color:"blue",
    id:18,
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Checked Slim Fit Shirt with Patch Pocket',
    price: '612',
    original_price: 'Rs. 1749',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210316/TIPl/604faba1f997dd5c401134c8/-473Wx593H-460698898-navy-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200902/UTIy/5f4e9d76aeb269ef8eb53a48/-473Wx593H-460698898-navy-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200902/iAFU/5f4e95f3aeb269ef8eb51119/-473Wx593H-460698898-navy-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200902/BNq5/5f4e99ef7cdb8c76629047fe/-473Wx593H-460698898-navy-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200902/a63Y/5f4e9fc8f997dd6918b21746/-473Wx593H-460698898-navy-MODEL5.jpg'
  },
  {
    color:"blue",
    id:19,
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Checked Slim Fit Shirt with Patch Pocket',
    price: '612',
    original_price: 'Rs. 1749',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210316/XA79/604fbf6c7cdb8c1f14635bff/-473Wx593H-460698915-navy-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200821/kW8T/5f3fef03aeb2693e046c88ee/-473Wx593H-460698915-navy-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200821/D04c/5f3fe568f997dd2277a33e16/-473Wx593H-460698915-navy-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200821/eWJU/5f3fe4efaeb2693e046c605d/-473Wx593H-460698915-navy-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200821/WLLF/5f3fe70bf997dd2277a34960/-473Wx593H-460698915-navy-MODEL5.jpg'
  },
  {
    color:"red",
    id:20,
    company_name: 'ROADSTER',
    description: 'Slim Fit Shirt with Spread Collar',
    price: '573',
    original_price: 'Rs. 1849',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/-473Wx593H-462323964-purple-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210420/FIfr/607eccfeaeb269a9e3972979/-473Wx593H-462323964-purple-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210420/EgRb/607eccfeaeb269a9e397297a/-473Wx593H-462323964-purple-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210420/1l5v/607eccfeaeb269a9e3972987/-473Wx593H-462323964-purple-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210420/PdwT/607eccfeaeb269a9e397297e/-473Wx593H-462323964-purple-MODEL7.jpg'
  },
  {
    color:"black",
    id:21,
    company_name: 'PERFORMAX',
    description: 'Panelled Track Pants with Elasticated Drawstring Waist',
    price: '449',
    original_price: 'Rs. 599',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20200919/8kRX/5f64febb7cdb8c21e36685ad/-473Wx593H-440971924-jetblack-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200919/Hibw/5f6509147cdb8c21e366c964/-473Wx593H-440971924-jetblack-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200919/zxmw/5f6503b37cdb8c21e3669ad5/-473Wx593H-440971924-jetblack-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200919/KwWv/5f64fec0f997dd8c8346059b/-473Wx593H-440971924-jetblack-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200919/5BhS/5f64ff48aeb269d563c55e48/-473Wx593H-440971924-jetblack-MODEL6.jpg'
  },
  {
    color:"blue",
    id:22,
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Panelled Track Pants with Elasticated Drawstring Waist',
    price: '449',
    original_price: 'Rs. 599',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/hc7/h73/13989388288030/-473Wx593H-440971924-teal-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/h6f/h2f/13989386092574/-473Wx593H-440971924-teal-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/h21/hac/13989405032478/-473Wx593H-440971924-teal-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/he7/ha8/13989398347806/-473Wx593H-440971924-teal-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/he5/haa/13989401624606/-473Wx593H-440971924-teal-MODEL5.jpg'
  },
  {
    color:"black",
     id:23,
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Heathered Track Pants with Contrast Taping',
    price: '374',
    original_price: 'Rs. 499',
    discount: '70',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/had/he4/15155852640286/-473Wx593H-441031716-charcoal-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/hee/h6b/15155849986078/-473Wx593H-441031716-charcoal-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/h76/hfb/15155863912478/-473Wx593H-441031716-charcoal-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/hbf/hab/15155846905886/-473Wx593H-441031716-charcoal-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/hbf/hab/15155846905886/-473Wx593H-441031716-charcoal-MODEL4.jpg'
  }
]



window.addEventListener("load", function () {
  displayproducts(products);
});

function myFunction(){
  location.reload();
}

function displayproducts(products){
    let contain=document.querySelector("#data-men").innerHTML="";
    console.log(products);
     products.forEach(function(ele, i){
        const div = document.createElement('div');
        div.setAttribute("class","card-div");

        const brand = document.createElement("h3");
        brand.textContent = ele.company_name;
        brand.setAttribute("class","brand");

        const imagebox=document.createElement('div');
        imagebox.setAttribute("class","imagebox");
        const image = document.createElement("img");
        image.setAttribute("src", ele.poster);
        imagebox.onclick=function(){
          localStorage.setItem("pop", JSON.stringify(ele));
          
          location.href='popup.html';
        }
        
      
        let quickView = document.createElement("div");
        quickView.setAttribute("id", "quickView");
        quickView.textContent = "QUICKVIEW";
     

        const desc = document.createElement("h3");
        desc.textContent = ele.description;
        desc.setAttribute("class","desc");

        const brandbox = document.createElement("div");
        brandbox.setAttribute("class","brandbox");

        const pricebox = document.createElement("div");
        pricebox.setAttribute("class","pricebox");


        const mrp = document.createElement("p");
        mrp.textContent ="RS."+ele.price;
        
        const finalprice = document.createElement("p");
        finalprice.innerHTML =ele.original_price;

        const offer=document.createElement("p");
        offer.textContent="("+ele.discount+"%off)";

        div.addEventListener("mouseenter", enter);
      div.addEventListener("mouseleave", leave);
      function enter() {
        quickView.style.display = "block";
      }
      function leave() {
        quickView.style.display = "none";
      }

        imagebox.append(image,quickView);
        brandbox.append(brand,desc);
        pricebox.append(mrp, finalprice,offer);
        // buttonbox.append(wishbt);
        div.append(imagebox,brandbox, pricebox);
        document.querySelector("#data-men").append(div);
        console.log(ele);
        // document.getElementById("countSpan").innerHTML=products.length;
     })
}

function hide(){
 let dropdown =document.getElementById("drop");
 if (dropdown.style.display !== "none") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function genderhide(){
  let gender=document.getElementById("gender-contain");
  if(gender.style.display!=="none"){
    gender.style.display="none";
  }
  else{
    gender.style.display="block";
  }
}

function pricehide(){
  let gender=document.getElementById("price-contain");
  if(gender.style.display!=="none"){
    gender.style.display="none";
  }
  else{
    gender.style.display="block";
  }
}

function colorhide(){
  let gender=document.getElementById("color-contain");
  if(gender.style.display!=="none"){
    gender.style.display="none";
  }
  else{
    gender.style.display="block";
  }
}

function brandhide(){
  let gender=document.getElementById("brand-contain");
  if(gender.style.display!=="none"){
    gender.style.display="none";
  }
  else{
    gender.style.display="block";
  }
}

function sortvalue(){
  var sortvalue=document.getElementById("sortit").value;
  console.log(sortvalue);
  if(sortvalue=="htl"){
      products.sort(function(a,b){
          return b.price-a.price;
      });
      displayproducts(products);
  }
  if (sortvalue == "lth") {
      products.sort(function(a,b) {
        return a.price - b.price;
      });
      displayproducts(products);
    }
    if(sortvalue =="discount"){
      products.sort(function(a,b){
          return b.discount - a.discount;
      });
      displayproducts(products);
    }

    if(sortvalue=="SbyR"){
      location.reload();
    }
    if(sortvalue=="new"){
      products.sort();
      products.reverse();
      displayproducts(products);
    }
    if(sortvalue=="Popularity"){
      products.sort(function(){return 0.5 - Math.random()});
      displayproducts(products);
    }
}

const dataMen = document.getElementById('data-men');
function twogrid(){
  dataMen.classList.toggle('grid-2cols');
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
     let filteredArray = [];
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          filteredArray = [...filteredArray, ...products.filter(function(obj) {
            return obj.company_name === cb.value;
            console.log(obj.brand,cb.value);
         
          })];

        }
      });

      // to edit
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          filteredArray = [...filteredArray, ...products.filter(function(obj) {
            return obj.color === cb.value;
            console.log(obj.brand,cb.value);
         
          })];
          
        }
      });

      // checkboxes.forEach(function(cb) {
      //   if (cb.checked) {
      //     filteredArray = [...filteredArray, ...products.filter(function(obj) {
      //       if(cb.value==10){
      //       return obj.offer >10;
      //     }
      //     if(cb.value==20){
      //       return obj.offer >20;
      //     }
      //     if(cb.value==30){
      //       return obj.offer >30;
      //     }
      //     if(cb.value==40){
      //       return obj.offer >40;
      //     }
      //     if(cb.value==50){
      //       return obj.offer >50;
      //     }
      //       console.log(obj.brand,cb.value);
         
      //     })];
          
      //   }
      // });

      
      // to edit

      // checkboxes.forEach(function(cb) {
      //   if (cb.checked) {
      //     switch (cb.value) {
      //       case 'Rs 279 to Rs 499':
      //         filteredArray = [...filteredArray, ...array.filter(function(obj) {
      //           return obj.price >= 279 && obj.price <= 499;
      //         })];
      //         break;
      //       case 'Rs 479 to Rs 799':
      //         filteredArray = [...filteredArray, ...array.filter(function(obj) {
      //           return obj.price >= 479 && obj.price <= 799;
      //         })];
      //         break;
      //       case 'Rs 579 to Rs 999':
      //         filteredArray = [...filteredArray, ...array.filter(function(obj) {
      //           return obj.price >= 579 && obj.price <= 999;
      //         })];
      //         break;
      //     }
      //   }
      // });
        
      // to edit
    
      if(filteredArray.length===0){
          displayproducts(products);
      }
      else{
          displayproducts(filteredArray);
      }
    });
  });

