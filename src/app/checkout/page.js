import Checkout from '../../components/CheckOut';

const CheckoutPage = () => {
  // Assume you have cartItems from some context or state management
  const cartItems = []; // Replace this with actual data from context or state

  return (
    <div>
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default CheckoutPage;
