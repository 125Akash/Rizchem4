import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rizchem',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
     
    </html>
  )
}
