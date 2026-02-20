const board = document.querySelector(".board");
const startbtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startgamemodal = document.querySelector(".start-game");
const gameovermodal = document.querySelector(".game-over");
const restartbtn = document.querySelector(".btn-restart");
const highscoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");

let score = 0;
let highscore = localStorage.getItem("highscore") || 0;
highscoreElement.textContent = highscore;
let time = `00-00`;
let timeintervalid = null;
const blockwidth = 80;
const blockheight = 80;

const cols = Math.floor(board.clientWidth / blockwidth);
const rows = Math.floor(board.clientHeight / blockheight);

console.log(cols * rows);

const blocks = [];
let snake = [
  {
    x: 1,
    y: 3,
  },
];

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

let direction = "right";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.textContent = `${row},${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

startbtn.addEventListener("click", function () {
  modal.style.display = "none";

  intervalid = setInterval(() => {
    render();
  }, 300);

  timeintervalid = setInterval(()=>{
    let [min,sec] = time.split("-").map(Number)

    if(min == 59){

      min+=1;
      sec = 0;


    }
    else{

        sec+=1;
    }

    time = `${min}-${sec}`
    timeElement.textContent = time;

  },1000)

});

function render() {
  let head = null;

  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  //game over logic
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalid);

    modal.style.display = "flex";
    startgamemodal.style.display = "none";
    gameovermodal.style.display = "flex";

    score = 0;
    scoreElement.textContent = score;

    highscoreElement.textContent = highscore;

   

    return;
  }
 

  //food consume logic
  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    blocks[`${food.x}-${food.y}`].classList.add("food");

    snake.unshift(head);

    score += 10;
    scoreElement.textContent = score;

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore.toString());
    }
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  }
});

function resartGame() {}

restartbtn.addEventListener("click", function () {
  blocks[`${food.x}-${food.y}`].classList.remove("food");

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  modal.style.display = "none";

  snake = [
    {
      x: 1,
      y: 3,
    },
  ];

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  direction = "down";

  highscoreElement.textContent = highscore;
  score = 0;
  time = `00-00`;

  intervalid = setInterval(() => {
    render();
  }, 300);

 

});
