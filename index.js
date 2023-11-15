  class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      // Generar un ID único para el producto
      const id = Date.now().toString();
      const newProduct = { id, ...product };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const index = this.products.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error('Producto no encontrado');
      }
      // Actualizar campos del producto sin cambiar el ID
      this.products[index] = { ...this.products[index], ...updatedFields };
      return this.products[index];
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error('Producto no encontrado');
      }
      // Eliminar el producto
      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  // Obtener productos (debería ser un array vacío)
  console.log(productManager.getProducts());
  
  // Agregar un nuevo producto
  const newProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  };
  const addedProduct = productManager.addProduct(newProduct);
  console.log('Producto agregado:', addedProduct);
  
  // Obtener productos (debería contener el producto recién agregado)
  console.log(productManager.getProducts());
  
  // Obtener producto por ID
  const productId = addedProduct.id;
  console.log('Producto por ID:', productManager.getProductById(productId));
  
  // Actualizar producto
  const updatedFields = { price: 250, stock: 30 };
  const updatedProduct = productManager.updateProduct(productId, updatedFields);
  console.log('Producto actualizado:', updatedProduct);
  
  // Eliminar producto
  const deletedProduct = productManager.deleteProduct(productId);
  console.log('Producto eliminado:', deletedProduct);
  
  // Intentar obtener el producto eliminado (debería arrojar un error)
  try {
    console.log(productManager.getProductById(productId));
  } catch (error) {
    console.error(error.message);
  }






