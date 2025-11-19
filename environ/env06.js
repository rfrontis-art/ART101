let interesting = "<em><p>Stars twinkle in the sky because their light hits our eye</p></3m>"

$("#output").html(interesting);


let artist = ["Daft Punk", "Magdelena Bay", "Gorillaz", "Radiohead", "The Strokes", "Depeche Mode"];
artists = "<p>My stars are: " + artist[0] + ", " + artist[1] + ", " + artist[2] + ", " + artist[3] + ", " + artist[4] + ", and " + artist[5] + ".</p>";
$("#nightSky").html(artists)
let me = {
    name: "Rhys",
    pixelated: true,
    taking: "photos",
    light: "shining",
};

let toyama ={
    place: "Toyama",
    fireworks:"sparkling",
    memories: "made",
    having: "fun",
};

combination = "<p>I am: " + me.name + ", " + "I like taking " + me.taking + ", " + "and just like a star I am " + me.light + ".</p>";

combination = combination + "<p>This is in: " + toyama.place + ", " + "our fireworks are " + toyama.fireworks + ", " + "memories were " + toyama.memories + ", and I had " + toyama.having + ".</p>";
$("#home").html(combination);

$("#mb").css("cursor", "pointer");
let inverted = false
$("#mb").click(function(){
    if (inverted === false){
        $("html").css("filter", "invert(1)");
        inverted = true;
    } else {
        $("html").css("filter", "invert(0)");
        inverted = false;
    }
});
$("#mb").hover(function(){
    $(this).css("filter", "brightness(1.3)");
}, function(){
$(this).css("filter", "brightness(1)");
});

$("#depeche").css("cursor", "pointer");
let scrambled = false 
$("#depeche").click(function(){
    let randomSpacing = Math.floor(Math.random() * 101);
    if (scrambled === false){
        $("p").css("letter-spacing", randomSpacing + "px");
        scrambled = true
    } else {
        $("p").css("letter-spacing", "normal");
        $("#nightSky p, #home p").css("letter-spacing", "167px");
        scrambled = false
    }
});
$("#depeche").hover(function(){
    $(this).css("filter", "brightness(1.3)");
}, function(){
$(this).css("filter", "brightness(1)");
});

$("#okradio").css("cursor", "pointer");
let gray = false
$("#okradio").click(function(){
 if (gray === false){
    $("html").css("filter", "grayscale(100%)");
    gray = true;
 } else {
    $("html").css("filter", "grayscale(0%)");
    gray = false;
 }
});
$("#okradio").hover(function(){
    $(this).css("filter", "brightness(1.3)");
}, function(){
$(this).css("filter", "brightness(1)");
});

$("#daft").css("cursor", "pointer");
const style = document.createElement("style");
style.innerHTML = `
@keyframes driftJS {
  0%   { transform: translateX(0); }
  100% { transform: translateX(10px); }
}
`;
document.head.appendChild(style);
let drifting = false
$("#daft").click(function() {

  const all = document.querySelectorAll("*"); 

  if (!drifting) {
    let delay = 0;

    all.forEach(el => {
      el.style.animation = `driftJS 3s ${delay}s ease-in-out infinite alternate`;
      delay += 0.1; 
    });

    drifting = true;} else {

    all.forEach(el => {
      el.style.animation = ""; 
    });

    drifting = false;
  }
});
$("#daft").hover(function(){
    $(this).css("filter", "brightness(1.3)");
}, function(){
$(this).css("filter", "brightness(1)");
});

$(document).on("keydown", function(e) {
    if (e.key === "p") {
        $("#plastic").css("filter", "brightness(1.3)");
    }
});
$(document).on("keyup", function(e) {
    if (e.key === "p") {
        $("#plastic").css("filter", "brightness(1)");
    }
});
let filterOn = false
$(document).on("keydown", function (e) {
    if(e.shiftKey && e.key.toLowerCase() === "p"){
        filterOn = !filterOn;
        if(filterOn){
            $("html").css("filter", "contrast(200%) saturate(150%) blur(1px) brightness(80%) hue-rotate(-20deg)");
        }
        else{
            $("html").css("filter", "none");
        }
    }
});
