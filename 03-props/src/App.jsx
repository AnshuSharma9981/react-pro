
// import './App.css'
import Card from './Card'

function App() {

  const imgList = [
    "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];


  return (
    <>
      <Card user='Anshu sharma' age={23}  img={imgList} idx={0}/>
      <Card user='sudd sharma' age={24} img={imgList} idx={1}/>
      <Card user='jay sharma' age={25} img={imgList} idx={2}/>
      
      
    </>
  )
}

export default App
