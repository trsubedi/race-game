// OOP Racing Game example boilerplate code
$(document).ready(function(){

  var game = new Game();
  game.init();

});


function Game() {

  //Create a new instance of player 1
  this.player1 = new Player("joe");

  //Do the same for a player 2
  this.player2 = new Player("john");

  //Create the track
  // this.track = new Track();
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  $(document).keydown(function(event) { 
    console.log("hhlsdhiwe");
    // if keydown == a
    if(event.which ===65){
      var left = $("#player1").css("left");
      $("#player1").css("left", (parseInt(left) + 5).toString() + "px" ) ;
    }
    // else if keydown == L
    else if(event.which ===76){
      var left = $("#player2").css("left");
      // console.log(parseInt(left).toString());  // "10px"
      $("#player2").css("left", (parseInt(left) + 5).toString() + "px" ) ;  // 2 + 5  px

       }
  });

}

// A starter Player constructor.
function Player(name) {
  this.name = name;
  this.position = 0;
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  var left = $(this).css("left");
  // console.log(parseInt(left).toString());  // "10px"
  $(this).css("left", (parseInt(left) + 5).toString() + "px" ) ;  // 2 + 5  px


}



// A starter Track constructor.
// function Track() {
//   this.start=
//   this.finish=
//   //Tracks the cells of the board instance
//   //this.$cells = ...

//   //Store any other properties that board may have below, such as a reset option
// }
