var Player = function () {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100;

    this.ReArm = function (ammo) {
       this.ammoCount += ammo; 
    }
}

var Player1 = new Player();
var Player2 = new Player();

function updatePlayer(currentPlayer, healthUpdate, ammo, playerPosition) {
currentPlayer.name = prompt("Enter a name for the current player.");
alert("Currant Player's name is " + currentPlayer.name);
currentPlayer.health = healthUpdate;
currentPlayer.healing = "Weak";
currentPlayer.ReArm(ammo);
alert(currentPlayer.name + " has " + currentPlayer.ammoCount + " in their arsenal.");
}

updatePlayer(Player1,20, 1, "Player1");
updatePlayer(Player2, 60, 1000, "Player2");