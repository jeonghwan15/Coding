
let mid=["abc","bottle","pen","clock","glass","mouse","keyboard","computer"];
let mpw=["123","a123","4unb","dsaf","10984","fqkz1","mjzkww","njzlk193"];



$(function(){
        $("#signBt").on("click",function(){

            if( $("#id").val() == '' ){
                alert("아이디를 입력하세요")
                $("#id").focus();
            }else if( $("#pw").val()==''){
                alert("비밀번호를 입력하세요");
                $("#pw").focus();
            }
            else{

                // 아이디 존재유무
                var idx =mid.indexOf( $("#id").val() );
                if(idx==-1){//아이디가 없다면
                    var ok = confirm("아이디가 존재 하지 않습니다.\n회원가입 하시겠습니까?");
                    if (ok) location.href="signup.html";
                }else if( mpw[idx] == $("#pw").val() ){
                    alert("로그인성공");
                }else{
                    alert("비밀번호가 일치 하지 않습니다.");
                    $("#pw").val("").focus(); // 비밀번호 재입력을 위해 비우고 커서두기
                }


                // for( var tmp in mid){
                //     if( mid[tmp]== $("#id").val() ){
                //         if( mpw[tmp] == $("#pw").val()){
                //             alert("로그인 성공");
                //             break;
                //         }else{
                //             alert("비밀번호가 일치하지 않습니다.")
                //             break;
                //         }
                //     }

                // }

            }

            // if($("#id").val != "abc"){

            // }
            // //로그인 시도가 된다면 - 아이디 비밀번호 올바르지 않은 경우
            // else if( $("#id").val !='abc' && $("#pw").val !='1234'){
            //     alert("아이디 또는 비밀번호가 올바르지 않습니다.")
            //     $("#id").val("").focus();
            //     $("#pw").val("");
            // }
        });
 });