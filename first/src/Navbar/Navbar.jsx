import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file
import { FaShoppingCart, FaTruck, FaShoppingBag, FaCreditCard } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineOnlinePrediction } from "react-icons/md";

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const spans = document.querySelectorAll('.nav_text span');
        spans.forEach((span, index) => {
          span.style.setProperty('--char-index', index);
        });
    }, []);

    const handleNavigationToNavbar = () => {
        navigate('/');
    };
    const handleNavigationToAbout = () => {
      navigate('/about');
  };
  const handleNavigationToContact = () => {
    navigate('/contact');
};
const handleNavigationToShop = ()=>{
  navigate('/shop');
}


    return (
        <>
            <div className='front_img'>
                <div className='nav_main'>
                    <div className='nav_text'>
                        <span>C</span>
                        <span>l</span>
                        <span>a</span>
                        <span>s</span>
                        <span>s</span>
                        <span>i</span>
                        <span>c</span>
                        <span>s</span>
                    </div>
                    <div className='nav_btn'>
                        <button onClick={handleNavigationToNavbar}>Home</button> 
                        <button onClick={handleNavigationToShop}>Shop</button>
                        <button onClick={handleNavigationToAbout}>About</button>
                        <button onClick={handleNavigationToContact}>Contact</button>
                    </div>
                    <div className='nav_cart'><button onClick={()=>{navigate('/cart')}}><FaShoppingCart/></button></div>
                </div>
                <div className='text_overlay'>
                    <p>Hey!! It's Classics</p>
                    <h1>Welcome to Our Shop</h1>
                    <p>Discover amazing products and unbeatable deals</p>
                </div>
                <div className='img_btn'>
                    <button onClick={handleNavigationToShop}>Shop Now <HiOutlineShoppingBag/></button>
                </div>
            </div>
            <div className='features-section'>
                <div className='feature'>
                    <MdOutlineOnlinePrediction className='feature-icon' />
                    <h3>Online Order</h3>
                    <p>Shop conveniently from the comfort of your home with our easy-to-use online ordering system.</p>
                </div>
                <div className='feature'>
                    <FaTruck className='feature-icon' />
                    <h3>Free Shipping</h3>
                    <p>Enjoy free shipping on all orders, making your shopping experience even more rewarding.</p>
                </div>
                <div className='feature'>
                    <FaShoppingBag className='feature-icon' />
                    <h3>Most Fashionable</h3>
                    <p>Stay on trend with our curated collection of the most fashionable and stylish products.</p>
                </div>
                <div className='feature'>
                    <FaCreditCard className='feature-icon' />
                    <h3>Safe Payment</h3>
                    <p>Shop with confidence using our secure payment options, ensuring your transactions are always protected.</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;