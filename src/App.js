import React, {useState} from 'react';
import './App.css';

import ingredient1Icon from './camphor.png';
import ingredient2Icon from './lavender.png';
import ingredient3Icon from './menthol.png';
import ingredient4Icon from './eucalyptus.png';

// Import your images and GIFs
// import botanicalGif from './botanical_1_background.gif';
import medicatedOilImage from './axe_brand_1.jpg';

// Define component for ingredient popup
const IngredientPopup = ({ ingredient, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{ingredient.name}</h2>
        <p>{ingredient.description}</p>
        <p>
          <strong>Benefits: </strong> 
          {ingredient.benefits}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [popupIngredient, setPopupIngredient] = useState(null);

  // Define your ingredient descriptions
  const ingredientsTop = [
    {
      name: 'Camphor',
      description: 'Comes from the bark and wood of camphor trees',
      benefits: 'Dilates blood vessels for pain relief',
      image: ingredient1Icon
    },
    {
      name: 'Lavender',
      description: 'A type of flowering plant amongst the mints family',
      benefits: 'Natural painkiller and improves sleep quality',
      image: ingredient2Icon
    }
  ];

  const ingredientsBottom = [
    {
      name: 'Eucalyptus',
      description: 'Native to Australia and comes with a multifaceted forest scent',
      benefits: 'Relieves muscle and joint pain',
      image: ingredient3Icon
    },
    {
      name: 'Menthol',
      description: 'Chemical formed naturally in peppermint and other mint plants',
      benefits: 'For immediate soothing effects',
      image: ingredient4Icon
    }
  ];

  return (
    <div className="App">

      <header className='title'>
        <p className='title-text'>Our Natural Ingredients</p>
      </header>

      <div className="background-container"></div>

      <div className="container">

        <div className="ingredient-icons">
          {ingredientsTop.map((ingredient, index) => (
              <div key={index}>
                <h3 className='ingredient-name'>{ingredient.name}</h3>
                <img
                  src={ingredient.image}
                  alt={`Ingredient ${index + 1}`}
                onClick={() => setPopupIngredient(ingredient)}
                />
              </div>
            ))}
        </div>

        <img src={medicatedOilImage} alt="Medicated Oil" className="medicated-oil" />

        <div className="ingredient-icons">
          
          {ingredientsBottom.map((ingredient, index) => (
            <div key={index}>
              <h3 className='ingredient-name'>{ingredient.name}</h3>
              <img
                src={ingredient.image}
                alt={`Ingredient ${index + 1}`}
               onClick={() => setPopupIngredient(ingredient)}
              />
            </div>
          ))}
        </div>

      </div>

      {popupIngredient && <IngredientPopup ingredient={popupIngredient} onClose={() => setPopupIngredient(null)} />}
      
    </div>
  );
};

export default App;
