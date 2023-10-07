import Footer from './Footer';
import Navbar from '../components/common/Navbar';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';


export const metadata = {
  title: 'The-modelPT',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />

        {children}

        <Footer />
        </body>
    </html>
  )
}
