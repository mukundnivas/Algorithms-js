//27. Remove Element
//https://leetcode.com/problems/remove-element/description/

/**
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns
 */

const RemoveElement = (nums, val) => {
  if (nums.length === 0) {
    return 0;
  }

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
