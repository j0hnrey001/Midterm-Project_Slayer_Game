function getRandomValue(min , max){
  return Math.floor(Math.random() * (max , min)) + min;
}
new Vue({
    el: '#game',

    data: {
      monsterHealth: 100,
      playerHealth: 100
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
        const attackValue = getRandomValue (8, 16);
        this.monsterHealth -= attackValue;
        this.attackPlayer()
      },
      attackPlayer () {
        const attackValue =getRandomValue (9, 18);
        this.playerHealth -= attackValue;
      },
      specialAttackMonster(){
        const attackValue = getRandomValue(11, 22);
        this.monsterHealth -= attackValue;
        this.attackPlayer();
      }
    }
  })

    