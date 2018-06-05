const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values:['ADMIN_ROLE','USER_ROLE'],
  message: '{VALUE} no es un rol válido'
};

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  // email: {
  //   type: String,
  //   unique: true,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   unique: false,
  //   required: true
  // },
  // img: {
  //   type: String,
  //   required: false
  // },
  // role: {
  //   type: String,
  //   default: 'USER_ROLE',
  //   enum: rolesValidos
  // },
  // estado: {
  //   type: Boolean,
  //   default: true
  // },
  // google: {
  //   type: Boolean,
  //   default: false
  // },
  ciudadesFavoritas:{
    type: Array,
    default:[]
  }
});

UsuarioSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
}

UsuarioSchema.plugin(uniqueValidator, {message:'ya existe una cuenta con este {PATH}'});

module.exports = mongoose.model('Usuario', UsuarioSchema);
