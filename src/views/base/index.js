import React from 'react';

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: '',
      };
    }
    render() {
      return (
        <Layout>
            <Sider style={{ overflow: 'auto', height: '100vh', paddingTop:60, paddingLeft:50, width: 150, position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="5">
                <span className="nav-text">nav 5</span>
                </Menu.Item>
                <Menu.Item key="6">
                <span className="nav-text">nav 6</span>
                </Menu.Item>
                <Menu.Item key="7">
                <span className="nav-text">nav 7</span>
                </Menu.Item>
                <Menu.Item key="8">
                <span className="nav-text">nav 8</span>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#897' }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                ...
                <br />
                <br />
                <br />
                <br />
                <br />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
            </Layout>
        </Layout>
      );
    }
}

export default App;