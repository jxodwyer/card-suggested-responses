import { h, Component } from 'preact';
import Clipboard from 'clipboard';
import './articleList.css';

export class ArticleList extends Component {

  componentDidMount() {
    new Clipboard('.button');
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="ui middle aligned divided list">
        {articles && articles.map(article => {
          const { id, preview, response, title, url } = article;
          return (
            <div className="item" key={id}>
              <div className="left floated middle aligned content">
                <div className="header">
                  {title}
                </div>
                {preview}
              </div>
              <div className="right floated middle aligned content">
              <button
                className="ui tiny compact icon button"
                data-clipboard-text={response}
              >
                <i className="copy icon"></i>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ArticleList;
