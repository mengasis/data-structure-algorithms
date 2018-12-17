function createNode(value) {
  return { value, next: null }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    isEmpty() {
      return this.length === 0
    }
  }
}
