function solution(slice, n) {
    var answer = 1; // 피자의 판 수
    answer = Math.ceil(n / slice)
    return answer;
}