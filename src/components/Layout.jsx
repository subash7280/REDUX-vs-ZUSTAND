
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <>
            <div style={styles.wrapper}>
                <Header />

                {/* Main Content */}
                <main style={styles.main}>{children}</main>

                <Footer />
            </div>
        </>
    );
};

const styles = {
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        borderBottom: "2px solid #444",
    },
    headerTitle: {
        margin: 0,
        fontSize: "2rem",
    },
    nav: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
    },
    navLink: {
        color: "#90caf9",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
        cursor: "pointer",
    },
    main: {
        flex: 1,
        padding: "40px",
    },
    footer: {
        backgroundColor: "#1e1e1e",
        color: "#ccc",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    },
    gitImage: {
        width: "24px",
        height: "24px",
    },
    gitLink: {
        display: "inline-flex",
        alignItems: "center",
    },
};

export default Layout;