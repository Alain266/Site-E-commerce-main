/**
 * Class d'un produit
*/
class Product {
    id;
    name;
    description;
    prix;
    categorie;
    note;
    image;
    constructor (id, name, description, prix, categorie, note, image){
        this.id = id;
        this.name = name;
        this.description = description;
        this.prix = prix;
        this.categorie = categorie;
        this.note = note;
        this.image = image;
    }
}
