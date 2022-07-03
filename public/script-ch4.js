class Ready {
  constructor() {
    this.botOption;
    this.playerOpt;
    this.TextVersus = "none";
    this.P1win = "none";
    this.ComWin = "none";
    this.Draw = "none";
  }
  get getBotOpt() {
    return this.botOption;
  }
  set setBotOpt(opt) {
    this.botOption = opt;
  }

  get getPlayerOpt() {
    return this.playerOpt;
  }
  set setPlayerOpt(opt) {
    this.playerOpt = opt;
  }
  BotBrain() {
    const option = ["comBatu", "comKertas", "comGunting"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  //Arrow Function, Change Id to Active/Grey Background
  activeElement = (id) =>
    (document.getElementById(id).style.backgroundColor = "#C4C4C4");
  //Arrow Function, Change Id to transparent Background
  pasiveElement = (id) =>
    (document.getElementById(id).style.backgroundColor = "transparent");

  setElement(g, h, i, j) {
    document.getElementById("TextVersus").style.display = g;
    document.getElementById("P1Win").style.display = h;
    document.getElementById("ComWin").style.display = i;
    document.getElementById("Draw").style.display = j;
  }
  winCalculation() {
    const botOpt = this.botOption;
    const playID = ["Player1Batu", "Player1Kertas", "Player1Gunting"];
    const comID = ["comBatu", "comKertas", "comGunting"];
    const BGK = ["batu", "kertas", "gunting"];

    for (let i = 0; i < playID.length; i++) {
      for (let j = 0; j < comID.length; j++) {
        if (this.playerOpt == playID[i]) {
          this.activeElement(playID[i]);
          if (botOpt == comID[j]) {
            this.activeElement(comID[j]);
            if (i - j == 0) {
              this.Draw = "flex";
              console.log(
                `P1 ${BGK[i]} vs com ${BGK[j]} (Tak Ada yang Menang)`
              );
            } else if (i - j == -1 || i - j == 2) {
              this.ComWin = "flex";
              console.log(`P1 ${BGK[i]} vs com ${BGK[j]} (Com yang Menang)`);
            } else if (i - j == 1 || i - j == -2) {
              this.P1win = "flex";
              console.log(
                `P1 ${BGK[i]} vs com ${BGK[j]} (Player1 yang Menang)`
              );
            }
          } else {
            this.pasiveElement(comID[j]);
          }
        } else if (this.playerOpt == "R") {
          this.TextVersus = "flex";
          this.pasiveElement(playID[i]);
          this.pasiveElement(comID[j]);
        } else {
          this.pasiveElement(playID[i]);
        }
      }
    }
    this.setElement(this.TextVersus, this.P1win, this.ComWin, this.Draw);
  }
}

function pickOption(p) {
  const ready = new Ready();
  ready.setPlayerOpt = p;
  ready.setBotOpt = ready.BotBrain();
  ready.winCalculation();
}
