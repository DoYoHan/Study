function solution(rsp) {
    var answer = '';
    const rule = {
        '2':'0',
        '0':'5',
        '5':'2'
    }
    answer = rsp.split("").map(a => rule[a]).join("")
    return answer;
}