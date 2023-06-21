function chunk(data = [], size = 1) {
  const arr = [];
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  return arr;
}

function solution(num_list, n) {
    var answer = [];
    answer = chunk(num_list, n)
    return answer;
}