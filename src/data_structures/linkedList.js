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
    },
    push(value) {
      const node = createNode(value)

      if (this.head === null) {
        this.head = node
        this.tail = node
        this.length++
        return node
      }

      /**
       * Is set "tail.next" for modify also head, As this they share reference.
       * Then tail is replaced to a new node, but head still contain the list.
       */
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }
}
