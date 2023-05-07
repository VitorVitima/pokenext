import Link from 'next/link'
import './header.css'
function Header() {
    return (
        <header>
            <Link href={`/`}>
                <div className='logo'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'
                    >
                    </img>
                    <span>Pokédex</span>
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header