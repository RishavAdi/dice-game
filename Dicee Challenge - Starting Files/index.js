//var adi;
//var mis;
//function randomNumber3(){
var randomNumber1=Math.floor(Math.random()*5)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);
//alert(adi);
//return randomNumber1;
//}


//function randomNumber4(){
var randomNumber2=Math.floor(Math.random()*5)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
//return randomNumber2;
//}
//alert(adi);
//document.querySelector("h1").innerHTML="Refresh Me";
//var cnt=1;
//for(var i=0;i<5;i++){
  //alert(randomNumber3());
  //alert(randomNumber4());
//if(randomNumber3()>randomNumber4()){
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="player 1 won";
}
else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="player 2 won";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}

//cnt++;
//}
//document.querySelector("h1").innerHTML="Refresh Me";
