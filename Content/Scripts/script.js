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
            $(".loader-space").show();

    });
    
    $(".button-chip").click(function(){
        $(".more-chips").toggle("none");
    });  

    $(document).on("click",".r-track",function() {
        closeTab('.r-track');
        $(".racetrack").show();
        $(this).addClass('active');
        $(".left-center, .favorites-content, .div-for-stats").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black");
        $(".div-for-racetrack").show();
    });
    $(document).on("click",".r-track.active",function() {
        closeTab('.r-track.active');
        $(this).removeClass('active');
        $(".racetrack").hide();
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c");
        $(".div-for-racetrack").hide()
        $(".div-for-favorites").hide()
        $(".div-for-stats").hide()


    });
    $(document).on("click",".favorites",function() {
        closeTab('.favorites');
        $(this).addClass('active');
        $(".favorites-content").show();
        $(".left-center, .racetrack, .div-for-stats").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black")
        $(".div-for-favorites").show()
    });
    $(document).on("click",".favorites.active",function() {
        closeTab('.favorites.active');
        $(this).removeClass('active');
        $(".favorites-content").hide()
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c")
        $(".div-for-racetrack").hide()
        $(".div-for-favorites").hide()
        $(".div-for-stats").hide()

    });
    $(document).on("click",".stats",function() {
        closeTab('.stats');
        $(this).addClass('active');
        $(".left-center, .racetrack, .favorites-content").hide();
        $(".main").addClass("background-racetrack");
        $(".background-black").css("background","black")
        $(".div-for-stats").show()

    });
    $(document).on("click",".stats.active",function() {
        closeTab('.stats.active');
        $(this).removeClass('active');
        $(".left-center").show();
        $(".main").removeClass("background-racetrack");
        $(".background-black").css("background","#112a4c")
        $(".div-for-racetrack").hide()
        $(".div-for-favorites").hide()
        $(".div-for-stats").hide()

    });
    
        $(document).on("click",".hidden-eye-logo",function() {
        $(".history-board").show();
   
    })
    $(".board-history-button").on("click",function(){
        $(".history-board").show();
        $(".loader-space").hide();
        
    })
    $(document).on("click",".close-board-history",function() {
        $(".history-board").hide();
        $(".loader-space").show();

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
        $(".game-limit-description").show();
        $(".game-rules-description").hide();
        $(".game-jackpot-description").hide();
        $(".game-limit").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".jackpot-rule").css({"color":"white","border":"transparent" })
        $(".game-rules").css({"color":"white","border":"transparent" })

    });
    $(".jackpot-rules-button").on("click",function(){
        $(".div-for-rules").show();
        $(".game-jackpot-description").show();
        $(".game-limit-description").hide();
        $(".game-rules-description").hide();
        $(".jackpot-rule").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".game-limit").css({"color":"white","border":"transparent" })
        $(".game-rules").css({"color":"white","border":"transparent" })
        
    });
    $(".game-rules-button").on("click",function(){
        $(".div-for-rules").show();
        $(".game-rules-description").show();
        $(".game-limit-description").hide();
        $(".game-jackpot-description").hide();
        $(".game-rules").css({"border-bottom":"10px solid #bfae4b","color":"#bfae4b" });
        $(".game-limit").css({"color":"white","border":"transparent" })
        $(".jackpot-rule").css({"color":"white","border":"transparent" })

        
    });
    $(document).on("click",".close-rules",function() {
        $(".div-for-rules").hide();
        $(".loader-space").show();
    });
  
  
    
    $(".corner-bets").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt="" class="coin"  >` ;
        $(this).append(img);
        console.log($(this).data("name"))  
    });

    let bet = 10;   
    $(".chip").on("click",function(){
        bet = $(this).data("name");
        $(".more-chips").fadeOut(200);
        $(".button-chip").css("background-image",$(this).css("background-image"));
        console.log($(this).data("name"))
    });
    

    $(".red").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt="" class="asd" > `;
        $(this).append(img);
        console.log($(this).data("name"));

    });

    $(".street").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt=""   > `;
        $(this).append(img);
        console.log($(this).data("name"));
        console.log($(this))
    });
    $(".other-bets").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt=""   > `;
        $(this).append(img);
        console.log($(this).data("name"));
    });  
    $(".column-bet").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt=""   > `;
        $(this).append(img);
        console.log($(this).data("name"));

    });
    $(".black").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt=""   > `;
        $(this).append(img);
        console.log($(this).data("name"));

    });

    $(".green").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt=""   > `;
        $(this).append(img);
        console.log($(this).data("name"));

    });
    $(".split").on("click",function(){
        let img = `<img src="/Content/Images/${bet}GEL.png" alt="" > `;
        $(this).append(img);
        console.log($(this).data("name"));
        $("img")

    });
    function addBet(name,multiplier){
        let image = `<img class="bet-chip" src="/Content/Images/${multiplier}GEL.png">`;
	    let betChip = $("div[data-name='" + name  +"']");
  	    $(betChip).append(image);
    }

    $(".jackpot-win").html(data.JackpotAmount);
    $(".user-balance").html(data.PlayerInfo.AvailableAmount);
    $(".user-bet").html(data.PlayerInfo.PlacedAmount);
    $(".user-win").html(data.PlayerInfo.WonAmount);
    $(".percent-red").html(data.SpinsDistributionPercents.Red + "%");
    $(".percent-black").html(data.SpinsDistributionPercents.black + "%");
    $(".percent-odd").html(data.SpinsDistributionPercents.Odd + "%");
    $(".percent-even").html(data.SpinsDistributionPercents.Even + "%");
    $(".percent-till-eighteen").html(data.SpinsDistributionPercents.FirstHalf + "%");
    $(".percent-from-nineteen").html(data.SpinsDistributionPercents.SecondHalf + "%");
    $(".user-name").html(data.PlayerInfo.DisplayName);
    $(".user-spin-id").html(data.SpinNumber);
    
    let counter = 2;
    
    $(".minus").on("click",function(){
        
        if(counter > 0 && counter <= 5){
            counter--;
            console.log(counter + "/5 neighbour")
            $(".bet-neighbour").html(counter)    
    }
    })
    $(".plus").on("click",function(){
        
        if(counter >= 0 && counter < 5){
            counter++;
            console.log(counter + "/5 neighbour")
            $(".bet-neighbour").html(counter)
        }
    })
    
    for(let key in data.PlayerInfo.LatestSpins){
        let dada =`<li>
        <span  class="player-spin-id">${data.PlayerInfo.LatestSpins[key].SpinNumber}</span>
        <span class="play-time">
            ${data.PlayerInfo.LatestSpins[key].SpinDate}
        </span>
        <span class="bet-money" >${data.PlayerInfo.LatestSpins[key].BetAmount}</span>
        <span class="won-money" >${data.PlayerInfo.LatestSpins[key].WonAmount}</span>
        <img src="./Content/Images/eye.png" alt="" class="hidden-eye-logo" >
        </li>`;
        $(".user-bet-history").append(dada)
        
    }
    let LastHoundreedSpins = data.Last100SpinNumbers;
    for(let key in LastHoundreedSpins ){
        
        let li = `<li class="${LastHoundreedSpins[key].Color}" >${LastHoundreedSpins[key].Number}</li>`;
        $(".last-houndreed-numbers-container").append(li);
    }
    
    let  lastFourNumbers = `    
    <div class="last-numbers ${LastHoundreedSpins[0].Color}" >${LastHoundreedSpins[0].Number}</div>
    <div class="last-numbers ${LastHoundreedSpins[1].Color}">${LastHoundreedSpins[1].Number}</div>
    <div class="last-numbers ${LastHoundreedSpins[2].Color}">${LastHoundreedSpins[2].Number}</div>
    <div class="last-numbers ${LastHoundreedSpins[3].Color}" >${LastHoundreedSpins[3].Number}</div>
    `; 

    $(".last-numbers-history").prepend(lastFourNumbers);
    for(let key in data.SpinsDistributionPercents.ColdNumbers){

        if(data.SpinsDistributionPercents.ColdNumbers[key].Color === 1){
            data.SpinsDistributionPercents.ColdNumbers[key].Color = "Red";
        }
        if(data.SpinsDistributionPercents.ColdNumbers[key].Color === 0){
            data.SpinsDistributionPercents.ColdNumbers[key].Color = "Black";
        }
    }   
    for(let key in data.SpinsDistributionPercents.HotNumbers){
       
        if(data.SpinsDistributionPercents.HotNumbers[key].Color === 1){
            data.SpinsDistributionPercents.HotNumbers[key].Color = "Red";
        }
        if(data.SpinsDistributionPercents.HotNumbers[key].Color === 0){
            data.SpinsDistributionPercents.HotNumbers[key].Color = "Black";
        }
    }   
    for(let key in data.SpinsDistributionPercents.ColdNumbers){
        let coldNumbers = `<li class="${data.SpinsDistributionPercents.ColdNumbers[key].Color} " >${data.SpinsDistributionPercents.ColdNumbers[key].Number}</li>`;
        $(".ul-for-cold").append(coldNumbers);
    }
    for(let key in data.SpinsDistributionPercents.HotNumbers){
        let hotNumbers = `<li class="${data.SpinsDistributionPercents.HotNumbers[key].Color} " >${data.SpinsDistributionPercents.HotNumbers[key].Number}</li>`;
        $(".ul-for-hot").append(hotNumbers);
    }

    // $( ".bet-chip" ).each( function(){
    //     if($( this ).attr('data-name') == "basket 0/1/2/3") {
    //         let img = `<img src="/Content/Images/${bet}GEL.png" alt=""  class="coin" > `;
    //         $(this).append(img);
    //     }
    // });
    // console.log($(".bet-chip").attr('data-name'))

    for(index = 0;index < data.PlayerInfo.PlacedBets.length;index ++){

        let name = data.PlayerInfo.PlacedBets[index].BetName;
        let multiplier = data.PlayerInfo.PlacedBets[index].Multiplier;
        addBet(name,multiplier)
    }
});


  









    function closeTab(current) {
        $(".closeTab").each(function(){
            $(this).removeClass('active');
        });
        $(current).addClass('active');
    }
    
    $(window).resize(function () {
        scaleDiv();

    });
    
    scaleDiv();

function scaleDiv() {
    var width = $(window).width();
    var height = $(window).height();
    var o_width = 576;
    var o_height = 1024;
    var w_scale = 0;
    var h_scale = 0;
    var m_scale = 0;
    var r_deg = 0;
    w_scale = width / o_width;
    h_scale = height / o_height;
    m_scale = Math.min(w_scale, h_scale);
    game_scale = m_scale;
    var bottom = (height / game_scale - o_height);

    $('.content-div').css({'transform': 'scale(' + game_scale + ',' + game_scale + ') ', 'left': (r_deg == 90 ? '100%' : '0px'), 'top': '0px'});
    $('.main-div').css({ 'margin-left': '-290px', 'left': (width / 2) / game_scale });
}