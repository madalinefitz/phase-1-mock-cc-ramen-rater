// write your code here
document.addEventListener("DOMContentLoaded", ()=> {
    fetch ("http://localhost:3000/ramens/")
        .then (resp => resp.json())
        .then (ramenObj => {
            ramenObj.forEach(displayImg)
        })
})
function displayImg(ramenImg){
    const img = document.createElement('img')
    img.src = ramenImg.image
    document.getElementById("ramen-menu").append(img)
    img.addEventListener("click", e => {
        console.log(e)
        const detailsImg = document.querySelector (".detail-image")
        detailsImg.src = ramenImg.image
        const detailsName = document.querySelector (".name")
        detailsName.textContent = ramenImg.name
        const detailsRest = document.querySelector (".restaurant")
        detailsRest.textContent = ramenImg.restaurant
        
        const rating = document.getElementById("rating-display")
        rating.textContent = ramenImg.rating
        const comment = document.getElementById("comment-display")
        comment.textContent = ramenImg.comment
    })
    
}


document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.getElementById("new-ramen")
    form.addEventListener('submit', e => {
        e.preventDefault()
        console.log(e)
        })
    })

    


// function newRamen(e){  

//         e.target["submit-form"].parentNode.value
//         const p = document.createElement ('p')
//         const newName = document.getElementById("new-name")
//         p.textContent = newName.value

// }







    
    // p.textContent = e.target['new-name'].parentNode.value
    // console.log(p)
//     
        // e.target["new-name"].parentNode.value
        // console.log(newRamenThings)
        
        
        // newName.input = newRamenThings.name
        // console.log(newRamenThings)
    
    //   
    // "name": "Shoyu Ramen",
    // "restaurant": "Nonono",
    // "image": "./assets/ramen/shoyu.jpg",
    // "rating": 7,
    // "comment": "Delish. Can't go wrong with a classic!"



