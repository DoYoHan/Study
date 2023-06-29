function solution(sides) {
    var answer = 0;
    var triangle = sides.sort()
    triangle[0] + triangle[1] > triangle[2] ? answer = 1 : answer = 2
    return answer;
}