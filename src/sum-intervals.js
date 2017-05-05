// https://www.codewars.com/kata/52b7ed099cdc285c300001cd
function sumIntervals(intervals){
  return intervals.reduce((line, interval) => {
    for (let i = 0; i < interval[1]; i++) {
      if (interval[0] <= i && i < interval[1] && !line[i]) {
        line[i] = 1;
      }      
    }
    
    return line;
  }, []).reduce((count, num) => count += num, 0);
}
