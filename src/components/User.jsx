import React from 'react'


const User = ({ item, isInvited, onClickInvite }) => {
    return (
            <li className='flex justify-between items-center py-3 shadow-md mb-2 px-3'>
                <div className='flex items'>
                    <img className='w-[32px] h-[32px] mr-3 rounded-3xl shadow-lg' src={item.avatar} alt="Avatar" />
                    <div className='flex flex-col'>
                        <h4 className='text-sm'>{item.first_name} {item.last_name}</h4>
                        <p className='text-xs text-zinc-400 '>{item.email}</p>
                    </div>
                </div>
                <button onClick={() => onClickInvite(item.id)}>
                    {isInvited
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 p-1 hover:stroke-[1.2]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>                      
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 p-1 hover:stroke-[1.2]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                    }
                </button>
            </li>
    )
}

export default User