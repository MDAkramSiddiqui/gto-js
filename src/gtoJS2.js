// 1
var game = "hello";
function foo() {
    game = "foo hello";
    return;
    function game() {}
}

console.log(game)
foo()
console.log(game)