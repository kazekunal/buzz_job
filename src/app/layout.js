import './globals.css'
import {Inter, Mulish, Roboto} from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ['latin'] })

const mulish = Mulish({
    weight: ["300","400","500","600","700"],
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
  title: 'Flix',
  description: 'Now binge your favourite movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
