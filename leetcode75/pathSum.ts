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

function pathSum(root: TreeNode | null, targetSum: number): number {
    let res = 0
    const memo: {[key: string]: number} = {}
    memo["0"] = 1

    function pathSumSolu(root: TreeNode | null, sum: number) {
        if (root === null){
            return 
        }

        sum += root.val
        
        const diff = sum - targetSum
        if (memo[`${diff}`] !== undefined){
            res += memo[`${diff}`]
        }

        if (memo[`${sum}`] === undefined){
            memo[`${sum}`] = 0
        }

        memo[`${sum}`]++
        pathSumSolu(root.left, sum)
        pathSumSolu(root.right, sum)
        memo[`${sum}`]--
    }

    pathSumSolu(root, 0)
    return res
};
