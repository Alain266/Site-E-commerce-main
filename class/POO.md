<!--Class d'un produit-->
Product {
	constructor -->
		id: 
		name: 
		description: 
		prix: 
		categorie: 
		note: 
		image: 
	method -->
}


<!--Class pour la livraison-->
Cart {
	constructor -->
		idProduct: 
		quantity: 
	method -->
		init();
		calculTotalProduct(tr_cart_product);
		calculTotalCart();
		manageProductEvent(tr_cart_product);
		manageInfluentPriceOnChangeEvents(tr_cart_product);
		manageRemoveProductEvent(tr_cart_product);
		initCartProducts();
		manageDeliveryChange();
		validateForm();
		getProducts();
		fill_products();
}




<!--Class pour le choix de la livraison-->
Delivery {
	constructor -->
		type: 
		price:
	method -->
}


EXEMPLE TP : 

<!--Class pour la création d'une ligne dans le panier-->
Line {
	constructor -->
		name:
		image:
		price:
		quantity:
		total:
	method -->
		init();
		getProducts();
		fill_products();
}

<!--Class pour la création du panier-->
Lines {
	constructor -->
		totalLine:
	method -->
}


<!--Class pour la livraison-->
Shipment {
	constructor -->
		type: 
		price:
	method -->
		manageDeliveryChange();
}

<!--Class pour la livraison-->
Cart {
	constructor -->
		idProduct: 
		quantity: 
	method -->
		init();
		calculTotalProduct(tr_cart_product);
		calculTotalCart();
		manageProductEvent(tr_cart_product);
		manageInfluentPriceOnChangeEvents(tr_cart_product);
		manageRemoveProductEvent(tr_cart_product);
		initCartProducts();
		manageDeliveryChange();
		validateForm();
		getProducts();
		fill_products();
}
