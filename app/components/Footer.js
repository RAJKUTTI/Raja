
const Footer = () => {
    return (
        <footer className="py-6 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center text-brand-text">
                <p>&copy; {new Date().getFullYear()} Raja. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;