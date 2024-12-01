export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {}

    delete(): number {
        return 0;
    }
    private heapiFyDown(idx: number): void {}

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.getParent(idx);
        const p = this.data[parent];
        const idxValue = this.data[idx];

        if (p > idxValue) {
            this.data[idx] = p;
            this.data[p] = idxValue;
            this.heapifyUp(p);
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
}
