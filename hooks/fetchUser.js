// import { View, Text } from 'react-native'
// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const fetchUser = () => {
//     const [ data, setData ] = useState([])
//     const [ isLoading, setIsLoading ] = useState(false)
//     const [ error, setError ] = useState(null)

//     const fetchData = async () => {
//         setIsLoading(true)

//         try {
//             const response = await axios.get("https://drab-ruby-adder-vest.cyclic.app/api/users")
//             setData(response.data)
//             setIsLoading(false)
//         } catch (error) {
//             setError(error)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     useEffect(()=> {
//         fetchData()   
//     }, [])

//     const refetch = () => {
//         setIsLoading(true)
//         fetchData();
//     }

//   return {data, isLoading, error, refetch}
// }

// export default fetchUser

import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchUser = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://drab-ruby-adder-vest.cyclic.app/api/users/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default fetchUser;
