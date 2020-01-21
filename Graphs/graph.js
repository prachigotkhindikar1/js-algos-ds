// Basic Graph implementation

    class Graph {
        constructor() {
            // Stores a key-value pair of vertices and edges.
            this.adjacencyList = {};
        }

 // Add a new vertex to the graph
        addVertex(vertex){
            if(!this.adjacencyList[vertex]) {
                this.adjacencyList[vertex] = [];
            }
            return this;
        }

 // Add edge to the graph
        addEdge(vertex1, vertex2) {
            if(!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])) {
                return undefined;
            }
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return this;
        }

 // Remove an edge from graph
        removeEdge(vertex1, vertex2) {
            if(!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])) {
                return undefined;
            }
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1);
        }
 // Remove a vertex from graph
        removeVertex(vertex){
            while(this.adjacencyList[vertex].length){
                var adjacencyVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacencyVertex);
            }
            delete(this.adjacencyList[vertex]);
        }
    }

    var graph = new Graph();
    graph.addVertex("Tokyo");
    graph.addVertex("Dallas");
    graph.addVertex("Kansas City")
    graph.addEdge("Dallas", "Tokyo");
    graph.addEdge("Dallas", "Kansas City");
