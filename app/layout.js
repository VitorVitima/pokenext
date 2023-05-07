import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/componentes/hader/header'
import Footer from '@/componentes/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokédex',
  description: 'Projeto - de uma pokédex - criado com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
