import {Link, Outlet} from 'react-router-dom'

export default function Product(){
  return (
    <div>
        <div className="flex justify-center gap-10 py-4">
            <Link className='text-2xl font-semibold' to='/product/men'>Men</Link>
            <Link className='text-2xl font-semibold' to='/product/women'>Women</Link>
            
        </div>
        <Outlet />

    </div>
  )
}