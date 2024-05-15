
// Check if the current page is the index page
if (window.location.pathname === '/index.html') {
    fetch("ecommerce.json")
        .then(res => res.json()) // turns our response into json object
        .then(data => {
            displayBestSellers(data);
            // Initially display the first slide
            carousel(sliderIndex);

            // slides will switch every 3 seconds
setInterval(nextSlide, 3000);
        });
}

    



function displayBestSellers(products) { // takes products array and iterates through 9 products 
    let productsIndex = "";

    for (let i = 0; i < 9; i++) { // for loop used to take info from each product in json file and place them in html style code
        let indexProducts = `
        <div class="product">
        <h2>${products[i].productName}</h2>
        <img src="${products[i].photo}" alt="hair pick" class="product-images">
        <p>${products[i].price}</p>
        <p class="product-description">${products[i].description}</p>
        </div>`;
   
        productsIndex+= indexProducts // indexProducts "data" is now stored in productsIndex
    }
    let indexProducts = document.getElementsByClassName('best-sellers')[0]; // indexProducts now represents the best-sellers class in html, allows us to add info to this element

indexProducts.innerHTML = productsIndex // data in productsIndex will now be displayed where the best-sellers class is in html
}
const sliderContainer = document.querySelector(".best-sellers");
const sliderItems = document.getElementsByClassName("product");
let sliderIndex = 0; // Initialize sliderIndex

function carousel(index) {
    // Hide all slides
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = "none";
    }

    // Show the current product and next in a block 
    sliderItems[index].style.display = "block";
    if (index + 1 <= sliderItems.length) {                      //code portion will take 4 products at a time and display them in a block, it will keep looping through in this display until the products run out
        sliderItems[index + 1].style.display = "block";         // once one product moves out the frame another one moves in which is why near the end of the loop we only see one product
                                                                
    }
    
    if (index + 2 < sliderItems.length) { 
        sliderItems[index + 2].style.display = "block";
    }

    if (index + 3 < sliderItems.length) { 
        sliderItems[index + 3].style.display = "block";
    }

}



function nextSlide() {
    sliderIndex++;
    if (sliderIndex >= sliderItems.length) {// slider will start over once it reaches the end
        sliderIndex = 0;
    }
    carousel(sliderIndex); 
}




