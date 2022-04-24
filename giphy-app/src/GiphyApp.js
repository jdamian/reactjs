import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { CategoryApp } from './components/CategoryApp';
import { GifGrid } from './components/GifGrid';

const GiphyApp = props => {

  const [categories, setCategories] = useState(['Drangon Ball']);

  return (
    <>
      <h1>Giphy App</h1>
      <CategoryApp setCategories={setCategories}/>
      <hr />
        <ol>
          {
            categories.map(category => 
              <GifGrid 
                key={category}
                category={category} 
              />
            )
          }
        </ol>
    </>
  );
}

GiphyApp.propTypes = {}

export default GiphyApp