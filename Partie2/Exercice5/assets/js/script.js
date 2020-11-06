//Au passage de la souris sur un bouton de couleur, colorer le texte. Le texte doit redevenir noir quand la souris quitte le bouton.

$('#green').mouseover(function textGreen(){
    $('#text').css('color','green');
});
$('#red').mouseover(function textRed(){
   $('#text').css('color','red');
});
$('#blue').mouseover(function textBlue(){
   $('#text').css('color','blue');
});  

$('#green').mouseleave(function textBlack(){
    $('#text').css('color','black');
});
$('#red').mouseleave(function textGreen(){
   $('#text').css('color','black');
});
$('#blue').mouseleave(function textGreen(){
   $('#text').css('color','black');
});  