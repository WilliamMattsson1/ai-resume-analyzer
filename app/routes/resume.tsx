import React from 'react'
import { useParams } from 'react-router'

const resume = () => {
    const { id } = useParams()

    return <div>Resume ID: {id}</div>
}

export default resume
