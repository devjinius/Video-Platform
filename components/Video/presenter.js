import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Subscribe from 'components/Subscribe';

const Video = props => {
  return (
    <>
      <div>
        <Fullpage {...fullPageOptions} />
      </div>
      <style jsx>{`
        .video-text {
          margin-bottom: 10px;
        }

        .video {
          background-color: yellow;
          width: 100%;
          height: 230px;
          margin-bottom: 10px;
        }

        @media all and (min-width: 768px) and (max-width: 1024px) {
          .video {
            background-color: green;
            width: 100%;
            height: 500px;
            margin-bottom: 10px;
          }
        }

        @media all and (min-width: 1025px) {
          .video {
            background-color: orangered;
            width: 100%;
            height: 450px;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Video;
