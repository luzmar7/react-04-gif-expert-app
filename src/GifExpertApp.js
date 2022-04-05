// rafc -> esniped para crear rapido
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const categories = ['One puch', 'sanmurai x', 'dragon ball']
  const [categories, setCategories] = useState(defaultCategories)
  
  // const handleAdd = () => {
  //   // setCategories( [...categories, 'HonterxHonter'])
  //   // setCategories( ['HonterxHonter', ...categories])
  //   setCategories( cats => [...cats, 'HunterXhunter'])
  // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />

      <ol>
        { 
          categories.map(category => (
            <GifGrid 
              key = {category}
              category={ category } />
          ))  
        }
      </ol>

    </>

  )


}


export default GifExpertApp