import { useState } from "react";
import HomeTop from "./base/HomeTop";
import GetProducts from "./catalog/product/productList/GetProducts";
import StoreDialogue from "./base/StoreDialogue";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isStoreDialogueOpen = useSelector(
    (state: RootState) => state.storeDialogue
  );

  return (
    <>
      {isStoreDialogueOpen && (
        <div className="dialogue-overlay">
          <StoreDialogue />
        </div>
      )}
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
        <div className="circle-phone-flip-1-parent">
          <img
            className="circle-phone-flip-1-icon"
            alt=""
            src="../logo/circlephoneflip-1.svg"
          />
          <div className="call-parent">
            <div className="call-us">Call us</div>
            <div className="div-number">09 678 777 777</div>
          </div>
        </div>
        <div className="dotdefault"></div>
        <img className="popups-icon" alt="" src="../logo/popups.svg" />

        <img className="popups-icon1" alt="" src="../logo/popups.svg" />

        <img className="popups-icon2" alt="" src="../logo/popups.svg" />
        <img className="gallery-icon" alt="" src="../logo/gallery.svg" />

        <img className="office-icon" alt="" src="../logo/office.svg" />
        <div className="home-section-2">
          <div className="a-creation-that-container">
            <p className="custom-made">A creation that</p>
            <p className="custom-made">suits your</p>
            <p className="custom-made">personality</p>
          </div>
          <div className="change-the-look-container">
            <p className="custom-made">Change the look of your house,</p>
            <p className="custom-made">change the perspective of others</p>
          </div>
          <div className="explore-our-products1">Explore Our Products</div>
          <div className="product-details-banner">
            <div className="banner">
              <img
                className="home3-banner1-1-icon"
                alt=""
                src="../logo/ladder.png"
              />
            </div>

            {/* <div className="rectangle-parent1">
              <div className="instance-child"></div>
              <img
                className="durjan-266-htl-201-266-10-2-2-icon"
                alt=""
                src="../logo/ladder.png"
              />
            </div> */}
            {/* <div className="rectangle-parent1">
              <div className="instance-item"></div>
              <img
                className="durjan-266-htl-201-266-10-2-2-icon1"
                alt=""
                src="../logo/ladder.png"
              />
            </div> */}
            {/* <div className="center-table">
              <img
                className="home3-banner1-2-icon"
                alt=""
                src="../logo/ladder.png"
              />
            </div> */}
            {/* <div className="moduler-furniture">
              <img
                className="home3-banner1-2-icon"
                alt=""
                src="../logo/ladder.png"
              />
            </div> */}
          </div>
          <img className="home-child1" alt="" src="./public/vector-7.svg" />
        </div>
        <div className="group-container">
          <div className="rectangle-container">
            <img
              className="rectangle-icon"
              alt=""
              src="../logo/rectangle-explore-red.png"
            />

            <div className="custom-made-furniture-to-container">
              <p className="custom-made">
                Custom-made furniture to fit your unique tastes
              </p>
            </div>
          </div>
          <div className="group-div">
            <img
              className="group-child6"
              alt=""
              src="../logo/rectangle-explore-white.png"
            />

            <div className="let-your-living">
              Let your living space live up to your expectations
            </div>
          </div>
        </div>
        <div className="explore-our-products-group">
          <div className="explore-our-products2">Explore Our Products</div>
          <img
            className="group-child12"
            alt=""
            src="../logo/vector-explore-line.svg"
          />
        </div>
        <div className="explore-our-products-container">
          <div className="explore-our-products2">Explore Our Products</div>
          <img
            className="group-child20"
            alt=""
            src="../logo/vector-explore-line.svg"
          />
        </div>
        <div className="best-furniture-hatil-discount-parent">
          <img
            className="best-furniture-hatil-discount-icon"
            alt=""
            src="../logo/bestfurniturehatildiscountpartnerlobyhome-1@2x.png"
          />

          <img
            className="hatil-furniture-bangladesh-1-icon"
            alt=""
            src="../logo/hatilfurniturebangladesh-1@2x.png"
          />
        </div>
        <div className="home-inner">
          <div className="copyright-2022-hatil-all-righ-parent">
            <div className="copyright-2022-hatil">
              © Copyright 2022 HATIL. All Rights Reserved.
            </div>
            <div className="group-wrapper">
              <div className="group-frame">
                <div className="group-frame">
                  <div className="the-company-parent">
                    <div className="the-company">THE COMPANY</div>
                    <div className="about-hatil">About HATIL</div>
                    <div className="license-certificates">
                      License & Certificates
                    </div>
                    <div className="work-completion-certificate">
                      Work Completion Certificate
                    </div>
                    <div className="return-policy">Return Policy</div>
                    <div className="career">Career</div>
                    <div className="privacy-policy">Privacy Policy</div>
                    <div className="hatil-policies">HATIL Policies</div>
                  </div>
                  <div className="need-help-parent">
                    <div className="the-company">NEED HELP?</div>
                    <div className="contact-us">Contact Us</div>
                    <div className="faq">FAQ</div>
                    <div className="showroom-locator">Showroom Locator</div>
                    <div className="return-policy1">Return Policy</div>
                    <div className="billing-terms">
                      Billing Terms & Conditions
                    </div>
                    <div className="feedback">Feedback</div>
                  </div>
                  <div className="more-information-parent">
                    <div className="the-company">MORE INFORMATION</div>
                    <div className="about-hatil">Company Profile</div>
                    <div className="license-certificates">
                      Be Our Franchisee
                    </div>
                    <div className="work-completion-certificate">
                      HATIL Project Solution
                    </div>
                    <div className="return-policy">Our Team</div>
                    <div className="career">Catalogues</div>
                    <div className="privacy-policy">HATIL in News</div>
                  </div>
                  <div className="group-parent2">
                    <div className="corporate-office-parent">
                      <div className="corporate-office-parent">
                        <div className="the-company">CORPORATE OFFICE</div>
                        <div className="shewrapararokeya-sarani-mirp">
                          8 Shewrapara,Rokeya Sarani,
                          Mirpur,Dhaka-1216,Bangladesh.
                        </div>
                        <div className="div4">+88 02 58054370</div>
                        <div className="div5">+88 01713441000</div>
                      </div>
                    </div>
                    <img
                      className="frame-icon"
                      alt=""
                      src="./public/frame.svg"
                    />

                    <div className="infohatilcom">info@hatil.com</div>
                  </div>
                  <img
                    className="vector-icon1"
                    alt=""
                    src="./public/vector.svg"
                  />

                  <img
                    className="vector-icon2"
                    alt=""
                    src="./public/vector1.svg"
                  />

                  <img
                    className="vector-icon3"
                    alt=""
                    src="./public/vector2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="vector-parent">
              <img className="vector-icon4" alt="" src="./public/vector3.svg" />

              <img className="vector-icon5" alt="" src="./public/vector4.svg" />

              <img className="vector-icon6" alt="" src="./public/vector5.svg" />

              <img className="vector-icon7" alt="" src="./public/vector6.svg" />

              <img className="vector-icon8" alt="" src="./public/vector7.svg" />

              <div className="find-us">FIND US</div>
              <img
                className="apple-sign-1"
                alt=""
                src="./public/apple-sign-1@2x.png"
              />

              <img
                className="android-sign-2"
                alt=""
                src="./public/android-sign-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .homepage-container {
          // display: flex;
          // flex-direction: column;
          // align-items: center;
          z-index: 0;
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
        .home-child1,
        .home-section-2 {
          position: absolute;
          top: 732.5px;
          left: 472px;
          width: 105.5px;
          height: 1px;
        }
        .home-section-2 {
          top: 1076px;
          left: 0;
          background-color: var(--white);
          width: 1920px;
          height: 1080px;
          overflow: hidden;
          text-align: right;
          color: var(--font-dark);
        }
        .product-details-banner {
          position: absolute;
          top: calc(50% - 540px);
          right: -0.17px;
          width: 1302.17px;
          height: 1080px;
        }
        .product-details-banner-child {
          position: absolute;
          height: 50%;
          width: 47.15%;
          top: 50%;
          right: 52.77%;
          bottom: 0;
          left: 0.08%;
          background-color: var(--white);
        }
        .banner {
          position: absolute;
          height: 50%;
          width: 47.23%;
          top: 0;
          right: 52.77%;
          bottom: 50%;
          left: 0;
        }
        .home3-banner1-1-icon {
          position: absolute;
          height: 100%;
          width: 99.84%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0.16%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        }
        .a-creation-that-container {
          position: absolute;
          top: 276px;
          left: calc(50% - 859px);
          font-size: var(--h1-size);
          line-height: 74px;
          font-weight: 500;
        }
        .change-the-look-container {
          position: absolute;
          top: 534px;
          left: 84px;
          line-height: 48px;
          color: var(--color-darkslategray-200);
        }
        .explore-our-products1 {
          position: absolute;
          top: 676px;
          left: 272px;
        }
        .explore-our-products2 {
          position: absolute;
          top: 0;
          left: 0;
        }
        .explore-our-products-group {
          position: absolute;
          top: 2527px;
          left: 83px;
          width: 309px;
          height: 51px;
          text-align: right;
        }
        .group-child20 {
          position: absolute;
          top: 50.5px;
          left: 203px;
          width: 105.5px;
          height: 1px;
        }
        .explore-our-products-container {
          position: absolute;
          top: 2527px;
          left: 1483px;
          width: 309px;
          height: 51px;
          text-align: right;
        }
        .group-child12 {
          position: absolute;
          left: 0;
          top: 50.5px;
          width: 105.5px;
          height: 1px;
        }
        .rectangle-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 961px;
          height: 1091.49px;
          object-fit: cover;
        }
        .custom-made {
          margin: 0;
          text-align: right;
        }
        .custom-made-furniture-to-container {
          position: absolute;
          top: 113.25px;
          left: 128px;
          line-height: 74px;
          font-weight: 500;
          display: inline-block;
          width: 705px;
        }
        .group-child6,
        .rectangle-container {
          position: absolute;
          top: 0;
          left: 958px;
          width: 961px;
          height: 1091.49px;
        }
        .group-child6 {
          left: 0;
          width: 959px;
          height: 1091px;
          object-fit: cover;
        }
        .let-your-living {
          position: absolute;
          top: 114px;
          left: 82px;
          line-height: 74px;
          font-weight: 500;
          display: inline-block;
          width: 588px;
        }
        .group-container,
        .group-div {
          position: absolute;
          top: 0.25px;
          left: 0;
          width: 959px;
          height: 1091px;
          text-align: left;
        }
        .group-container {
          top: 2155.75px;
          left: 1px;
          width: 1919px;
          height: 1091.49px;
          text-align: right;
          font-size: var(--h1-size);
        }
        .ezgif-2-icon {
          top: 0;
          left: 0;
          width: 1917px;
          height: 1080px;
          object-fit: cover;
        }
        .div2,
        .ezgif-2-icon,
        .logo-1-1 {
          position: absolute;
        }
        .red-sofa-bg {
          position: absolute;
          top: 0;
          left: calc(50% - 960px);
          width: 1920px;
          height: 1108px;
          object-fit: cover;
        }
        .gallery-icon,
        .home1 {
          position: absolute;
          left: 0;
          overflow: hidden;
        }
        .home1 {
          top: 0;
          background-color: var(--white);
          width: 1920px;
          height: 1080px;
          font-size: var(--font-size-lg);
        }
        .gallery-icon {
          height: 28.49%;
          width: 100.47%;
          top: 43.54%;
          right: -0.47%;
          bottom: 27.97%;
          max-width: 100%;
          max-height: 100%;
        }
        .office-icon {
          position: absolute;
          top: 3241px;
          left: calc(50% - 960px);
          width: 1920px;
          height: 1080px;
        }
        .dotdefault {
          position: absolute;
          top: 843px;
          left: 1184px;
          width: 266px;
          height: 266px;
          overflow: hidden;
        }
        .popups-icon {
          position: absolute;
          top: 741px;
          left: 133px;
          width: 288px;
          height: 204px;
        }
        .popups-icon1,
        .popups-icon2,
        .popups-icon3,
        .popups-icon4 {
          position: absolute;
          top: 618px;
          left: 855px;
          width: 288px;
          height: 204px;
        }
        .popups-icon2,
        .popups-icon3,
        .popups-icon4 {
          top: 477px;
          left: 1135px;
        }
        .popups-icon3,
        .popups-icon4 {
          top: 680px;
          left: 136px;
        }
        .popups-icon4 {
          top: 501px;
          left: 1143px;
        }
        .circle-phone-flip-1-parent {
          position: absolute;
          top: 877px;
          left: 1742px;
          width: 155px;
          height: 42px;
          font-size: var(--font-size-sm);
          font-family: var(--font-inter);
        }
        .circle-phone-flip-1-icon {
          position: absolute;
          top: 0;
          left: 113px;
          width: 42px;
          height: 42px;
          overflow: hidden;
        }
        .call-us,
        .div-number {
          position: absolute;
          top: 22px;
          left: 0;
          font-weight: 300;
        }
        .call-us {
          top: 0;
          left: 59px;
        }
        .call-parent {
          position: absolute;
          top: 2px;
          left: 0;
          width: 103px;
          height: 39px;
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
        .home-child1,
        .home4 {
          position: absolute;
          top: 732.5px;
          left: 472px;
          width: 105.5px;
          height: 1px;
        }
        .home4 {
          top: 1076px;
          left: 0;
          background-color: var(--white);
          width: 1920px;
          height: 1080px;
          overflow: hidden;
          text-align: right;
          color: var(--font-dark);
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
        .dialogue-overlay {
          position: fixed;
          top: 100px; /* Adjust the top value to align the dialogue as desired */
          left: 50%;
          transform: translateX(-50%);
          z-index: 99999; /* Higher z-index value to appear above other content */
          background-color: #ffffff;
          border: 1px solid #ccc;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem;
        }
        .best-furniture-hatil-discount-icon,
        .hatil-furniture-bangladesh-1-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 950.04px;
          height: 568px;
          object-fit: cover;
        }
        .hatil-furniture-bangladesh-1-icon {
          left: 970.95px;
          width: 947.05px;
          height: 565px;
        }
        .best-furniture-hatil-discount-parent {
          position: absolute;
          top: 9784px;
          left: 0;
          width: 1918px;
          height: 568px;
        }
        .home-inner {
          position: absolute;
          top: 10352px;
          left: 0;
          width: 1918px;
          height: 447px;
          font-size: var(--font-size-xs);
          color: var(--color-gainsboro);
        }
        .copyright-2022-hatil-all-righ-parent {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #1b1b1b;
          width: 1918px;
          height: 447px;
          overflow: hidden;
        }
        .copyright-2022-hatil {
          position: absolute;
          top: 407px;
          left: calc(50% - 139px);
        }
        .group-frame,
        .group-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 859px;
          height: 251px;
        }
        .group-wrapper {
          top: 50px;
          left: 358px;
        }
        .hatil-policies,
        .the-company-parent {
          position: absolute;
          top: 233px;
          left: 0;
        }
        .the-company-parent {
          top: 0;
          width: 170px;
          height: 251px;
        }
        .the-company {
          position: absolute;
          top: 0;
          left: 0;
          font-size: var(--small-font-size);
          font-weight: 500;
          color: var(--white);
        }
        .about-hatil,
        .license-certificates {
          position: absolute;
          top: 53px;
          left: 0;
        }
        .license-certificates {
          top: 83px;
        }
        .work-completion-certificate {
          position: absolute;
          top: 113px;
          left: 0;
        }
        .career,
        .privacy-policy,
        .return-policy {
          position: absolute;
          top: 203px;
          left: 0;
        }
        .career,
        .privacy-policy {
          top: 143px;
        }
        .privacy-policy {
          top: 173px;
        }
        .return-policy1,
        .showroom-locator {
          position: absolute;
          top: 113px;
          left: 2px;
        }
        .return-policy1 {
          top: 203px;
        }
        .billing-terms,
        .feedback {
          position: absolute;
          top: 143px;
          left: 1px;
        }
        .feedback {
          top: 173px;
        }
        .more-information-parent,
        .need-help-parent {
          position: absolute;
          top: 0;
          left: 200px;
          width: 157px;
          height: 221px;
        }
        .more-information-parent {
          left: 402px;
          width: 159px;
        }
        .contact-us,
        .faq {
          position: absolute;
          top: 53px;
          left: 2px;
        }
        .faq {
          top: 83px;
        }
        .more-information-parent,
        .need-help-parent {
          position: absolute;
          top: 0;
          left: 200px;
          width: 157px;
          height: 221px;
        }
        .more-information-parent {
          left: 402px;
          width: 159px;
        }
        .group-parent2 {
          position: absolute;
          top: 4px;
          left: 632px;
          width: 227px;
          height: 178.46px;
        }
        .corporate-office-parent,
        .frame-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 227px;
          height: 150.46px;
        }
        .frame-icon {
          top: 103.46px;
          left: 1px;
          width: 15px;
          height: 15px;
          overflow: hidden;
        }
        .infohatilcom {
          position: absolute;
          top: 160.46px;
          left: 33px;
          color: #d7d1cb;
        }
        .shewrapararokeya-sarani-mirp {
          position: absolute;
          top: 48.46px;
          left: 31px;
          display: inline-block;
          width: 196px;
        }
        .div4,
        .div5 {
          position: absolute;
          top: 100.46px;
          left: 32px;
        }
        .div5 {
          top: 132.46px;
        }

        .vector-icon1,
        .vector-icon2,
        .vector-icon3 {
          position: absolute;
          height: 4.35%;
          width: 1.74%;
          top: 67.12%;
          right: 24.8%;
          bottom: 28.54%;
          left: 73.45%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        }
        .vector-icon2,
        .vector-icon3 {
          height: 5.98%;
          top: 55.16%;
          right: 24.69%;
          bottom: 38.86%;
          left: 73.57%;
        }
        .vector-icon3 {
          height: 5.75%;
          width: 1.78%;
          top: 21.3%;
          right: 24.77%;
          bottom: 72.95%;
          left: 73.45%;
        }
        .vector-parent {
          position: absolute;
          height: 28.64%;
          width: 10.53%;
          top: 12.08%;
          right: 20.96%;
          bottom: 59.28%;
          left: 68.51%;
          font-size: var(--small-font-size);
          color: var(--white);
        }
        .find-us {
          position: absolute;
          top: 0;
          left: 0;
          font-weight: 500;
        }
        .android-sign-2,
        .apple-sign-1 {
          position: absolute;
          top: 94px;
          left: 0;
          width: 92px;
          height: 33px;
          object-fit: cover;
        }
        .android-sign-2 {
          top: 95px;
          left: 110px;
        }
      `}</style>
    </>
  );
};

export default HomePage;
