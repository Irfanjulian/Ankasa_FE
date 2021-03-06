import axios from "axios";

export const flightAction = (page, search, sort, sortBy) => async(dispatch) =>{
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+`/flights?search=${search}&sort=${sort}&sortby=${sortBy}&page=${page}`)
         const data = result.data
         dispatch({type: 'GET_FILGHTS', payload: data})
      } catch (error) {
         console.log(error)
      }   
}