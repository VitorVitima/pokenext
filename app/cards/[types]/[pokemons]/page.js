import Img from "@/componentes/main/img/returnImg"
import TextAbout from "@/componentes/main/textAboutPokemon/textAboutPokemon"
import Link from "next/link"
import Style from './pokemons.module.css'
async function getData(url) {
    const data = await fetch(url).then(e => e.json())
    return data
}
async function Pokemon({ params }) {
    const pokemon = await getData(`https://pokeapi.co/api/v2/pokemon/${params.pokemons}`)
    return (
        <div className={Style.conteinerAll}>
            <div>
                <h1 className={Style.namePokemon}>{pokemon.name}</h1>
                <TextAbout api={pokemon}></TextAbout>
            </div>
            <div>
                <img className={Style.imgPoke} src={pokemon.sprites.other['official-artwork'].front_default}></img>
            </div>
            <div className={Style.conteinerDados}>
                <div>
                    <span>Stats:</span>
                    <ul>
                        <li>Weight: {pokemon.weight}g</li>
                        <li>Height: {pokemon.height}0cm</li>
                        <li>Hp: {pokemon.stats[0].base_stat}</li>
                    </ul>
                </div>
                <div>
                    <span>Abilities:</span>
                    <ul>
                        {pokemon.abilities.map(e => {
                            return (
                                <li key={e.ability.name}>
                                    {e.ability.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <span>Specie:</span>
                    <ul>
                        <li>{pokemon.species.name}</li>
                    </ul>
                </div>
                <div>
                    <span>Type:</span>
                    <ul>
                        <li>
                            <Link href={`./cards/${pokemon.types[0].type.name}_1`}>
                                {pokemon.types[0].type.name}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={Style.spritesConteiner}>
                <h2>Sprites:</h2>
                <div>
                    <Img img={pokemon.sprites.back_default}></Img>
                    <Img img={pokemon.sprites.back_shiny}></Img>
                    <Img img={pokemon.sprites.front_default}></Img>
                    <Img img={pokemon.sprites.front_shiny}></Img>
                </div>
                <div className={Style.otherConteiner}>
                    <h3>Other home:</h3>
                    <Img img={pokemon.sprites.other.home.front_default}></Img>
                    <Img img={pokemon.sprites.other.home.front_shiny}></Img>
                </div>
            </div>
        </div>
    )
}

export default Pokemon