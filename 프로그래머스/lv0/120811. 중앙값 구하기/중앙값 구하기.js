function solution(array) {
    var answer = 0;
    var center = Math.floor(array.length/2);
    answer = array.sort(function(a,b){return a-b})
    return answer[center];
}