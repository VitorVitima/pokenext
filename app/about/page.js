import './about.css'
function About() {
    return (
        <div className='conteinerAbout'>
            <h1 className="h1About">About</h1>
            <p className="pAbout">
                Site criado para praticar e testar minhas habilidades com next.js. Não ficou do jeito que eu queria, então pretendo melhorar.
            </p>
            <img
                className='imgAbout'
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                alt='Pikachu_about'
            ></img>
        </div>
    )
}
export default About