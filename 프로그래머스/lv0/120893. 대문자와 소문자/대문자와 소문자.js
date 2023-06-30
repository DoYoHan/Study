function solution(my_string) {
    let arr = my_string.split("");
    let answer = [];
    while (arr.length != 0) {
        let tmp = arr.shift();
        if (tmp === tmp.toUpperCase()) {
            answer.push(tmp.toLowerCase());
        } else {
            answer.push(tmp.toUpperCase());
        }
    }
    return answer.join("");
}