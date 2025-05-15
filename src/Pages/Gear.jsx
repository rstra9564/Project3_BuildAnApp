const gearItems = [
  {
    id: 1,
    name: "WRKHRD Performance Tee",
    price: "$29.99",
    image: "./images/tshirt.png"
  },
  {
    id: 2,
    name: "WRKHRD Training Shorts",
    price: "$34.99",
    image: "./images/shorts.png"
  },
  {
    id: 3,
    name: "WRKHRD Hoodie",
    price: "$49.99",
    image: "./images/hoodie.png"
  },
  {
    id: 4,
    name: "WRKHRD Tank Top",
    price: "$24.99",
    image: "./images/tank.png"
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
  cardHover: {
    transform: 'scale(1.03)'
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

function Gear() {
  return (
    <div style={styles.container}>
      <h2>Gear</h2>
      <div style={styles.grid}>
        {gearItems.map(item => (
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

export default Gear;