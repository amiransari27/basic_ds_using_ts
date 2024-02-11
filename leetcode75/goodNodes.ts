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


  function goodNodes(root: TreeNode | null): number {
    if (root.left === null && root.right === null) return 1
    function solutionGoodNode(root: TreeNode | null, soFarMax: number): number {
        if (root === null) {
            return 0
        }
        

        soFarMax = Math.max(soFarMax, root.val)
        let c1 = solutionGoodNode(root.left, soFarMax)
        let c2 = solutionGoodNode(root.right, soFarMax)

        if (root.val >= soFarMax){
            return c1 + c2 +1
        }

        return c1 + c2

    }

    return solutionGoodNode(root, root.val)
};

