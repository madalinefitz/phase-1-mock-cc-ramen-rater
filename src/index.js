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
        
        const newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target["new-comment"].value,
        }
        displayImg(newRamen)
        
        })
    })

    