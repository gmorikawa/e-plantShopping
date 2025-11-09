function PlantCard({ name, image, description, cost }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{cost}</p>
            <p>{description}</p>
        </div>
    );
}

export default PlantCard;