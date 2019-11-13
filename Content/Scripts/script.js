$(document).ready(function () {
    menuFunction();

})
function menuFunction(){
    $(".menu-button").click(function() {
        $(".open-menu").removeClass("none");
    });
    $(".close-tab").click(function() {
        $(".open-menu").addClass("none");
    });
    $(".my-history-button").click(function(){
        $(".history").removeClass("none");
        
    })
}