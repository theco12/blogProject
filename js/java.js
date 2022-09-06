var count =0;
document.querySelector('#send-answer').addEventListener('click' , function() {
    count+=1;

    var 유저답안 = document.querySelector('#answer').value;
    if(유저답안 == '1335'){
        alert('성공')
    }else if (count >= 3 && 유저답안 != '1335'){
        alert('땡')
    }

});