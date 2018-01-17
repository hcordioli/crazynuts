var webserver = require('webserver');
var server = webserver.create();
var page = require('webpage').create();
console.log ('Starting ViajaNet server and listening requests on port 1370 ...');
var service = server.listen(1370, function(request, response) {
	console.log ('Request received at ' + new Date() + request);
	jsonEntry=JSON.stringify(parseGET(request.url), undefined, 4);
	obj = JSON.parse(jsonEntry);
	htCheckin = obj.checkin;
	htCheckout = obj.checkout;
	htViajaNetCode = obj.hotelId;
	htRoom1 = obj.room1;
	htRoom2 = obj.room2;
	htRoom3 = obj.room3;
	htRoom4 = obj.room4;
	htViajaNetURLbase = 'https://hoteis2.viajanet.com.br/';
	htViajaNetResponse = 'teste';
	console.log ('1->',htCheckin,htCheckout,htViajaNetCode,htRoom1,htRoom2,htRoom3,htRoom4);
	urlViajaNetMount(htCheckin,htCheckout,htViajaNetCode,htRoom1,htRoom2,htRoom3,htRoom4);
	console.log ('9->... voltou',htViajaNetURLbase);
	page.open(htViajaNetURLbase, function(status) {
		console.log('Passo 1');
		if (status !== 'success') {
			console.log('Unable to access network');
		} else {
			var returnName = page.evaluate(function(){
				return document.querySelector("h1").innerHTML;
			});
			var returnPrice = page.evaluate(function() {
				var htPriceCurr = document.querySelector(".featured-price .pricing .price .current-price").innerHTML;
				return htPriceCurr
			});
			console.log("");
			console.log("---------------------------------");
			console.log("");
			console.log(returnName);
			console.log(returnPrice);
			console.log("");
			console.log(htViajaNetURLbase);
			console.log("");
			console.log("---------------------------------");
			console.log("");
			htViajaNetResponse = '{"name" : "'+returnName+'","price" : "'+returnPrice+'","url" : "'+htViajaNetURLbase+'"}';
			console.log (htViajaNetResponse);
		}
		console.log ('9->... voltou',htViajaNetResponse);
		response.write(htViajaNetResponse);
		response.statusCode = 200;
		response.close();
//		phantom.exit();
	})
});

function parseGET(url){
  // adapted from http://stackoverflow.com/a/8486188
  var query = url.substr(url.indexOf("?")+1);
  var result = {};
  query.split("&").forEach(function(part) {
    var e = part.indexOf("=")
    var key = part.substr(0, e);
    var value = part.substr(e+1);
    result[key] = decodeURIComponent(value);
  });
  return result;
}

