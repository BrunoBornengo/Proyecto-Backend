class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateUniqueId() {
      return Math.random().toString(36).substr(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      if (this.products.some((p) => p.code === product.code)) {
        throw new Error("El código del producto está repetido.");
      }
  
      product.id = this.generateUniqueId();
      this.products.push(product);
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    }
  }
  

  const productManager = new ProductManager();
  

  console.log(productManager.getProducts()); // []
  

  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  

  console.log(productManager.getProducts());
  

  try {
    productManager.addProduct({
      title: "Otro producto",
      description: "Otro producto de prueba",
      price: 150,
      thumbnail: "Sin imagen",
      code: "abc123",
      stock: 30,
    });
  } catch (error) {
    console.error(error.message);
  }
  

  const foundProduct = productManager.getProductById(productManager.products[0].id);
  console.log(foundProduct);






