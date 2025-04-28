export default class SinglyLinkedList<T> {
    public length: number;
    public head: ListNode<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as ListNode<T>;

        if (!this.head) {
            this.head = node;
        }

        node.next = this.head;
        this.head = node;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        const node = { value: item } as ListNode<T>;
        let current = this.head;

        if (!this.head) {
            this.head = node;
        }

        if (idx >= 0 && idx <= this.length) {
            for (let i = 0; i < idx - 1; i++) {
                current = current?.next;
            }
            if (current) {
                node.next = current.next;
                current.next = node;
                this.length++;
            }
        }
        return;
    }

    append(item: T): void {
        const node = { value: item } as ListNode<T>;
        let current = this.head;

        if (!this.head) {
            this.head = this.head;
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

        if (idx == 0) {
            return this.head?.value;
        }

        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        if (idx == 0) {
            return this.head?.value;
        } else {
            let current = this.head;
            let previous = current;

            for (let i = 0; i < idx; i++) {
                let current = this.head;
                let previous = current;
            }
            previous.next = current?.next;
            this.length--;
        }
        return undefined;
    }
}
