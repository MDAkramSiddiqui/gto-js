// 1

(function() {
     setTimeout(function() { console.log(5); }, 0);
     (async function() { await "Nothing"; console.log(4); })();
     console.log(6)
})()