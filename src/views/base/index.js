import React from "react";
import ReactMarkdown from "react-markdown";
// import * as axios from 'axios';
import SuperMenu from "../../components/menu/index";
// import 'whatwg-fetch';
import axios from 'axios'

import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
    //     data : [{
    //         "key": "node",
    //         "val": "Node",
    //         "childrens": [
    //             {
    //                 "key": "npm",
    //                 "val": "Npm",
    //                 "childrens": [{
    //                         "key": "registry",
    //                         "val": "配置私库"
    //                     },
    //                     {
    //                         "key": "configRegistry",
    //                         "val": "配置淘宝 npm 源"
    //                     }
    //                 ]
    //             }, {
    //                 "key": "test",
    //                 "val": "Test",
    //                 "childrens": [{
    //                         "key": "supertest",
    //                         "val": "supertest"
    //                     },
    //                     {
    //                         "key": "mocha_chai",
    //                         "val": "mocha + chai"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "key": "openresty",
    //         "val": "Openresty",
    //         "childrens": [{
    //                 "key": "kong",
    //                 "val": "Kong",
    //                 "childrens": [{
    //                     "key": "install",
    //                     "val": "安装"
    //                 }]
    //             },
    //             {
    //                 "key": "lua",
    //                 "val": "Lua",
    //                 "childrens": [{
    //                     "key": "getTime",
    //                     "val": "获取系统时间"
    //                 }]
    //             }
    //         ]
    //     }
    // ],
    markdownVal: '# This is a header\n\nAnd this is a paragraph'
    };
    this.getMarkdownContent = this.getMarkdownContent.bind(this)
  }

  componentDidMount() {
        axios.post('/get/all/catagory')
          .then(res => {
            this.setState({data: res.data});
          })
          .catch( error => {
              console.log(error)
          })
  }

  getMarkdownContent(key){
    let url = '/' + key.replace(/_/g, '/');
    axios.post(url)
      .then(res => {
        this.setState({markdownVal: `${res.data}`})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            paddingTop: 60,
            paddingLeft: 20,
            width: 300,
          position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <SuperMenu data={this.state.data} getMarkdownContent={this.getMarkdownContent} />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              background: "#897"
            }}
          />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
             <ReactMarkdown source={this.state.markdownVal} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center"}}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
