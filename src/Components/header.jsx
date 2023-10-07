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

            <div className='search'>
                <input
                type="text"
                placeholder='Search Product'
                />
            </div>

            <div className="sign">
                <button>Sign In</button>
            </div>

            <div className='drop-down'>
                <img
                src="./images/drop-down.svg"
                alt="" />
            </div>

        </header>
    );
}
        
        

export default Header;