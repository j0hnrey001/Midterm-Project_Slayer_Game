function getRandomValue(min , max){
  return Math.floor(Math.random() * (max , min)) + min;
}
new Vue({
    el: '#game',

    data: {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    },
    computed: {
      monsterBarStyle() {
        if (this.monsterHealth < 0) {
          return {width: '0%'}
        }
        return {width: this.monsterHealth + '%'};
      },
      playerBarStyle() {
        if (this.playerHealth < 0) {
          return {width: '0%'}
        }
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
      newGame() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.currentRound = 0;
        this.winner = null;
        this.logMessages = [];
      },
      attackMonster() {
        this.currentRound ++
        const attackValue = getRandomValue (8, 13);
        this.monsterHealth -= attackValue;
        this.existingMessage('player', 'attack', attackValue);
        this.attackPlayer()
      },
      attackPlayer () {
        const attackValue =getRandomValue (10, 17);
        this.playerHealth -= attackValue;
        this.existingMessage('monster', 'attack', attackValue);
      },
      specialAttackMonster(){
        this.currentRound ++
        const attackValue = getRandomValue (12, 23);
        this.monsterHealth -= attackValue;
        this.existingMessage('player', 'special-attack', attackValue);
        this.attackPlayer()
      },
      healPlayer() {
        this.currentRound ++;
        const healValue = getRandomValue(14, 22);
        if(this.playerHealth + healValue > 100 ) {
          this.playerHealth = 100;
        }
        else{
        this.playerHealth += healValue;
        }
        this.existingMessage('player', 'heal', healValue);
        this.attackPlayer()
      },
      playerSurrender() {
        this.winner = 'monster';
      },
      existingMessage(who, what, value) {
        this.logMessages.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
        });
      }
    }
  })

    