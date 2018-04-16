function Node(value) {
    this.value = value;
    this.next = null;
}

function List() {
    this.start = null;
}

List.prototype.append = function(value) {
    let node = new Node(value);
    let current_node = this.start;

    // список пуст
    if (this.start == null) {
        this.start = node;
        return 0;
    }
    // в списке есть хотя бы один элемент
    else {
        while (current_node.next != null)
            current_node = current_node.next;

        current_node.next = node;
    }

}

List.prototype.find = function(value) {
    // список пуст
    if (this.start == null) {
        return null;
    }
    // в списке есть хотя бы один элемент
    else {
        while (current_node.next != null) {

            if (current_node.value == value)
                return current_node;
            else
                current_node = current_node.next;
        }
    }
}

// удаляет только первый встретившийся элемент
List.prototype.delete = function(value) {

    let current_node = this.start;

    // список пуст
    if (this.start == null) {
        return 0;
    }
    // в списке есть хотя бы один элемент
    else {

        // удаляемый элемент - первый
        if (current_node.value == value) {
            this.start = current_node.next;
            return 0;
        }

        while (current_node.next != null)

            if (current_node.next.value == value) {

                // удаляемый элемент последний
                if (current_node.next.next == null)
                    current_node.next = null;
                // удаляемый элемент не последний
                else {
                    current_node.next = current_node.next.next;
                }

                return 0;
            }
            else
                current_node = current_node.next;
    }
}

List.prototype.print = function() {

    let current_node = this.start;
    let result_string = "";

    // список пуст
    if (this.start == null) {
        result_string = "empty";
    }
    // в списке есть хотя бы один элемент
    else {
        result_string = current_node.value.toString();
        while (current_node.next != null) {
            result_string += " -> ";
            current_node = current_node.next;
            result_string += current_node.value.toString();
        }
    }

    console.log(result_string);

}

function make_list(x) {
    let result = new List();

    let x_arr = x.toString().split('').reverse();

    x_arr.forEach(function(c){
        result.append(Number(c));
    });

    return result;
}

function sum(x1, x2) {
    if (x1.start == null)
        return x2;

    if (x2.start == null)
        return x1;

    c1 = x1.start;
    c2 = x2.start;
    let result = "";
    let mod = 0;

    while (c1 != null && c2 != null) {
        result += ((c1.value + c2.value + mod) % 10).toString();
        mod = ~~((c1.value + c2.value + mod) / 10);

        c1 = c1.next;
        c2 = c2.next;
    }

    if (c1 == null && c2 == null)
        if (mod > 0) {
            result += mod.toString();
            return make_list(result.split('').reverse().join(''));
        }


    if (c1 == null)
        while(c2 != null) {
            result += ((c2.value + mod) % 10).toString();
            mod = ~~((c2.value + mod) / 10);
    
            c2 = c2.next;
        }
    else {
        while(c1 != null) {
            result += ((c1.value + mod) % 10).toString();
            mod = ~~((c1.value + mod) / 10);
        
            c1 = c1.next;
        }
    }

    if (mod > 0)
        result += mod.toString();
        
    return make_list(result.split('').reverse().join(''));
}

function main() {

    console.log("Make list");
    let list = make_list(132742);
    list.print();

    console.log("\nAdd element 5");
    list.append(5);
    list.print();

    console.log("\nDelete element 3");
    list.delete(3);
    list.print();

    console.log("\nSum 9 -> 9 -> 9 -> 9 -> 9 -> 9 and 1");
    let l1 = make_list(999999);
    let l2 = make_list(1);
    sum(l1, l2).print();

    console.log("\nSum 2 -> 4 -> 3 and 5 -> 6 -> 4");
    l1 = make_list(342);
    l2 = make_list(465);
    sum(l1, l2).print();

}

main();

