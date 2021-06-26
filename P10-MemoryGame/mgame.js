// Reference: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
// Reference: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c

let images = [], flipped_card = null, animation_allowed = true, moves = 0, cards_won = 0;
for(let i = 1; i <= 18; ++i) {
    images.push(i);
    images.push(i);
}
images = images.sort(()=>Math.random()-0.5)

const playSound = (name) => {
    track = new Audio("./sounds/" + name + ".wav");
    track.play();
}

window.addEventListener("load", () => {
    const container = document.getElementById("container");
    const moves_disp = document.getElementById("movesdisp");
    const cards_won_disp = document.getElementById("cardswon");
    const updateMoves = (moves) => {
        moves_disp.innerHTML = "Moves: " + moves;
    }
    const updateCardsWon = (cards_won) => {
        cards_won_disp.innerHTML = "Cards Won: " + cards_won;
    }
    const celebrate = () => {
        playSound("celebrate");
        const allcards = document.getElementsByClassName("card");
        for(card of allcards) {
            card.style.display = "none";
        }
        const notice = document.createElement("div");
        notice.className = "h1div";
        notice.style.color = "green";
        notice.innerHTML = "Congratulations, you have won the game! Reload to restart the game";

        container.appendChild(notice);
    }

    for(let i = 0; i < 36; ++i) {
        //Create img element and add path of image
        let image = document.createElement("img");
        image.src = "./images/" + images[i] + ".png";

        console.log("here")

        //Create div with class = card and append image to it
        let card = document.createElement("div");
        card.className = "card";
        card.image_id = images[i];
        card.flipped = false;

        card.addEventListener("click", () => {
            if(card.flipped === false && animation_allowed === true) {
                updateMoves(++moves);
                animation_allowed = false;
                playSound("click");
                card.classList.toggle("flipcard");
                card.flipped = true;

                if(flipped_card === null) {
                    flipped_card = card;
                    animation_allowed = true;
                } else {
                    setTimeout(() => {
                        if(flipped_card.image_id === card.image_id) {
                            flipped_card.style.visibility = "hidden", flipped_card = null;
                            card.style.visibility = "hidden";
                            cards_won += 2;
                            updateCardsWon(cards_won);
                            playSound("correct");

                            if(cards_won === 36) {
                                celebrate();
                            }

                        } else {
                            card.classList.toggle("flipcard");
                            card.flipped = false;
                            flipped_card.classList.toggle("flipcard");
                            flipped_card.flipped = false;
                            flipped_card = null;
                        }
                        animation_allowed = true;
                    }, 1000);
                }
            }
        });
        card.appendChild(image);

        //Append card to container
        container.appendChild(card);
    }
})