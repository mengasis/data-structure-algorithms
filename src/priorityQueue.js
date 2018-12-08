const { createQueue } = require('./queue')

function createPriorityQueue() {
  const lowQueuePriority = createQueue()
  const hightQueuePriority = createQueue()

  return {
    enqueue: (item, isHightPriority = false) =>
      isHightPriority ? hightQueuePriority.enqueue(item) : lowQueuePriority.enqueue(item),
    dequeue: () =>
      hightQueuePriority.isEmpty()
        ? lowQueuePriority.dequeue()
        : hightQueuePriority.dequeue(),

    peek: () =>
      hightQueuePriority.isEmpty() ? lowQueuePriority.peek() : hightQueuePriority.peek(),

    get length() {
      return hightQueuePriority.length + lowQueuePriority.length
    },

    isEmpty() {
      return queue.length == 0
    }
  }
}

module.exports = { createPriorityQueue }
