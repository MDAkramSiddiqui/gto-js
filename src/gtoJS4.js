// 1

var myOBJ = {
    a: function() {
        function inside() {
            this.foo = "inside"
            console.log(this)
        }
        inside()
        console.log(this.foo)
    }
}

myOBJ.a()