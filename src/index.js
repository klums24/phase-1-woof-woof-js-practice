const pupUrl = "http://localhost:3000/pups"
// const dogImage = document.createElement("img")
// const dogName = document.createElement("h2")
// const dogButton = document.createElement("button")

//FETCH our data for pups
fetch(pupUrl)
.then(response => response.json())
.then(pupData => pupData.forEach(pup => renderPup(pup)))

//put pups in <div id="dog-bar"> using function

function renderPup(puppy) {
    
    //const pupSpan = document.createElement("span")
    const pupSpan = document.createElement("span")

    pupSpan.innerText = puppy.name
    document.querySelector("#dog-bar").append(pupSpan)

    //handle event when pup name is clicked
    pupSpan.addEventListener("click", () => {
         
        const dogInfo = document.querySelector("#dog-info")
        
        dogInfo.innerHTML=
    
        `
        <img src=${puppy.image} />
        <h2>${puppy.name}</h2>
        <button></button>
        `
        // if (puppy.isGoodDog === true) {
        //     button.textContent = "Good Dog!"
        // } else {
        //     button.textContent = "Bad Dog!"
        // }


        // const dogImage = document.createElement("img")
        // dogImage.src = puppy.image
        // document.querySelector("#dog-bar").append(pupSpan)

        // const dogName = document.createElement("h2")
        // dogName.innerText = puppy.name
        
        // const dogButton = document.createElement("button")
        
       
        // document.querySelector("#dog-info").append(dogImage, dogName, dogButton)
        
    })

}


