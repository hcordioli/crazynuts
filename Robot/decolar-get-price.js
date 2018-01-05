var page = require('webpage').create();

//URLBASE..../312430/2018-01-10/2018-01-11/2?pageNbr=1&pos=1&cl=1&sf=ABT_TRN_E_PROFIT_V2&rid=5227&search_id=qb11QmmTNL

/*exemplo 1 (3 quartos)
=> quarto 1 c/ 2 adultos e duas criancas (5 e 2)
=> quarto 2 c/ 1 adulto e 1 criança (3) 
=> quarto 3 c/ 2 adultos*/
//var htApt = [[2,[5,2]],[1,[3]],[2,[]]];

/*exemplo 2 (1 quarto)
=> quarto 1 c/ 2 adultos*/
// var htApt = [[2,[]]];

// var htApt = [[2,[]]];
// var htApt = [[2,[5,2,1]],[2,[]]];
var htApt = [[2,[]],[1,[3]],[2,[5,2,1]]];

//data de checkin - US formt
var htCheckin = '2018-03-06';
//data de checkout - US formt
var htCheckout = '2018-03-13';
//codigo do hotel na DECOLAR
var htDecolarCode = '415909';
//URL base para a pagina de detalhe do hotel
var htDecolarURLbase = 'https://www.decolar.com/search/hotel/details/';

function urlDecolarMount(){
	//codigo do hotel
	htDecolarURLbase = htDecolarURLbase+htDecolarCode+"/";
		
	//checkin & checkout
	htDecolarURLbase = htDecolarURLbase+htCheckin+"/"+htCheckout+"/"
	
	for(y=0;y<htApt.length;y++){
		//adultos
		htDecolarURLbase = htDecolarURLbase+htApt[y][0];
		
		//criancas
		for(i=0;i<htApt[y][1].length;i++){
			htDecolarURLbase = htDecolarURLbase+"-"+htApt[y][1][i];
//			if(i < (htApt[y][1].length-1)){
//				htDecolarURLbase = htDecolarURLbase + "-";
//			}
		}
		if(y < (htApt.length-1)){
			htDecolarURLbase = htDecolarURLbase + "!";
		}
	}


}

urlDecolarMount();

page.open(htDecolarURLbase, function(status) {

  	if (status !== 'success') {

    	console.log('Unable to access network');

  	} else {

  		var returnName = page.evaluate(function(){
  			return document.querySelector("#hf-robot-title").innerHTML;
  		});
		    
	    var returnPrice = page.evaluate(function() {
	    	var htPriceCurr = document.querySelector(".hf-price-box-fare p.hf-fare .currency").innerHTML;
		  	var htPrice = document.querySelector(".hf-price-box-fare p.hf-fare .hf-price").innerHTML;
		  	var htPriceCents = document.querySelector(".hf-price-box-fare p.hf-fare .hf-price-cents").innerHTML;
		  	return htPriceCurr+" "+htPrice+","+htPriceCents
		});
	    console.log("");
	    console.log("---------------------------------");
	    console.log("");
		console.log(returnName);
		console.log(returnPrice);
		console.log("");
		console.log(htDecolarURLbase);
		console.log("");
	    console.log("---------------------------------");
	    console.log("");
	
	    phantom.exit();
  }

});