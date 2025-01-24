// const matrix = [
//     [0,1,0],                     B
//     [1,0,1],                   /  \                 
//     [0,1,0]                   /    \
// ]                            A      C

// console.log(matrix[0][2]);


// const adjacencyList = {
//     "A":["B"],
//     "B":["A","C"],
//     "C":["B"]
// }

// console.log(adjacencyList["B"]);

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);

    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjVertex);
        }

        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) 
        && this.adjacencyList[vertex2].has(vertex1);
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    dfs(startVertex, visited = new Set(), result = []) {
        if (!this.adjacencyList[startVertex]) {
            return [];
        }
    
        visited.add(startVertex); 
        result.push(startVertex); 
    
        
        for (let neighbor of this.adjacencyList[startVertex]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited, result);
            }
        }
    
        return result;
    }


    bfs(startVertex) {
        if (!this.adjacencyList[startVertex]) {
            return [];
        }
    
        let result = []; 
        let queue = []; 
        let visited = new Set(); 
    
        queue.push(startVertex); 
        visited.add(startVertex);
    
        while (queue.length) {
            let currVertex = queue.shift();
            result.push(currVertex);
    
            
            for (let neighbor of this.adjacencyList[currVertex]) {
                if (!visited.has(neighbor)) {
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

graph.addEdge("A","B");
graph.addEdge("B","C");

graph.removeVertex("B")

graph.display();

