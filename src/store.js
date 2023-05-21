import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.state.cart = [] // Корзина
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление предмета по коду в корзину
   * @param code {number}
   */
  addItem(code) {
    const itemInCart = this.state.cart.find((item) => item.code === code)
    const item = this.state.list.find((item) => item.code === code)

    if (itemInCart) {
      this.setState({
        ...this.state,
        cart: this.state.cart.map((item) => {
          if (item.code === code) item.amount++
          return item
        })
      })
    } else {
      this.setState({
        ...this.state, cart: [...this.state.cart, { ...item, amount: 1 }]
      })
    }
  };

  /**
   * Удаление предмета по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(item => item.code !== code)
    })
  };

  /**
   * @typedef {Object} CartTotal
   * @property {number} length - Длина корзины
   * @property {number} cost - Итоговая стоимость товаров
   */

  /**
   * Получение размера и общей стоимости корзины
   * @returns {CartTotal}
   */
  getCartTotal() {
    const length = this.state.cart.length
    const cost = this.state.cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)

    return { length, cost }
  }
}

export default Store;
