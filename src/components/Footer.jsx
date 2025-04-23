export default function Footer() {
    return (
        <div className="container-fluid footer-custom" data-bs-theme="dark">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Generi</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Piattaforme</a></li>
                    {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> */}
                </ul>
                <p className="text-center text-body-secondary">&copy; 2025 Company, Inc</p>
            </footer>
        </div>
    );
}