function Hamster() {
  this.stomach = [];
  this.lookForFood = function(f) {
    this.stomach.push(f);
  };
  this.areYouHungry = function() {
    return this.stomach.length == 0
      ? "Yes, I'm hungry and whild Hamster"
      : "No, I'm Ok";
  };
}
