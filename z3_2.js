function get_text(text) {
    let dict = {};
    let text_arr = text.split(/\n| /);

    text_arr.forEach(function(word){
        if (word in dict)
            dict[word]++;
        else
            dict[word] = 1;
    });

    return dict;
}

function main() {
    let dict;
    let text = "dsasd dsa sads\nasd asd asd asdasd asd\nasd asd dsa dsa dsa dsa dsa\n";

    dict = get_text(text);

    let max = 0;
    let count = 0;
    let res_word;

    for (word in dict) {
        if (dict[word] > max) {
            max = dict[word];
            count = 1;
            res_word = word;
            continue;
        }

        if (dict[word] == max) {
            count++;
        }
    }

    if (count > 1)
        console.log("---");
    else
        console.log(res_word);

}

main();