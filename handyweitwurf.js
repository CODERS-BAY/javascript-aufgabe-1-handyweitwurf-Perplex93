var kraft;
var v0Eingabe;
var v0 = parseInt(v0Eingabe);
var g;
var monster = document.getElementById("monster");
var derWinkelEingabe;
var derWinkel = parseInt(derWinkelEingabe) * (Math.PI / 180);
var wurfweite = ((v0 * v0) * Math.sin(2 * derWinkel)) / g;
var entfernungZumMonster = Math.random() * 90 + 10;
var entfernungZumMonster = Math.round(entfernungZumMonster);
var pruefe = 0;
var treffer;
var background = document.getElementById('background');
var y;
x = 20;
var x;
y = 0;
var schritt = 3;
var k;
k = 0;
var versuche = 3;
var choice;
var moveX = Math.round(Math.random()*1000);
var moveY = Math.round(Math.random() * 40);


    document.body.style.cursor = "url(/img/handy.png)";


    // Funktioniert Anfang
    function fallbeschleunigung(choice) {
        switch(choice) {
            case 'erde':
                document.getElementById('background').style.backgroundImage = "url('/img/background-erde.webp')";
                g = 9.81;
                break;
            case 'mond':
                document.getElementById('background').style.backgroundImage = "url('/img/background-mond.jpg')";
                g = 1.62;
                break;
            case 'mars':
                document.getElementById('background').style.backgroundImage = "url('/img/background-mars.jpg')";
                g = 3.69;
                break;
            case 'jupiter':
                document.getElementById('background').style.backgroundImage = "url('/img/background-jupiter.jpg')";
                g = 24.79;
                break;
        }
    }

    
    function gamestart() {
        pruefe = pruefe + 1;
        movemonster();
        document.punkte.punkt.value = "Punkte: " + k;
        document.versuche.aktuell.value = 5;
        reset.style.visibility = "visible";
    }

    function gamereset() {
        location.reload(); 
    }


    function movemonster() {
        monster.style.visibility = "visible";
        monster.style.transform ="translate(" + moveX + "px, " + moveY + "px)";
        v0Eingabe=prompt("Geben Sie an mit wie Kraft Sie werfen wollen von 0 - 100");
        derWinkelEingabe=prompt("In welchem Winkel von 1 bis 90 wollen Sie werfen");
        aktiv1 = window.setTimeout("movemonster()");
            clearTimeout(aktiv1);
        }
    // Funktioniert ende


    if (pruefe == 1) {
        entfernungZumMonster;
    }

    if (wurfweite == entfernungZumMonster) {
        treffer = treffer + 1;
        alert("Du hast getroffen");
    }

    function gutpunkt() {
        if (versuche > 0) {
            k = k + 8;
            document.punkte.punkt.value = "Punkte: " + k;
            document.versuche.aktuell.value = 5;
        }
    }

    function schuss() {
        versuche = versuche - 1;
        if (versuche >= 0) {
            k = k - 3;
            document.form1.punkt.value = "Punkte: " + k;
        }
        if (versuche <= 0)
            versuche = 0;
    }


// });