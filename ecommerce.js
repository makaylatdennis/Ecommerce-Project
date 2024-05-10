
// Check if the current page is the index page
if (window.location.pathname === '/index.html') {
    fetch("ecommerce.json")
        .then(res => res.json())
        .then(data => {
            displayBestSellers(data);
            // Initially display the first slide
            carousel(sliderIndex);

            // Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
        });
}

    

// for homepage bestsellers instead of foreach us for loop and iterate 4 times

function displayBestSellers(products) {
    let productsIndex = "";

    for (let i = 0; i < 9; i++) {
        let indexProducts = `
        <div class="product">
        <h2>${products[i].productName}</h2>
        <img src="${products[i].photo}" alt="hair pick" class="product-images">
        <p>${products[i].price}</p>
        <p class="product-description">${products[i].description}</p>
        </div>`;
   
        productsIndex+= indexProducts
    }
    let indexProducts = document.getElementsByClassName('best-sellers')[0];
//insert whatever class name will be used for product grid in shop page
indexProducts.innerHTML = productsIndex
}
const sliderContainer = document.querySelector(".best-sellers");
const sliderItems = document.getElementsByClassName("product");
let sliderIndex = 0; // Initialize sliderIndex

function carousel(index) {
    // Hide all slides
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = "none";
    }

    // Show the current slide and the next slide
    sliderItems[index].style.display = "block";
    if (index + 1 <= sliderItems.length) { // copy code portion, index + 2, index+ 3
        sliderItems[index + 1].style.display = "block";
    }

    if (index + 2 < sliderItems.length) { // copy code portion, index + 2, index+ 3
        sliderItems[index + 2].style.display = "block";
    }

    if (index + 3 < sliderItems.length) { // copy code portion, index + 2, index+ 3
        sliderItems[index + 3].style.display = "block";
    }

}



function nextSlide() {
    sliderIndex++;
    if (sliderIndex >= sliderItems.length) {
        sliderIndex = 0;
    }
    carousel(sliderIndex);
}




