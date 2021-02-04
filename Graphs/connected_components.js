// 323. Number of Connected Components in an Undirected Graph
//Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    let adjacencyList = {}, connectedComponents = 0, visited={}, queue=[];

    // Add vertices to the graph
    for(let i=0; i<n; i++){
        adjacencyList[i] = [];
    }
    
    // Add edges to the graph
    for(let i=0; i<edges.length; i++){
        let to = edges[i][0];
        let from = edges[i][1];
        adjacencyList[to].push(from);
        adjacencyList[from].push(to);
    }

    // For each node not visited do a BFS. The number of times we have to initiate BFS is equivalent to the number of connected components.
    for(let i=0; i<n; i++){
        if(!visited[i]){
            connectedComponents++;
            bfs(i)
        }
    }   
    
    //BFS
    function bfs(vertex){
        let currentVertex;
        queue.push(vertex);
        
        while(queue.length){
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            
            adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
    }
    
    return connectedComponents;
};
