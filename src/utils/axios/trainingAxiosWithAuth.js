import axios from 'axios'

const trainingAxiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL + 'training',
        headers: {
            Authorization: token,
        }
    })
}

export default trainingAxiosWithAuth;