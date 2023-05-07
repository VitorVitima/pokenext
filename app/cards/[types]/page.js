import CardMon from '@/componentes/main/cardMon/cardMon'
import Link from 'next/link'
import './styleTypes.css'
function rLinks(api, params, numPage){
    const tamanho = Math.ceil(api.length/10)
    let v1 = []
    function forLoop(){
        for(let v2 = 1; v2 <= tamanho ; v2++){
            v1.push(v2)
        }
    }
    forLoop()
    function linksFun(e){
        const reTrue = 'linkFocus'
        const reFalse = `linkGe_${e}`
        if(e == numPage){
            return reTrue
        } else{
            return reFalse
        }
    }   
    return (
        <>
            {
                v1.map(e=>{
                    return(
                        <Link key={e} id={linksFun(e)} className={'linkNavegationType'} href={`cards/${params}_${e}`}>
                            {e}
                        </Link>
                    )
                })
            }
        </>
    )
}
async function getData2(url, params) {
    const data = await fetch(url).then(e => e.json())
    let ret
    data.results.map(e => {
        if (e.name == params) {
            ret = e.url
        }
    })
    const data2 = await fetch(ret).then(e => e.json())
    return data2.pokemon
}
async function getData(url) {
    const data = await fetch(url).then(e => e.json())
    return data
}
async function Types({ params }) {
    const paramsEspe = params.types.split(`_`)
    const pokemons = await getData2('https://pokeapi.co/api/v2/type/', paramsEspe[0])
    return (
        <main className={'main'}>
            <div className={'conteinerPokemonsType'}>
                {
                    pokemons.map(async (e,posi) => {
                        if(posi < Number(`${paramsEspe[1]}0`) && posi >= Number(`${paramsEspe[1] - 1}0`)){
                            const api = await getData(pokemons[posi].pokemon.url)
                            const imgUrl = api.sprites.other['official-artwork'].front_default
                            return (
                                <CardMon
                                    e={pokemons[posi].pokemon}
                                    link={`/cards/${paramsEspe[0]}/${pokemons[posi].pokemon.name}`}
                                    imgUrl={imgUrl}
                                    key={`${posi}_${pokemons[posi].pokemon.name}`}
                                ></CardMon>
                            )
                        }
                    })
                }
            </div>
            <div className={'conteinerLinkNavegationType'}>
                {rLinks(pokemons, paramsEspe[0], paramsEspe[1])}
            </div>
        </main>
    )
}
export default Types