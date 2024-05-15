document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    var alert = document.querySelector('.alert');
    var onButton = document.querySelector('.on');
    var closeButton = document.querySelector('.close');
   

    // Add event listeners
    onButton.addEventListener('click', function() {// how we're able to see the actual navmenu
        alert.style.transform = 'translateX(0)';
    });

    closeButton.addEventListener('click', function() { // gives functionality to the x on navmenu, allows us to close it
        alert.style.transform = 'translateX(150%)';
    })
});
