type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const value = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        } else {
            return value;
        }
    }

    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            return this.head.value;
        }
    }
}
