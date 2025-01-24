class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjList[vertex]) {
            return
        }

        for (let adjVertex of this.adjList[vertex]) {
            this.removeEdge(adjVertex, vertex);
        }

        delete this.adjList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1);
    }

    display() {
        for (let vertex in this.adjList) {
            console.log(vertex + "=>" + [...this.adjList[vertex]]);
        }
    }

    dfs(startVertex,visited = new Set(),result = []){
        if(!this.adjList[startVertex]){
            return [];
        }

        visited.add(startVertex);
        result.push(startVertex);

        for(let neighbor of this.adjList[startVertex]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited,result);
            }
        }

        return result;
    }

    bfs(startVertex){
        if(!this.adjList[startVertex]){
            return [];
        }

        let result = [];
        let queue = [];
        let visited = new Set();

        queue.push(startVertex);
        visited.add(startVertex);

        while(queue.length){
            let currVertex = queue.shift();
            result.push(currVertex);

            for(let neighbor of this.adjList[currVertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
    


}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");


graph.display();


console.log(graph.bfs("A"));