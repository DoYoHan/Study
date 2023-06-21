function solution(hp) {
    var answer = 0;
    var general = 0
    var soldier = 0
    var work = 0
    
    if (hp >= 5){
        general = Math.floor( hp / 5)
        hp -= 5*general
    }
    if (hp >= 3){
        soldier = Math.floor(hp / 3)
        hp -= 3*soldier
    }
    if (hp >= 1){
        work = hp
    }
    answer = general + soldier + work
    return answer;
}