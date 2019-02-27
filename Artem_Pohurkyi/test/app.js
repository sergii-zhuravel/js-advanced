var character = {
    step: 0,
    up: function() { // вверх
      this.step++;
    },
    down: function() { // вниз
      this.step--;
    },
    showPosition: function() { // вывести текущую позицию
      console.log( this.step );
    }
  };

  character.up().up().down().up().down().showPosition();
