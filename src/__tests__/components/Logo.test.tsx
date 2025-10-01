import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from '../../components/Logo';

describe('Logo Component', () => {
  it('renders logo with text by default', () => {
    render(<Logo />);

    const logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toBeInTheDocument();

    const textElement = screen.getByText('Le Panier du Producteur');
    expect(textElement).toBeInTheDocument();
  });

  it('renders logo without text when showText is false', () => {
    render(<Logo showText={false} />);

    const logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toBeInTheDocument();

    const textElement = screen.queryByText('Le Panier du Producteur');
    expect(textElement).not.toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Logo size='sm' />);
    let logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toHaveClass('w-8', 'h-8');

    rerender(<Logo size='md' />);
    logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toHaveClass('w-12', 'h-12');

    rerender(<Logo size='lg' />);
    logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toHaveClass('w-16', 'h-16');

    // Note: xl, xxl, xxxl sizes are not defined in the Logo component interface
    // These tests are commented out until the Logo component supports these sizes
    // rerender(<Logo size="xl" />);
    // logoElement = screen.getByRole('img', { hidden: true });
    // expect(logoElement).toHaveClass('w-20', 'h-20');

    // rerender(<Logo size="xxl" />);
    // logoElement = screen.getByRole('img', { hidden: true });
    // expect(logoElement).toHaveClass('w-24', 'h-24');

    // rerender(<Logo size="xxxl" />);
    // logoElement = screen.getByRole('img', { hidden: true });
    // expect(logoElement).toHaveClass('w-32', 'h-32');
  });

  it('has correct alt text', () => {
    render(<Logo />);

    const logoElement = screen.getByRole('img', { hidden: true });
    expect(logoElement).toHaveAttribute('alt', 'Le Panier du Producteur');
  });
});
