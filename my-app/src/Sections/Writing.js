import '../index.css';
import '../styles/App.css';
import Blog from './Components/Blog.js';
import Fonts from '../images/course-card.png';


function Writing () {

    const projects = [
        {
          title: "Libernotes",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageSrc: [Fonts],
        },
      ]
    return (
        <div className='content-wrap writing'>
            <div className='title'>
                <h6>Writing</h6>
            </div>
            {projects.map((project, index) => (
        <Blog key={index} {...project} />
      ))}
    </div>
        
    );
}

export default Writing;