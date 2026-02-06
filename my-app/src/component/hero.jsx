const HeroSection = () =>{
    return(
        <div className="hero-sec container">
            <div className="hcontent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hbtn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="avilable">
                    <p>Also Available On</p>
                    <div className="aimg">
                        <img src="/public/imges/amazon.png"/>
                        <img src="/public/imges/flipkart.png"></img>
                    </div>
                </div>
            </div>
            <div className="himg">
                <img src="/public/imges/shoe_image.png"></img>
            </div>
        </div>
    );
};

export default HeroSection;