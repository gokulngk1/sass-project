let name = "Gokul";
const age = 22;
var city = "Chennai";


if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


for (let i = 0; i < 5; i++) {
  console.log(i);
}

let n = 1;
while (n <= 3) {
  console.log("Hi");
  n++;
}



function greet(name) {
  return "Hello " + name;
}

const add = (a, b) => a + b;



document.getElementById("title");
document.querySelector(".box");
document.querySelectorAll("p");


document.getElementById("title").textContent = "Welcome Gokul!";


document.querySelector(".box").style.background = "red";

document.querySelector("img").setAttribute("src", "photo.png");


document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});



