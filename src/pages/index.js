import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { TOAST_INTERVAL } from "@/utils/constants";

const Index = () => {

    const router = useRouter();

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
                    <title>Todo App Comparison: Redux vs Zustand (React State Management)</title>
                    <meta
                        name="description"
                        content="Compare Redux and Zustand in a React Todo App. Learn the differences in setup, structure, and simplicity."
                    />
                </Head>

                <div style={styles.container}>
                    <h1 style={styles.title}>Redux vs Zustand: A Practical Todo App Comparison</h1>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>🔧 What is Redux?</h2>
                        <p style={styles.text}>
                            <strong>Redux</strong> is a predictable state container used mainly for large-scale applications. It uses a global store,
                            actions to trigger changes, and reducers to update the state. It promotes immutability and unidirectional data flow.
                        </p>
                        <p style={styles.exampleTitle}>Redux Dispatch Example:</p>
                        <pre style={styles.code}>
                            {`dispatch({ type: 'ADD_TODO', payload: 'Learn Redux' });`}
                        </pre>
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>💾 Redux with Persistence</h2>
                        <p style={styles.text}>
                            With <code>redux-persist</code>, you can automatically save the Redux store in the browser’s <code>localStorage</code>.
                            This keeps your todos even after a page reload.
                        </p>
                        <pre style={styles.code}>
                            {`import { persistReducer } from 'redux-persist';
    import storage from 'redux-persist/lib/storage';
    
    const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);`}
                        </pre>
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>⚡ What is Zustand?</h2>
                        <p style={styles.text}>
                            <strong>Zustand</strong> is a minimal and flexible state management library built on top of React hooks. No actions or reducers are required.
                            It’s simple, scalable, and often easier to integrate into small and medium projects.
                        </p>
                        <p style={styles.exampleTitle}>Zustand Example:</p>
                        <pre style={styles.code}>
                            {`const useTodoStore = create((set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] }))
    }));`}
                        </pre>
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>💾 Zustand with Persistence</h2>
                        <p style={styles.text}>
                            Zustand has built-in support for persisting state using the <code>persist</code> middleware.
                            This makes it simple to retain data across sessions.
                        </p>
                        <pre style={styles.code}>
                            {`import { persist } from 'zustand/middleware';
    
    const useStore = create(persist(
      (set) => ({
        count: 0,
        inc: () => set((s) => ({ count: s.count + 1 }))
      }),
      { name: 'counter-storage' }
    ));`}
                        </pre>
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>📊 Redux vs Zustand: Feature Comparison</h2>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Redux</th>
                                    <th>Zustand</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Boilerplate Code</td>
                                    <td>High (actions, reducers)</td>
                                    <td>Low (direct state setters)</td>
                                </tr>
                                <tr>
                                    <td>Persistence</td>
                                    <td><code>redux-persist</code></td>
                                    <td><code>persist</code> middleware</td>
                                </tr>
                                <tr>
                                    <td>Learning Curve</td>
                                    <td>Moderate to Hard</td>
                                    <td>Very Easy</td>
                                </tr>
                                <tr>
                                    <td>Performance</td>
                                    <td>Predictable & Scalable</td>
                                    <td>Fast & Lightweight</td>
                                </tr>
                                <tr>
                                    <td>Best Used For</td>
                                    <td>Large, complex apps</td>
                                    <td>Small/medium projects</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.heading}>🚀 Try It Yourself</h2>
                        <p style={styles.text}>
                            Click below to explore both versions of the Todo app. Experience the differences in code structure and usage first-hand:
                        </p>
                        <div style={styles.buttonContainer}>
                            <button
                                style={{ ...styles.button, backgroundColor: "#4caf50" }}
                                onClick={() => router.push("/using-redux")}
                            >
                                View Redux Todo
                            </button>
                            <button
                                style={{ ...styles.button, backgroundColor: "#2196f3" }}
                                onClick={() => router.push("/using-zustand")}
                            >
                                View Zustand Todo
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    };
};

const styles = {
    container: {
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
    },
    title: {
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "2rem",
    },
    section: {
        background: "white",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "30px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        fontSize: "1.5rem",
        marginBottom: "10px",
    },
    text: {
        fontSize: "1rem",
        lineHeight: "1.6",
    },
    exampleTitle: {
        marginTop: "10px",
        fontWeight: "bold",
    },
    code: {
        backgroundColor: "#f0f0f0",
        padding: "10px",
        borderRadius: "4px",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        fontSize: "0.9rem",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
    },
    buttonContainer: {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
    },
    button: {
        padding: "12px 24px",
        color: "#fff",
        fontSize: "1rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};

export default Index;