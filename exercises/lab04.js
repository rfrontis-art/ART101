// declaring an array with name myCommutes
let myCommutes = ["walking", "UCSC taps bus", "running", "rental bike", "some random car", "friends"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "walking",
    playingMusic: true,
    whatHurts: "calves",
    seeing: "nature",
};
let megaSentence;

megaSentence = "<p>My top two commutes from the array are: " + myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", what hurts: " + myFavouriteCommute.whatHurts + ", and what I see: " + myFavouriteCommute.seeing + "</p>";

$("#output").html(megaSentence);