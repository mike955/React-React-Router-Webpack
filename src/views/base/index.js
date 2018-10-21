import React from "react";
import ReactMarkdown from "react-markdown";
import SuperMenu from "../../components/menu/index";
import 'whatwg-fetch';

import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
            {
                key: "node",
                val: "Node",
                childrens: [
                    {
                        key: "node_npm",
                        val: "npm",
                        childrens: [
                            {
                                key: "node_npm_1",
                                val: "配置私库"
                            }
                        ]
                    }
                ]
            },{
                key: "openresty",
                val: "Openresty",
                childrens: [
                    {
                        key: "openresty_kong",
                        val: "Kong",
                        childrens: [
                            {
                                key: "openresty_kong_1",
                                val: "安装" 
                            }
                        ]
                    },
                    {
                        key: "openresty_lua",
                        val: "Lua",
                        childrens: [
                            {
                                key: "openresty_kong_2",
                                val: "获取系统时间" 
                            }
                        ]
                    }
                ]
            }
        ],
        markdownVal: '# This is a header\n\nAnd this is a paragraph'
    };
  }

  async componentDidMount() {
        // try {
        //     const res = await fetch('http://localhost:3000/get/all/catagory');
        //     console.log(res)
        // } catch (error) {
        //     console.log(error)
        // }
        fetch('http://localhost:3000/get/all/catagory')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            this.setState({data: data})
        })
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
          <SuperMenu data={this.state.data} />
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
