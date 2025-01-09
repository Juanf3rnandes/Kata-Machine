export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        let middle = Math.floor(lo + (hi - lo) / 2);
        let v = haystack[middle];
        if (needle === haystack[middle]) {
            return true;
        } else if (v > needle) {
            hi = middle;
        } else {
            lo = middle + 1;
        }
    } while (lo < hi);

    return false;
}
// complexity algorithm: O(log n)
