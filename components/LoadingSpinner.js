import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin bg-slate-950"></div>
        </div>
    )
}

export default LoadingSpinner
