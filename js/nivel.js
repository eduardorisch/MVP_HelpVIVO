let level = 1;   
let xp = 0;         
let xpNeeded = 100;
const maxLvl = 10;

const titles = [
  "Jovem Gafanhoto",        
  "Aprendiz",       
  "Veterano",         
  "Elite",      
  "Sabio",         
  "Mestre",           
  "Lenda",            
  "Rei",         
  "No Pico da Montanha",          
  "Imperador Supremo"           
];

const achievements = [
  "Primeiros Passos!!!",
  "Prodigio",    
  "Sabe-Tudo",         
  "Recentemente Coroado!!!",   
  "Longa caminhada"
];

function checkAchievement() {
  if (level % 2 === 0) {
    const index = (level / 2) - 1;
    const achievementList = document.getElementById("achievements");
    const li = document.createElement("li");
    li.textContent = achievements[index];
    li.classList.add("list-group-item", "list-group-item-success");
    achievementList.appendChild(li);
  }
}

function updateUI() {
    const progressBar = document.getElementById("progress-bar");
    const levelText = document.getElementById("level-text");
    const xpText = document.getElementById("xp-text");

    let percent = (xp / xpNeeded) * 100;
    progressBar.style.width = percent + "%";

    if (level >= maxLvl) {
    xpText.innerText = "Nível Máximo!!!";
    levelText.innerText = `Nível ${level} - ${titles[maxLvl-1]}`;
  } else {
    levelText.innerText = `Nível ${level} - ${titles[level-1]}`;
    xpText.innerText = `${xp} / ${xpNeeded}`;
  }
    
}

function addXP(amount) {
    if (level >= maxLvl) {
        xp = xpNeeded;
        updateUI();
        return;
     }

    xp += amount;

    if (xp >= xpNeeded) {
        xp -= xpNeeded; 
        level++;
        xpNeeded = level * 100;
        checkAchievement();
    }

    if (level >= maxLvl) {
    xp = xpNeeded;
    }

    updateUI();
}
updateUI();