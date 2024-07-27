export default function bubble_sort(arr: number[]): void {
    let aux = 0;
    let swap: boolean;

    do {
        swap = false;
        for (let i = 0; i < arr.length - 1 - aux; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
        aux++;
    } while (swap);
}
