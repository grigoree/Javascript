function graph(ver) {
    this.nodes = {};

    for (let i = 0; i < ver.length; i++) {
        let first = ver[i][0];
        let second = ver[i][1];

        if (!(first in this.nodes))
            this.nodes[first] = [];

        if (!(second in this.nodes))
            this.nodes[second] = [];

        if (this.nodes[second].indexOf(first) < 0)
            this.nodes[second].push(first);

        if (this.nodes[first].indexOf(second) < 0)
            this.nodes[first].push(second);

    }
}

function graph2(ver) {
    this.nodes = {};

    for (let i = 0; i < ver.length; i++) {
        let first = ver[i][0];
        let second = ver[i][1];
        let weight = ver[i][2];

        if (!(first in this.nodes))
            this.nodes[first] = [];

        if (!(second in this.nodes))
            this.nodes[second] = [];

        if (this.nodes[second].indexOf(first) < 0)
            this.nodes[second].push([first, weight]);

        if (this.nodes[first].indexOf(second) < 0)
            this.nodes[first].push([second, weight]);

    }
}

graph.prototype.print = function() {
    for (i in this.nodes) {
        let res = "";
        res = i + ": ";
        this.nodes[i].forEach(function(item) {
            res += item + " ";
        });
        console.log(res);
    }
}

graph2.prototype.print = function() {
    for (i in this.nodes) {
        let res = "";
        res = i + ": ";
        this.nodes[i].forEach(function(item) {
            res += item + " ";
        });
        console.log(res);
    }
}

function dfs_rec(start, g, seen) {
    let nodes = g.nodes;

    if (seen.indexOf(start) < 0) {
        seen.push(start);
        console.log("DFS: ", start);
        
        nodes[start].forEach(function(item){
            dfs_rec(item, g, seen);
        });
    }

}

graph.prototype.dfs = function(ver) {

    dfs_rec(ver, this, []);

}

graph.prototype.bfs = function(ver) {
    let seen = [];
    let graph = this.nodes;
    let current = [ver];

    while (current.length != 0) {

        temp = [];

        current.forEach(function(item) {
            seen.push(item);
            console.log("BFS: ", item);


            // смотрим смежные вершины
            graph[item].forEach(function(item) {

                if (seen.indexOf(item) < 0)
                    temp.push(item);

            });

        });

        current = temp;

    }

}

graph2.prototype.dijkstra = function(start, finish) {
    let seen = [];
    let d = {};
    let result = {};
    d[start] = 0;
    result[start] = "";
    let graph = this.nodes;
    let weight = 0;
    let current = [start];

    while (current.length != 0) {

        temp = [];

        current.forEach(function(item) {
            let parent = item;
            // смотрим смежные вершины
            graph[parent].forEach(function(item) {
                if (seen.indexOf(item[0]) < 0 && (d[item[0]] > d[parent] + item[1] || d[item[0]] == undefined)) {
                    seen.push(parent);
                    temp.push(item[0]);
                    d[item[0]] = d[parent] + item[1];
                    result[item[0]] = result[parent] + parent.toString() + " -> ";
                }
            });

        });

        current = temp;

    }

    console.log(result[finish] + finish.toString());
}

let test = new graph([
    [1, 2],
    [1, 7],
    [1, 8],
    [2, 3],
    [2, 6],
    [8, 9],
    [8, 12],
    [3, 4],
    [3, 5],
    [9, 10],
    [9, 11]
]);

test.print();
console.log("____DFS____");
test.dfs(1);
console.log("____BFS____");
test.bfs(1);

let test2 = new graph2([
    [1, 2, 1],
    [2, 3, 4],
    [2, 4, 1],
    [1, 3, 4],
    [4, 3, 1]
]);

test2.print();
console.log("____Поиск кратчайшего пути____");
test2.dijkstra(1, 3);