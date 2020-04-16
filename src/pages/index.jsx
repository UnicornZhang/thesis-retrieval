import React, { Component } from 'react';
import styles from './index.less';
import { Input } from 'antd';
import TopBar from '@/components/TopBar';

const { Search } = Input;

class Index extends Component {
  // constructor() {
  //   super();
  // }

  onSearch = value => {
    console.log(value);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <TopBar isTransparent={true} />
        <div className={styles.contentBox}>
          <div className={styles.title}>好论文&nbsp;&nbsp;&nbsp;&nbsp;来YISHOU</div>
          <Search className={styles.search} size="large" onSearch={this.onSearch}></Search>
        </div>
      </div>
    );
  }
}

export default Index;
