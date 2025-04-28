export default class DoublyLinkedList<T> {
    public length: number;
    private head: ListNode<T> | undefined;
    private tail: ListNode<T> | undefined;

    constructor() {}

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;

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
        const node = { value: item } as ListNode<T>;

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
        const node = { value: item } as ListNode<T>;

        return undefined;
    }

    get(idx: number): T | undefined {
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        if (idx == 0) {
            return this.head?.value;
        } else {
            let current = this.head;
            let previous = current;
            for (let i = 0; i < idx; i++) {
                previous = current;
                current = current?.next;
            }

            previous = current?.next;
            this.length--;
            return previous?.value;
        }
    }
}
