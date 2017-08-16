var database = firebase.database().ref();

var positions = [
    {
        lat: 40.742555,
        lng: -74.006084
    }, {
        lat: 40.752555,
        lng: -74.006084
    }, {
        lat: 40.740506,
        lng: -74.006801
    }
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(positions[0].lat, positions[0].lng)
    });
    database.on('child_added', function (rowData) {
        var place = rowData.val();
        var infowindow = new google.maps.InfoWindow({
            content: "<div id='content'>"+"<p id='name'>" + place.Name + "</p>" + "<p id='type'>"+ place.Type + "</p>" + "<p>"+place.Month +" "+ place.Day + "," + place.Year + "</p>"+"</div>"
        });
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(place.lat, place.lng),
            map: map,
            title: place.Name
        })
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    })
    
}
function newMarker(name,type,address,month,day,year) {
    var newMark = {
        Name: name,
        Type: type,
        Address: address,
        Month: month,
        Day: day,
        Year: year
    };
    var newAdd = newMark.Address.split(' ').join('+');
    getLatLng(newMark);
    // console.log(newMark)
    // console.log(positions);
}
function getLatLng(object){
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + object.Address +"&key=AIzaSyCSG969h1xImiBFqAjvFthdd7-E79sdFjc",
        success: function(data){
            // console.log(data.results[0].geometry.location)
            var temp = data.results[0].geometry.location;
            object.lat = temp.lat;
            object.lng = temp.lng;
            database.push(object)
            console.log(positions)
            // google.maps.event.trigger(map, 'resize');
        }
    })
}

$('document').ready(function(){
    $('.eventsubmit').click(function () {
        console.log('event')
        var name = $('.nameinput').val();
        var type = $('.typeinput').val();
        var address = $('.addressinput').val();
        var month = $('.monthinput').val();
        var day = $('.dayinput').val();
        var year = $('.yearinput').val();
        newMarker(name, type, address, month, day, year)
    
    })
})
