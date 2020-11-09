$(function(){

   var randomnumber = Math.floor(Math.random() * 100) + 1;
   alert('Le nombre mystère généré, vous pouvez jouer ! ')

   var count = 0;
  

   $('#play').click(function compare(){

      count++;
      
      var playerChoice = $('#number').val();
      
      if (playerChoice > randomnumber){
         alert('C\'est moins ! ' );
      }
      if (playerChoice < randomnumber){
         alert('C\'est plus ! ');
      }
      if (playerChoice == randomnumber){
         alert('C\'est gagné ! \n'+ 'Vous avez trouvé en ' + count + '  '+ 'tentatives');
      } 
   });
 $('#reset').click(function(){
   location.reload();
 });
});   


