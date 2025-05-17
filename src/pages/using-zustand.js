
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import useTodoStore from '@/stateManagement/zustand/store';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import { TOAST_INTERVAL } from '@/utils/constants';
import Loader from '@/components/Loader';

const UsingZustand = () => {

  const {
    userInput,
    list,
    editIndex,
    setUserInput,
    addOrUpdateItem,
    deleteItem,
    startEdit,
  } = useTodoStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, TOAST_INTERVAL);
    };

  }, [loading]);

  if (loading) {

    return (
      <>
        <Loader />
      </>
    );
  }
  else {

    return (
      <Layout>
        <Head>
          <title>Todo App using ZUSTAND - State Management</title>
          <meta name="description" content="Experience the Todo app implemented with ZUSTAND for simple and scalable state management." />
        </Head>

        <div style={styles.container}>
          <div style={styles.title}>ZUSTAND TODO LIST</div>

          <div style={styles.inputContainer}>
            <input
              style={styles.input}
              placeholder={editIndex !== null ? 'Edit item?...' : 'Add item?...'}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />

            <button style={styles.addButton} onClick={addOrUpdateItem}>
              {editIndex !== null ? 'Update' : 'ADD'}
            </button>
          </div>

          <div style={styles.listContainer}>
            {list?.length > 0 ? (
              list.map((item, index) => (
                <div key={item?.id} style={styles.listItem}>
                  <span style={styles.itemText}>{item?.value}</span>
                  <span>
                    <button style={styles.deleteButton} onClick={() => deleteItem(item?.id)}>
                      Delete
                    </button>
                    <button style={styles.editButton} onClick={() => startEdit(index)}>
                      Edit
                    </button>
                  </span>
                </div>
              ))
            ) : (
              <div style={styles.noItems}>No items in the list</div>
            )}
          </div>
        </div>

      </Layout>
    );
  };
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: "black",
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    fontSize: '1.2rem',
    padding: '10px',
    marginRight: '10px',
    flexGrow: '1',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  listContainer: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  itemText: {
    fontSize: '1.2rem',
    flexGrow: '1',
    color: 'black',
  },
  deleteButton: {
    padding: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  editButton: {
    padding: '10px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  noItems: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#777',
  },
};

export default UsingZustand;