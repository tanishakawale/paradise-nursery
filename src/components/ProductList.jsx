import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c8a" },
  { id: 2, name: "Peace Lily", price: 18, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
  { id: 3, name: "Monstera", price: 25, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1614594576371-7b5e7c6b4f4d" },
  { id: 4, name: "ZZ Plant", price: 20, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
  { id: 5, name: "Spider Plant", price: 12, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
  { id: 6, name: "Rubber Plant", price: 22, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1609429019995-8c40f49535a3" },

  // Flowering Plants
  { id: 7, name: "Rose Plant", price: 14, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322" },
  { id: 8, name: "Orchid", price: 30, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1566907225471-3e1e7c8d1f0e" },
  { id: 9, name: "Jasmine", price: 16, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651" },
  { id: 10, name: "Hibiscus", price: 13, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1597055181300-4a4d5f3b7b3a" },
  { id: 11, name: "Lavender", price: 17, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec" },
  { id: 12, name: "Marigold", price: 10, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1591197172062-cada724ae692" },

  // Succulents
  { id: 13, name: "Aloe Vera", price: 11, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
  { id: 14, name: "Echeveria", price: 9, category: "Succulents", image: "https://images.unsplash.com/photo-1515656382452-0bfc2d08f7d3" },
  { id: 15, name: "Jade Plant", price: 14, category: "Succulents", image: "https://images.unsplash.com/photo-1597055181300-4a4d5f3b7b3a" },
  { id: 16, name: "Haworthia", price: 12, category: "Succulents", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba" },
  { id: 17, name: "String of Pearls", price: 19, category: "Succulents", image: "https://images.unsplash.com/photo-1603481526960-6b6c7f8a6c0a" },
  { id: 18, name: "Zebra Haworthia", price: 13, category: "Succulents", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Indoor Plants", "Flowering Plants", "Succulents"];

  return (
    <div className="product-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const inCart = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={inCart}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {inCart ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;