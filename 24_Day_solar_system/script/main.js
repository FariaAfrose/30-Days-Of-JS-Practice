const planetValue={
    mercury:3.7,
    venus:8.87,
    earth:9.81,
    mars:3.71,
    jupiter:24.79,
    saturn:10.44,
    uranus:8.69,
    neptune:11.15
}
const placeImg={
    mercury:"./image/mercury.png",
    venus:"./image/venus.png",
    earth: "./image/earth.png",
    mars:"./image/mars.png",
    jupiter:"./image/jupiter.png",
    saturn:"./image/saturn.png",
    uranus:"./image/uranus.png",
    neptune:"./image/neptune.png"
}
const weight=document.getElementById('mass')
const planet=document.querySelector('select')
const button=document.querySelector('button')
const description=document.querySelector('.description')
const planetImg=document.querySelector('.planetImg')
const flexContainer=document.getElementById('flex-container')
const flexItem=document.getElementById('description')

button.addEventListener('click',function(){
    flexContainer.classList.add('flex-container');
    flexItem.classList.add('description');
    const mass=parseFloat(weight.value)
    const selectPlanet=planet.value

    if(mass>0 && selectPlanet !=='none'){
        const gravity=planetValue[selectPlanet]   
        const acceleration=planetValue["earth"]
        const final=(mass*gravity/acceleration).toFixed(2)
        planetImg.style.display='none'
        // planetImg.style.backroundImage=`url('./image/${selectPlanet}.png')`
        planetImg.style.display='block'
        planetImg.src=placeImg[selectPlanet]
        // description.classList.add('flex-container');
        // description.classList.add('description');
        flexItem.style.backgroundColor="rgba(84, 84, 87, 0.301)"
        
        
        flexItem.innerHTML   =`<p >Weight on ${selectPlanet.charAt(0).toUpperCase() + selectPlanet.slice(1)}:</p>
        <p class="finalpp">${final} N</p>`
        // const finalpp=document.querySelector('.finalpp')

        // finalpp.style.backgroundColor="red"
        // finalpp.style.borderRadious="50px"
    }
    else{
        flexItem.innerHTML = '<p>Please enter a valid mass and select a planet.</p>';
        // planetImg.style.backroundImage=`url('./image/earth.png.png')`
        planetImg.style.display='block'
        flexItem.style.color="white"
        planetImg.src =''
        flexItem.classList.remove('flex-container');
        flexItem.classList.remove('description');
        console.log(description)
    }

})