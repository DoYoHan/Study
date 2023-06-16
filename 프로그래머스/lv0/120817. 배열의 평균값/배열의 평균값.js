function solution(numbers) {
    var answer = 0;
    const result = numbers.reduce(
        function add(sum, currValue){
            return sum + currValue;
        }, 0)
    answer = result / numbers.length;
    return answer;
}