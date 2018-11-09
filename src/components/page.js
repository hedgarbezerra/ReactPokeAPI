import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
//	import Search from '../components/search'

class Page extends Component {
  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (	

      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="home">
    	Pokedex Topper
    	</div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>
    )
  }
}

export default Page
