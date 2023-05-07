import Image from 'next/image'
import './about.css'
function About() {
    return (
        <div className='conteinerAbout'>
            <h1 className="h1About">About</h1>
            <p className="pAbout">
                Site criado para praticar e testar minhas habilidades com next.js. Não ficou do jeito que eu queria, então pretendo melhorar.
            </p>
            <Image
                className='imgAbout'
                src='/image/pikachu.png'
                width={475}
                height={475}
                alt='Pikachu_about'
            ></Image>
        </div>
    )
}
export default About