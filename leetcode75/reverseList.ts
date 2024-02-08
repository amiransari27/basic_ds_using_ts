
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function reverseList(head: ListNode | null): ListNode | null {
    let cur: ListNode | null = head
    let newHead: ListNode | null = null

    while (cur) {
        const tmp = cur
        cur = cur.next
        tmp.next = newHead
        newHead = tmp
    }

    return newHead
};
