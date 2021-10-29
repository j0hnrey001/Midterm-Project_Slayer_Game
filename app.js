
new Vue({
    el: '#game',

    data: {
      monsterHealth: 100,
      playerHealth: 100
    },
    methods: {
      attMonster() {
        const attValue = getRandomValue (10, 20)
        this.monsterHealth -= attValue
        this.attPlayer()
      },
      attPlayer () {
        const attValue =getRandomValue (15, 30)
        this.playerHealth -= attValue
      }
    }
  })
  function getRandomValue(min , max){
    return Math.floor(Math.random() * (max , min)) + min
  }
    