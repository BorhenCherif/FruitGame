var playing= false;
var score;
var trialsleft;
$(function(){
    $("#startreset").click(function(){
        if (playing==true){
            location.reload();
        }else{
            playing=true;
            score= 0;
            $("#scorevalue").html(score);
            $("#trialsLeft").show();
            trialsLeft=3;
            
            addheart();
            }
        });
    });

function addheart(){
    for(var i=0; i<trialsLeft; i++){
        
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
}
}