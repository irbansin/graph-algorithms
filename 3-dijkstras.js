function dijkstras(graph, source) {
    /* 
      1. initialise dist
      2. extract the node with least weight
      3. visit all unvisited node and update the minimum weight from source
    */
    let visited = new Set()
    let dist = {}
    // initializing dist
    for(let node in graph){
      dist[node] = Infinity
    }
    dist[source] = 0
  
    let pq = [[0,source]]

    while(pq.length) {
      pq.sort((a,b)=>a[0]-b[0])

      //extract
      let [weight,node] = pq.shift()
      
      if(visited.has(node)) continue
      visited.add(node)

      //visit unvisited nodes
      for(let [neighbour, neighbourWeight] of graph[node]) {
        let currentWeight = neighbourWeight + weight

        //relax neighbour current weight of neighbour is less than recorded minimum weight of neighbour
        if(currentWeight < dist[neighbour]) {
          dist[neighbour] = currentWeight
        }
        pq.push([currentWeight, neighbour])
      }
    }
    return dist
}
