import './globals.css';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import CartSidebar from '../components/CartSidebar';
import { CartProvider } from '../contexts/CartContext';

export const metadata = {
  title: 'Le Panier du Producteur',
  description: 'Fruits et légumes frais directement du producteur',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className='bg-accent-light font-sans' suppressHydrationWarning={true}>
        <CartProvider>
          <ModernHeader />
          <main className='min-h-screen'>{children}</main>
          <ModernFooter />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
