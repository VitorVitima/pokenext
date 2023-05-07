import styles from './page.module.css'
import CardMon from '@/componentes/main/cardMon/cardMon'
import Carrossel from '@/componentes/main/carrossel/carrossel'
async function getData(url) {
  const data = await fetch(url).then(e => e.json())
  return data
}
export default async function Home() {
  const types = await getData('https://pokeapi.co/api/v2/type/')
  return (
    <main className={styles.main}>
      <div>
        <Carrossel></Carrossel>
      </div>
      <div>
        <h1>Types</h1>
      </div>
      <div className={styles.conteinerTypeCards}>
        {
          types.results.map(async (e, posi) => {
            if (posi < 18) {
              const urlTypes = e.url
              const api = await getData(urlTypes)
              const urlPokemons = api.pokemon[0].pokemon.url
              const api2 = await getData(urlPokemons)
              const imgUrl = api2.sprites.other['official-artwork'].front_default
              return (
                <CardMon
                  e={e}
                  link={`/cards/${e.name}_1`}
                  imgUrl={imgUrl}
                  key={`${e.name}_1`}
                ></CardMon>
              )
            }
          })
        }
      </div>
    </main>
  )
}
