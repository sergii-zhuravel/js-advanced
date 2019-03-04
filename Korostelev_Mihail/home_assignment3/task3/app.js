var state = {
  fullNameOfState: function(city, country) {
    return (
      this.stateName +
      " " +
      this.district +
      ", main city - " +
      city +
      ", it is the region center of " +
      country
    );
  }
};
var KyivState = {
  stateName: "Kyiv",
  district: "Region"
};
var LvivState = {
  stateName: "Lviv",
  district: "Region"
};
var OdesaState = {
  stateName: "Odesa",
  district: "Region"
};
console.log(state.fullNameOfState.apply(KyivState, ["Kyiv", "Ukraine"]));
console.log(state.fullNameOfState.call(LvivState, "Lviv", "Ukraine"));

function f(a, b) {
  console.log(this.stateName + " " + this.district);
  console.log(", main city - " + a + ", it is the region center of " + b);
}
var fullNameofStateWithBind = f.bind(OdesaState);
fullNameofStateWithBind("Odesa", "Ukraine");
