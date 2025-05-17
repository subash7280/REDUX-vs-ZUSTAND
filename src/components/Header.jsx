
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const currentPath = router?.pathname;

    const links = [
        { label: "Home", path: "/" },
        { label: "Redux Todo", path: "/using-redux" },
        { label: "Zustand Todo", path: "/using-zustand" },
    ];

    const filteredLinks = links?.filter(link => link?.path !== currentPath);

    return (
        <header style={styles?.header}>
            <h1 style={styles?.headerTitle}>State Management Comparison</h1>
            <nav style={styles?.nav}>
                {
                    filteredLinks?.map(link => (
                        <a
                            key={link?.path}
                            style={styles?.navLink}
                            onClick={() => router?.push(link?.path)}
                        >
                            {link?.label}
                        </a>
                    ))
                }
            </nav>
        </header>
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

    header: {
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginBottom: "30px",
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
        transition: "color 0.3s",
    },

    navLinkHover: {
        color: "#fff",
    },
};

export default Header;