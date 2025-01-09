interface Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {}

    insertAt(item: T, idx: number): void {}

    append(item: T): void {
        const node = { value: item, next: null } as Node<T>;
        let current = this.head;

        if (!this.head) {
            this.head = node;
        }
        while (current?.next !== null) {
            current = current?.next;
        }
        current.next = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; current && i < idx; i++) {
            current = current.next;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        return undefined;
    }
}
