import React from 'react'

const StudentCard = (props) => {
  return (
    <div className=' className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-1'>
        <h2 className='text-lg font-bold mb-2'>
            {props.name}
        </h2>
        <p className='text-slate-500 mb-1'>
            รหัสนักศึกษา: {props.id}
        </p>
        <p className='text-blue-600 font-bold mb-3'>
            อายุ: {props.age} ปี
        </p>
        <p className='text-blue-600 font-bold mb-3'>
            สาขา: {props.major}
        </p>

    <div className='flex gap-2'>
        <button
            onClick={props.onEdit}
            className='w-full bg-blue-600 hover:bg-blue-800 text-white rounded-lg py-2'
            >
            แก้ไข
            
        </button>
        <button
            onClick={props.onDelete}
            className='w-full bg-red-600 hover:bg-red-800 text-white rounded-lg py-2'
            >
            ลบ
        </button>
        </div>
    </div>
  )
}

export default StudentCard