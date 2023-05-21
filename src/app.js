import React, { useCallback, useMemo, useState } from 'react';
import List from "./components/list";
import Cart from "./components/cart";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';
import Item from './components/item'
import CartItem from './components/cart/item'
import Total from './components/total'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const list = store.getState().list;
  const cart = store.getState().cart

  const callbacks = {
    handleAdd: useCallback((code) => {
      store.addItem(code);
    }, [store]),
    handleDelete: useCallback((code) => {
      store.deleteItem(code)
    }, [store]),
    handleModalState: () => {
      setIsOpenModal((prev) => !prev)
    }
  }

  const computed = {
    total: useMemo(() => {
      return store.getCartTotal()
    }, [store.state.cart])
  }

  return (
    <>
      <PageLayout>
        <Head title='Магазин' />
        <Cart info={computed.total} openModal={callbacks.handleModalState} />
        <List list={list} item={Item} handleInteraction={callbacks.handleAdd} />
      </PageLayout>
      {isOpenModal &&
        <Modal title='Корзина' closeModal={callbacks.handleModalState}>
          <List list={cart} item={CartItem} handleInteraction={callbacks.handleDelete} />
          <Total cost={computed.total.cost} />
        </Modal>}
    </>
  );
}

export default App;
