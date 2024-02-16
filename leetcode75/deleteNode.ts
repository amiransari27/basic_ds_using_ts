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


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null
    }

    if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.left !== null && root.right !== null) {
            const v = findMax(root.left)
            root.val = v
            root.left = deleteNode(root.left, v)
        } else if (root.left !== null) {
            return root.left
        } else if (root.right !== null) {
            return root.right
        } else {
            return null
        }
    }

    return root
};

function findMax(root: TreeNode | null): number {
    let maxVal: number = Number.MIN_VALUE
    while (root){
        maxVal = root.val
        root = root.right
    }
    return maxVal
}
