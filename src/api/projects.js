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

export const createProject = (project, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/projects',
    data: {
      project: {
        name: project.name,
        category: project.category,
        description: project.description,
        image: project.image,
        tools: project.tools,
        materials: project.materials,
        steps: [project.steps]
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Works:
// POST /projects
// body {"project":{"name":"Project3","category":"other","description":"Description.","image":"https://www.rei.com/media/d5fc8e27-8a51-4211-874a-531586e36322?size=784x588","tools":"hammer, nails","materials":"wood, glue","steps":["one, two, three"]}}

// Doesn't Work:
// POST /projects
// body {"project":{"name":"sdfg","category":"adrg","description":"adfg","image":"https://image.shutterstock.com/image-photo/teak-wood-furniture-stand-on-260nw-191159486.jpg","tools":"adfg","materials":"adfg","steps":["adfg, sdf"]}}
