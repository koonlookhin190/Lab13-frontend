import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://54.236.215.35:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
