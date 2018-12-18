const { createGraphBFS } = require('../src/data_structures/bfs')

describe('', () => {
  test('', () => {
    const graphExample = createGraphBFS(true)
    const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
    const edges = [
      ['a', 'b'],
      ['a', 'e'],
      ['a', 'f'],
      ['b', 'd'],
      ['b', 'e'],
      ['c', 'b'],
      ['d', 'c'],
      ['d', 'e']
    ]

    nodes.forEach(node => graphExample.addNode(node))
    edges.forEach(nodes => graphExample.addEdge(...nodes))

    let results = []

    graphExample.breadthFirstSearch('a', node => results.push(node.key))
    expect(results).toEqual(['a', 'b', 'e', 'f', 'd', 'c'])
  })
})
