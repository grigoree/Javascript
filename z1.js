// проверка входных данных
function check(x) {
    for (let i = 0; i < x.length; i++)
        if (x[i] != '0' && x[i] != '1')
            return false;

    return true;
}

// конвертер
function bin_to_dec(x) {

    if (!check(x))
        return undefined;

    let x_rev = x.split('').reverse();
    let result = 0;

    x_rev.forEach(function(c, i) {
        result += Number(c) * Math.pow(2, i);
    });

    return result;
}

function main() {
    let test1 = 'asd';
    let test2 = '1010110';

    console.log(bin_to_dec(test1));
    console.log(bin_to_dec(test2));
}

main();