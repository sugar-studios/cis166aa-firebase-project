$(document).ready(function () {
    $("#slideshow > div:gt(0)").hide();

    // Set interval to cycle images
    setInterval(function () {
        $("#slideshow > div:first")
            .fadeOut(1000)  
            .next()        
            .fadeIn(1000)  
            .end()         
            .appendTo("#slideshow"); 
    }, 3000); 
});
