var buttonClick = document.querySelector('.button');
var newDiv = document.createElement('div');
newDiv.id = 'divBoxes'


// Klikleme
buttonClick.addEventListener('click', buttonfunctionAdd);
function buttonfunctionAdd(e) {

    // Random Position
    
    const x= Math.round(Math.random()*1000)
    const y= Math.round(Math.random()*1000)
    document.body.appendChild(newDiv)
    newDiv.style = `width: 150px; height: 120px; background: red; position:relative; top${x}px; left:${y}px;`

    // Random Color 

    var bgColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
    newDiv.style.background = bgColor;
   


    // Remove Delete Div
    var div = document.getElementById('divBoxes');
    div.addEventListener('click', myFunction);



    function myFunction() {
        div.remove();


               
    }
   
    }
     



