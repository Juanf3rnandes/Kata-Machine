interface Node<T> {
  value: T;
  next: Node<T> | undefined;
  prev: Node<T> | undefined;
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;

    if (!this.head) {
      this.head = this.tail = node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) return;

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    const node = { value: item } as Node<T>;

    let current = this.head!;

    for (let i = 0; i < idx - 1; i++) {
      current = current.next!;
    }

    node.next = current.next;
    node.next = current;

    if (current.next) {
      current.next.prev = node;
    }

    current.next = node;

    this.length++;
  }

  append(item: T): void {
    this.length++;

    const node = { value: item } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      return;
    }
  }

  remove(item: T): T | undefined {
    if (!this.head) return;

    this.length--;

    let current = this.head;

    while (current && current.next) {
      if (current.value === item.value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
      }

      current = current.next;
    }

    return;
  }

  get(idx: number): T | undefined {
    let current = this.head;

    for (let i = 0; current && i < this.length; i++) {
      if (i == idx) {
        return current.value;
      }
      current = current.next;
    }

    return;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length || !this.head) {
      return undefined;
    }

    if (idx === 0) {
      const value = this.head.value;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      }

      this.length--;
      return value;
    }

    let current = this.head;

    for (let i = 0; current && current.next && i < idx; i++) {
      current = current!.next;
    }

    current!.prev!.next = current!.next;

    if (current!.next) {
      current!.next.prev = current!.prev;
    }

    this.length--;

    return current!.value;
  }
}
