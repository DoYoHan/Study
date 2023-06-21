// 팩토리얼을 구하는 함수
function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}

function solution(balls, share) {
    var answer = 0
  	// 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
    answer = factorial(balls) / (factorial((balls-share)) * factorial(share))
    return answer
}
