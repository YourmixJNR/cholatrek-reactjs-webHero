import '../App.css'

const Hero = () => {
    return(
        <div className="hero">

            <div>
                <img 
                    src="./images/hero.webp" 
                    alt="Hero Image" 
                    className='hero-img'
                />
            </div>

            <div className='hero-word'>
                <i>60% Discount</i>
                <h1>Winter Collecton</h1>
                <em>Best Cloth Collection By 2020!</em>
                <button>Shop Now</button>
            </div>

        </div>
    )
}

export default Hero;