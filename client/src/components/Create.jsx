import React, {Component} from 'react';
import CreateTitle from './CreateTitle.jsx';
import CreateDescription from './CreateDescription.jsx';
import CreateIngredients from './CreateIngredients.jsx';

class Create extends Component {
    constructor () {
        super ();
        this.state = {
            title: null,
            description: null,
            ingredients: [],
            instructions: [{text: ''}]
        }
        this.ingredientCounter = 0;
        this.updateRecipe = this.updateRecipe.bind(this);
        this.addNewIngredient = this.addNewIngredient.bind(this);
        this.saveIngredient = this.saveIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
    }

    updateRecipe(statePiece, newValue) {
      console.log(statePiece, newValue);
      this.setState({[statePiece]: newValue}, () => console.log(this.state));
    }

    postRecipe(){
      // pull needed items from state
      // ensure that title and description are not null
      // filter ingredients and instructions for saved items (not the dummy starter objects)?
      // axios call to server to post recipe to database
    }



    addNewIngredient(event){
      this.setState(prevState => ({ingredients: prevState.ingredients.concat([this.ingredientCounter])}), () => {this.ingredientCounter++; console.log(this.state)});
    }

    saveIngredient(index, ingredient){
      console.log(`saveIngredient called with index ${index} and ingredient ${ingredient}`)
      let updatedIngredients = this.state.ingredients;
      updatedIngredients[index] = ingredient;
      this.setState({ingredients: updatedIngredients}, () => console.log(this.state));
    }

    deleteIngredient(index){
      console.log(`deleteIngredient called with index ${index}`);
      let updatedIngredients = this.state.ingredients;
      updatedIngredients.splice(index, 1);
      this.setState({ingredients: updatedIngredients}, () => console.log(this.state));
      // not really necessary
      this.ingredientCounter--;
    }

    editIngredient(){

    }
    
    //reference below
    // handleShareholderNameChange = (idx) => (evt) => {
    //     const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
    //       if (idx !== sidx) return shareholder;
    //       return { ...shareholder, name: evt.target.value };
    //     });
    
    //     this.setState({ shareholders: newShareholders });
    //   }

    render() {
      return (
        <div id='create'>
          <CreateTitle updateRecipe={this.updateRecipe} />
          <CreateDescription updateRecipe={this.updateRecipe} />
          <CreateIngredients 
            ingredients={this.state.ingredients}
            addNewIngredient={this.addNewIngredient}
            saveIngredient={this.saveIngredient}
            deleteIngredient={this.deleteIngredient}
          />
        </div>
      )
    }
}


export default Create;