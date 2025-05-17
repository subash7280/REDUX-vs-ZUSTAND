
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

import {
  setUserInput,
  startEdit,
  addOrUpdateItem,
  deleteItem,
} from '@/stateManagement/redux/slice/todoSlice';
import Layout from '@/components/Layout';
import { TOAST_INTERVAL } from '@/utils/constants';
import Loader from '@/components/Loader';

export default function Home() {

  const dispatch = useDispatch();

  const { userInput, list, editIndex } = useSelector((state) => state?.todo);

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
          <title>Todo App using REDUX - State Management</title>
          <meta name="description" content="Experience the Todo app implemented with REDUX for efficient state management." />
        </Head>

        <div
          style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: "black",
            }}
          >
            REDUX TODO LIST
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input
              style={{
                fontSize: '1.2rem',
                padding: '10px',
                marginRight: '10px',
                flexGrow: '1',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              placeholder={editIndex !== null ? 'Edit item?...' : 'Add item?...'}
              value={userInput}
              onChange={(e) => dispatch(setUserInput(e.target.value))}
            />

            <button
              style={{
                fontSize: '1.2rem',
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => dispatch(addOrUpdateItem())}
            >
              {editIndex !== null ? 'Update' : 'ADD'}
            </button>
          </div>

          <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            {
              (list.length > 0)
                ?
                (
                  list?.map((item, index) => (
                    <div
                      key={item?.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      <span style={{ fontSize: '1.2rem', flexGrow: '1', color: 'black' }}>
                        {item?.value}
                      </span>

                      <span>
                        <button
                          style={{
                            padding: '10px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            marginRight: '10px',
                            cursor: 'pointer',
                          }}
                          onClick={() => dispatch(deleteItem(item?.id))}
                        >
                          Delete
                        </button>

                        <button
                          style={{
                            padding: '10px',
                            backgroundColor: '#2196f3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                          }}
                          onClick={() => dispatch(startEdit(index))}
                        >
                          Edit
                        </button>
                      </span>
                    </div>
                  ))
                )
                :
                (
                  <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#777' }}>
                    No items in the list
                  </div>
                )
            }
          </div>
        </div>

      </Layout>
    );
  };
};