import React, { Component } from 'react';
import TopBar from '@/components/TopBar';
import styles from './index.less';
import articles from './articles';
import { Button, Row, Col, Avatar } from 'antd';

const imgUrl = require('../../assets/images/img.jpg');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      authors: [1, 1, 1, 1, 1],
    };
  }

  toDetail = id => {
    console.log(this.props);
    this.props.history.push(`/detail/${id}`);
  };

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

  author = author => {
    return (
      <Row justify="space-between" align="middle" className={styles.author}>
        <Col flex={1}>
          <Row align="middle">
            <Col span={5}>
              <Avatar size={32} src={imgUrl} />
            </Col>
            <Col>
              <div className={styles.authorName}>桥涵通</div>
              <div className={styles.authorData}>写了465K字 | 1.9K喜欢</div>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Button type="link">+关注</Button>
        </Col>
      </Row>
    );
  };
  render() {
    const { articles, authors } = this.state;
    // const changeIcon = () => {
    //   const url = require('../../assets/icons/icon_change.png');
    //   return <img style={{ width: '14px' }} src={url} alt="" />;
    // };
    return (
      <div className={styles.wrapper}>
        <TopBar />
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            {articles && articles.map(article => this.article(article))}
            <Button className={styles.more}>阅读更多</Button>
          </div>
          <div className={styles.containerRight}>
            <Row justify="space-between" align="middle">
              <Col>
                <span>推荐作者</span>
              </Col>
              <Col>
                <Button type="link">换一批</Button>
              </Col>
            </Row>
            <div>{authors && authors.map(author => this.author(author))}</div>
            <Button type="default" className={styles.all}>
              查看全部
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
