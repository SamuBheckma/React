import logo from './logo.svg';
import './App.css';

function App() {
  export default App;
  return (
    <div className="App">
     <div>
     
     </div>
    </div>
  );
}

function Video({video}) {
  return (
  <div>
   <Thumbnail video={video} />
   <a href={video.url}>
    <h3>{video.title}</h3>
    <p>{video.description}</p>
  </a>
  <LikeButton video={video} />
  </div>
);
}