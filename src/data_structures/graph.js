function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChildren(node) {
      children.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key))
    },
    getNode(key) {
      return nodes.find(node => node.key === key)
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key)
      const node2 = this.getNode(node2Key)

      node1.addChildren(node2)
      edges.push(`${node1Key}${node2Key}`)

      if (!directed) {
        node2.addChildren(node1)
      }
    },
    print() {
      return this.nodes
        .map(({ children, key }) => {
          let result = `${key}`

          if (children.length) {
            result += ` => ${children.map(node => node.key).join(' ')}`
          }

          return result
        })
        .join('\n')
    }
  }
}
