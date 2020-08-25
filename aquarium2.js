window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('txtWidth');
	costobj = document.getElementById('tdcost');
	
   
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
    return lengthobj * heightObj * widthObj) * 2;
}

function edges() {
    return (heightObj * 4) + (lengthObj * 2) + (widthObj * 2)
	
function glueCosts()
    return edges * 10


function labour()




function areaCosts() {
	var areaCosts 
	    if (heightObj <26) {
			areaCosts = surfaceArea() * 6;
		} else {
			areaCosts = surfaceArea() * 10;
		}
	