function Calk(elem) {
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");
  let resoult = document.querySelector("#resoult");

  this.plus = function() {
    resoult.innerHTML = parseInt(input1.value) + parseInt(input2.value);
  };
  this.minus = function() {
    resoult.innerHTML = parseInt(input1.value) - parseInt(input2.value);
  };
  this.mult = function() {
    resoult.innerHTML = parseInt(input1.value) * parseInt(input2.value);
  };
  this.divide = function() {
    resoult.innerHTML = (
      parseInt(input1.value) / parseInt(input2.value)
    ).toFixed(2);
  };
  let self = this;
  elem.onclick = function(e) {
    elemTarget = e.target.getAttribute("data-action");
    self[elemTarget]();
  };
}

new Calk(calc);
