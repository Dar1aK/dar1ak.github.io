export const calculateAvg: (arr: number[]) => number = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// STDEV.S
export const getStandardDeviation: (arr: number[]) => number = (arr) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
      (arr.length - 1),
  );
};

export const getZScore: (arr: number[]) => number[] = (arr) => {
  const avg = calculateAvg(arr);
  const STDev = getStandardDeviation(arr);
  return arr.map((num) => (num - avg) / STDev);
};

export const getModZScore: (arr: number[]) => boolean[] = (arr) => {
  const zScore = getZScore(arr);
  return zScore.map((score) => Math.abs(score) > 1);
};
