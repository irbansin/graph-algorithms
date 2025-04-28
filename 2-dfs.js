let inputGraph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D", "E"],
    "D": ["B", "C"],
    "E": ["C"]
}


function dfs(graph, currentNode, visited = new Set()) {
  if(!currentNode) return
  
  // process node
  console.log(currentNode)
  visited.add(currentNode)

  // visit other nodes if they are not visited
  for(let neighbour of graph[currentNode]) {
    if(!visited.has(neighbour)) {
      dfs(graph, neighbour, visited)
    }
  }
}

// driver code 
dfs(inputGraph, "A")
