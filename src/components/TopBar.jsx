import React, { Component } from 'react';
import { Input, Button } from 'antd';
import styles from './TopBar.less';
import { withRouter } from 'react-router-dom';

const { Search } = Input;

class TopBar extends Component {
  render() {
    const { isTransparent = false } = this.props;
    console.log(this.props);
    return (
      <div
        className={`${styles.wrapper} ${styles.wrapperNormal} ${
          isTransparent && styles.wrapperIndex
        }`}
      >
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <Button type="link" onClick={() => this.props.history.push('/home')}>
              首页
            </Button>
            <Search></Search>
          </div>
          <div className={styles.contentRight}>
            <Button>登陆</Button>
            <Button>注册</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TopBar);
