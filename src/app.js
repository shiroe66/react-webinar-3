import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Cart from "./components/cart";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';

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

  return (
    <>
      <PageLayout>
        <Head title='Магазин' />
        <Cart cart={cart} openModal={callbacks.handleModalState} />
        <List list={list} handleInteraction={callbacks.handleAdd} interactionTitle={'Добавить'} />
      </PageLayout>
      {isOpenModal &&
        <Modal title='Корзина'
          items={cart}
          closeModal={callbacks.handleModalState}
          handleInteraction={callbacks.handleDelete} interactionTitle={'Удалить'} />}
    </>
  );
}

export default App;
