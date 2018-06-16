import React from 'react'
import CommonButton from '../components/common/CommonButton';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';

export default class MyPage extends React.Component{
    render() {
        return (
            <div>
                <HeaderComponent />
                Hello, this is my page!!s
                <CommonButton>컴포넌트 테스트 버튼</CommonButton>
                <FooterComponent />

            </div>
        )
    }
} 