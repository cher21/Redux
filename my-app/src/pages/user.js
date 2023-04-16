import { Menu, Transition } from '@headlessui/react'
import React, { useEffect, useState, Fragment } from 'react'
import Header from './header'
import { BsFillEyeFill} from 'react-icons/bs'
import { MdDelete, MdEdit } from 'react-icons/md'
import AddUser from './addUser'
import EditUser from './editUser'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { doDelete, doRequestGetUser } from '../redux/action/actionReducerSaga'


export default function User() {
    // eslint-disable-next-line no-unused-vars
    let { users, message, refresh } = useSelector(state => state.userReducers)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState({
        status: false,
        id: 0
    })

    const column = [
        {name: 'No'},
        {name: 'User ID'},
        {name: 'Username'}
    ]
    const editOpen = (id) => {
        setIsEdit(prev => {
            return { ...prev, status: true, id: id}
        });
    }

    const deleteOpen = async (id) => {
        const corfirmed = window.confirm(`Apakah Anda yakin ingin menghapus user dengan id-${id}?`);
        if (corfirmed) {
        dispatch(doDelete(id))
        .then((result)=>{
            toast.success("Delete Berhasil ^_^")
        })}
    }

    useEffect(() => {
        dispatch(doRequestGetUser())
        toast.success("Selamat Datang di menu User ^_^", {toastId: 'welcome-message'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[refresh]);

return (
    <div> 
        <Header title='User' onClick = {()=> setIsOpen(true)}>
            <table className='min-w-full table-fixed'>
                <thead>
                    <tr className='border-t border-gray-200'>
                        {
                            (column || []).map((col)=>
                            <th className='pr-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium
                            text-gray-500 uppercase tracking-wide'>
                                <span className='lg:pl-2'>
                                    {col.name}
                                </span>
                            </th>
                            ) 
                        }
                        
                        <th className='pr-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium
                            text-gray-500 uppercase tracking-wide'>
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-whiter divide-y divide-gray-100'>
                    {
                        (users || []).map((dt,index) => 
                        <tr key={dt.id}>
                            <td className='px-6 py-3 text-sm text-gray-900'>{index+1}</td>
                            <td className='px-6 py-3 text-sm text-gray-900'>{dt.user_id}</td>
                            <td className='px-6 py-3 text-sm text-gray-900'>{dt.username}</td>
                            <td className='px-6 py-3 text-sm text-gray-900'>
        
                            <div className="w-full text-right">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium 
                            text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <BsFillEyeFill
                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                                />
                            </Menu.Button>
                            </div>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        className={`${
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={() => editOpen(dt.user_id)}>   
                                        {active ? (
                                        <MdEdit
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                        ) : (
                                        <MdEdit
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                        )}
                                        Edit
                                    </button>
                                    )}
                                </Menu.Item>
                                </div>

                                <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        className={`${
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={() => deleteOpen(dt.user_id)}>
                                        {active ? (
                                        <MdDelete
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                        ) : (
                                        <MdDelete
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                        )}
                                        Delete
                                    </button>
                                    )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </Header>
        <ToastContainer autoClose={2000}/>
        {
            isOpen ? <AddUser isOpen={isOpen} closeModal={() => setIsOpen(false)}/>:null
        }
        {
            isEdit.status ? <EditUser isEdit={isEdit} closeModal={() => setIsEdit(prev => {
                return { ...prev, status: false}
            })}/> : null
        }
        
    </div>
  )
}
