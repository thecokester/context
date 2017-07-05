

var friends = ["Lance, Adrian, Dylan, JB, Chance"]
var weapons = ["Ak74u", "Morning Star", "Lance", "Pike", "Battering Ram", "Korean Fan", "Sabre", "Atom Bomb", "Tomahawk", "Sheperds Axe", "Boomerang", "Trident", "Scythe", "Javelin", "Repeating Crossbow","Donald Trump","Mike Pence","Hilary Clinton","Fireworks","Flamethrower" ]
var locations = ["Machu Picchu","Candy Mountain","Nana Funks","Innovation Depot","Great Pyramid of Giza", "Taj Mahal","The Sydney Opera House","Saint Basils Cathedral","Monolithic Church of Ethiopia","Ensley Seafood"] 
 
  $(document).ready(function() {
    for(var i = 1; i <= 100; i++)   {                    
      
    $('body').append($("<h3>clue " +[i] +"</h3>"));
    // console.log(clue)
}    
});
 
 $(this).bind('click', function(){
        clue()
})

$("<h3></h3>").click( function() { alert('clicked');
console.log(fuck)
 });

 function clue(){
    var randFriend = friends[Math.floor(Math.random() * friends.length)];
    var randLocations = locations[Math.floor(Math.random() * locations.length)];
    var randWeapons = weapons[Math.floor(Math.random() * weapons.length)];
    alert(randFriend + ' did it in ' + randLocations + ' with a ' + randWeapons)
}
