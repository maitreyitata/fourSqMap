$(document).ready( function() {
	$.ajax({
		url: "https://api.foursquare.com/v2/venues/search?client_id=QU3DJ5L0U2IOMMF1CBDMY1KOHB2YONPBAQC5PHPDCJTOK4IA%20&client_secret=ULTCFHGL4OF3Q53S42ZXBNTR31WMZ0VK5OELBQAPBEA5ZIA3%20&ll=40.7,-74%20&query=sushi%20&v=20170618%20&m=foursquare", 
		success: function(res){
			var venues = res.response.venues;
			for (var j=0; j<venues.length; j++){
				//console.log(venues[j].id);
				var venue_id = venues[j].id;
				var venue_name = venues[j].name;
				getPhotos(venue_name,venue_id);
				
			}	
		}
				 	
	});

});
		
function getPhotos(name,id){
	$.ajax({
					url: "https://api.foursquare.com/v2/venues/" + id + "/photos?client_id=QU3DJ5L0U2IOMMF1CBDMY1KOHB2YONPBAQC5PHPDCJTOK4IA%20&client_secret=ULTCFHGL4OF3Q53S42ZXBNTR31WMZ0VK5OELBQAPBEA5ZIA3%20&ll=40.7,-74%20&query=https://ss3.4sqi.net//img//categories_v2//food//sushi_%20&v=20170618%20&m=foursquare" ,
					success: function(res){
						console.log(res);
						var photos = res.response.photos;
						if(photos.length !=0){
							var items = photos.items;
							for(var i=0;i<items.length;i++){
								
								if(items[i].prefix){
									var photo_url = items[0].prefix +'width100' +items[0].suffix;
									$("#list").append('<li><p>'+name+'</p><img src="'+photo_url+'"></li>')
									break;
								}
							}	
						}
					}
				});
}			
	


function tableCreate(venues){
	for(var i=0; i< venues.length; i++){
		console.log(venues[i].name);
		var tableEl = document.getElementById("myTable");
		//$('#myTable').append('<tr><td>'+venues[i].name+ '</td> <td>'+ venues[i].location.address +  venues[i].location.address +'</td></tr>')	
		tableEl.innerHTML += '<tr><td>'+venues[i].name+ '</td> <td>'+ venues[i].location.address +  venues[i].location.city +'</td></tr>' ;
 	}
}

		
	
