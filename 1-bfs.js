//Given
let inputGraph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D", "E"],
    "D": ["B", "C"],
    "E": ["C"]
}
  

function bfs(graph, startNode) {
  // add startNode to q
  let q = [startNode]
  let visited = new Set();

  while(q.length) {
    // extract node
    let currentNode = q.shift()

    // currenode Already visited, skip it
    if(visited.has(currentNode)) continue
    
    // process node
    console.log(currentNode)
    visited.add(currentNode)
    
    // visit other nodes
    for(let neighbour of graph[currentNode]) {
      q.push(neighbour)
    }
  }
}

//driver code 
bfs(inputGraph, "A")
