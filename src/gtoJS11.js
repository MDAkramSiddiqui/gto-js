// 1

const hello = "www2";
foo(1);
foo(2);
function foo(a) {
  switch (a) {
    case 1:
      const hello = "www";
      console.log("Hello", hello);
      break;
    case 2:
      console.log("Hello2", hello);
      break;
  }
}
