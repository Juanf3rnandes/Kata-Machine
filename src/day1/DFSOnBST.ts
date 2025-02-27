function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr.right, needle);
    }

    if (curr.value > needle) {
        return search(curr.left, needle);
    }
    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
