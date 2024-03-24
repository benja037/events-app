import axios from 'axios'

export const getAllTasks = () => {
    return axios.get('https://catolica-backend.vercel.app/tasks/api/tasks/')

}