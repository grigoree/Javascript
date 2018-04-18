let s = "asdasdasd";
let k = s.length;

for (let i = 1; i <= k; i++) {
    let t = s.substring(0, i);

    if (s == t.repeat(k / t.length))
        return console.log(k / t.length);
}