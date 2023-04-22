// show character by js
let products = {
    data: [
        {
            h1 : "List of Characters"
        },
        {
            name: "Eren Jeager",
            image: "images-character/ErenJeager.png"
        },
        {
            name: "Mikasa Ackerman",
            image: "images-character/MikasaAckermann.png"
        },
        {
            name: "Armin Arlert",
            image: "images-character/ArminArlert.png"
        },
        {
            name: "Connie Springer",
            image: "images-character/ConnieSpringer.png"
        },
        {
            name: "Levi Ackermann",
            image: "images-character/LeviAckermann.png"
        },
        {
            name: "Jean Kirschtein",
            image: "images-character/JeanKirschtein.png"
        },
        {
            name: "Hange Zoe",
            image: "images-character/HangeZoe.png"
        },
        {
            name: "Sasha Braus",
            image: "images-character/SashaBraus"
        },
        {
            name: "Zeke Jeager",
            image: "images-character/ZekeJeager.png"
        },
        {
            name: "Erwin Smith",
            image: "images-character/ErwinSmith.png"
        },
        {
            name: "Kenny Ackermann",
            image: "images-character/KennyAckermann.png"
        },
        {
            name: "Hannes",
            image: "images-character/Hannes.png"
        },
        {
            name: "Keith Sadies",
            image: "images-character/KeithSadies.png"
        },
        {
            name: "Reiner Braun",
            image: "images-character/ReinerBraun.png"
        },
        {
            name: "Annie Leonhart",
            image: "images-character/AnnieLeonhart.png"
        },
        {
            name: "Pieck Finger",
            image: "images-character/PieckFinger.png"
        },
        {
            name: "Falco Grice",
            image: "images-character/FalcoGrice.png"
        },
        {
            name: "Gabi Braun",
            image: "images-character/GabiBraun.png"
        },
        {
            name: "Porco Galliard",
            image: "images-character/PorcoGalliard.png"
        },
        {
            name: "Bertholdt Hoover",
            image: "images-character/BertholdtHoover.png"
        },
        {
            name: "Marcel Galliard",
            image: "images-character/MarcelGalliard.png"
        },
        {
            name: "Lara Tybur",
            image: "images-character/LaraTybur.png"
        },
        {
            name: "Willy Tybur",
            image: "images-character/Willy Tybur.png"
        },
        {
            name: "Yelena",
            image: "images-character/Yelena.png"
        },
        {
            name: "Onyankopon",
            image: "images-character/Onyankopon.png"
        },
    ]
}

for (let products of products.data) {

    let box = document.createElement("div");
    box.classList.add("box");

    let img = document.createElement("div");
    img.classList.add("image");
    img.setAttribute("src", product.image);
    card.appendChild(img);

    let icons = document.createElement("div");
    icons.classList.add("icons");

    let a = document.createElement("a")

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `read ("${product.name}")`);
    btn.innerText = " Read ";
    container.appendChild(btn);


    let container = document.createElement("div");
    container.classList.add("image");


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}