function urlViajaNetMount(ihtCheckin,ihtCheckout,ihtViajaNetCode,ihtRoom1,ihtRoom2,ihtRoom3,ihtRoom4){
	//codigo do hotel
	htViajaNetURLbase = htViajaNetURLbase+'ho'+ihtViajaNetCode+'/?';
		
	//checkin & checkout
	htViajaNetURLbase = htViajaNetURLbase+'q-check-in='+ihtCheckin+'&'+'q-check-out='+ihtCheckout+'&'
	console.log ('2->',htViajaNetURLbase);
	
	// quarto 1
	var room1Array = ihtRoom1.split(',');
	console.log ('3->',room1Array[0], room1Array[1], room1Array[2]);
	console.log ('3->', parseInt(room1Array[0]));
	if (parseInt(room1Array[0]) > 0) {
		adtAttr = 'q-room-0-adults=';
		htViajaNetURLbase = htViajaNetURLbase+adtAttr+room1Array[0]+'&';
		console.log ('3->', parseInt(room1Array[1]));
		if (parseInt(room1Array[1]) > 0){
			chdAttr = 'q-room-0-children=';
			htViajaNetURLbase = htViajaNetURLbase+chdAttr+room1Array[1]+'&';
			console.log ('4->',htViajaNetURLbase);
			var begin1 = htRoom1.indexOf('\[');
			var end1 = htRoom1.indexOf('\]');
			var ages1temp = htRoom1.slice (begin1+1,end1);
			var ages1Array = ages1temp.split(',');
			console.log ('5. ages-> ',ages1Array,ages1Array.length);
			for(agesItr=0;agesItr<ages1Array.length;agesItr++){
				agesAttr = 'q-room-0-child-'+agesItr+'-age=';
				htViajaNetURLbase = htViajaNetURLbase+agesAttr+ages1Array[agesItr]+'&';
			}
		}
		console.log ('4->',htViajaNetURLbase);
	}

	// quarto 2	
	console.log ('5->',ihtRoom2);
	if (ihtRoom2 !==undefined) {
		var room2Array = ihtRoom2.split(',');
		console.log ('5->',room2Array[0], room2Array[1], room2Array[2]);
		console.log ('5->', parseInt(room2Array[0]));
		if (parseInt(room2Array[0]) > 0) {
			adtAttr = 'q-room-1-adults=';
			htViajaNetURLbase = htViajaNetURLbase+adtAttr+room2Array[0]+'&';
			if (parseInt(room2Array[1]) > 0){
				chdAttr = 'q-room-1-children=';
				htViajaNetURLbase = htViajaNetURLbase+chdAttr+room2Array[1]+'&';
				console.log ('5->',htViajaNetURLbase);
				var begin2 = htRoom2.indexOf('\[');
				var end2 = htRoom2.indexOf('\]');
				var ages2temp = htRoom2.slice (begin2+1,end2);
				var ages2Array = ages2temp.split(',');
				console.log ('5. ages-> ',ages2Array,ages2Array.length);
				for(agesItr=0;agesItr<ages2Array.length;agesItr++){
					agesAttr = 'q-room-1-child-'+agesItr+'-age=';
					htViajaNetURLbase = htViajaNetURLbase+agesAttr+ages2Array[agesItr]+'&';
				}
			}
			console.log ('5->',htViajaNetURLbase);
		}
	} else {
		console.log ('quarto 2 vazio');
	}
	// quarto 3
	if (ihtRoom3!==undefined){
		var room3Array = ihtRoom3.split(',');
		console.log ('6->',room3Array[0], room3Array[1], room3Array[2]);
		console.log ('6->', parseInt(room3Array[0]));
		if (parseInt(room3Array[0]) > 0) {
			adtAttr = 'q-room-2-adults=';
			htViajaNetURLbase = htViajaNetURLbase+adtAttr+room3Array[0]+'&';
			if (parseInt(room3Array[1]) > 0){
				chdAttr = 'q-room-2-children=';
				htViajaNetURLbase = htViajaNetURLbase+chdAttr+room3Array[1]+'&';
				console.log ('6->',htViajaNetURLbase);
				var begin3 = htRoom3.indexOf('\[');
				var end3 = htRoom3.indexOf('\]');
				var ages3temp = htRoom3.slice (begin3+1,end3);
				var ages3Array = ages3temp.split(',');
				console.log ('6. ages-> ',ages3Array,ages3Array.length);
				for(agesItr=0;agesItr<ages3Array.length;agesItr++){
					agesAttr = 'q-room-2-child-'+agesItr+'-age=';
					htViajaNetURLbase = htViajaNetURLbase+agesAttr+ages3Array[agesItr]+'&';
				}
			}
			console.log ('6->',htViajaNetURLbase);
		}
	} else {
		console.log ('quarto 3 vazio');
	}
	
	// quarto 4
	if (ihtRoom4!==undefined){
		var room4Array = ihtRoom4.split(',');
		console.log ('7->',room4Array[0], room4Array[1], room4Array[2]);
		console.log ('7->', parseInt(room4Array[0]));
		if (parseInt(room4Array[0]) > 0) {
			adtAttr = 'q-room-3-adults=';
			htViajaNetURLbase = htViajaNetURLbase+adtAttr+room4Array[0]+'&';
			if (parseInt(room4Array[1]) > 0){
				chdAttr = 'q-room-3-children=';
				htViajaNetURLbase = htViajaNetURLbase+chdAttr+room4Array[1]+'&';
				console.log ('7->',htViajaNetURLbase);
				var begin4 = htRoom4.indexOf('\[');
				var end4 = htRoom4.indexOf('\]');
				var ages4temp = htRoom4.slice (begin4+1,end4);
				var ages4Array = ages4temp.split(',');
				console.log ('7. ages-> ',ages4Array,ages4Array.length);
				for(agesItr=0;agesItr<ages4Array.length;agesItr++){
					agesAttr = 'q-room-3-child-'+agesItr+'-age=';
					htViajaNetURLbase = htViajaNetURLbase+agesAttr+ages4Array[agesItr]+'&';
				}
			}
			console.log ('7->',htViajaNetURLbase);
		}
	} else {
		console.log ('quarto 4 vazio');
	}
}
