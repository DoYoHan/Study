function solution(my_string) {
    var answer = 0;
    const regex = /\d/g;
    const numberArr = my_string.match(regex).map((item) => Number(item));
    answer = numberArr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    
    return answer;
}