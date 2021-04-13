const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const projectdetalleSchema = Schema({
    idProject: mongoose.ObjectId,
    projectDetalleName: String,
    fechaAvance: Date,
    tipoRecurso: String,
    urlRecurso: String
    //iddetalleProject: mongoose.ObjectId,
},
{
    timestamps: true
})
projectdetalleSchema.methods.setUrlRecurso = function setUrlRecurso(filename){
    const  { host, port } = appConfig
    this.urlRecurso = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Projectsdetalle', projectdetalleSchema)