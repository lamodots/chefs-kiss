    import React from 'react';
    import './Textbox.css';
    
    function Textbox(props) {
      const headings = props.headings;
      const texts = props.texts;
    
      return(
        <section className='hero'>
                <div className="content">
                	<h2>{headings}</h2>
                	<p>{texts}</p>
                </div>
        
        </section>
      );
      }
      export default Textbox;