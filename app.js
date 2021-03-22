function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      barBackgroudPlayer: "green",
      barBackgroudMonster: "green",
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        // player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player wins
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    specialButton() {
      return this.currentRound % 3 !== 0;
    },
    healButton() {
      return this.currentRound % 3 !== 0;
    },
  },

  methods: {
    barColorMonster() {
      if (this.monsterHealth <= 40) {
        return (this.barBackgroudMonster = "orange");
      } else if (this.monsterHealth < 30) {
        return (this.barBackgroundMonster = "red");
      } else {
        return (this.barBackgroudPlayer = "green");
      }
    },
    barColorPlayer() {
      if (this.playerHealth <= 40) {
        this.barBackgroudPlayer = "orange";
      } else if (this.playerHealth <= 30) {
        this.barBackgroundPlayer = "red";
      } else {
        return (this.barBackgroudPlayer = "green");
      }
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.barBackgroudPlayer = "green";
      this.barBackgroudMonster = "green";
    },
    draw() {
      if (monsterHealth < 0) {
        alert("You WIN !");
      } else if (playerHealth < 0) {
        alert("You Loose!");
      } else if (playerHealth && monsterHealth < 0) {
        alert("Draw!");
      }
    },
    attackMonster() {
      this.barColorMonster();
      this.barColorPlayer();
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 6);
      this.playerHealth -= attackValue;
    },
    healPlayer() {
      this.barColorPlayer();
      this.currentRound++;
      const healthValue = getRandomValue(8, 20);

      if (this.playerHealth + healthValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healthValue;
      }
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.barColorMonster();
      this.barColorPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
});

app.mount("#game");
