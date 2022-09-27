/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];

  // // String
  // "Michel Patoulachi"

  // // Number
  // 1
  // 2
  // 3.14

  // // Boolean
  // true
  // false

  // // Objects / Hash / Dict
  // const student = { firstName: "Hugo", lastName: "Daniel" }
  // student.firstName // => "Hugo"

  // // Array
  // const student = ["Hugo", "Daniel", 15, true]
  //               //   0        1       2    3
  // student[0] // => "Hugo"


  // const h1 = document.querySelector("h1")
  // const name = document.querySelectorAll(".name")
  // const player1 = document.querySelector("#player-1")


  const player1 = document.getElementById('player-1');

  /* 1a. */
  const player2 = document.getElementById("player-2");

  /* 1b. */
  const resultArea = document.getElementById("result-area");

  /* 1c. */
  const playBtn = document.getElementById("play-btn");

  /* This will help check your results */
  console.log(player1, player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {

      /* 3a. */ return "It's a tie !";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {

      /* 3b. */ return "Player 1 wins !";

    } else {

      /* 3c. */ return "Player 2 wins !";

    }
  };


  // Test our decideWinner function
  // const result = decideWinner('✌️', '✊')
  // console.log(result)
  // => It's a tie


  const play = () => {
    let choice1 = generateChoice();
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);
  };


  // play();

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */

  // Element : playBtn
  // Event type : click
  // Function (callback) : play

  playBtn.addEventListener("click", play)

/* ------------------------------- */


// Element : form id username
// Event type : submit
// Callback : fetchGithubData

const fetchGithubData = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then((data) => {
      const logo = document.querySelector(".logo")
      logo.src = data.avatar_url

      const name = document.getElementById("name")
      name.innerText = data.name
    })
}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const input = document.querySelector("input")
  fetchGithubData(input.value)
})

// GET
// https://api.github.com/users/hugsdaniel
