import '../App.css'

const Header = () => {
    return (
        <header>

            <div className='nav-bar'>
                <div className='logo'>
                    <img
                    src="logo.webp"
                    alt="Website Logo"
                    className="logo"
                    />
                </div>
            </div>

            <div className='links'>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                    <li>Latest</li>
                    <li>Blog</li>
                    <li>Pages</li>
                </ul>
            </div>
            
        </header>
    );
}
        
        

export default Header;