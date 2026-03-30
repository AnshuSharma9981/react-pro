import Button from "./Button";

export default function App(){

  const data = [
    {
      gender:"Men's fashion",
      desc:'Explore the latest trend for men.'
    },
    {
      gender:"Women's fashion",
      desc:'Discover chic and elegant outfits.'
    }
  ];

  return (
    <>
      <div className="h-screen w-screen text-center pt-40  bg-pink-100">
        <h1 className="text-7xl font-bold m-5">Describe Your Style</h1>
        <p className="text-2xl m-5">Fresh collections arriving daily. Quality fashion at beatable prices.</p>
        
          <button className="bg-blue-700 px-10 py-3 m-5 rounded text-white font-bold text-xl" >Shop Men</button>
          <button className="bg-pink-500 px-10 py-3 m-5 rounded text-white font-bold text-xl"  >Shop Women</button>
      </div>


      <div className="h-screen w-screen  flex flex-col items-center">
        <h3 className="font-bold text-3xl p-10">Explore Collections</h3>

        <div className="flex justify-between gap-20">
          {
            data.map(function(elem){
              return <Button gender={elem.gender} desc={elem.desc}/>
            })
          }
          
        </div>
      </div>
      
    </>
  )
}