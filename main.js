function initMap() {
    var positions = [
        {
            position: new google.maps.LatLng(40.742555, -74.006084)
        }, {
            position: new google.maps.LatLng(40.752555, -74.006084)
        }, {
            position: new google.maps.LatLng(40.740506, -74.006801)
        }


    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: positions[0].position
    });
    positions.forEach(function (place) {
        var marker = new google.maps.Marker({
            position: place.position,
            map: map
        })
    })
}


function myApp(){
    console.log('tests');
    $('.search').on('click',function () {
      renderSearch();
    });
    $('.login').on('click',function(){
        renderLogin();
        // renderHome();
    });
    $('.signin').on('click',function() {
        renderSignIn();
    })

    function renderLogin() {
        console.log('you are home');
        $('.container-fluid').replaceWith(' <div class="container logins"><div class="col-xs-4"></div><div class="col-xs-4"><img class="img-responsive profilepic" src="https://www.shareicon.net/download/2016/07/10/119669_people.ico" alt=""></div><!-- end profile picture column --><div class="col-xs-4"></div><!-- end empty column --></div><div class="row"><h1 class="centertext">Log in:</h1><input type="text" class="loginput" class="form-control" placeholder="Username"></div><!-- end username row --><div class="row"><input type="text" class="loginput" class="form-control" placeholder="Password"></div><!-- end password row --><div class="row"><div class="col-xs-4"></div><!-- end empty column --><div class="col-xs-4"><a href="homepage.html" class="signin"><button class="btn btn-default signin"> Sign in</button></a></div><!-- end button column --><div class="col-xs-4"></div><!-- end empty column --></div><!-- end log in button row --></div><!-- end container --><footer><div class="btn-group btngrplogin"><!-- <h1>We are here to make sure you and your kids stay as fit as possible!</h1> --><button  type="button" class="btn btn-default loginbtn">Host</button><button type="button" class="btn btn-default learn loginbtn">Learn more</button></div><!-- end button group --></footer><!-- end footer -->')
        $('#map').hide();
    }

    function renderSignIn() {
        console.log('you went home');
        $('.logins').replaceWith(
            `<div class="container" class='centertext'>< div class="jumbotron" class='jumbosignin' ><h1>Welcome Back!</h1><img src="https://cdn.dribbble.com/users/124355/screenshots/2199042/profile_1x.png" class='signinpic'></div><div class="container containersign" ><div class='divoffsignin'><button class="whitebtn"id="eventSub" class="btn btn-outline-success my-2 my-sm-0" type="submit">See Past Events</button><button class="whitebtn" id="eventSub" class="btn btn-outline-success my-2 my-sm-0" type="submit"> Edit Your Event </button></div><div class='divoffsignin'><button class="whitebtn" id="eventSub" class="btn btn-outline-success my-2 my-sm-0" type="submit">Create New Event</button><button class="whitebtn" id="eventSub" class="btn btn-outline-success my-2 my-sm-0" type="submit">Edit Your Account</button></div></div></div ><div class='imgdivsignin'><img class='calendersignin' src="https://maxcdn.icons8.com/Share/icon/Time_And_Date//calendar1600.png"></div><div class='centertext'><button class='whitebtn' id="eventSub" class="btn btn-outline-success my-2 my-sm-0" type="submit" class='centertext'>See Planned Events</button>
        </div>`);
    }

    function somethingElse(){
        console.log('hello world');
    }

    function renderSearch() {
        $('.container-fluid').replaceWith('<h3 class="centertext">Find Activities Near You</h3><div class="row">    <h2 class="centertext">Search Key Words</h2><div id="custom-search-input"><div class="inputsearch input-group col-md-12"><input type="text" class="searchform search-query form-control" placeholder="Key Words: "Chelsea Market","Kids"" /><span class="input-group-btn"><button class="searchcenterbtn btn btn-default" type="submit">Search</button><span class=" glyphicon glyphicon-search"></span></span></div></div></div>');
        $('#map').css('height', '75vh');
        $('#map').css('margin-left', '5vw');
        $('.input-group').css('padding', '30px');
    }

    
};

$(myApp);

