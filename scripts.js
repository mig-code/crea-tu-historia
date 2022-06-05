const boxContent =document.getElementById("main-content")
const btnRender = document.getElementById("btn-render")

let rand =5

function renderImages(){
    boxContent.innerHTML=""
    fetch("https://api.arasaac.org/api/pictograms/all/es")
    .then(res=> res.json())
    .then(data=>{
        let maxRandom =data.length
        let rand =Math.floor(Math.random()*maxRandom) 

        //THIS SHOULD BE IN A FUNCTION OUTSIDE
        
        boxContent.innerHTML +=`
            <div id="box-content">
                <div id="box-text">
                    <p>${(data[rand].keywords[0].keyword).toUpperCase()}</p>
                </div>
            
                <div id="box-image">
                    <img src=https://static.arasaac.org/pictograms/${data[rand]._id}/${data[rand]._id}_500.png>
                </div>
            
            </div>`
        
        rand =Math.floor(Math.random()*maxRandom) 
        boxContent.innerHTML +=`
            <div id="box-content">
                <div id="box-text">
                    <p>${(data[rand].keywords[0].keyword).toUpperCase()}</p>
                </div>
            
                <div id="box-image">
                    <img src=https://static.arasaac.org/pictograms/${data[rand]._id}/${data[rand]._id}_500.png>
                </div>
            
            </div>`
            
        rand =Math.floor(Math.random()*maxRandom) 
    boxContent.innerHTML +=`
            <div id="box-content">
                <div id="box-text">
                    <p>${(data[rand].keywords[0].keyword).toUpperCase()}</p>
                </div>
            
                <div id="box-image">
                    <img src=https://static.arasaac.org/pictograms/${data[rand]._id}/${data[rand]._id}_500.png>
                </div>
            
            </div>`
        

    })
    .catch(error => console.error('Error:', error))
}

btnRender.addEventListener("click",renderImages)

renderImages()
