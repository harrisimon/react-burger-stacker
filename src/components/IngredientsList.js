import React, {Component} from "react";


class IngredientsList extends Component {


    render(){

        const allIngredients = this.props.ingredients.map(ingredient => <button 
            onClick={(e) => this.props.addItem(e.target.textContent)}
            key={ingredient.name}>{ingredient.name}</button>)
        
        return(
            <>
                <div className='Ingredients-list'>
                    Ingredients List
                    {allIngredients}
                </div>
            </>
        )
    }
}

export default IngredientsList