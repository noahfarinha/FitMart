import { getProducts } from "../data/products";

export default function Home(){
    const products = getProducts();
    return (
     <div className="page">
        <div className="home-hero">
           
                <h1 className="home-title"> Welcome to FitMart</h1>
                <p>Gym and Fitness equiment at unbeatable prices! </p>
            </div>

        <div className="container">
            <h2 className="page-title">Product List</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                      <img src={product.image} className="product-card-image" />  
                      <div className="product-card-content">
                        <h3>{product.name}</h3>
                        </div>
                    </div>
                ))}

            </div>

            </div>
    </div>
    );
}