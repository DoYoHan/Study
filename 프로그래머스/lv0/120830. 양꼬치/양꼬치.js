function solution(n, k) {
    var answer = 0;
    var service = Math.floor(n/10)
    answer = (12000 * n) + (2000 * (k - service))
    return answer;
}