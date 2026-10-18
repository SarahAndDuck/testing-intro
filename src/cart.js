

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}


// function addToCart() { return notImplemented(); }

function addToCart(cart, product, count) {
  if (count <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingProduct = cart.find(item => item.id === product.id)
  const currentQuantity = existingProduct ? existingProduct.quantity : 0
  if (currentQuantity + count > product.stock) {
    throw new RangeError('Нельзя добавить больше товара, чем есть на складе');
  }
  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + count }
        : item)
  }

  return [...cart, { ...product, quantity: count }]
}
















function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
