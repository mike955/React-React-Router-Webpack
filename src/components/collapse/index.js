import React, { Component } from 'react'
import { Collapse } from 'antd';

export default class SuperCollapse extends Component {
    render(){
        return(
            <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}