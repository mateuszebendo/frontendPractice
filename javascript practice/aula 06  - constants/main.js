
const PI = 3.14159;
let radius;
let circumference; 

circumference = 2 * PI * radius; 

console.log(circumference);

document.getElementById("myButtom").onclick = () => {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius; 
    document.getElementById("resultado").textContent = `Resultado: ${circumference}`;
}