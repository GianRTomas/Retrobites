// Adjust element heights based on image references
function adjustElementHeight() {
    var image1 = document.getElementById('image1');  // First reference image
    var image2 = document.getElementById('image2');  // Second reference image

    // Adjust height for elements with the class 'slideshow-container'
    var slideshowContainers = document.querySelectorAll('.slideshow-container'); 
    slideshowContainers.forEach(function(element) {
        element.style.height = image1.clientHeight + 'px';  // Adjust height based on image1
    });

    // Adjust height for elements with the class 'slideshow-container-mobile'
    var slideshowContainersmobile = document.querySelectorAll('.slideshow-container-mobile'); 
    slideshowContainersmobile.forEach(function(element) {
        element.style.height = image2.clientHeight + 'px';  // Adjust height based on image2
    });
}

// Adjust iframe heights based on review images
function adjustIframeHeight() {
    var review_image_1 = document.getElementById('R1Pic1');
    var review_image_2 = document.getElementById('R1Pic2');
    var review_image_3 = document.getElementById('R1Pic3');

    var review_image_4 = document.getElementById('R2Pic1');
    var review_image_5 = document.getElementById('R2Pic2');
    var review_image_6 = document.getElementById('R2Pic3');

    var review_image_7 = document.getElementById('R4Pic3');
    var review_image_8 = document.getElementById('R4Pic4');
    var review_image_9 = document.getElementById('R4Pic5');
    
    var review_image_10 = document.getElementById('R5Pic1');
    var review_image_11 = document.getElementById('R5Pic2');
    var review_image_12 = document.getElementById('R5Pic2');

    review_image_4.style.height = review_image_1.clientHeight + 'px';
    review_image_5.style.height = review_image_2.clientHeight + 'px';
    review_image_6.style.height = review_image_3.clientHeight + 'px';

    review_image_7.style.height = review_image_1.clientHeight + 'px';
    review_image_8.style.height = review_image_2.clientHeight + 'px';
    review_image_9.style.height = review_image_3.clientHeight + 'px';

    review_image_10.style.height = review_image_1.clientHeight + 'px';
    review_image_11.style.height = review_image_2.clientHeight + 'px';
    review_image_12.style.height = review_image_3.clientHeight + 'px';
}

// Combine both functions into one event listener for window.onload and window.onresize
function adjustAllHeights() {
    adjustElementHeight();
    adjustIframeHeight();
}

// Call adjustAllHeights on page load and window resize
window.onload = function() {
    adjustAllHeights();
};

window.onresize = function() {
    adjustAllHeights();
};
