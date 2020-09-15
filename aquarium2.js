window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('txtWidth');
	costObj = document.getElementById('tdCost');
	document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalcCost').onclick = calcAquarium;
}


function resetInputs() {
    lengthObj.value = '';
    heightObj.value = '';
    widthObj.value = '';
    costObj.innerHTML = '';
}

function surfaceArea() {
	var length = new Number(lengthObj.value);
	var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
     return (length * height * 2) + (width * height * 2 ) + (length* width * 2);
}

function edges() {
	var length = new Number(lengthObj.value);
	var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    return (height * 4) + (length * 2) + (width * 2);
}

function glueCosts() {
	var glue;
	return edges() * 0.1;
}


function labour() {
	var workingCosts;
    return surfaceArea() * 0.01;
}

function glass() {
	var amountOfGlass;
	var height = new Number(heightObj.value);
	var sA= surfaceArea();
	    if (height > 25) {
			amountOfGlass = sA * 0.06;
		} else {
			amountOfGlass = sA * 0.1;
		}
	return amountOfGlass;
}

	

function calcAquarium () {
	var length = new Number(lengthObj.value);
	var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var gl = glueCosts();
	var workingCost = labour();
	var amount = glass();
	var GST = 1.1;
	costObj.innerHTML = '';
	if (isNaN(length) || isNaN(width) || isNaN(height)) {
		alert('Invalid length or width of height');
		return;
	}
	costObj.innerHTML = ((gl + amount + workingCost) * GST);
}
// something wrong with this function.
	
	
	


