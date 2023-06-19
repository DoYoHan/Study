function solution(my_string, n) {
    var answer = '';
    for(var i = 0; i < my_string.length; i++){
        for(var k = 0; k < n; k++){
            answer += my_string[i]
        }
    }
    return answer;
}