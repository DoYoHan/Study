function solution(n) {
    var answer = 0;
    for (var i = 1; i < n+1; i++){
     if(i%2 != 1 ){
        answer += i   
     }
    } 
    return answer;
}