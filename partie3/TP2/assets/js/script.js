$(function(){

    $('.intro').css('visibility', 'hidden'); // Pour créer une bande de couleur pour le header et le footer

    $('#calcMoyenne').click(function calculmoyenne(){ //Quand je clique sur le bouton la fonction calcul de la moyenne s'enclence
            var maths = $('#noteMath').val();
            var eng = $('#noteAnglais').val();
            var sport = $('#noteSport').val();
            var fr = $('#noteFr').val();
            var phys = $('#notePhysique').val(); // je récupère toutes les valeurs des inputs
            var moyenne = (parseFloat(maths) + parseFloat(eng) + parseFloat(sport) + parseFloat(fr) + parseFloat(phys)) / 5; // je calcule la moyenne avec le parseFloat pour avec des nombre décimaux (avec virgule) 

                if(moyenne >= 0 & moyenne < 10){
                    alert('votre moyenne est de ' + moyenne + ' '+ 'c\'est en dessous de la moyenne');
                } // Démarrage des conditions d'affichages
                else if(moyenne < 13){
                    alert('votre moyenne est de ' + moyenne + ' '+ 'c\'est moyen');
                } 
                else if(moyenne < 16){
                    alert('votre moyenne est de ' + moyenne + ' '+ 'c\'est bien !');
                }
                else if(moyenne < 20){
                    alert('votre moyenne est de ' + moyenne + ' '+ 'c\'est très bien !');
                }
                else if(moyenne = 20){
                    alert('votre moyenne est de ' + moyenne + ' '+ 'c\'est excellent !');
                };   
        
    }); 
    
});