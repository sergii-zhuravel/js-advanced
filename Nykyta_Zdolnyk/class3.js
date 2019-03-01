var character = {
    step: 0,
    up: function() { // вверх
      this.step++;
      return this;
    },
    down: function() { // вниз
      this.step--;
      return this;
    },
    showPosition: function() { // вывести текущую позицию
      console.log( this.step );
    }
  };
  
  //Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:
  
//   character.up();
//   character.up();
//   character.down();
//   character.showPosition(); // 1

  character.up().up().down().up().down().showPosition();