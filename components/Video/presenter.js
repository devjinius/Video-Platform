import React from 'react';
import { Grid, Row, Col, Media, Image } from 'react-bootstrap';
import Subscribe from '../Subscribe';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 3,

  // 이건 터치입니당.
  touchSensitivity: 3,
  scrollSpeed: 200,
  hideScrollBars: true,
  enableArrowKeys: true
};

const horizontalSliderProps = {
  name: 'mainVideoSlider', // name is required,
  infinite: true // infinite scrolling이라는데 나중에 레퍼런스 찾아봅시다.
};

// 여기에 내용을 배열로 넣습니다
const slides = [
  <Slide>
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div className="video" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="video-text">
          인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나 튼튼하며
          그들의 피부가 얼마나 생생하며 그들의 천하를 철환하였는가? 밥을
          위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다
          그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을
          찾아 주며 그들을 행복스럽고
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Subscribe />
        </Col>
      </Row>
    </Grid>
  </Slide>,
  <Slide>
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div className="video" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="video-text">
          인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나 튼튼하며
          그들의 피부가 얼마나 생생하며 그들의 천하를 철환하였는가? 밥을
          위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다
          그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을
          찾아 주며 그들을 행복스럽고
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Subscribe />
        </Col>
      </Row>
    </Grid>
  </Slide>,
  <Slide>
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div className="video" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="video-text">
          인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나 튼튼하며
          그들의 피부가 얼마나 생생하며 그들의 천하를 철환하였는가? 밥을
          위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다
          그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을
          찾아 주며 그들을 행복스럽고
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Subscribe />
        </Col>
      </Row>
    </Grid>
  </Slide>
];

// 옵션으로 배열에 저장
fullPageOptions.slides = slides;

const Video = props => {
  return (
    <>
      <Fullpage {...fullPageOptions} />
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
