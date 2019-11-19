$(document).ready(function () {
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
    });

    $(document).on("click",".close-history",function() {       
            $(".history").addClass("none");
            $(".open-menu").addClass("none");
    });
    
    $(".button-chip").click(function(){
        $(".more-chips").toggle("none");
    });  

    $(document).on("click",".r-track",function() {
        $(".racetrack").show();
        $(this).addClass('active');
        $(".left-center").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black");
        $(".div-for-racetrack").show()
    });
    $(document).on("click",".r-track.active",function() {
        $(this).removeClass('active');
        $(".racetrack").hide();
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c");
        $(".div-for-racetrack").hide()

    });
    $(document).on("click",".favorites",function() {
        $(this).addClass('active');
        $(".favorites-content").show();
        $(".left-center").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black")
        $(".div-for-favorites").show()
    });
    $(document).on("click",".favorites.active",function() {
        $(this).removeClass('active');
        $(".favorites-content").hide()
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c")
        $(".div-for-favorites").hide()

    });
    $(document).on("click",".stats",function() {
        $(this).addClass('active');
        $(".left-center").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black")
        $(".div-for-stats").show()

    });
    $(document).on("click",".stats.active",function() {
        $(this).removeClass('active');
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c")
        $(".div-for-stats").hide()

    });
    $(".hidden-eye-logo").on("click",function(){
        $(".history-board").show();
   
    })
    $(".board-history-button").on("click",function(){
        $(".history-board").show();
        $(".loader-space").hide();
    })
    $(document).on("click",".close-board-history",function() {
        $(".history-board").hide();
    });
    $(".jackpot-rule").on("click",function(){
        $(".game-limit").css({"color":"white","border":"transparent" })
        $(".game-rules").css({"color":"white","border":"transparent" })
        $(this).css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".game-limit-description").hide();
        $(".game-rules-description").hide();
        $(".game-jackpot-description").show();
        $(".div-for-rules").show()
    })
    $(".game-limit").on("click",function(){
        $(".jackpot-rule").css({"color":"white","border":"transparent" })
        $(".game-rules").css({"color":"white","border":"transparent" })
        $(this).css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".game-jackpot-description").hide();
        $(".game-rules-description").hide();
        $(".game-limit-description").show();
        $(".div-for-rules").show();    
    })
    $(".game-rules").on("click",function(){
        $(".jackpot-rule").css({"color":"white","border":"transparent" })
        $(".game-limit").css({"color":"white","border":"transparent" })
        $(this).css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".game-jackpot-description").hide();
        $(".game-limit-description").hide();
        $(".game-rules-description").show();        
    })
    $(".limits-button").on("click",function(){
        $(".div-for-rules").show();
    });
    $(document).on("click",".close-rules",function() {
        $(".div-for-rules").hide();
    });
    let table = document.querySelector(".left-center");

    function printMousePos(event) {
        let div = document.createElement("div")
        let img = '<img src="/Content/Images/0.1GEL.png" alt="" class="asdasd" >';
    
        // table.innerHTML = img;
        div.innerHTML = img;

        table.append(div);

        $(".asdasd").css({"position":"absolute","left":event.clientX +"px","top":event.clientY +"px","width":"30px","height":"30px"})
        // $(".asdasd").style.left = event.clientX + "px";
        // $(".asdasd").style.top = event.clientY + "px";
      }
    
      table.addEventListener("click", printMousePos);
});

// console.log
// (    "clientX: " + event.clientX +
// " - clientY: " + event.clientY)