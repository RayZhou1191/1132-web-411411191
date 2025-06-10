import './App.css';
import BookList from './singlebook'; // 看起來未使用，可以刪除或補充內容
import { booka, bookb, bookc } from './singlebook';

function App() {
  return (
    <div className="blogs">
      <div className="section-title">
        <h2>latest blogs</h2>
      </div>
      <div className="blogs-center">
        <Blog
          img="getImage.webp"
          title="權力的48法則"
          author="羅伯．葛林，約斯特．艾佛斯"
        />
        <Blog img={booka.img} title={booka.title} author={booka.author} />
        <Blog img={bookb.img} title={bookb.title} author={bookb.author} />
        <Blog img={bookc.img} title={bookc.title} author={bookc.author} />
      </div>
    </div>
  );
}

const Blog = ({ img, title, author }) => {
  return (
    <article className="blog">
      <img src={img} alt="Photo" className="img blog-img" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  );
};

export default App;