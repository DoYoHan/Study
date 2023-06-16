function solution(n) {
    var answer = 0;
    let getLCM = (num1, num2) => {
        let lcm = 1;

        while(true){
          if((lcm % num1 == 0) && (lcm % num2 == 0)){
            break;
          }
          lcm++;
        }
        
        return lcm
    }
    answer = getLCM(n, 6) / 6
    return answer;
}