import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="flex-grow bg-red-500">
                <label className="btn btn-primary drawer-button">Open Right drawer</label>
                <label className="btn btn-primary drawer-button">Open Left drawer</label>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}