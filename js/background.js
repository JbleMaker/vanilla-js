const imges = ["0.jpg", "1.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomImg = imges[Math.floor(Math.random() * imges.length)];

const bgImg = "url('img/" + randomImg + "')";

document.body.style.backgroundImage = bgImg;

// const bgImg = document.createElement("img");

// bgImg.src = `img/${randomImg}`;

// document.body.appendChild(bgImg);
