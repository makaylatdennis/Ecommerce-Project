
        
        

fetch("ecommerce.json")
    .then(res => res.json())
    .then(data => {
        productManipulation(data);
    });
function productManipulation(products){
    let output = "";
    products.forEach(element => {
        let product = `
        <div class=product>
            <h2>${element.productName}</h2>
            <img src=${element.photo} alt=“image”>
            <p>${element.price}</p>
            <p>${element.description}</p>
        </div>`;
        output += product;
    });
    document.getElementById("productsContainer").innerHTML = output;
}
        

    
            