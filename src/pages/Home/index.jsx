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
      articles: articles, //文章列表
      authors: [
        {
          id: 31321,
          name: '的好',
          words: 14545,
          stars: 564,
          isAttention: false,
        },
        {
          id: 31321,
          name: 'dsad',
          words: 14545,
          stars: 564,
          isAttention: false,
        },
        {
          id: 31321,
          name: 'vsv大3',
          words: 14545,
          stars: 564,
          isAttention: false,
        },
        {
          id: 31321,
          name: '发生地方',
          words: 14545,
          stars: 564,
          isAttention: false,
        },
        {
          id: 31321,
          name: '串串',
          words: 14545,
          stars: 564,
          isAttention: false,
        },
      ], //作者列表
      browsingHistory: [1, 1, 1, 1, 1, 1, 1], //浏览记录列表
    };
  }

  componentDidMount() {
    // const keyWords = this.props.location.search && this.props.location.search.split('=')[1];
    // console.log(this);
  }

  /**
   * 跳转详情页
   * @param id string 文章id
   */
  toDetail = id => {
    this.props.history.push(`/detail/${id}`);
  };

  /**
   * 函数式组件，文章组件
   * @param article object 文章详情，
   * 字段为api对应字段，可以修改
   */
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

  /**
   * 修改推荐作者的关注状态
   * @param index number 需要修改的作者在列表的下标
   */
  changeAttentionStatus = index => {
    if (window.$isLogin) {
      const { authors } = this.state;
      authors[index].isAttention = !authors[index].isAttention;
      this.setState({ authors });
    } else {
      this.topBarRef.sign(1);
    }
  };

  /**
   * 函数式组件，作者组件
   * @param author object 作者详情，
   * @param index number 列表对应下标
   * 字段为api对应字段，可以修改
   */
  author = (author, index) => {
    return (
      <Row justify="space-between" align="middle" className={styles.author}>
        <Col flex={1}>
          <Row align="middle">
            <Col span={5}>
              <Avatar size={32} src={imgUrl} />
            </Col>
            <Col
              style={{ cursor: 'pointer' }}
              onClick={() => this.props.history.push('/author/' + author.id)}
            >
              <div className={styles.authorName}>{author.name}</div>
              <div className={styles.authorData}>
                {author.words}KWords | {author.stars}KStars
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={7}>
          <Button
            type="link"
            style={author.isAttention ? { color: 'green' } : {}}
            onClick={() => this.changeAttentionStatus(index)}
          >
            {!author.isAttention ? '+Attention' : 'Focused'}{' '}
          </Button>
        </Col>
      </Row>
    );
  };
  render() {
    const { articles, authors, browsingHistory } = this.state;
    // const isResult = this.props.match.path.includes('result') ? true : false;
    const isLogin = window.$isLogin;
    return (
      <div className={styles.wrapper}>
        <TopBar
          wrappedComponentRef={c => {
            this.topBarRef = c;
          }}
        />
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            {articles && articles.map(article => this.article(article))}
            <Button className={styles.more}>Read More</Button>
          </div>
          <div className={styles.containerRight}>
            <Row justify="space-between" align="middle">
              <Col>
                <span>Recommend Authors</span>
              </Col>
              <Col>
                <Button type="link">Change</Button>
              </Col>
            </Row>
            <div>{authors && authors.map((author, index) => this.author(author, index))}</div>
            <Button type="default" className={styles.all}>
              Looking All
            </Button>
            {isLogin && (
              <React.Fragment>
                <Row justify="space-between" align="middle" style={{ marginTop: '40px' }}>
                  <Col>
                    <span>Browsing History</span>
                  </Col>
                </Row>
                <div>
                  {browsingHistory && //这里应该用浏览记录的列表
                    browsingHistory.map(history => (
                      <div
                        className={styles.history}
                        onClick={() => this.props.history.push('/detail/67')}
                      >
                        都发给还是酒店狂欢节狂欢节
                      </div>
                    ))}
                </div>
                <Button type="default" className={styles.all} style={{ marginTop: '16px' }}>
                  Looking All
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
