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