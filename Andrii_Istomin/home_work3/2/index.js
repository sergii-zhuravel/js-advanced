// правильно
function applyAll(func, ...args) {
  return func(...args);
}

console.log(applyAll(Math.max, 25, 155, 266, 264464, 123134846887654));
