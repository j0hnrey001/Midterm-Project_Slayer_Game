function getRandomValue(min , max){
  return Math.floor(Math.random() * (max , min)) + min;
}
new Vue({
    el: '#game',

    data: {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null
    },
    computed: {
      monsterBarStyle() {
        return {width: this.monsterHealth + '%'};
      },
      playerBarStyle() {
        return {width: this.playerHealth + '%'};
      },
      specialAttackRound () {
        return this.currentRound % 5 !==0
      }
    },
    watch: {
      playerHealth(value) {
        if(value <= 0 && this.monsterHealth <= 0) {
          this.winner = 'draw';
        }
        else if (value <= 0) {
          this.winner = 'monster';
        }
      },
      monsterHealth(value) {
        if (value <= 0 && this.playerHealth <= 0) {
          this.winner = 'draw';
        }
        else if (value <= 0) {
          this.winner = 'player';
        }
      }
    },
    methods: {
      attackMonster() {
        this.currentRound ++
        const attackValue = getRandomValue (8, 13);
        this.monsterHealth -= attackValue;
        this.attackPlayer()
      },
      attackPlayer () {
        const attackValue =getRandomValue (10, 17);
        this.playerHealth -= attackValue;
      },
      specialAttackMonster(){
        this.currentRound ++
        const attackValue = getRandomValue (11, 23);
        this.monsterHealth -= attackValue;
        this.attackPlayer()
      },
      healPlayer() {
        this.currentRound ++;
        const healValue = getRandomValue(10, 22);
        if(this.playerHealth + healValue > 100 ) {
          this.playerHealth = 100;
        }
        else{
        this.playerHealth += healValue;
        }
        this.attackPlayer()
      }
    }
  })

    