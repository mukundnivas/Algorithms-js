//1299. Replace Elements with Greatest Element on Right Side
//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = (arr) => {
  let ans = [];
  let element;

  for (let i = 0; i < arr.length - 1; i++) {
    element = arr[i + 1];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j + 1] > element) {
        element = arr[j + 1];
      }
    }

    ans[i] = element;
  }

  ans[arr.length - 1] = -1;
  return ans;
};
