type Node<T> = {
    value: T;
    next: Node<T>;
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

    enqueue(value: T): void {
        const node = { value: value } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.head = this.head.next;
        this.length--;
        return this.head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        if (!this.head) {
            return true;
        }

        return false;
    }

    clear(): void {
        this.head = this.tail = undefined;
        this.length = 0;
    }
}
