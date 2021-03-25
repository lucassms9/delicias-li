import React from 'react'
import { Button, Row, Col, } from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import MainMenu from './Menu';
import './style.css';

const Header = () => {
    return (
        <header className="app-header">
           <div className="content-header">
           <Row className="content-footer">
                <Col className="cl-item menu-item" span={8}>

                </Col>
                <Col className="cl-item" style={{justifyContent:'center'}} span={8}>
                <img width="110" src="/images/logo-sem-fundo2.png" alt="logo"/>
                </Col>
                <Col className="cl-item" span={8}>
                  
                </Col>
            </Row>
           </div>
        </header>
    );
}

export default Header
