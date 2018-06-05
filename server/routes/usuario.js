const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario');

const app = express();


app.get('/getUsers', function (req, res) {
  Usuario.find({}).exec((err, usuarios) => {
      if(err){
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        usuarios
      });
    })
});

app.post('/getUser', function (req, res) {
  Usuario.findOne({nombre:req.body.nombre}).exec((err, usuario) => {
      if(err){
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        usuario
      });
    })
});

app.post('/usuario', function (req, res) {

  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    ciudadesFavoritas:[]
  });

  usuario.save((err, usuarioDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    })
  });

});

app.post('/usuario/ciudadesFavoritas', function (req, res) {

  let {nombre, location} = req.body;

  Usuario.findOneAndUpdate (
    {nombre:nombre},
    {
      $push: { ciudadesFavoritas: location }
    },
    {new:true},
    (err, usuarioDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      });
    }
      res.json({
        ok: true,
        usuario: usuarioDB
      });
    });
  });

  app.post('/usuario/ciudadesFavoritas', function (req, res) {
    Usuario.find({nombre:req.body.nombre}).exec((err, usuarios) => {
        if(err){
          return res.status(400).json({
            ok: false,
            err
          });
        }
        res.json({
          ok: true,
          usuario: usuarioDB
        });
      })
  });

app.post('/usuario/deleteCiudadesFavoritas', function (req, res) {

  let {nombre, location} = req.body;

  Usuario.findOneAndUpdate (
    {nombre:nombre},
    {
      $pull: { ciudadesFavoritas: {city:location} }
    },
    {new:true},
    (err, usuarioDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      });
    }
      res.json({
        ok: true,
        usuario: usuarioDB
      });
    });
  });




module.exports = app;
