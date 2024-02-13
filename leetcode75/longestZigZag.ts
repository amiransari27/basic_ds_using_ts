 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function longestZigZag(root: TreeNode | null): number {
    
    let maxPath = 0

    function solveLongestZigZag(root: TreeNode | null, left: number, right: number) {
        if (root === null){
            return 
        }

        maxPath = Math.max(maxPath, left, right)
        solveLongestZigZag(root.left, right +1 , 0)
        solveLongestZigZag(root.right, 0 , left+1)
    }

    solveLongestZigZag(root, 0, 0)

    return maxPath
};






