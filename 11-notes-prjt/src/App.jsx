

export default function App(){
  return(
    <div className="h-screen bg-black text-white">
      <form className="flex justify-between items-start flex-col gap-5 p-10" >
        <div className="flex  flex-col items-start w-1/2 gap-5">
          <input type="text" 
          placeholder="Enter notes heading"
          className="px-5 py-2 border-2 rounded"/>

          <input type="text" 
          placeholder="write details" 
          className="px-5 h-20  py-2 border-2 rounded"/>

          <button className="px-5 py-2 border rounded bg-white text-black">Add note</button>
        </div>
        
        <img className="h-80" src="https://gallery.yopriceville.com/downloadfullsize/send/14426" alt="" />
      </form>
    </div>
  )
}