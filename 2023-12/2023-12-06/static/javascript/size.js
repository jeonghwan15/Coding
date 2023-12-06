
$(function(){
   $("#apply").on("click" , sizeApply ); 
});

function sizeApply(){
    var wd = $("#wd").val();
    var hg = $("#bg").val();

    opener.$("#draw>table>tr>td").css("width", wd+"px");
    opener.$("#draw>table>tr>td").css("height", hg+"px");

    opener.$("#color").attr("disabled",false);
    window.close();
}