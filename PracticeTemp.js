class Graph{
    constructor(){
        this.adjacenceyList = {};
    }

    addVertex(vertex){
        if(!this.adjacenceyList[vertex]){
            this.adjacenceyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacenceyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacenceyList[vertex2]){
            tha.addVertex(vertex2);
        }

        this.adjacenceyList[vertex1].add(vertex2);
        this.adjacenceyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacenceyList[vertex1].delete(vertex2);
        this.adjacenceyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacenceyList[vertex]){
            return;
        }

        for(let adjVertex of this.adjacenceyList[vertex]){
            this.removeEdge(vertex,adjVertex);
        }

        delete this.adjacenceyList[vertex];
    }

    hasEdge(vertex1,vertex2){
        return this.adjacenceyList[vertex1].has(vertex2)
        && this.adjacenceyList[vertex2].has(vertex1);
    }

    display(){
        for(let vertex in this.adjacenceyList){
            console.log(vertex + "->" + [...this.adjacenceyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A","B");
graph.addEdge("B","C");

graph.removeVertex("B");
graph.display();
