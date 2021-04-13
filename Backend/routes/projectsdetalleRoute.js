const express = require('express')
const {
    addProjectsdetalle,
    getProjectsdetalles,
    updateProjectsdetalle,
    deleteProjectsdetalle,
    getProjectsdetalle
} = require('../controllers/projectsdetalleController')

const api = express.Router()

    api.post('/projectsdetalle/', addProjectsdetalle)
    api.get('/projectsdetalle', getProjectsdetalles)
    api.put('/projectsdetallexid/:id', updateProjectsdetalle)
    api.delete('/projectsdetallexid/:id',deleteProjectsdetalle)
    api.get('/projectsdetallexid/:id',getProjectsdetalle)
    
module.exports = api