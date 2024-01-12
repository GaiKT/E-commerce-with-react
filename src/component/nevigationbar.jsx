
function NevigationBar() {
    return(
    <>
        <nav>
            <div className="logo">
                <h1>Ecommerce Website</h1>
            </div>
            <div className="menuBar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">Contect Us</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="freeShippingBar">
            <p>Free! Shipping in thailand on all orders above <span>$500</span></p>
        </div>
    </>
    );
}

export default NevigationBar