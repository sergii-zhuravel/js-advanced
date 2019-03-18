// всё правильно, только неправильно подключен script в index.html

function viewObjectKeys() {
	console.log(this);
    for (var key in this) {
        console.log(key + ": " + this[key]);
    }
}

function getValueByKeys(key1, key2) {
    console.log(this[key1] + ", " + this[key2]);
}

var obj1 = {
    key1: "ключ 1",
    key2: "ключ 2",
    key3: "ключ 3",
    someValue1: 30
};

var obj2 = {
    key4: "ключ 4",
    key5: "ключ 5",
    key6: "ключ 6",
    someValue2: 50
};

viewObjectKeys.call(obj1);

getValueByKeys.apply(obj2,['key4','someValue2']);

var f = getValueByKeys.bind(obj2)
f('key5', 'key6');

