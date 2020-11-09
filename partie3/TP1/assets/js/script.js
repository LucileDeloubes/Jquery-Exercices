$(function(){
   // générer nombre aléatoire à chaque rechargement de la page
   var randomnumber = Math.floor(Math.random() * 100) + 1;
   alert('Le nombre mystère généré, vous pouvez jouer ! ')

   var count = 0; // Définir un compteur pour le nombre d'essai et lui indiquer qu'à chaque chargement de la page qu'il est à 0.
  
   // En cliquant sur le bouton "joue"
   $('#play').click(function compare(){ 

      count++; // le compteur prendra +1 à chaque clique
      
      var playerChoice = $('#number').val(); // on récupérer la valeur que le joueur donne dans le input
      
      if (playerChoice > randomnumber){ //Si la valeur est plus grande que le nombre aléatoire
         alert('C\'est moins ! ' );
      }
      if (playerChoice < randomnumber){//Si la valeur est plus petite que le nombre aléatoire
         alert('C\'est plus ! ');
      }
      if (playerChoice == randomnumber){
         alert('C\'est gagné ! \n'+ 'Vous avez trouvé en ' + count + '  '+ 'tentatives'); // alerte final et annoncé du nombre de tentative avec count
      } 
   });
 $('#reset').click(function(){
   location.reload();
 }); //relancer la partie
});   


