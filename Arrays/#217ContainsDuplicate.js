/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */

const ContainsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        return true;
      }
    }
  }

  return false;
};
