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
    },
    pop() {
      if (this.isEmpty()) return null

      const lastNode = this.tail

      //When exist only one node
      if (this.head === this.tail) {
        this.tail = null
        this.head = null
        this.length--
        return lastNode
      }

      let current = this.head
      let penultimate

      // It's get the penultimate value iterated from head until as next value is equal to tail
      while (current) {
        if (current.next === this.tail) {
          penultimate = current
          break
        }

        current = current.next
      }

      // It's nullify the next value of penultimate node
      penultimate.next = null

      // The penultimate node becomes the last
      this.tail = penultimate
      this.length--
      return lastNode
    },
    get(index) {
      if (index === 0) return this.head
      if (index < 0 || index > this.length) return null
      if (index === this.length - 1) return this.tail

      let current = this.head

      for (let i = 0; i < index; i++) {
        current = current.next
      }

      return current
    },
    delete(index) {
      if (index < 0 || index >= this.length) return null

      if (index === this.length - 1) return this.tail

      // When delete first node, the second node becomes to head
      if (index === 0) {
        const deletedNode = this.head
        this.head = this.head.next
        this.length--
        return deletedNode
      }

      let current = this.head
      let previous

      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }

      const deletedNode = current
      previous.next = current.next
      this.length--

      return deletedNode
    }
  }
}

let list = createLinkedList()
list.push('Anthony')
list.delete(0)
console.assert(list.tail === null)
