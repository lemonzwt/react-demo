import React, {
    Component
} from 'react'
import {List, Button, Input, Row, Col} from 'antd';
import {connect} from 'react-redux'
import ActionTypes from '../actions/ActionTypes'
import UserCommand from '../actions/users/UserCommand'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                'user1',
                'user2'
            ]
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === ActionTypes.USER_ADD_TEXT)
            return true;
        else if (nextProps.status === ActionTypes.USER_ADD_IN)
            return true;
        else if (nextProps.status === ActionTypes.USER_ADD_SUCCESS) {
            this.state.data.push(nextProps.userInfo.userName);
            this.clearUserName();
            return true;
        }
        else if (nextProps.status === ActionTypes.USER_ADD_CLEAR)
            return true;
    }

    userInputChange(event) {
        this.props.dispatch({
            type: ActionTypes.USER_ADD_TEXT,
            userInfo: {
                userName: event.target.value
            }
        });
    }

    addHandler() {
        if (this.props.userInfo.userName)
            this.props.dispatch(UserCommand.addUser({
                userName: this.props.userInfo.userName
            }));
    }

    clearUserName() {
        this.props.dispatch({
            type: ActionTypes.USER_ADD_TEXT,
            userInfo: {
                userName: ''
            }
        });
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col span={4}>
                        <Input size="small" value={this.props.userInfo.userName} placeholder="用户名"
                               onChange={(event) => this.userInputChange(event)}/>
                    </Col>
                    <Col span={1}>
                        <Button type="primary" onClick={() => this.addHandler()} size="small"
                                loading={this.props.status === ActionTypes.USER_ADD_IN ? true : false}>Add</Button>
                    </Col>
                </Row>
                <List
                    header={<div>用户名</div>}
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }
}

function select(store) {
    return {
        userInfo: store.default.userStore.userInfo,
        status: store.default.userStore.status,
    }
}

export default connect(select)(UserList);