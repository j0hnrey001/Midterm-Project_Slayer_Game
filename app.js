function getRandomValue(min , max){
  return Math.floor(Math.random() * (max , min)) + min;
}
new Vue({
    el: '#game',

    data: {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0
    },
    computed: {
      monsterBarStyle() {
        return {width: this.monsterHealth + '%'};
      },
      playerBarStyle() {
        return {width: this.playerHealth + '%'};
      }
    },
    methods: {
      attackMonster() {
        this.currentRound ++;
        const attackValue = getRandomValue (8, 13);
        this.monsterHealth -= attackValue;
        this.attackPlayer()
      },
      attackPlayer () {
        const attackValue =getRandomValue (10, 17);
        this.playerHealth -= attackValue;
      },
      specialAttackMonster(){
        this.currentRound ++;
        const attackValue = getRandomValue (14, 23);
        this.monsterHealth -= attackValue;
        this.attackPlayer()
      },

    }
  })

    