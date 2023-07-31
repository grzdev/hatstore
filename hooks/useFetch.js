import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.get("https://drab-ruby-adder-vest.cyclic.app/api/products")
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()   
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

  return {data, isLoading, error, refetch}
}

export default useFetch