import React from 'react'
import Copy from '../../public/icons/copy.svg'
import Delete from '../../public/icons/delete.svg'
import Edit from '../../public/icons/edit.svg'
import { toast } from 'react-toastify';

const ManageTable = ({setForm, pswdmanger, setPswdmanger}) => {
    const copytext = (text) => {
        toast.success("Copied to clipboard " + text);
        navigator.clipboard.writeText(text);
    }

    const deletedata = (id) => {
      setPswdmanger(pswdmanger.filter(item => item.id !== id))
    }

    const editdata = (id) => {
       setForm(pswdmanger.filter(item => item.id === id)[0])
       setPswdmanger(pswdmanger.filter(item => item.id !== id))
    }

  return (
    <div className="mx-4 md:mx-8">
        <h1 className='text-green-400 font-bold text-xl my-8'>Manage Password</h1>
        
        {/* Desktop Table */}
        <div className='hidden md:block p-4'>
            <table className='table-auto w-full overflow-hidden rounded-xl'>
                <thead className='bg-green-500 text-white'>
                    <tr>
                        <th className='p-3'>Site</th>
                        <th className='p-3'>Username</th>
                        <th className='p-3'>Password</th>
                        <th className='p-3'>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-200 text-center'> 
                    {pswdmanger?.map((item, index) => (
                    <tr key={index}>
                        <td className='p-3 relative'> 
                            {item.site} 
                            <img 
                                onClick={() => copytext(item.site)} 
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            /> 
                        </td>
                        <td className='p-3 relative'>
                            {item.username} 
                            <img 
                                onClick={() => copytext(item.username)} 
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            />
                        </td>
                        <td className='p-3 relative'>
                            {item.password} 
                            <img 
                                onClick={() => copytext(item.password)} 
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            />
                        </td>
                        <td className='p-3 flex justify-center gap-4'> 
                            <img 
                                onClick={() => editdata(item.id)} 
                                className='hover:cursor-pointer w-5 h-5' 
                                src={Edit} 
                                alt="edit" 
                            />  
                            <img 
                                onClick={() => deletedata(item.id)} 
                                className='hover:cursor-pointer w-5 h-5' 
                                src={Delete} 
                                alt="delete" 
                            />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        {/* Mobile Cards */}
        <div className='md:hidden space-y-4'>
            {pswdmanger?.map((item, index) => (
                <div key={index} className='bg-gray-200 rounded-lg p-4'>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='font-semibold'>Site:</span>
                        <div className='flex items-center'>
                            <span>{item.site}</span>
                            <img 
                                onClick={() => copytext(item.site)} 
                                className='ml-2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='font-semibold'>Username:</span>
                        <div className='flex items-center'>
                            <span>{item.username}</span>
                            <img 
                                onClick={() => copytext(item.username)} 
                                className='ml-2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='font-semibold'>Password:</span>
                        <div className='flex items-center'>
                            <span>{item.password}</span>
                            <img 
                                onClick={() => copytext(item.password)} 
                                className='ml-2 hover:cursor-pointer w-5 h-5' 
                                src={Copy} 
                                alt="Copy" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-center gap-8'>
                        <button 
                            onClick={() => editdata(item.id)}
                            className='flex items-center gap-1 text-blue-600'
                        >
                            <img src={Edit} alt="edit" className='w-5 h-5' />
                            <span>Edit</span>
                        </button>
                        <button 
                            onClick={() => deletedata(item.id)}
                            className='flex items-center gap-1 text-red-600'
                        >
                            <img src={Delete} alt="delete" className='w-5 h-5' />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ManageTable