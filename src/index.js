import { preact, h, render, Component } from 'preact';
import data from './data';

import './cardGeneric.css';

import ArticleList from './components/ArticleList';
import Header from './components/Header';

class CardSuggestedResponses extends Component {
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.getPreview = this.getPreview.bind(this);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    console.log('initializing');
    console.log(Kustomer);
    Kustomer.initialize((context = {}) => {
      console.log('init cb called', context);
      const articles = this.getArticles(context.conversation);
      console.log('context', context);
      console.log('articles', articles);

      this.setState({ articles })
    });
  }

  getArticles(conversation) {
    const preview = this.getPreview(conversation) || '';
    const lowCasePreview = preview.toLowerCase();
    console.log('lowCasePreview', lowCasePreview);
    console.log('data', data);
    return data.filter(article => lowCasePreview.includes(article.match));
  }

  getPreview(conversation = {}) {
    const { attributes } = conversation;
    return attributes && attributes.preview;
  }

  render() {
    const { articles } = this.state;
    console.log('render articles', articles);
    if (!articles.length) return null;
    return (
      <div className="ui card mainCard">
      <Header />
      <hr className="lineBreak"/>
      <ArticleList articles={articles} />
    </div>
    );
  }
}

render(<CardSuggestedResponses />, document.body);
