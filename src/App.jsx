import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'


function App() {
  const itemsMenu = [
    {href: '#inicio', label: 'Inicio'},
    {href: '#productos', label: 'Productos'},
    {href: '#ofertas', label: 'Ofertas'},
    {href: '#contacto', label: 'Contacto'},
    {href: '#nosotros', label: 'Nosotros'},
    {href: '#denuncias', label: 'Denuncias'},
  ];

  return (
    <>
      <Header 
      titulo="MineTime" 
      subtitulo="Realiza mineria con herramientas de calidad"
      itemsMenu={itemsMenu}/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
