document.addEventListener('DOMContentLoaded', ()=>{
    fetch("http://localhost:3000/ramens")
        .then(resp => resp.json())
        .then(ramenArray => {
            ramenArray.forEach(addRamenImage)
        })
})

function addRamenImage(ramenObj){
    const img = document.createElement('img')
    img.src = ramenObj.image
    document.getElementById("ramen-menu").append(img)
    img.addEventListener('click', () => {
        showDetails(ramenObj)
    })

}


function showDetails(ramenDetails){
    const rating = document.getElementById("rating-display")
    rating.textContent = ramenDetails.rating
    const comment = document.getElementById ("comment-display")
    comment.textContent = ramenDetails.comment

    const ramenImg = document.querySelector('.detail-image')
    ramenImg.src = ramenDetails.image
    const ramenName = document.querySelector('.name')
    ramenName.textContent = ramenDetails.name
    const ramenRest = document.querySelector('.restaurant')
    ramenRest.textContent = ramenDetails.restaurant
}

const form = document.getElementById("new-ramen")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    newRamenForm(e)
    
})

function newRamenForm(e){
    const newRamenObj= {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value,
    }
    addRamenImage(newRamenObj)
}