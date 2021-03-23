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

const openWhats = () => {
    window.open(`https://api.whatsapp.com/send/?phone=5515997623307&text=Olá, Gostaria de mais informações os sobre seu trabalho.&app_absent=0`, '_blank')
}
const openInsta = () => {
    window.open(`https://www.instagram.com/elidi_deliciasdali/`, '_blank')
}
const openFace = () => {
    window.open(`https://www.facebook.com/Delicias-da-Li-107543851390857`, '_blank')
}

const Mobile = () => {
    return (
        <footer className="footer-mobile">
            <Row className="content-footer-mobile">
                <Col className="cl-item" span={32}>
                    <div className="content-item">
                        <div>
                            <div>SOLICITAÇÃO DE PEDIDOS: SEGUNDA, QUARTA E SEXTA.</div>
                            <div>ENTREGA DE PEDIDOS: TERÇA, QUINTA E SÁBADO.</div>
                        </div>
                    </div>
                </Col>
                <Col className="cl-item" span={32}>
                
                    <div className="content-item">
                        <div style={{ textAlign: 'center' }}>
                            <div>SIGA-NOS NAS REDES SOCIAIS</div>
                            <FacebookOutlined
                            onClick={openFace}
                                style={{
                                    marginLeft: 7,
                                    color: '#119af7',
                                    fontSize: 20,
                                }}
                            />
                            <InstagramOutlined
                            onClick={openInsta}
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
                            <div style={{textAlign:'center'}}> CONTATO VIA WHATSAPP </div>
                            <div onClick={openWhats} className="whats-contact">
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
                                    (15) - 99762-3307
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
                        <div>SOLICITAÇÃO DE PEDIDOS: SEGUNDA, QUARTA E SEXTA.</div>
                            <div>ENTREGA DE PEDIDOS: TERÇA, QUINTA E SÁBADO.</div>
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
                                onClick={openFace}
                            />
                            <InstagramOutlined
                            onClick={openInsta}
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
                            <div style={{textAlign:'center'}}>CONTATO VIA WHATSAPP </div>
                            <div onClick={openWhats} className="whats-contact">
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
                                    (15) - 99762-3307
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
