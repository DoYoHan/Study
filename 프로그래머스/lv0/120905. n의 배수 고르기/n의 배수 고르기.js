function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(number => number % n === 0);
    return answer;
}