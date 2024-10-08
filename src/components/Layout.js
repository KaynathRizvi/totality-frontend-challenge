import { CartProvider } from '../context/CartContext';
import Navbar from '../components/NavBar'; // Import your Navbar component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar /> {/* Place the Navbar here to render it on every page */}
          {children} {/* This will render the page content */}
        </CartProvider>
      </body>
    </html>
  );
}
