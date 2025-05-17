
const Footer = () => {

    let year = null;

    try {
        year = new Date().getFullYear() || null;
    }
    catch (error) {
        console.log('error in the YEAR :>> ', error);

        year = null;
    };

    return (
        <>
            <footer style={styles?.footer}>
                <p>© {year ? year : ``} Built by <strong>Subash Eswaramoorthi</strong></p>
                <a
                    href="https://github.com/subash7280"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles?.gitLink}
                >
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        style={styles?.gitImage}
                    />
                </a>
            </footer>
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

export default Footer;