document.addEventListener('DOMContentLoaded',function(){
    setInterval(changeStyles,500)
    setInterval(changeColor,300)
})
function changeStyles(){
    changeFrontStyle()
    changeBackgroundColor()

}
function changeFrontStyle(){
    const changingText = document.getElementById('changingText');
    changingText.innerHTML = `30 DAYS OF JAVASCRIPT\n CHALLENGE 2020\n ASABENEH YETAYEH`;

    const letters = changingText.innerText.split('');

    changingText.innerHTML = '';

    letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = getRandomColor();
        span.style.fontFamily = getRandomFontFamily();
        changingText.appendChild(span);
    });}
    function changeBackgroundColor(){
        document.body.style.backgroundColor=getRandomColor()
    
    }
    function changeColor() {
        const content = document.getElementById('content');
        const changingText = document.getElementById('changingText');
    
        // Generate random color
        const randomColor = getRandomColor();
    
        // Set background color and text color
        content.style.backgroundColor = randomColor;
        changingText.style.color = getRandomColor();
    
    }

function getRandomColor(){
    const letters='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color +=letters[Math.floor(Math.random()*16)]
    }
    return color
    }

function getRandomFontFamily(){
const fontFamilies=['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana'];
return fontFamilies[Math.floor(Math.random()*fontFamilies.length)]
}
