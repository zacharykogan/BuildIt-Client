import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/projects'
  })
}

export const showProject = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/projects/${id}`
  })
}
