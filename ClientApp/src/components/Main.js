import React, { Component } from 'react';
import './Main.css';
import { Layout, Breadcrumb, Carousel, Row, Col, Icon, Avatar, Badge, Input, Card } from 'antd';
const { Content, Footer } = Layout;
const { Meta } = Card;

export class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Carousel >
            <img className="item1" src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/07/25105142/lord-hobo-beer.png"></img>
            <img id="item" height='400px'
              src="http://urbanlife.gr/wp-content/uploads/2017/04/banner-beer-and-cider3-jpg.jpg"></img>
            <img id="item1"
              src="http://www.meug.be/wp-content/uploads/2017/06/banner-beer.jpg"></img>
          </Carousel>

          <br />

          <Row gutter={48} style={{ position: 'center', background: '#fff' }}>
            <Col span={8}>
              <Card
                hoverable
                style={{}}
                cover={<img alt="example" src="https://cms.gtp-icommerce.com.au/clients/c/cellarbrationssubiaco/largeimages/17031_master.jpg" />}
              >
                <Meta
                  title="Europe Street Beer"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{}}
                cover={<img alt="example" src="https://cms.gtp-icommerce.com.au/clients/c/cellarbrationssubiaco/largeimages/582196_master.jpg" />}
              >
                <Meta
                  title="Europe Street beer"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{}}
                cover={<img alt="example" src="https://www.ocado.com/productImages/301/301719011_0_640x640.jpg?identifier=e25f649e6da85d4f80b39b95a47095d3" />}
              >
                <Meta
                  title="Europe Street beer"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </div>


        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created IsHetTijdVoorBier Team
    </Footer>
      </div >

    );
  }
}

