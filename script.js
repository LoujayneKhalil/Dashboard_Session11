var followersArr;

$("#submit").click(function(e){
    e.preventDefault();
    var cardTitle = $("#title").val();   
    var cardDesc = $("#card-desc").val();   
    var cardNum = $("#card-num").val();   
    var cardPlatform = $("#platform").val(); 
    followersArr = 
        {
            'title':cardTitle,
            'card-desc':cardDesc,
            'card-num':cardNum,
            'platform':cardPlatform,

        }
    

    if(localStorage.getItem('data') == null){
        localStorage.setItem('data','[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(followersArr)

    localStorage.setItem('data', JSON.stringify(old_data));

})



// var cardTemplate = `
// <div class="col-md-3 col-12 text-center pb-5">
// <div class="card instagram d-flex flex-column gap-4">
//     <div class="icon-title d-flex justify-content-center align-items-center gap-1">
//         <i class="fa-brands fa-square-facebook fa-xl"></i>
//         <span></span>
//     </div>
//     <div class="followers-num d-flex flex-column">
//         <span style="font-size:56px; font-weight: 700;">1782</span>
//         <span class="fol-or-sub" style="letter-spacing: 4px;"></span>
//     </div>
//     <span style="color: #2a8e7a; font-size: 18px; font-weight: 500;">▴<span class="inc-followers"></span><span> Today</span></span>
// </div>
// </div>
// `

var parent = document.getElementsByClassName("parent-row");
window.onload = function() {
    if (parent.length > 0) {    

        let data = JSON.parse(localStorage.getItem("data"));

        let totalFollowers = 0;

        getArr.forEach(item => {
            totalFollowers =  parseInt(item["card-num"])+ totalFollowers;
        })
        
        $("#total-followers").html(totalFollowers)
        
        for (var i = 0; i < data.length; i++) {
            var platformClass;
            console.log(data[i]['platform']);
            if(data[i]["platform"] == 'facebook'){
                platformClass = "fa-square-facebook"
            }
            else if(data[i]["platform"] == 'instagram'){
                platformClass = "fa-instagram"

            }
            else if(data[i]["platform"] == 'twitter'){
                platformClass = "fa-twitter"

            }
            else if(data[i]["platform"] == 'youtube'){
                platformClass = "fa-youtube"

            }
            //  var randNum = $(".inc-followers").html(Math.floor(Math.random()*1000));

            cardTemplate = `
            <div class="col-md-3 col-12 text-center pb-5">
            <div class="card d-flex flex-column gap-4 ${data[i]["platform"]}">
                <div class="icon-title d-flex justify-content-center align-items-center gap-1">
                    <i class="fa-brands ${platformClass} fa-xl" aria-hidden="true"></i>
                    <span>${data[i]['title']}</span>
                </div>
                <div class="followers-num d-flex flex-column">
                    <span style="font-size:56px; font-weight: 700;">${data[i]['card-num']}</span>
                    <span class="fol-or-sub" style="letter-spacing: 4px;  text-transform: uppercase;">${data[i]['card-desc']}</span>
                </div>
                <span style="color: #2a8e7a; font-size: 18px; font-weight: 500;">▴ 435 Today</span>
            </div>
            </div>
`


            parent[0].innerHTML += cardTemplate;
        }
    }
}

var getArr = JSON.parse(localStorage.getItem('data'));

function toggleFunction(){
    if ($("body").css('background-color') != 'rgb(255, 255, 255)') {
        $("body").css({'background-color':'white'});
        $(".card").css({'background-color':'#f0f3fa','color':'black'});
        $(".header").css({'color':'black'});
        $("#darkMode").css({'color':'grey'});
        $(".overview-section h2").css({'color':'grey'})
        $(".card").hover(function(){
            $(this).css("background-color", "#e1e3f0");
            }, function(){
            $(this).css("background-color", "#f0f3fa");
          });

    } else {
        $("body").css({'background-color':'#1d2029'});
        $(".card").css({'background-color':'#252b43','color':'white'});
        $(".header").css({'color':'white'});
        $("#darkMode").css({'color':'white'});
        $(".overview-section h2").css({'color':'white'})
        $(".card").hover(function(){
            $(this).css("background-color", "#333a56");
            }, function(){
            $(this).css("background-color", "#252b43");
          });


    }
}
// clear storage
// localStorage.clear('data')