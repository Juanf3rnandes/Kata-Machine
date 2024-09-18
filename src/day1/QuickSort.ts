export default function quick_sort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];

    let left = arr.slice(1).filter((x) => x <= pivot);
    let right = arr.slice(1).filter((x) => x > pivot);

    return [...quick_sort(left), pivot, ...quick_sort(right)];
}
