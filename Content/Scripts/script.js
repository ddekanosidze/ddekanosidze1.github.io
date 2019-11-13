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
    });
    $(".close-history").click(function(){
        $(".history").addClass("none");
    });
    $(".last-houndreed-button").click(function(){
        $(".last-houndreed-numbers-container").removeClass("none");
        $(".user-game-history").addClass("none");
        $(".game-history-button").css({"color":"white","border":"transparent" })
        $(".last-houndreed-button").addClass("active");  
        $(".last-houndreed-button").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });

    });
    $(".game-history-button").click(function(){
        $(".last-houndreed-numbers-container").addClass("none");
        $(".user-game-history").removeClass("none");
        $(".last-houndreed-button").css({"color":"white","border":"transparent" })
        $(".game-history-button").addClass("active");
        $(".game-history-button").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });

    });
    $(".last-houndreed").click(function(){
        $(".open-menu").removeClass("none");
        $(".history").removeClass("none"); 
        $(".user-game-history").addClass("none");
        $(".last-houndreed-numbers-container").removeClass("none");
        $(".game-history-button").css({"color":"white","border":"transparent" })
        $(".last-houndreed-button").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
            
            $(".close-history").click(function(){
              $(".history").addClass("none");
              $(".open-menu").addClass("none");
            });
        
    });
}