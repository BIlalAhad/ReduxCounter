
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import changnethenum from './reducers/Counter';
import { Decrement, Increment } from './actions';

function App() {
  const state =useSelector((state)=>state.changnethenum)
  const Dispatch=useDispatch();
  return (
   <>
    <section className='m-2'>
    <section className='max-w-6xl h-[80vh] flex flex-col mt-20 justify-center items-center  mx-auto bg-gray-200 border-x-8 border-slate-300 rounded-full '>
          <div className='font-bold text-3xl text-center p-10'>
                INCREMENT AND DECREMENT COUNTER
          </div>
        <div className='flex gap-5 items-center bg-slate-300 rounded-3xl'>
          <button className='font-bold text-2xl  p-3 px-5 ' onClick={()=>{Dispatch(Increment())}}>+</button>
          <p className='bg-white p-3 px-4'>{state}</p>
          <button className='font-bold text-2xl  p-3 px-5 ' onClick={()=>{Dispatch(Decrement())}}>-</button>
        </div>
      </section>
    </section>
   </>
  );
}

export default App;
