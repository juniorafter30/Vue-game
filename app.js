function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 6);
      this.playerHealth -= attackValue;
    },
    healPlayer() {
      const healthValue = getRandomValue(5, 1);
      this.playerHealth += healthValue;
    },
    specialAttackMonster =
  },
});

app.mount("#game");
