let username;

document.getElementById("mySubmmit").onclick = () => {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
};
