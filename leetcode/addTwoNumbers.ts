{

 // Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null { 

    let carry: number = 0
    let head1 = l1
    let head2 = l2
    let head3: ListNode | null = null
    let cur: ListNode | null = null

    let i = 0

    while (head1 || head2){
        let val1: number = head1?.val || 0
        let val2: number = head2?.val || 0
        let sum = val1 + val2 + carry
        console.log(sum, val1,val2,carry)
        if (sum > 9){
            carry = 1
        }else{
            carry = 0
        }
        const newNode = new ListNode(sum%10, null)
        if (i == 0){
            head3 = cur = newNode

        }else{
            cur && (cur.next = newNode)
            cur = cur && cur.next
        }
        
        i++
        head1 = head1 && head1.next
        head2 = head2 && head2.next
    }
    if (carry > 0){
        cur && (cur.next = new ListNode(carry, null))
        cur = cur && cur.next
    }
    
    return head3
}

function getList(nums: number[]): ListNode | null{
    let head: ListNode | null = null
    let cur: ListNode | null = null
    for (let i=0; i< nums.length;i++){
        if (i == 0){
            head = cur = new ListNode(nums[i], null)
            continue
        }
        cur && (cur.next = new ListNode(nums[i], null))
        cur = cur && cur.next
        
    }

    return head
}

let l1 = [2,4,3]
let l2 = [5,6,4]

console.log(addTwoNumbers(getList(l1), getList(l2)))


}

