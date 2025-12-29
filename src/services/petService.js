import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/pets`;
const index = async ()=>{
    try {
        const response = await axios.get(BASE_URL)
        return response.data.pets
    } catch (error) {
        console.log(error)
    }
}

export {
    index
}