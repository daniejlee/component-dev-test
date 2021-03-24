import React, {useState, useEffect} from 'react';

const HeaderMenu = ({ changePage }) => {

  const [titles, setTitles] = useState([])

  useEffect(() => {
    fetch('./content.json')
      .then(res => res.json())
      .then(data => {
        let pages = data.pages
        let newPagesArray = []
        for (let key in pages) {
          newPagesArray.push(
            {
              title: pages[key].title,
              slug: pages[key].slug
            }
          )
        }
        setTitles(newPagesArray)
        changePage(pages[0].slug)
      })
  }, [changePage]);

  const handleClick = (event) => {
    changePage(event.target.id)
  }


  return (
    <ul className="menu" style={{ listStyleType: 'none' }}>
      {titles.map((element) => {
        return <li onClick={handleClick} id={element.slug} key={element.slug} className="menu-item">{element.title}</li>
      })}
    </ul>
  )
}

export default HeaderMenu;
