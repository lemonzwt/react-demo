import React, {
    Component
} from 'react'
import {
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import './App.css';
import {Menu, Icon} from 'antd';
import UserList from "./users/UserList";
import Home from './index/Home'

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.location.pathname === '/' ? 'home' : this.props.location.pathname
        };
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="App">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home"/>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/users/userList">
                        <Link to="/users/userList"><Icon type="home"/>Users</Link>
                    </Menu.Item>
                </Menu>
                <Route exact path="/" component={Home}/>
                <Route path="/users/userList" component={UserList}/>
            </div>
        );
    }
}

export default withRouter(AppRoot);