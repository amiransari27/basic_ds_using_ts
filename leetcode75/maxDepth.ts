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


function maxDepth(root: TreeNode | null): number {
    if (root == null) {
        return 0
    }

    let lh = maxDepth(root.left)
    let rh = maxDepth(root.right)
    let th = Math.max(lh, rh) + 1
    return th
};
