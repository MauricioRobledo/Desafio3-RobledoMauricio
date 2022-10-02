const Contenedor = require("./desafio2")
const express = require('express')


const listaDeProductos = new Contenedor("productos.txt")


const app = express ()
const PORT = 8080
app.get("/", async (req, res)=>{
    res.send("Desafio 3 de Mauricio Robledo, endpoints: /productos y /productoRandom")
})

app.get("/productos", async (req, res)=>{
    const contenido = await listaDeProductos.getAll()
    res.send(contenido)
})

app.get("/productoRandom", async(req, res)=>{
    const idrandom = (min, max) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const id = idrandom(1, 3)
    productoRandom = await listaDeProductos.getById(id)
    res.send(productoRandom)
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto 8080")
})