var randomNumber1=Math.random();
var rocky =randomNumber1*6;
var res =Math.floor(rocky)+1;
console.log(res);

var randomImages="dice"+res+".png";
var diceImages="images/" +randomImages;
 var images1=document.querySelectorAll("img")[0];
 images1.setAttribute("src",diceImages);
 
 var randomNumbe2=Math.floor(Math.random()*6);
var setty=randomNumbe2+1;
console.log(setty);



 var randomImages1="dice"+setty+".png";
 var diceImages1="images/" +randomImages1;
  var images1=document.querySelectorAll("img")[1];
  images1.setAttribute("src",diceImages1);

 if(res>setty){
     document.querySelector("h1").innerText=" 🚩Player-1 wins";
 }
 else if(setty>res){
     document.querySelector("h1").innerText="Player-2 wins 🚩";
 }
 else {
    document.querySelector("h1").innerText="Draw";
 }