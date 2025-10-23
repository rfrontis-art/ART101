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

