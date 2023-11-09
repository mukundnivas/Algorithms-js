//26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 *
 * @param {number[]} nums
 * @return {number} k
 */

const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
