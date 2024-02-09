class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head?.next === null){
        return null
    }
    let slow = head
    let fast = head
    let pre: ListNode | null = null

    while (fast && fast.next){
        fast = fast.next.next
        pre = slow
        slow = slow?.next
    }  

    pre.next = slow?.next
    return head 
    
};
