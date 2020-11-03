const nameElement = document.getElementById ('name');
const backgroundColorElement = document.getElementById('backgroundcolor');
const fontElement = document.getElementById('font');
const fontColorElement = document.getElementById('fontcolor')
const fontSizeElement = document.getElementById('fontsize')
const cardElement = document.createElement('div');
const buttonElement= document.getElementById('createBtn');
cardElement.id="card"



buttonElement.addEventListener('click', makeCard);



function makeCard() {
    
    const name = nameElement.value;
    cardElement.innerText = "Hello, " + name + "!"; 
    document.body.appendChild(cardElement);
   
    const backgroundcolor=backgroundColorElement.value;
    cardElement.style.backgroundColor = backgroundcolor;
    
    const font=fontElement.value;
    cardElement.style.fontFamily = font;
    
    const fontcolor=fontColorElement.value;
    cardElement.style.color=fontcolor;

    const fontsize=fontSizeElement.value;
    cardElement.style.fontSize=fontsize;
    
   


}
   