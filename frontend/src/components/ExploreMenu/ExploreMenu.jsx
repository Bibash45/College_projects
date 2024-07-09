import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi fugit veniam, provident quidem doloribus similique? Eaque, odit nulla. Molestiae, dolore vitae!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} className='explore-menu-list-item'key={index}>
             <img className={category===item.menu_name?"active":""} src={item.menu_image}  />
            <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
