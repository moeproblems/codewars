// https://www.codewars.com/kata/52742f58faf5485cae000b9a
function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  
  const inSeconds = [365 * 24 * 60 * 60, 24 * 60 * 60, 60 * 60, 60, 1];
  let result = new Array(inSeconds.length).fill(0),
    index = 0;
  
  const format = result => {
    const strings = ['year', 'day', 'hour', 'minute', 'second'];
    const pieces = result
      .map((count, index) => {
        return count === 0 ? '' : `${count} ${strings[index]}${count > 1 ? 's' : ''}`;
      })
      .filter(element => !!element);

    return pieces.splice(0, Math.max(1, pieces.length - 1)).join(', ') + 
      (pieces.length ? ' and ' + pieces.pop() : '');
  };
    
  do {
    result[index] = Math.floor(seconds / inSeconds[index]);
    seconds %= inSeconds[index++];
  }
  while (seconds > 0);
  
  return format(result);
}