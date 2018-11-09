import React, { PureComponent } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


class Pokemon extends PureComponent {
  state = {}
  state = {
    open: false
  };


 getPokemons=(id)=> {

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
         
        this.setState({
        types: data.types,  
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        name: data.name,
        order: data.order,
        picFront: data.sprites.front_default,
        picShiny: data.sprites.front_shiny
      });
      });
  }

 onOpenModal(){

    this.setState({ open: true });
  };

  onCloseModal = ()=>{

    this.setState({ open: false });
  };

  buttonClick(id) {

        this.onOpenModal();
        this.getPokemons(id);
    };

   

  render(){

    const { open } = this.state
    const { pokemon } = this.props

    return(

      <div>
          <div className="pokemon">
            <button
                type="button"
                className="pokemon__sprite"
                style={{
                    backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokemon.id
                        }.png`})`
                }}
                onClick={() => this.buttonClick(pokemon.id)} 
           />         
           <p className="pokemon__name">{pokemon.name}</p>
          </div>
          
           <Modal open={open} onClose={this.onCloseModal} center>

           <div className="modal">
           <button
                type="button"
                className="modal-img"
                style={{backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokemon.id
                        }.png`})`
                }}
                    />
          <h1>{pokemon.name}</h1> 
        
                        
           <p><strong>Peso: </strong> {JSON.stringify(this.state.weight)}</p> 

            <p><strong>Altura: </strong>{JSON.stringify(this.state.height)} </p>  

          <p>É do <strong>tipo</strong> : {JSON.stringify(this.state.types && this.state.types.map((abilityObject) => 
        abilityObject.type.name).join(', '))} </p>
          <p> E tem <strong>habilidades</strong> legais, como: {JSON.stringify(this.state.abilities && this.state.abilities.map((abilityObject) => 
        abilityObject.ability.name).join(', '))}</p>

         </div> 

        </Modal>
        

        </div>
        )
  }
}

export default Pokemon