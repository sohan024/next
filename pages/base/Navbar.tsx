import { useState } from "react";
import StoreDialogue from "./StoreDialogue";

const Navbar = () => {
  const [isStoreDialogueOpen, setIsStoreDialogueOpen] = useState(false);

  const handleStoreOpen = () => {
    setIsStoreDialogueOpen(!isStoreDialogueOpen);
  };

  return (
    <div className="nav-container">
      <nav>
        <img className="logo" src="../logo/logo (1) 1.png" alt="Logo" />

        <div className="home-container">
          <div className="home">Home</div>
        </div>
        <div className="shop-container" onClick={handleStoreOpen}>
          <div className="shop">Shop</div>
        </div>
        <div className="blog-container">
          <div className="blog">Blogs</div>
        </div>
        <div className="showrooms-container">
          <div className="showrooms">Showrooms</div>
        </div>
        <div className="help-container">
          <div className="help">Help</div>
        </div>
        {/* <div className="signin-button">
        <button>Sign In</button>
      </div> */}
        <div className="buttons-container">
          <div className="search-container">
            <div className="search-box">
              <img src="../logo/search.svg" alt="here" />
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-box">
              <img src="../logo/user.svg" alt="here" />
            </div>
          </div>
          <div className="cart-container">
            <div className="cart-box">
              <img src="../logo/shopping-cart.svg" alt="here" />
            </div>
          </div>
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
              // justify-content: space-between;
              // align-items: center;
              // padding: 1rem;
              background-color: #000;
              position: sticky;
              top: 0;
              left: 0;
              width: 1920px;
              height: 78px;
              overflow: hidden;
              font-size: var(--font-size-lg);
            }

            .logo {
              position: absolute;
              top: 27px;
              left: 23px;
              width: 103.81px;
              height: 32px;
              object-fit: cover;
            }

            .title {
              flex-grow: 1;
              text-align: center;
              font-size: 1.2rem;
              font-weight: bold;
            }
            .home-container {
              position: absolute;
              top: 28px;
              left: 650px;
              width: 89px;
              height: 34px;
            }
            .shop-container {
              position: absolute;
              top: 28px;
              left: 771px;
              width: 89px;
              height: 34px;
            }
            .help-container {
              position: absolute;
              top: 28px;
              left: 1181px;
              width: 89px;
              height: 34px;
            }
            .showrooms-container {
              position: absolute;

              width: 136px;
              height: 34px;
              top: 28px;
              left: 1013px;
            }
            .blog-container {
              position: absolute;
              top: 28px;
              left: 892px;
              width: 89px;
              height: 34px;
            }
            .help {
              position: absolute;
              top: 3px;
              left: 24px;
              font-weight: 500;
              color: white;
            }
            .showrooms {
              position: absolute;
              top: 3px;
              left: 14px;
              font-weight: 500;
              color: white;
            }
            .blog {
              position: absolute;
              top: 2px;
              left: 17px;
              font-weight: 500;
              color: white;
            }
            .shop {
              position: absolute;
              top: 3px;
              left: 21px;
              font-weight: 500;
              color: white;
            }
            .home {
              // position: absolute;
              top: 3px;
              left: 18px;
              font-weight: 500;
              color: white;
            }

            .buttons-container {
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 0px;
              gap: 16px;

              position: absolute;
              width: 134px;
              height: 34px;
              left: 1763px;
              top: 25px;
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
    </div>
  );
};

export default Navbar;
