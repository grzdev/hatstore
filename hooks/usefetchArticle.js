import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchArticle = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const fetchArticle = async () => {
        setIsLoading(true)

        try {
            const response = await axios.get("https://drab-ruby-adder-vest.cyclic.app/api/articles")
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchArticle()   
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchArticle();
    }

  return {data, isLoading, error, refetch}
}

export default useFetchArticle