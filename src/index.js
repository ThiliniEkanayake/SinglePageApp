import "./styles/main.css";

function component() {
  const element = document.createElement("div");

  alert("Connected!");

  return element;
}

document.body.appendChild(component());
