export default class MinHeap {
    private heap: number[];
    private length: number;

    constructor() {
        this.heap = [];
        this.length = this.heap.length;
    }

    insert(value: number): void {
        if (!value) {
            return;
        }
        this.heap.push(value);
        this.heapifyUp(this.size() - 1);
    }
    
    delete(): number | undefined {
        if (this.size() === 0) {
            return undefined;
        } else {
            if (this.size() === 1) {
                return this.heap.shift();
            }
        }
        const removed = this.heap.shift();

        this.heapiFyDown(0);
        return removed;
    }

    size(): number {
        return this.heap.length;
    }

    private heapiFyDown(idx: number): void {
        let element = this.heap[idx];
        let left = this.leftChild(idx);
        let right = this.rightChild(idx);

        if (idx < this.size() && left < element) {
            element = left;
        }

        if (idx < this.size() && right < element) {
            element = right;
        }

        if (idx !== element) {
            this.swap(idx, element);
            this.heapiFyDown(element);
        }
    }

    private heapifyUp(idx: number): void {
        let parent = this.getParent(idx);

        while (idx > 0 && this.heap[idx] > this.heap[parent]) {
            this.swap(idx, parent);
            idx = parent;
            parent = this.getParent(idx);
        }
    }

    private getParent(idx: number) {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number) {
        return 2 * idx + 1;
    }

    private rightChild(idx: number) {
        return 2 * idx + 2;
    }

    private swap(idx: number, parent: number) {
        let temp = this.heap[idx];

        this.heap[idx] = this.heap[parent];
        this.heap[parent] = temp;
    }
}
