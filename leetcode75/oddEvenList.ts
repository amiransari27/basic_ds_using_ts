class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null){
        return head
    }
    let odd: ListNode | null = null
    let oddCur: ListNode | null = odd
    let even: ListNode | null = null
    let evenCur: ListNode | null = even

    let i=-1
    while(head){
        i++
        
        if (i%2 === 0){
            if (evenCur == null){
                even = evenCur = head
            }else{
                evenCur.next = head
                evenCur = evenCur.next
            }
                
        }else{
            if (oddCur === null){
                odd= oddCur = head
            }else{
                oddCur.next = head
                oddCur = oddCur.next
            }
            
        }

        head = head.next
    }

    evenCur.next = odd 
    oddCur.next = null

    return even

};
