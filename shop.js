
        
        

fetch("ecommerce.json")
    .then(res => res.json()) // waiting for response from json file
    .then(data => { //once response is received, data from json file will be put through our function
        productManipulation(data);
    });
function productManipulation(products){
    let output = "";
    products.forEach(element => { //will iterate through each product in our json file and put the data in this format
        let product = `
        <div class=product>
            <h2>${element.productName}</h2>
            <img src=${element.photo} alt=“image”>
            <p>${element.price}</p>
            <p>${element.description}</p>
        </div>`;
        output += product;
    });
    document.getElementById("productsContainer").innerHTML = output; //place our product information in our html file
}
        

    
            