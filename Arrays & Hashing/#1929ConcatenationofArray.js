/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let temp = [];

  for (let i = 0; i < 2 * nums.length; i++) {
    if (i < nums.length) {
      temp[i] = nums[i];
    } else {
      temp[i] = nums[i - nums.length];
    }
  }

  return temp;
};
