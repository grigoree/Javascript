function check(s) {
    let temp = s;

    while(temp.indexOf("()") != -1 || temp.indexOf("[]") != -1 || temp.indexOf("{}") != -1) {
        temp = temp.replace("()", "");
        temp = temp.replace("[]", "");
        temp = temp.replace("{}", "");
    }

    if (temp == "")
        console.log("true");
    else
        console.log("false");
}

check("()()()()");
check("[({})]()()()");
check("[(])");