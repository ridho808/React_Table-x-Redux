import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProduct,productSelectors } from '../features/ProductSlice';
import { Link } from 'react-router-dom';


const ShowProduct = () => {

  const Dispatch = useDispatch()
  const Product = useSelector(productSelectors.selectAll)
  useEffect(()=>{
    Dispatch(getProduct())
  },[Dispatch])
  return (
   <div className='shadow-xl w-[70%] mx-auto p-6 m-3'>
      <table className='w-full'>
        <thead className='border-b border-black'>
          <tr >
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((Product,index)=>{
            return(
            <tr key={Product.id} className="border-b border-gray-400">
              <th>{index + 1}.</th>
              <th>{Product.title}</th>
              <th>{Product.Price}</th>
              <th>
                <button className='w-[110px] h-[30px] bg-teal-600 rounded-lg text-white font-bold hover:shadow-xl my-2'>
                  Edit
                </button>
              </th>
            </tr>
            )
          })}
        </tbody>
      </table>
      <Link to="/add">
        <div className='text-center underline text-blue-500'>Add Product</div>
      </Link>
   </div>
  )
}

export default ShowProduct;
