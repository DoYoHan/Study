function solution(money) {
    var answer = [];
    var cup = Math.floor(money / 5500)
    var change = money - cup * 5500
    answer = [cup, change]
    return answer;
}