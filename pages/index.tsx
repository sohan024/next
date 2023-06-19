import HomeTop from './base/HomeTop';
import GetProducts from './catalog/product/productList/GetProducts';

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <HomeTop />
        <GetProducts />
      </div>

      <style jsx>{`
                .homepage-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .one{
                  font-size: 500px;
                  color: brown;
                }
            `}</style>
    </>
  );
};

export default HomePage;