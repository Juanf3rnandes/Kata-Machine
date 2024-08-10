import Queue from "@code/Queue";

test("queue", function () {
    const list = new Queue<number>();

    // list.enqueue(12);
    // expect(list.peek()).toEqual(12);
    // expect(list.length).toEqual(1);
    // list.enqueue(13);
    // list.deque();
    // expect(list.peek()).toEqual(13);

    list.enqueue(12);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(12);
    expect(list.length).toEqual(2);

    list.enqueue(11);

    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
