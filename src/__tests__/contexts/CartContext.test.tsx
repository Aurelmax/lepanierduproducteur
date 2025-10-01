import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { CartProvider, useCart } from '../../contexts/CartContext';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const wrapper = ({ children }: { children: ReactNode }) => <CartProvider>{children}</CartProvider>;

describe('CartContext', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  it('should initialize with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.state.items).toEqual([]);
    expect(result.current.state.totalItems).toBe(0);
    expect(result.current.state.totalPrice).toBe(0);
    expect(result.current.state.isOpen).toBe(false);
  });

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const newItem = {
      id: 'test-item',
      name: 'Test Product',
      price: 10.0,
      unit: 'kg' as const,
      quantity: 1,
    };

    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: newItem,
      });
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0]).toEqual({
      ...newItem,
      totalPrice: 10.0,
    });
    expect(result.current.state.totalItems).toBe(1);
    expect(result.current.state.totalPrice).toBe(10.0);
  });

  it('should update item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    // Add initial item
    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: 'test-item',
          name: 'Test Product',
          price: 10.0,
          unit: 'kg' as const,
          quantity: 1,
        },
      });
    });

    // Update quantity
    act(() => {
      result.current.dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: 'test-item', quantity: 3 },
      });
    });

    expect(result.current.state.items[0]?.quantity).toBe(3);
    expect(result.current.state.items[0]?.totalPrice).toBe(30.0);
    expect(result.current.state.totalItems).toBe(3);
    expect(result.current.state.totalPrice).toBe(30.0);
  });

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    // Add initial item
    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: 'test-item',
          name: 'Test Product',
          price: 10.0,
          unit: 'kg' as const,
          quantity: 1,
        },
      });
    });

    // Remove item
    act(() => {
      result.current.dispatch({
        type: 'REMOVE_ITEM',
        payload: 'test-item',
      });
    });

    expect(result.current.state.items).toHaveLength(0);
    expect(result.current.state.totalItems).toBe(0);
    expect(result.current.state.totalPrice).toBe(0);
  });

  it('should clear cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    // Add items
    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: 'test-item-1',
          name: 'Test Product 1',
          price: 10.0,
          unit: 'kg' as const,
          quantity: 1,
        },
      });
    });

    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: 'test-item-2',
          name: 'Test Product 2',
          price: 15.0,
          unit: 'kg' as const,
          quantity: 2,
        },
      });
    });

    // Clear cart
    act(() => {
      result.current.dispatch({ type: 'CLEAR_CART' });
    });

    expect(result.current.state.items).toHaveLength(0);
    expect(result.current.state.totalItems).toBe(0);
    expect(result.current.state.totalPrice).toBe(0);
  });

  it('should toggle cart open/close', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.state.isOpen).toBe(false);

    act(() => {
      result.current.dispatch({ type: 'TOGGLE_CART' });
    });

    expect(result.current.state.isOpen).toBe(true);

    act(() => {
      result.current.dispatch({ type: 'TOGGLE_CART' });
    });

    expect(result.current.state.isOpen).toBe(false);
  });

  it('should close cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    // Open cart first
    act(() => {
      result.current.dispatch({ type: 'TOGGLE_CART' });
    });

    expect(result.current.state.isOpen).toBe(true);

    // Close cart
    act(() => {
      result.current.dispatch({ type: 'CLOSE_CART' });
    });

    expect(result.current.state.isOpen).toBe(false);
  });

  it('should handle adding existing item (increment quantity)', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const item = {
      id: 'test-item',
      name: 'Test Product',
      price: 10.0,
      unit: 'kg' as const,
      quantity: 1,
    };

    // Add item first time
    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: item,
      });
    });

    // Add same item again
    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: item,
      });
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0]?.quantity).toBe(2);
    expect(result.current.state.items[0]?.totalPrice).toBe(20.0);
    expect(result.current.state.totalItems).toBe(2);
    expect(result.current.state.totalPrice).toBe(20.0);
  });
});
