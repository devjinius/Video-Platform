import React from 'react';
import { footer } from 'react-bootstrap';

const Footer = props => {
  return (
    <>
      <footer>
        <div className="row footer-top">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              sapiente sint, nulla, 여기에 무얼쓰면 좋을까iquid magnam debitis,
              maxime quam recusandae harum esse fugiat. Itaque, culpa?
            </p>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              deserunt fuga perferendis modi earum commodi aperiam temporibus
              quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
              aspernatur id excepturi hic.
            </p>
          </div>
        </div>
        <div className="footer-bottom text-center py-3">
          © 2018 Copyright:
          <a href="#">VideoPlatform</a>
        </div>
      </footer>
      <style jsx>{`
        .footer-top {
          background-color: #000000;
          color: #333;
        }
        .footer-bottom {
          background-color: #000000;
          color: #333;
        }
        .footer-bottom > a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
export default Footer;
