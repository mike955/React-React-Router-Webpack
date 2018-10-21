import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import _ from 'lodash';
const SubMenu = Menu.SubMenu;


import './index.less';

export default class SuperMenu extends Component {

    constructor(props){
        super(props);
        this.setState = {
            listData: props.data
        }
    }

    recursion(data){
        return (
            data.map((val, key) => {
                if(val.childrens){
                    return (
                        <SubMenu key={val.key} title={<span>{val.val}</span>}>
                            {this.recursion(val.childrens)}
                        </SubMenu>
                    )
                }else{
                    return <Menu.Item key={val.key}>{val.val}</Menu.Item>
                }
            })
        )
    }

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                style={{ width: 200}}
                theme='dark'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {this.recursion(this.setState.listData)}
            </Menu>
        )
    }
}