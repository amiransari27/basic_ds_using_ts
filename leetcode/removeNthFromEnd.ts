
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow = head
    let fast = head
    let pre: ListNode | null = null
    for (let i =0; i<n; i++){
        fast && (fast = fast.next)
    }
    while (fast){
        pre = slow
        slow && (slow = slow.next)
        fast && (fast = fast.next)
    }
    if (pre){
        pre.next = slow.next
    }else{
        return head.next
    }
    

    return head
};


function createLinkList_removeNth(nums: number[]): ListNode | null{

    let head: ListNode | null = null
    let curr: ListNode | null = null

    for (let i=0; i<nums.length; i++ ){
        if (curr === null){
            head = curr  = new ListNode(nums[i], null)
            continue
        }

        curr.next = new ListNode(nums[i], null)
        curr = curr.next
    }

    return head
} 

console.log(
    removeNthFromEnd(
        createLinkList_removeNth([1]),
        1
    )
)
