import HomeTop from "./base/HomeTop";
import GetProducts from "./catalog/product/productList/GetProducts";

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <img className="red-sofa-bg" alt="" src="../logo/red-sofa-bg.png" />
        <div className="home-child"></div>
        <div className="furnishing-crafts-parent">
          <b className="furnishing-crafts">Furnishing crafts</b>
          <div className="the-expression-of">The expression of a house</div>
          <img className="group-child" alt="" src="../logo/vector-2.svg" />

          <img className="group-item" alt="" src="../logo/vector-2.svg" />
        </div>
        <div className="arrow-up-1-parent">
          <img className="arrow-up-1-icon" alt="" src="../logo/arrowup-1.svg" />
          <div className="div1">1</div>
          <img className="arrow-up-2-icon" alt="" src="../logo/arrowup-2.svg" />
        </div>
      </div>

      <style jsx>{`
        .homepage-container {
          // display: flex;
          // flex-direction: column;
          // align-items: center;
          position: relative;
          background-color: var(--white);
          width: 100%;
          height: 10799px;
          overflow: hidden;
          text-align: left;
          font-size: var(--text-btn-size);
          color: var(--white);
          font-family: var(--text-btn);
        }
        .arrow-up-1-parent {
          position: absolute;
          top: 453px;
          left: 1849px;
          width: 48px;
          height: 264px;
          font-size: var(--font-size-29xl);
        }
        .div1 {
          position: absolute;
          top: 96px;
          left: 19px;
          font-weight: 100;
        }
        .arrow-up-1-icon,
        .arrow-up-2-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 48px;
          height: 48px;
          overflow: hidden;
        }
        .arrow-up-2-icon {
          top: 216px;
        }
        .furnishing-crafts-parent {
          position: absolute;
          top: 197px;
          left: calc(50% - 525px);
          width: 1117px;
          height: 257px;
          font-size: var(--font-size-61xl);
        }
        .furnishing-crafts {
          position: absolute;
          top: 0;
          left: calc(50% - 558.5px);
        }
        .the-expression-of {
          position: absolute;
          top: 159px;
          left: calc(50% - 260.5px);
          font-size: var(--font-size-46xl);
          font-weight: 100;
        }
        .group-child,
        .group-item {
          position: absolute;
          top: 67.5px;
          left: 739px;
          width: 252px;
          height: 1px;
        }
        .group-item {
          top: 207.5px;
          left: 0;
        }
        .home-child {
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--color-gray-100);
          width: 1920px;
          height: 1080px;
        }
        .red-sofa-bg {
          position: absolute;
          top: 0;
          left: calc(50% - 960px);
          width: 1920px;
          height: 1108px;
          object-fit: cover;
        }
        .one {
          font-size: 500px;
          color: brown;
        }
      `}</style>
    </>
  );
};

export default HomePage;
