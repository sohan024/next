import { useState } from "react";
import StoreDialogue from "./StoreDialogue";

const Navbar = () => {

    const [isStoreDialogueOpen, setIsStoreDialogueOpen] = useState(false);

    const handleStoreOpen = () => {
        setIsStoreDialogueOpen(!isStoreDialogueOpen);
    };


    return (
        <nav>
            <div className="logo">
                <img src="../logo/logo (1) 1.png" alt="Logo" />
            </div>
            <div className="home-container">
                <p className="home">Home</p>
            </div>
            <div className="shop-container" onClick={handleStoreOpen}>
                <p className="shop">Shop</p>
            </div>
            <div className="blog-container">
                <p className="blog">Blog</p>
            </div>
            <div className="signin-button">
                <button>Sign In</button>
            </div>


            {isStoreDialogueOpen && (
                <div className="dialogue-overlay">
                    <StoreDialogue />
                </div>
            )}


            <style jsx>
                {`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: #f5f5f5;
          }

          .logo img {
            position: absolute;
            width: 103.81px;
            height: 32px;
            left: 23px;
            top: 27px;
          }

          .title {
            flex-grow: 1;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
          }
          .home-container {
            position: absolute;
            width: 54px;
            height: 31px;
            left: 668px;
            top: 31px;
          }
          .home {
            position: absolute;
            width: 54px;
            height: 27px;
            left: 668px;
            top: 31px;

            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;

            color: #000;
          }

          .signin-button button {
            background-color: orange;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
          }

          .dialogue-overlay {
            position: fixed;
            top: 100px; /* Adjust the top value to align the dialogue as desired */
            left: 50%;
            transform: translateX(-50%);
            z-index: 10; /* Higher z-index value to appear above other content */
            background-color: #ffffff;
            border: 1px solid #ccc;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem;
          }

        `}
            </style>
        </nav>
    );
};

export default Navbar;
