import React from 'react';
import { Grid, Row, Col, Media, Image } from 'react-bootstrap';
import Subscribe from '../Subscribe';

const Video = props => {
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <div className="video" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="video-text">
            인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나
            튼튼하며 그들의 피부가 얼마나 생생하며 그들의 천하를 철환하였는가?
            밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?
            아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은
            길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는
            커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을
            사는가 싶이 살았으며 그들의 밥을 위하여서 옷을 위하여서 미인을
            구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의
            대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고
            평화스러운 곳으로 인도하겠다는 커다란
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Subscribe />
          </Col>
        </Row>
      </Grid>;
      <style jsx>{`
        .video-text {
          margin-bottom: 10px;
        }

        .video {
          background-color: orangered;
          width: 100%;
          height: 350px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default Video;
