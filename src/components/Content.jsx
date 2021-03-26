import React from 'react';
import './Content.css';

const Content = (props) => {

  let blockContent = props.pageData.blocks[0];

  return (
    <>
    <div className="content-block">
      <div className="headline">
          {blockContent.headline}
      </div>
      <div className="subhead">
        {blockContent.subhead}
      </div>
    </div>

    <div className="cta-block">
        <div className="cta">
          {blockContent.cta}
        </div>
        <div className="lets-talk">
          <span>
            LET'S TALK.
          </span>

          <svg className="cta-arrow" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" stroke="#DAB205" strokeWidth="1.5" /></svg>
        </div>
    </div>
    </>
  )

}

export default Content;
