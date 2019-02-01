import React, { Component } from 'react';
import Item from "./components/item/item.component.js"
import Summary from "./components/summary/account.summary.js"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList : [
        {"id":1,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40070774_2-tata-sampann-garam-masala.jpg",  "BrandName" : "TATA",    "ProductNmae":"sampann-masala",	"ProductPrice": 50,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":2,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30002394_1-everest-powder-cumin.jpg",		"BrandName" : "EVEREST", "ProductNmae":"cumin-Powder",			"ProductPrice": 150, "ProductDetail":"250 gram pouch","count":0},
        {"id":3,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/268002_1-everest-masala-chaat.jpg",			"BrandName" : "EVEREST", "ProductNmae":"chaat-masala",			"ProductPrice": 60,  "ProductDetail":"500 gram pouch","count":0},
        {"id":4,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/260793_1-everest-masala-pav-bhaji.jpg",		"BrandName" : "EVEREST", "ProductNmae":"pav-masala",		"ProductPrice": 20,  "ProductDetail":"100 gram pouch","count":0},
        {"id":5,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/282197_1-everest-masala-kitchen-king.jpg",	"BrandName" : "EVEREST", "ProductNmae":"kitchen-masala",	"ProductPrice": 70,  "ProductDetail":"200 gram pouch","count":0},
        {"id":6,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/267995_2-everest-chicken-masala.jpg",		"BrandName" : "EVEREST", "ProductNmae":"chicken-masala",		"ProductPrice": 120, "ProductDetail":"500 gram pouch","count":0},
        {"id":7,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40070776_2-tata-sampann-masala-meat.jpg",	"BrandName" : "TATA",    "ProductNmae":"meat-masala",			"ProductPrice": 100, "ProductDetail":"200 gram pouch","count":0},
        {"id":8,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/268078_2-everest-masala-chhole.jpg",		"BrandName" : "EVEREST", "ProductNmae":"chhole-masala",			"ProductPrice": 90,  "ProductDetail":"250 gram pouch","count":0},
        {"id":9,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30002500_1-everest-masala-sabji.jpg",		"BrandName" : "EVEREST", "ProductNmae":"sabji-masala",			"ProductPrice": 210, "ProductDetail":"100 gram pouch","count":0},
        {"id":10,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/100004002_1-everest-masala-sambhar.jpg",	"BrandName" : "EVEREST", "ProductNmae":"sambhar-masala",		"ProductPrice": 130, "ProductDetail":"500 gram pouch","count":0},
        {"id":11,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/100002797_1-bedekar-masala-goda.jpg",  					"BrandName" : "bedekar",    "ProductNmae":"goda-masala",						"ProductPrice": 30.50,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":12,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40001451_1-mtr-masala-sambar-powder.jpg",					"BrandName" : "mtr", 		"ProductNmae":"sambar-Powder",						"ProductPrice": 18, "ProductDetail":"250 gram pouch","count":0},
        {"id":13,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40111875_1-kohinoor-ready-masala-hyderabadi-biryani.jpg",	"BrandName" : "kohinoor",   "ProductNmae":"biryani-masala",			"ProductPrice": 60,  "ProductDetail":"500 gram pouch","count":0},
        {"id":14,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/279595_2-everest-masala-pani-puri.jpg",					"BrandName" : "EVEREST", 	"ProductNmae":"pani-puri-masala",					"ProductPrice": 25,  "ProductDetail":"100 gram pouch","count":0},
        {"id":15,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30006812_1-catch-masala-chicken.jpg",						"BrandName" : "catch", 		"ProductNmae":"chicken-masala",						"ProductPrice": 74,  "ProductDetail":"200 gram pouch","count":0},
        {"id":16,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30002498_2-everest-masala-shahi-paneer.jpg",				"BrandName" : "EVEREST",	"ProductNmae":"paneer-masala",				"ProductPrice": 110, "ProductDetail":"500 gram pouch","count":0},
        {"id":17,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40082879_1-hakim-masala-biryani.jpg",						"BrandName" : "hakim",    	"ProductNmae":"biryani-masala",						"ProductPrice": 98.50, "ProductDetail":"200 gram pouch","count":0},
        {"id":18,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30006794_2-catch-kasuri-methi.jpg",						"BrandName" : "catch", 		"ProductNmae":"kasuri-masala",				"ProductPrice": 90,  "ProductDetail":"250 gram pouch","count":0},
        {"id":19,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/100041717_2-badshah-masala-pulav-biryani.jpg",			"BrandName" : "badshah", 	"ProductNmae":"pulav-masala",				"ProductPrice": 27, "ProductDetail":"100 gram pouch","count":0},
        {"id":20,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30006819_3-catch-masala-super-garam.jpg",					"BrandName" : "catch", 		"ProductNmae":"garam-masala",					"ProductPrice": 30, "ProductDetail":"500 gram pouch","count":0},
        {"id":21,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/1204629_1-everest-powder-green-coriander-pouch.jpg", 	"BrandName" : "everest",    "ProductNmae":"coriander-powder",			"ProductPrice": 66,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":22,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/100004121_4-everest-powder-tikhalal-chilli.jpg",		"BrandName" : "EVEREST", 	"ProductNmae":"tikhalal-Powder",			"ProductPrice": 130, "ProductDetail":"250 gram pouch","count":0},
        {"id":23,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/100004165_2-everest-powder-turmeric.jpg",				"BrandName" : "EVEREST", 	"ProductNmae":"turmeric-powder",				"ProductPrice": 61,  "ProductDetail":"500 gram pouch","count":0},
        {"id":24,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40075125_3-bb-royal-organic-turmeric-powder.jpg",		"BrandName" : "bb-royal", 	"ProductNmae":"turmeric-powder",		"ProductPrice": 20,  "ProductDetail":"100 gram pouch","count":0},
        {"id":25,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40086152_1-bb-royal-coconut-powder-dessicated.jpg",	"BrandName" : "bb-royal", 	"ProductNmae":"coconut-powder",					"ProductPrice": 72,  "ProductDetail":"200 gram pouch","count":0},
        {"id":26,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40128832_1-everest-powder-kashmirilal.jpg",			"BrandName" : "EVEREST", 	"ProductNmae":"kashmirilal-powder",				"ProductPrice": 120, "ProductDetail":"500 gram pouch","count":0},
        {"id":27,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40070758_2-tata-sampann-powder-turmeric.jpg",			"BrandName" : "TATA",    	"ProductNmae":"turmeric-powder",				"ProductPrice": 100, "ProductDetail":"200 gram pouch","count":0},
        {"id":28,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/100004158_1-everest-powder-golden-yellow-turmeric.jpg","BrandName" : "EVEREST", 	"ProductNmae":"turmeric-powder",			"ProductPrice": 33,  "ProductDetail":"250 gram pouch","count":0},
        {"id":29,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/100004138_1-everest-powder-kutilal-red-chilli.jpg",	"BrandName" : "EVEREST", 	"ProductNmae":"chilli-powder",				"ProductPrice": 90, "ProductDetail":"100 gram pouch","count":0},
        {"id":30,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/268068_2-everest-powder-black-pepper.jpg",				"BrandName" : "EVEREST", 	"ProductNmae":"pepper-powder",			"ProductPrice": 130, "ProductDetail":"500 gram pouch","count":0},
        {"id":31,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30006780_3-catch-powder-coriander.jpg",  				"BrandName" : "catch",    	"ProductNmae":"coriander-powder",				"ProductPrice": 24,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":32,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30006782_2-catch-powder-red-chilly.jpg",				"BrandName" : "catch", 		"ProductNmae":"chilly-Powder",				"ProductPrice": 154, "ProductDetail":"250 gram pouch","count":0},
        {"id":33,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40091827_3-bb-royal-organic-cuminjeera-powder.jpg",	"BrandName" : "bb-royal", 	"ProductNmae":"cuminjeera-powder",				"ProductPrice": 63,  "ProductDetail":"500 gram pouch","count":0},
        {"id":34,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30006776_2-catch-powder-turmeric.jpg",				"BrandName" : "catch", 		"ProductNmae":"turmeric-powder",				"ProductPrice": 22,  "ProductDetail":"100 gram pouch","count":0},
        {"id":35,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30005448_1-kapol-powder-elaichi.jpg",					"BrandName" : "kapol", 		"ProductNmae":"elaichi-powder",					"ProductPrice": 77,  "ProductDetail":"200 gram pouch","count":0},
        {"id":36,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/100004039_1-everest-powder-dry-ginger.jpg",			"BrandName" : "EVEREST", 	"ProductNmae":"ginger-powder",				"ProductPrice": 80.50 ,"ProductDetail":"500 gram pouch","count":0},
        {"id":37,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40082787_3-bb-royal-organic-wheat-grass-powder.jpg",	"BrandName" : "bb-royal",   "ProductNmae":"wheat-powder",				"ProductPrice": 32, "ProductDetail":"200 gram pouch","count":0},
        {"id":38,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/100005397_1-badshah-powder-jeera.jpg",				"BrandName" : "badshah", 	"ProductNmae":"jeera-powder",					"ProductPrice": 90,  "ProductDetail":"250 gram pouch","count":0},
        {"id":39,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/268006_1-everest-powder-jaljira.jpg",					"BrandName" : "EVEREST", 	"ProductNmae":"jaljira-powder",					"ProductPrice": 24, "ProductDetail":"100 gram pouch","count":0},
        {"id":40,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/268944_1-everest-powder-white-pepper.jpg",			"BrandName" : "EVEREST", 	"ProductNmae":"pepper-powder",			"ProductPrice": 130.50, "ProductDetail":"500 gram pouch","count":0},
        {"id":41,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/40030808_2-bb-royal-cuminjeera-whole.jpg",  															"BrandName" : "bb-royal",    "ProductNmae":"cuminjeera",			"ProductPrice": 120,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":42,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/1203099_1-bb-royal-cuminjeera-whole-500g-mustard-small-500g-corianderdhania-seeds-local-500g.jpg",		"BrandName" : "bb-royal", 	 "ProductNmae":"mustard-small",			"ProductPrice": 95, "ProductDetail":"250 gram pouch","count":0},
        {"id":43,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/20002590_2-bb-royal-phool-makhana.jpg",																"BrandName" : "bb-royal",    "ProductNmae":"phool-makhana",			"ProductPrice": 77,  "ProductDetail":"500 gram pouch","count":0},
        {"id":44,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/10000485_7-bb-royal-mustard-rai-small.jpg",															"BrandName" : "bb-royal",    "ProductNmae":"mustard-small",		"ProductPrice": 44,  "ProductDetail":"100 gram pouch","count":0},
        {"id":45,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30000304_3-bb-royal-ajwain-whole.jpg",																	"BrandName" : "bb-royal",    "ProductNmae":"ajwain-whole",			"ProductPrice": 32,  "ProductDetail":"200 gram pouch","count":0},
        {"id":46,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/30000306_3-bb-royal-coriander-dhania-seeds.jpg",														"BrandName" : "bb-royal",    "ProductNmae":"coriander-seeds","ProductPrice": 99, "ProductDetail":"500 gram pouch","count":0},
        {"id":47,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/20000464_4-bb-royal-black-pepper-kali-mirch.jpg",														"BrandName" : "bb-royal",    "ProductNmae":"black-pepper",			"ProductPrice": 100, "ProductDetail":"200 gram pouch","count":0},
        {"id":48,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/10000478_7-bb-royal-methi-fenugreek.jpg",																"BrandName" : "bb-royal",    "ProductNmae":"methi-fenugreek",		"ProductPrice": 90,  "ProductDetail":"250 gram pouch","count":0},
        {"id":49,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/20000487_3-bb-royal-tamarind-imli.jpg",																"BrandName" : "bb-royal",    "ProductNmae":"tamarind-imli",			"ProductPrice": 85.50, "ProductDetail":"100 gram pouch","count":0},
        {"id":50,"ProductImage":"https://www.bigbasket.com/media/uploads/p/s/20000443_3-bb-royal-mustard-rai-medium.jpg",															"BrandName" : "bb-royal",    "ProductNmae":"mustard-rai",			"ProductPrice": 92.50, "ProductDetail":"500 gram pouch","count":0},
        {"id":51,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40073427_1-bb-popular-cardamomelaichi-green.jpg",  			"BrandName" : "bb-popular",    	"ProductNmae":"elaichi",		"ProductPrice": 86,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":52,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40072515_5-bb-royal-organic-ajwain.jpg",						"BrandName" : "bb-royal", 	   	"ProductNmae":"ajwain",					"ProductPrice": 12, "ProductDetail":"250 gram pouch","count":0},
        {"id":53,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30000316_3-bb-royal-till-regular.jpg",						"BrandName" : "bb-royal", 		"ProductNmae":"chaat",					"ProductPrice": 85,  "ProductDetail":"500 gram pouch","count":0},
        {"id":54,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40088188_3-bb-royal-organic-mustardrai-big.jpg",				"BrandName" : "bb-royal", 		"ProductNmae":"mustardrai-big",			"ProductPrice": 27,  "ProductDetail":"100 gram pouch","count":0},
        {"id":55,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/60000020_1-bb-royal-corianderdhania-seeds-local.jpg",			"BrandName" : "bb-royal", 		"ProductNmae":"coriander-seeds",	"ProductPrice": 70,  "ProductDetail":"200 gram pouch","count":0},
        {"id":56,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30000272_5-bb-royal-star-anise.jpg",							"BrandName" : "bb-royal", 		"ProductNmae":"star-anise",				"ProductPrice": 45, "ProductDetail":"500 gram pouch","count":0},
        {"id":57,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/20000475_3-bb-royal-saunf-small.jpg",							"BrandName" : "bb-royal",    	"ProductNmae":"saunf-small",			"ProductPrice": 100, "ProductDetail":"200 gram pouch","count":0},
        {"id":58,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40056545_3-bb-royal-whole-garam-masala.jpg",					"BrandName" : "bb-royal", 		"ProductNmae":"garam-masala",		"ProductPrice": 48.50,  "ProductDetail":"250 gram pouch","count":0},
        {"id":59,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40053906_2-bb-royal-kalonji.jpg",								"BrandName" : "bb-royal", 		"ProductNmae":"kalonji",				"ProductPrice": 21, "ProductDetail":"100 gram pouch","count":0},
        {"id":60,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40089603_3-bb-royal-organic-till-white.jpg",					"BrandName" : "bb-royal", 		"ProductNmae":"till-white",		"ProductPrice": 120, "ProductDetail":"500 gram pouch","count":0},
        {"id":61,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40129693_2-kubal-powder-kashmiri-chilli.jpg",  		"BrandName" : "kubal",    "ProductNmae":"kashmiri-chilli",	"ProductPrice": 54,	 "ProductDetail":"500 gram pouch","count":0},
        {"id":62,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30008796_1-satyam-haldi-powder.jpg",					"BrandName" : "satyam", "ProductNmae":"haldi-Powder",				"ProductPrice": 15.75, "ProductDetail":"250 gram pouch","count":0},
        {"id":63,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/40129701_1-kubal-powder-corianderdhania-agmark.jpg",	"BrandName" : "kubal", "ProductNmae":"corianderdhania",		"ProductPrice": 51,  "ProductDetail":"500 gram pouch","count":0},
        {"id":64,"ProductImage":"https://www.bigbasket.com/media/uploads/p/mm/30007117_6-maggi-magic-cubes-vegitarian-masala.jpg",	"BrandName" : "maggi", "ProductNmae":"vegitarian-masala",			"ProductPrice": 20,  "ProductDetail":"100 gram pouch","count":0}
        ]};
    this.remove_from_cart = this.remove_from_cart.bind(this);
    this.add_to_cart = this.add_to_cart.bind(this);
  }
  remove_from_cart(newProduct, from){
    this.state.productList.forEach((product, index)=>{
    if(product.id === newProduct.id){
      let newState = Object.assign({}, this.state);
        newState.productList[index].count = (from && from === "ALL")? 0 : newProduct.count - 1;
        this.setState(newState);
    }
    });
    
   
  }
  add_to_cart(newProduct){
    this.state.productList.forEach((product, index)=>{
      if(product.id === newProduct.id){
        let newState = Object.assign({}, this.state);
        newState.productList[index].count = newProduct.count + 1;
        this.setState(newState);
      }
    });
  }
  render() {
    let styleCss = { width: '70%',display: 'inline-table' };
    return (
      <div className="App">

        <h3>
          Masala & Spices
        </h3>
        <div className="row" >
          <div className="col-md-7 col-lg-7" style={styleCss}>

            {
              this.state.productList.map((product) => {
                return <Item product={product} add_to_cart={this.add_to_cart} remove_from_cart={this.remove_from_cart}
                  key={product.id}></Item>
              })

            }


          </div>
          <div className="col-md-5 col-lg-5 summary-component">
            <Summary productList={this.state.productList} remove_from_cart={this.remove_from_cart} />
          </div>


        </div>

      </div>
    );
  }
}

export default App;


