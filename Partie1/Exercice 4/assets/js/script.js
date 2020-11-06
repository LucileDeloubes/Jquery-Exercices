// Vider le paragraphe firstText. Supprimer tous les éléments du paragraphe secondText.

$('#firstText').css("visibility", "hidden");
// visibility permet de cacher le contenu en gardant la place du contenant

$('#secondText').css("display", "none");
// display none, permet de supprimer le contenu et le contenant 
console.log('le' + secondText + 'est supprimé')


/* autre possibilité : cacher les élements de l'html 
$("#firstText").empty();
$("#secondText").remove(); *\