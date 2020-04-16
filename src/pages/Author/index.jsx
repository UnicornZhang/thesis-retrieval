import React, { Component } from 'react';
import styles from './index.less';
import TopBar from '../../components/TopBar';
import { Row, Col, Avatar, Tabs } from 'antd';
import articles from '../Home/articles';

const imgUrl = require('../../assets/images/img.jpg');
const { TabPane } = Tabs;

class Author extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      attentions: [1, 1, 1, 1],
    };
  }

  article = article => {
    const commentUrl = require('../../assets/icons/icon_comment.png');
    const likeUrl = require('../../assets/icons/icon_like.png');
    return (
      <div className={styles.article} key={article.id}>
        <div className={styles.articleContent}>
          <div className={styles.articleTitle} onClick={() => this.toDetail(article.id)}>
            {article.title}
          </div>
          <div className={styles.articleText}>{article.content}</div>
          <div className={styles.articleData}>
            <span>
              <img src={commentUrl} alt="" />
              <span>{article.comment}</span>
            </span>
            <span>
              <img src={likeUrl} alt="" />
              <span>{article.like}</span>
            </span>
          </div>
        </div>
        <img className={styles.articleImg} src={imgUrl} alt="" />
      </div>
    );
  };
  render() {
    const { articles, attentions } = this.state;
    return (
      <div className={styles.wrapper}>
        <TopBar></TopBar>
        <div className={styles.author}>
          <Row align="middle" style={{ marginBottom: '20px' }}>
            <Col span={3}>
              <Avatar size={80} src={imgUrl} />
            </Col>
            <Col>
              <div className={styles.authorName}>dsadasffashfas</div>
              <div className={styles.authorData}>
                <span>文章 100</span>|<span>关注 100</span>|<span>粉丝 100</span>
              </div>
            </Col>
          </Row>
          <Tabs defaultActiveKey="2" style={{ width: '960px' }}>
            <TabPane tab="文章" key="1">
              {articles && articles.map(article => this.article(article))}
            </TabPane>
            <TabPane tab="关注的人" key="2">
              {attentions &&
                attentions.map(attention => (
                  <Row align="middle" className={styles.attention}>
                    <Col span={2}>
                      <Avatar size={60} src={imgUrl} />
                    </Col>
                    <Col>
                      <div className={styles.name}>发哈开发好看啦</div>
                      <div className={styles.data}>
                        <span>id:dsadasdasda</span>|<span>文章:15145</span>
                      </div>
                    </Col>
                  </Row>
                ))}
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Author;
