function InventoryItem({ name, type, quantity = 1, price = 0 }) {
  const totalValue = quantity * price;
  const lowStock = quantity < 5;
  const highValue = totalValue > 1000;

  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Total Value: ${totalValue.toFixed(2)}</p>

      {lowStock && <Message>Warning: Low Stock!</Message>}
      {highValue && (
        <Message style={ color: "red", fontWeight: "bold"}>
          High Value Item: Extra Protection Necessary!
        </Message>
      )}
    </div>
  );
}
