function calculateMinCost() {
  //your code here
  

  const inputRopes = document.getElementById('rope-lengths').value;
  const ropeLengths = inputRopes.split(',').map(Number);

  const minCost = findMinimumCost(ropeLengths);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Minimum cost of connecting ropes: ${minCost}`;
}

function findMinimumCost(ropeLengths) {
  const heap = new MinHeap(ropeLengths);

  let totalCost = 0;

  while (heap.size() > 1) {
    const min1 = heap.extractMin();
    const min2 = heap.extractMin();

    const cost = min1 + min2;
    totalCost += cost;

    heap.insert(cost);
  }

  return totalCost;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];

    const lastValue = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.bubbleDown(0);
    }

    return minValue;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.bubbleDown(smallestIndex);
    }
  }

  
  
}  
