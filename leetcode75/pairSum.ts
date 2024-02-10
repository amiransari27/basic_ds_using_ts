 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function pairSum(head: ListNode | null): number {
    let fast: ListNode | null = head
    let slow: ListNode | null = head

    while (fast && fast.next){
        slow = slow?.next
        fast = fast.next.next
    }

    
    let revHead: ListNode | null = null
    let curr: ListNode | null = slow

    while(curr) {
        const tmp = curr
        curr = curr.next
        tmp.next = revHead
        revHead= tmp
    }

    let maxVal = 0

    while (head && revHead){
        maxVal = Math.max(maxVal, head.val + revHead.val)
        head = head.next
        revHead = revHead.next
    }


    return maxVal
};
