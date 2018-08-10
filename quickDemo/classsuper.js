var __extends =
    (this && this.__extends) ||
    (function() {
        var extendStatics = function(d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function(d, b) {
                        d.__proto__ = b;
                    }) ||
                function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();
var AnimalTwo = /** @class */ (function() {
    function AnimalTwo(name) {
        this.name = name;
    }
    AnimalTwo.prototype.run = function() {
        console.log("i am Animal I can run");
    };
    return AnimalTwo;
})();
var Snake = /** @class */ (function(_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this);
        _this.name = "child " + name;
        return _this;
    }
    Snake.prototype.run = function() {
        console.log("i am Snake");
    };
    return Snake;
})(AnimalTwo);
var snake = new Snake("snake");
var animal = new AnimalTwo("animal");
console.log(snake);
console.log(animal);
snake.run();
animal.run();

function Person() {
    this.name = 'Person';
}
Person.prototype.run = function(){
    
}