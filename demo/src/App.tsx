import { Virtualize } from 'pnmrvvtl-components';
import './index.css';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

export interface Product {
  id: number
  name: string
  description: string
  ean: string
  upc: string
  image: string
  images: Image[]
  net_price: number
  taxes: number
  price: number
  categories: number[]
  tags: string[]
}

export interface Image {
  title: string
  description: string
  url: string
}

function ProductItem({ product }: { product: Product }) {
  return (
    <div className={styles.productContainer}>
      <h1>{product.name}</h1>
      <img src={product.images[0]?.url} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakerapi.it/api/v2/products?_quantity=300');
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);


  return (
    <div className="buttonsContainer">
      <Virtualize
        items={products}
        renderItem={(product: Product) => <ProductItem product={product} />}
        rowGap={10}
        columnGap={10}
        columnsNumber={5}
      />
    </div>
  );
};

export default App;
