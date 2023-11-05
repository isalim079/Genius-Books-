import logo from '/logo96.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-lightCoffeeShade text-base-content">
                <aside className='pl-16'>
                    <img src={logo} />
                    <p>
                        Genius Books
                        <br />
                        Providing reliable service since 1992
                    </p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Books</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Reading Contest</a>
                    <a className="link link-hover">Special events</a>
                </nav>
                <nav>
                    <header className="footer-title">Genius Books</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
