export function selectNamePage() {

  const section = document.createElement("section")
  section.className = "pre-game-page";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome, please enter your name:"
  section.appendChild(h2);

  const input = document.createElement("input");
  input.type = "text";
  section.appendChild(input);

  const button = document.createElement("button");
  button.textContent = "Submit";
  section.appendChild(button);

  return {section, h2, button, input};
}
