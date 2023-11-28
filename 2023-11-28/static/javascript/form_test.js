
$(function(){
    $("#all").on("click",function(){
        let isCheck =$(this).is(":checked");
        if(isCheck)
            $(".ability_list").prop('checked', true);
        else
            $(".ability_list").prop('checked', false);
    });
});

$(".ability_list").on("click",function(){
    var chk_count = $("ability_list:checked").length;
    var all_check = $(".ability_list").length;
    if( chk_count == all_check)
        $("#all").prop("checked",true);
    else
        $("#all").prop("checked",false);        
});