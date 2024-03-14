import React from 'react'

const Error = ({children}) => {

    return (
        <div className="bg-red-600 text-white text-center uppercase font-bold mb-3 rounded-md p-3">
            <p>{children}</p>
        </div>
    )
}

export default Error