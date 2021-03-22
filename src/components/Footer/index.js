import React from 'react'
import { Divider, Row, Col } from 'antd'
// import { Container } from './styles';
import {
    WhatsAppOutlined,
    FacebookOutlined,
    InstagramOutlined,
} from '@ant-design/icons'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect'

import './style.css';

const Mobile = () => {
    return (
        <footer className="footer-mobile">
            <Row className="content-footer-mobile">
                <Col className="cl-item" span={32}>
                    <div className="content-item">
                        <div>
                            <div>Solicitação de Pedidos: Terça à Quinta.</div>
                            <div>Entrega de Pedidos: Sexta à Domingo.</div>
                        </div>
                    </div>
                </Col>
                <Col className="cl-item" span={32}>
                
                    <div className="content-item">
                        <div style={{ textAlign: 'center' }}>
                            <div>SIGA-NOS NAS REDES SOCIAIS</div>
                            <FacebookOutlined
                                style={{
                                    marginLeft: 7,
                                    color: '#119af7',
                                    fontSize: 20,
                                }}
                            />
                            <InstagramOutlined
                                style={{
                                    marginLeft: 7,
                                    color: '#cf2c87',
                                    fontSize: 20,
                                }}
                            />
                        </div>
                    </div>
                </Col>
                <Col className="cl-item" span={32}>
                    <div className="content-item">
                        <div>
                            <div style={{textAlign:'center'}}> Contato via Whats </div>
                            <div className="whats-contact">
                                <div>
                                    <WhatsAppOutlined
                                        style={{
                                            color: '#52c41a',
                                            fontSize: 20,
                                            marginTop: 5,
                                            paddingTop: 5,
                                        }}
                                    />
                                </div>

                                <div style={{ marginLeft: 7, marginTop: 7 }}>
                                    (15) - 99788-0780
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}
const Web = () => {
    return (
        <footer className="footer">
            <Row className="content-footer">
                <Col className="cl-item" span={8}>
                    <div className="content-item">
                        <div>
                            <div>Solicitação de Pedidos: Terça à Quinta.</div>
                            <div>Entrega de Pedidos: Sexta à Domingo.</div>
                        </div>
                    </div>
                </Col>
                <Col className="cl-item" span={8}>
                    <Divider className="divider" type="vertical" />
                    <div className="content-item">
                        <div style={{ textAlign: 'center' }}>
                            <div>SIGA-NOS NAS REDES SOCIAIS</div>
                            <FacebookOutlined
                                style={{
                                    marginLeft: 7,
                                    color: '#119af7',
                                    fontSize: 20,
                                }}
                            />
                            <InstagramOutlined
                                style={{
                                    marginLeft: 7,
                                    color: '#cf2c87',
                                    fontSize: 20,
                                }}
                            />
                        </div>
                    </div>
                </Col>
                <Col className="cl-item" span={8}>
                    <Divider className="divider" type="vertical" />
                    <div className="content-item">
                        <div>
                            <div> Contato via Whats </div>
                            <div className="whats-contact">
                                <div>
                                    <WhatsAppOutlined
                                        style={{
                                            color: '#52c41a',
                                            fontSize: 20,
                                            marginTop: 5,
                                            paddingTop: 5,
                                        }}
                                    />
                                </div>

                                <div style={{ marginLeft: 7, marginTop: 7 }}>
                                    (15) - 99788-0780
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

const Footer = () => {
    return (
        <>
            <BrowserView>
                <Web />
            </BrowserView>
            <MobileView>
                <Mobile />
            </MobileView>
        </>
    )
}

export default Footer
