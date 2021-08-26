// 1

var myOBJ = {
    a: function() {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
}

const { a, b } = myOBJ;
a()
b()
myOBJ.a()
myOBJ.b()
