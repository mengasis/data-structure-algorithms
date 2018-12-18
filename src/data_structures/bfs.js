const { createQueue } = require('./queue')
const { createGraph } = require('./graph')

function createGraphBFS(directed = false) {
  const graph = createGraph(directed)

  return {
    ...graph,
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = graph.getNode(startingNodeKey)

      // Created a map to track nodes visited
      const visited = graph.nodes.reduce((acc, node) => {
        acc[node.key] = false
        return acc
      }, {})

      const queue = createQueue()
      queue.enqueue(startingNode)

      /**
       * When starting a search, it will be saved the neighbor nodes of current node
       * into queue checking if is visited. Later, it will be iterated until there
       * are not adjacent nodes
       */
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visited[currentNode.key]) {
          visitFn(currentNode)
          visited[currentNode.key] = true
        }

        currentNode.children.forEach(node => visited[node.key] || queue.enqueue(node))
      }
    }
  }
}

module.exports = { createGraphBFS }
