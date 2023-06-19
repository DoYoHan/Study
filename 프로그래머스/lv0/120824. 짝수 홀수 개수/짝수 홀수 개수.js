function solution(num_list) {
    var answer = [];
    var even = num_list.filter(e => 0 == e%2).length
    var odd = num_list.filter(e => 1 == e%2).length
    answer = [even, odd]
    return answer;
}