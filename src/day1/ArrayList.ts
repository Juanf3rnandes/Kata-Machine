export default class ArrayList<T> {
    public length: number;
    private items: T[];

    constructor() {
        this.length = 0;
        this.items = [];
    }

    prepend(item: T): void {
        this.items.unshift(item);
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        this.items.splice(idx, 0, item);
        this.length++;
    }

    append(item: T): void {
        this.items.push(item);
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (item === this.items[i]) {
                this.items.splice(i, 1);
                this.length--;
                return item;
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.items[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const removedItem = this.items.splice(idx, 1)[0];
        this.length--;
        return removedItem;
    }
}
