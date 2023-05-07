'use client'
import Style from './carrossel.module.css'
import Link from 'next/link';

async function getData(url) {
    const data = await fetch(url).then(e => e.json()); return data
}
function randomPokemon(api) {
    let numbers = []
    for (let v1 = 0; v1 < 6; v1++) {
        numbers.push(Math.floor(Math.random() * api.count))
    }
    return (
        <>
            {
                numbers.map(async e => {
                    const data = await getData(api.results[e].url)
                    return (
                        <Link className='cardLink' href={`/cards/${data.types[0].type.name}/${data.name}`}>
                            <div style={{ backgroundImage: `url(${data.sprites.other['official-artwork'].front_default})` }} className={Style.pokeCarrossel}>
                                <span className={Style.namePoke} >{data.name}</span>
                                <div className={Style.stats}>
                                    <span>Hp: {data.stats[0].base_stat}</span>
                                    <span>Height: {data.height}0cm</span>
                                    <span>Type: {data.types[0].type.name}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}
async function Carrossel() {
    const allPokemons = await getData('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    return (
        <>
            <h1 className={Style.h1Re}>Recommendations</h1>
            <div className={Style.conteinerCarrossel}>
                {randomPokemon(allPokemons)}
            </div>
        </>
    )
}
export default Carrossel