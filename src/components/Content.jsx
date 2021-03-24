import React, {useState, useEffect} from 'react';
import './Content.css';

const Content = (props) => {
  console.log(props)

  useEffect(() => {
  }, []);


  let blockContent = props.pageData.blocks[0];

  return (
    <>
    <div className="row">
      <div className="col headline">
        {blockContent.headline}
      </div>
      <div className="col subhead">
        {blockContent.subhead}
      </div>
    </div>

    <div className="row cta-block">
        <div className="col">
          {blockContent.cta}
        </div>
        <div className="col">
          LET'S TALK.
        </div>
    </div>
    </>
  )

}

export default Content;
