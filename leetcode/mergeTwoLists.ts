{
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null){
        return list2
    }else if (list2 == null) {
        return list1
    }

    let head: ListNode | null = null
    let curr: ListNode | null = null

    while (list1 && list2) {

        if (list1.val < list2.val){
            if (curr == null){
                head = curr = list1 
            }else{
                curr.next = list1
                curr = curr.next
            }
            list1 = list1.next
        }else{
            if (curr == null){
                head = curr = list2 
            }else{
                curr.next = list2
                curr = curr.next
            }
            list2 = list2.next
        }
    }

    if (list1){
        curr.next = list1
    }

    if (list2){
        curr.next = list2
    }


    return head
};

function createList(nums : number[]): ListNode | null {
    let head: ListNode | null = null
    let curr: ListNode | null = null

    for (let i =0 ; i< nums.length; i++){
        if(curr == null) {
            head = curr = new ListNode(nums[i], null)     
        }else{
            curr.next = new ListNode(nums[i], null) 
            curr = curr.next
        }
    }
    return head
}

console.log(
    mergeTwoLists(
        createList([1,2]),
        createList([2,3])
    )
)
    }
