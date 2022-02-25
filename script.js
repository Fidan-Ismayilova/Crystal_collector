function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var blue;
  var green;
  var red;
  var yellow;
  
  var targetScore;
  
  var yourNumber;
  var winCount = 0;
  var lostCount = 0;
  
  function loadGame() {
  
    blue = getrandom(1, 13);
    green = getrandom(1, 13);
    red = getrandom(1, 13);
    yellow = getrandom(1, 13);
    $("#blue").text(blue);
    $("#green").text(green);
    $("#red").text(red);
    $("#yellow").text(yellow); 
  
    
  
    targetScore = getrandom(20, 133);
    yourNumber = 0;
    $(".number").text(targetScore);
    $(".score").text(yourNumber);
  }
  loadGame();
  
  function resultChecker(){
    var winner =$(".winner");
  if(yourNumber===targetScore){
    winner.text("Your Win🎉.");
    winner.css({backgroundColor:"green" , border:"0.2rem solid black"})
  
    setTimeout(function(){
      winner.text("");
      winner.css({backgroundColor:"" , border:""})
    }, 1500);
    winCount++;
    $(".wins").text(winCount);
    loadGame();
  }
  else if(yourNumber>targetScore){
    winner.text("Your Lose💣.");
    winner.css({backgroundColor:"red" , border:"0.2rem solid black"})
    setTimeout(function(){
      winner.text("");
      winner.css({backgroundColor:"" , border:""})
    }, 1500);
    lostCount++;
    $(".losses").text(lostCount);
    loadGame();
  }
  }
  
  function sum(crystalWeghit) {
  
   yourNumber+=crystalWeghit;
  
   resultChecker();
  
   $(".score").text(yourNumber);
  }
  
  $("#blue").click(function(){
    sum(blue);
  });
  $("#green").click(function(){
    sum(green);
  });
  
  $("#red").click(function(){
    sum(red);
  });
  $("#yellow").click(function(){
    sum(yellow);
  });
  