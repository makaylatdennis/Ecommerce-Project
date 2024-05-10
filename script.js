document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    var alert = document.querySelector('.alert');
    var onButton = document.querySelector('.on');
    var closeButton = document.querySelector('.close');
    var outButton = document.querySelector('.out');

    // Add event listeners
    onButton.addEventListener('click', function() {
        alert.style.transform = 'translateX(0)';
    });

    closeButton.addEventListener('click', function() {
        alert.style.transform = 'translateX(150%)';
    });

    outButton.addEventListener('click', function() {
        alert.style.transform = 'translateX(150%)';
    });
});
