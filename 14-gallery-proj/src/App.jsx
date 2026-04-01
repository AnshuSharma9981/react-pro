import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';
import ReactPaginate from "react-paginate";

function App() {

  let [userData , setUserData] = useState([]);
  let [index , setIndex] = useState(1);

  const itemsPerPage = 10;

  const getdata = async () =>{
    const  res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${itemsPerPage}`);
    setUserData(res.data);
  }

  const pageCount = 100; // Picsum has many pages (approx)

  const handlePageClick = (event) => {
    setIndex(event.selected + 1); // ReactPaginate is 0-based
  };

  useEffect(function(){
    getdata()
  },[index]);


  let printUserData  = <h3 className='text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if (userData.length>0){
    printUserData = userData.map(function(elem, idx ){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }


  return (
    
    <div className='bg-black h-screen overflow-auto text-white  p-4'>
      <h1 className='fixed bg-red-500 rounded-full h-20 w-20 flex items-center justify-center font-bold m-4'>page {index}</h1>
      {/* <button className="bg-red-800  active:scale-95 m-5 px-8 py-4 rounded-full text-white font-bold" onClick={getdata}>Get data</button> */}
    
      <div className='flex h-[82%] flex-wrap gap-4 '>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-5 m-10'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
      
    </div>
    )
}

export default App

{/* //         <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold active:scale-95' */
//           onClick={()=>{
//             if(index>1){
//               setIndex(index-1)
//             }
//             setUserData([]);
//           }} >
//           Prev
//         </button>
//         <h1>Page {index}</h1>
//         <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold active:scale-95'
//           onClick={()=>{
//             setUserData([]);
//             setIndex(index+1)
            
//           }}>
//             Next
//           </button>
}
