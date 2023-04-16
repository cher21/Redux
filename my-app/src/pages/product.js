import React, { useEffect, useState } from 'react';
import AddProduct from './addProduct';
import EditProduct from './editProduct';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
import '../App.css';
// import Image from 'next/image';
import Header from './header';
import { doDelete, doRequestGetProduct } from '../redux/action/actionReducerProductSaga';

const Product = () => {
    // eslint-disable-next-line no-unused-vars
    let { products, message, refresh } = useSelector((state) => state.productReducers)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState({
      status: false,
      id: 0
    })

    const editOpen = (id) => {
      setIsEdit(prev => {
          return { ...prev, status: true, id: id}
      });
   }

      const deleteOpen = async (id) => {
        const confirmed = window.confirm(`Apakah anda yakin akan menghapus product dengan id-${id}?`);
        if (confirmed) {
          dispatch(doDelete(id))
          // .then((result: any)=>{
            toast.success('Product Terhapus ^_^')
          // })
        }
      }

      useEffect(() => {
        dispatch(doRequestGetProduct())
        toast.success('Selamat Datang di menu Product ^_^', {toastId: 'welcome-message'})
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [refresh]);

return (
  <div> 
  <Header title='Product' onClick = {()=> setIsOpen(true)}>
  <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products && products.map((product) => (
          <a key={product.prod_id} href={product.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src= {`http://localhost:3005${product.image}`} 
                alt= {`http://localhost:3005${product.image}`} 
                className="img-container group-hover:opacity-75"
              />
            </div>
            <h4 className="my-1 text-sm text-gray-700">{`Id: ${product.prod_id}`}</h4>
            <h3 className="my-1 text-sm text-gray-700">{product.prod_name}</h3>
            <h3 className="my-1 text-sm text-gray-700">{product.description}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{`Rp. ${product.price}`}</p>
            <div className='flex-row space-x-4 mt-4 text-right'>
                            <button className="inline-flex justify-center rounded-md border-transparent bg-blue-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => editOpen(product.prod_id)}>
                                Edit</button> 
                            <button className="inline-flex justify-center rounded-md border-transparent bg-red-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => deleteOpen(product.prod_id)}>
                                Delete</button>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Header>
            <ToastContainer autoClose={2000}/>
            {
                isOpen ? <AddProduct isOpen={isOpen} closeModal={() => setIsOpen(false)}/>:null
            }
            {
                isEdit.status ? <EditProduct isEdit={isEdit} closeModal={() => setIsEdit(prev => {
                    return { ...prev, status: false}
                })}/> : null
            }
</div>
)
}
export default Product