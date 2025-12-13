const character = {
  name: "Agscorn: Knight of the Seven Spheres of Ag",
  class: "Fiery Knight",
  level: 5,
  health: 100,
  image: "agscorn.webp",

  attacked: function () {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died.`);
    }
    buildCharacter();
  },

  levelUp: function () {
    this.level += 1;
    buildCharacter();
  }
};

function buildCharacter() {
  document.querySelector("#charName").textContent = character.name;
  document.querySelector("#charClass").textContent = `Class: ${character.class}`;
  document.querySelector("#charLevel").textContent = `Level: ${character.level}`;
  document.querySelector("#charHealth").textContent = `Health: ${character.health}`;
  document.querySelector("#charImage").src = character.image;
}

document.querySelector("#attackBtn").addEventListener("click", () => {
  character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", () => {
  character.levelUp();
});

buildCharacter();