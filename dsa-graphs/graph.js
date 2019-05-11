class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  addOneWayEdge(v1, v2) {
    v1.adjacent.add(v2);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);

    function remove(vertex) {
      for(let neighbor in vertex.adjacent) {
        if(neighbor === vertex){
          vertex.adjacent.delete(neighbor)
        }
        remove(neighbor);
      }

      remove()
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, arr =[], seen = new Set()) {
    if(seen.has(start)) {
      return arr;
    }

      seen.add(start);
      arr.push(start.value);

    for(let neighbor of start.adjacent){
      arr.concat(this.depthFirstSearch(neighbor, arr, seen));
    }

    return arr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const seen = new Set();
    const queue = [start];
    const arr = [];

    while(queue.length > 0){
      const curr = queue.shift();

      if(!seen.has(curr)){
        seen.add(curr);
        arr.push(curr.value);
      }

      for(let neighbor of curr.adjacent){
        if(!seen.has(neighbor)){
          queue.push(neighbor)
        }
      }
    }

    return arr;
  }

  shortestPath(start, end) {
    let min = Infinity;

    function path(start, end, count = 0, seen = new Set()){
      if(start === end){
        min = Math.min(min, count);
        return;
      }

      count += 1;
      seen.add(start);

      for(let neighbor of start.adjacent){
        if(!seen.has(neighbor)){
          path(neighbor, end, count, new Set(seen));
        }
      }
    }

    path(start, end)
    return min;
  }

  hasCycle() {

    function cycle(curr, seen = new Set()){
      if(seen.has(curr)){
        return true;
      }

      seen.add(curr);

      for(let neighbor of curr.adjacent){

        if(cycle(neighbor, new Set(seen)))
        {
          return true;
        }
      }

      return false;
    }

    return cycle(this.nodes.values().next().value);
  }

}

module.exports = {Graph, Node}