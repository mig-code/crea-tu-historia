const boxContent =document.getElementById("main-content")
const btnRender = document.getElementById("btn-render")
let rand


function renderImages(){
    
    renderLoading()

    fetch("https://api.arasaac.org/api/pictograms/all/es")
    .then(res=> res.json())
    .then(data=>{
        boxContent.innerHTML= ""
        let maxRandom =data.length
        
        getRandomNumber(maxRandom)
        AddBox(data[rand].keywords[0].keyword, data[rand]._id)

        getRandomNumber(maxRandom)
        AddBox(data[rand].keywords[0].keyword, data[rand]._id)

        getRandomNumber(maxRandom)
        AddBox(data[rand].keywords[0].keyword, data[rand]._id)
        
    })
    .catch(error => console.error('Error:', error))
}

btnRender.addEventListener("click",renderImages)

window.onload=renderImages()



function renderLoading(){
    return boxContent.innerHTML= `
    <section id="main-content">
        <div id="box-content">
            <div id="box-text">
                <p>CARGANDO</p>
            </div>
        
            <div id="box-image">
                <img id="load-animation" src=https://static.arasaac.org/pictograms/16091/16091_500.png>
            </div>
        </div>
<<<<<<< HEAD
=======
    
        <div id="box-image">
            <img id="load-animation" src=https://static.arasaac.org/pictograms/16091/16091_500.png>
        </div>
    
    </div>
>>>>>>> parent of 645b3dc (Solved)
    </section>`
}

function getRandomNumber(maxNum){
    return rand = Math.floor(Math.random()*maxNum) 

}

function AddBox(title, imgId){

    boxContent.innerHTML +=`
        <div id="box-content">
            <div id="box-text">
                <p>${title.toUpperCase()}</p>
            </div>
        
            <div id="box-image">
                <img src=https://static.arasaac.org/pictograms/${imgId}/${imgId}_500.png>
            </div>
        
        </div>`
}