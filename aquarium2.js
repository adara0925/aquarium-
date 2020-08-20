window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('tdWidth');
	totalcostObj = document.getElementById('tdCost');
   
   document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcAquarium;
}


function resetInputs() {
    lengthObj.value = '';
    heightObj.value = '';
    widthObj.value = '';
	totalcostObj.innerHTML = '';
	
	// might need to creat a reset cost 
}

function areas () {
	var SurfaceArea = (heightObj * lengthObj * widthObj) * 2;
	//charges $60 per hour. It takes him 1 hour to make an aquarium with a surface area of 6000 cm2.
}

function areaCosts () {
	var areaCosts
       if(heightObj<26) { 
	       areaCosts = ((heightObj * lengthObj * widthObj) * 2) * 6;
	   } else{
		   areaCosts = ((heightObj * lengthObj * widthObj) *2) * 10;
	   }
}
//uses 4mm thick glass (6c/cm2) for aquariums up to 25cm high and 6mm thick glass (10 c/cm2) larger ones.
	   // if needed migt need to add a document blah blah blah

function calcAquarium () {
   var areaCosts = areaCosts();
   var glueCosts = ((heightObj * lengthObj * widthObj) *2) * 10;
   //charges 10 cents per cm that he needs to glue.
   var labourCosts = 1;
   
   totalcostsObj.innerHTML = ( areaCosts + glueCosts + labourCosts * 0.1);
}

//function costs, might need to use this