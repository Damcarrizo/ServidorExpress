class ProductManager{
    constructor ( title, description, price, thumbnail, code, stock){
        //this.id = ProductManager.idRandom(6)//
        this.id= 0;
        this.title= title;
        this.description = description;
        this.price = price;
        this.thumbnail= thumbnail;
        this.code = code;
        this.stock = stock;
       // this.path = ProductManager.productPath(this.id);//
        this.products = [];
    }
    
    listar(id){
        let prod = this.products.find(prod => prod.id == id)
        return prod || { error: " Producto no encontrado"}
    }

    listarAll(){
        return this.products.lenght? this.products : {error: 'No hay products cargados'}
    }

    guardar(prod){
        prod.id = ++ this.id
        this.products.push(prod)
    }

    actualizar(prod,id){
        prod.id = Number(id)
        let index = this.products.findIndex(prod=> prod.id ==id)
        this.products.splice(index,1,prod)
    }

    borrar(id){
        let index = this.products.findIndex(pord=> prod.id == id)
        return this.products.splice(index,1)
    }

}

export default ProductManager