let btn = document.getElementById("btn");
let text = document.getElementById("text");
let palette = document.getElementById("palette");

function generateRandomColor() {
  const randomNum = Math.floor(Math.random() * 16777215);

  let colorCode = randomNum.toString(16);

  while (colorCode.length < 6) {
    colorCode = "0" + colorCode;
  }

  return "#" + colorCode;
}

function moreColor() {
  palette.innerHTML = "";
  for (i = 0; i <= 5; i++) {
    const myDiv = document.createElement("div");
    myDiv.style.width = "200px";
    myDiv.style.height = "150px";
    myDiv.style.backgroundColor = generateRandomColor();
    palette.appendChild(myDiv);
  }
}

btn.addEventListener("click", moreColor);
