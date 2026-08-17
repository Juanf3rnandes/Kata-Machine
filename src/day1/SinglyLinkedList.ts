interface Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
}

export default class SinglyLinkedList<T> {
  public length: number;
  public head: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  prepend(item: T): void {
    const node: Node<T> = {
      value: item,
      next: this.head,
      prev: null,
    };

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) return;

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    const node: Node<T> = {
      value: item,
      next: null,
      prev: null,
    };

    let current = this.head!;

    for (let i = 0; i < idx - 1; i++) {
      current = current.next!;
    }

    node.next = current.next;
    node.prev = current;

    if (current.next) {
      current.next.prev = node;
    }

    current.next = node;
    this.length++;
  }

  append(item: T): void {
    const node: Node<T> = {
      value: item,
      next: null,
      prev: null,
    };

    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    node.prev = current;

    this.length++;
  }

  remove(item: T): T | undefined {
    let current = this.head;

    while (current) {
      if (current.value === item) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        }

        this.length--;
        return current.value;
      }

      current = current.next;
    }

    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current!.next;
    }

    return current?.value;
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
