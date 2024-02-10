/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {

    const lArr: number[]= []
    const rArr: number[]= []
    leafStr(root1, lArr)
    leafStr(root2,rArr)

    return lArr.join() === rArr.join()
};

function leafStr(root: TreeNode | null, arr: number[]) {
    if (root === null){
        return 
    }
    if (root.left === null && root.right === null){
        arr.push(root?.val)
        return 
    }

    leafStr(root.left,arr)
    leafStr(root.right,arr)
}
