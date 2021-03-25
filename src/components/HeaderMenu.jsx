import React, {useState, useEffect} from 'react';

const HeaderMenu = ({ changePage }) => {

  const [titles, setTitles] = useState([]);
// activePage highlights the selected page menu text
  const [activePage, setActivePage] = useState(null);

  // fetches json at initial render of headermenu to populate with page titles
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
        setActivePage(pages[0].slug)
        changePage(pages[0].slug)
      })
  }, [changePage]);

  const handleClick = (event) => {
    setActivePage(event.target.id)
    changePage(event.target.id)
  }


  return (
    <ul className="menu mt-4" style={{ listStyleType: 'none' }}>
      {titles.map((element) => {
        return (
          <li onClick={handleClick} id={element.slug} key={element.slug}
            className={element.slug === activePage ? "menu-item menu-active" : "menu-item"}>
              {element.title}
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderMenu;
