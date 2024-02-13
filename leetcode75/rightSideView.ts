class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function rightSideView(root: TreeNode | null): number[] {
    if (root == null) {
        return []
    }
    const queue: TreeNode[] = []
    queue.push(root)

    const ans: number[] = []

    while (queue.length) {
        let n = queue.length
        let node: TreeNode | null = null
        while (n > 0) {
            node = queue[0]
            queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
            n--
        }

        ans.push(node.val)
    }

    return ans
};
