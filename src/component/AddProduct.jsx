import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const AddProduct = () => {
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState('');
  const dispatch = useDispatch();

  
  return (
    <div className='shadow-xl w-[60%] mx-auto p-3 m-6'>
      <form className='my-4'>
          <label className='text-2xl'>Title</label>
          <input 
          type="text" 
          placeholder='Title' 
          className='w-full h-[36px] outline-none border-2 rounded-lg my-2 p-2'
          value={title}
          onChange={(event)=>setTitle(event.target.value)}
          />
          <label className='text-2xl'>Price</label>
          <input 
          type="text" 
          placeholder='Title' 
          className='w-full h-[36px] outline-none border-2 rounded-lg my-2 p-2'
          value={price}
          onChange={(event)=>setPrice(event.target.value)}
          />
        <button 
          className='w-[130px] h-[40px] bg-teal-600 rounded-lg text-white font-bold hover:shadow-xl'>
          Add Product
        </button>
      </form>
      <Link to="/">
        <div className='text-center underline text-blue-500'>Back to Home</div>
      </Link>
    </div>
  )
}

export default AddProduct