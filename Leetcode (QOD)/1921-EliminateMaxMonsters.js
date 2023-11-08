//Leetcode Q1921 - Medium
//https://leetcode.com/problems/eliminate-maximum-number-of-monsters/?envType=daily-question&envId=2023-11-08

let eliminateMaximum = (dist, speed) => {
  let time = [];
  for (let i = 0; i < dist.length; i++) {
    time.push(dist[i] / speed[i]);
  }

  time.sort((a, b) => {
    return a - b;
  });
  console.log(time);

  for (let i = 0; i < time.length; i++) {
    if (time[i] <= i) {
      return i;
    }
  }

  return dist.length;
};
