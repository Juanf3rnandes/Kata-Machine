interface Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {}

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        //curr.prev.next = node; Using curr.prev.next = curr; instead of curr.prev.next = node;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        this.length--;

        if (!this.length) {
            this.head = this.tail = undefined;
            return;
        }
        const node = { value: item } as Node<T>;
    }

    get(idx: number): T | undefined {}

    removeAt(idx: number): T | undefined {}
}
