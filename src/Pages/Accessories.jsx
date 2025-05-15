const accessories = [
  {
    id: 1,
    name: "WRKHRD Gym Backpack",
    price: "$39.99",
    image: "./images/backpack.png"
  },
  {
    id: 2,
    name: "WRKHRD Sport Sunglasses",
    price: "$19.99",
    image: "./images/sunglasses.png"
  },
  {
    id: 3,
    name: "WRKHRD Workout Towel",
    price: "$14.99",
    image: "./images/towel.png"
  },
  {
    id: 4,
    name: "WRKHRD Duffel Bag",
    price: "$59.99",
    image: "./images/duffel.png"
  }
];

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  card: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    transition: 'transform 0.2s ease'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

function Accessories() {
  return (
    <div style={styles.container}>
      <h2>Accessories</h2>
      <div style={styles.grid}>
        {accessories.map(item => (
          <div style={styles.card} key={item.id}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;