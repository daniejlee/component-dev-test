import React, {useState, useEffect} from 'react';
import './Content.css';

const Content = (props) => {

  let blockContent = props.pageData.blocks[0];

  return (
    <>
    <div className="row content-block">
      <div className="col-7 headline">
          {blockContent.headline}
      </div>
      <div className="col subhead">
        {blockContent.subhead}
      </div>
    </div>

    <div className="row cta-block">
        <div className="col-7 cta">
          {blockContent.cta}
        </div>
        <div className="col lets-talk">
          LET'S TALK.
        </div>
    </div>
    </>
  )

}

export default Content;
