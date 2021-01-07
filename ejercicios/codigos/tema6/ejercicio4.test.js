const request = require('supertest');
const app = require('./ejercicio2.js');
const assert = require('assert');

describe('GET /', function() {
    it('Test de una petición GET a /', function() {
      return request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .then(response => {
            assert(response.text, 'Aplicación de prueba del Ejercicio 2 del Tema 6 de IV')
        })
    });
});

describe('GET /', function() {
    it('Test de una petición POST a /', function() {
      return request(app)
        .post('/')
        .expect(404)
    });
});

describe('GET /', function() {
    it('Test de una petición GET a /parametro/[param]', function() {
      return request(app)
        .get('/parametro/parametrodeprueba')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .then(response => {
            assert(response.text, 'Aplicación de prueba del Ejercicio 2 del Tema 6 de IV, Parámetro facilitado a la aplicación: parametrodeprueba')
        })
    });
});