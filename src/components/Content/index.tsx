import { memo } from 'react';
import './styles.css';

interface BlogPostProps  {
    title: string,
    description: string
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div className="blogPost">
      <h4 className="blogPostTitle">{props.title}</h4>
      <p className="blogPostDescription">{props.title}</p>
    </div>
  );
};

export default memo(() => (
  <div className="blogSection">
    <h3 className="blogTitle">Últimas do blog</h3>
    <div className="blogContainer">
      <BlogPost title="5 dicas para sua carreira profissional" description="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" />
      <BlogPost title="Outro título interessante" description="Descrição do segundo post" />
      <BlogPost title="Mais um post" description="Descrição do terceiro post" /> 
      <a href="#" className="viewAllLink">Ver tudo</a>
    </div>
    
    
  </div>
));