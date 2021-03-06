import React, { Component } from 'react';
import styles from './index.less';
import TopBar from '../../components/TopBar';
import { Tabs, Form, Input, Button, message } from 'antd';

const { TabPane } = Tabs;

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      oldPsw: '', //旧密码
      newPsw: '', //新密码
      confirmPsw: '', //确认密码
    };
  }

  /**
   * input输入保存各种密码
   * @param key string 需要修改的密码 对应state
   */
  changeValue = (key, value) => {
    this.setState({
      [key]: value.target.value,
    });
  };

  /**
   * 提交密码修改
   */
  submitChange = () => {
    const { oldPsw, newPsw, confirmPsw } = this.state;
    if (!oldPsw || !newPsw || !confirmPsw) {
      //判断密码都非空
      message.error('Please enter your password correctly!');
      return;
    }
    if (newPsw === confirmPsw) {
      //两次密码一致
      message.success('Password changed successfully！');
      this.setState({
        oldPsw: '',
        newPsw: '',
        confirmPsw: '',
      });
    } else {
      message.error('The two new passwords do not match, please re-enter!');
    }
  };

  /**
   * 确认删除账号
   */
  delete = () => {
    message.success('The account has been deleted, thank you for your use!');
    this.props.history.push('/home');
  };

  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
    };
    const { oldPsw, newPsw, confirmPsw } = this.state;
    return (
      <div className={styles.wrapper}>
        <TopBar></TopBar>
        <div className={styles.setting}>
          <Tabs defaultActiveKey="1" style={{ width: '960px' }} tabPosition="left">
            <TabPane tab="Password Change" key="1">
              <div className={styles.partTitle}>Password Change</div>
              <Form {...layout}>
                <Form.Item label="original password">
                  <Input.Password
                    placeholder="Please enter the original password"
                    value={oldPsw}
                    onChange={val => this.changeValue('oldPsw', val)}
                  />
                </Form.Item>
                <Form.Item label="new password">
                  <Input.Password
                    placeholder="Please enter the new password"
                    value={newPsw}
                    onChange={val => this.changeValue('newPsw', val)}
                  />
                </Form.Item>
                <Form.Item label="confirm password">
                  <Input.Password
                    placeholder="Please enter your new password again"
                    value={confirmPsw}
                    onChange={val => this.changeValue('confirmPsw', val)}
                  />
                </Form.Item>
              </Form>
              <Button type="primary" onClick={this.submitChange}>
                Submit
              </Button>
            </TabPane>
            <TabPane tab="Account Manage" key="2">
              <div className={styles.partTitle}>Delete Account Permanently</div>
              <ul>
                <li>
                  Make sure there are no public or private articles before deleting your account.
                </li>
                <li>
                  Deleting an account is an irreversible operation and cannot be restored after
                  deletion.
                </li>
              </ul>
              <Button type="primary" onClick={this.delete}>
                Confirm Delete
              </Button>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Setting;
