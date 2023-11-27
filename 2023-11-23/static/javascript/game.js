let board= new Array();

// 중복없이 25개 숫자 저장하기
for( var i=1; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if ( board.indexOf(tmp) == -1)
    board.push(tmp);
    else
        i--;
    
}

for(i=0; i<board.length; i++)
    var v=board[i];

$(function(){

    $.each ( board ,function(i,v){ // i-인덱스, v-배열값
        $(".numBox").eq(i).text( v );
    });

    $(".numBox").on("click",function(){
        $(this).css("background","black");
        $(this).css("color","white")
        var idx = $(".numBox").index(this);
        board[idx]=0;
        endgame();
    });

});

// 과제 !! endgame 내용
// n번째 행 , 열에 0이 몇개? 대각선 포함
// 인덱스 -> 규칙 따라 반복문
//.numBox 말고 board[idx]로만 , 변수필요
function endgame(){
    var row=0;
    var col=0;
    var cross=0;

    for(i=0; i<board.length; i++){
        var check = false;
        for(var v=0; v<board[i].length;j++){
            if(board[j][i]==0){
                check = true;
            }else{
                check=false;
                break;
            }
        }
        if(check) col++;
    }
    var right = 0;
    var left = 0;
    for(i=0; i<board[0].length;i++){
        if(board[i][i]==0) right++;
        if(board[board.length-i-1] [i]==0) left++;
        if(right==5 || left==5) cross++;
    }
    if(right==5 && left==5) cross++;

    if((cross+row+col)==5){
        
    }
}