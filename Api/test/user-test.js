const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const app = require('../index');
const version = '/api';

const user = {
    "userName": "MikiCastro34",
    "firstName": "Miguel Angel",
    "lastName": "Castro Edreira",
    "email": "sharky"+(Math.random() * (1000 - 1) + 1)+"@gmail.com",
    "idUserType": 1
}

const userFail = {
    "userName": "MikiCastro34",
    "firstName": "Miguel Angel",
    "lastName": "Castro Edreira",
    "email": "sharky310@gmail.com",
    "idUserType": 1
}

chai.use(chaiHttp);

/**
 * Prueba de añadido correcto de usuario
 */
describe('Add new user', ()=>{
    it('Insert new user in database' ,(done) => {
        chai.request(app)
            .post(`${version}/profile/create`)
            .send(user)
            .end( function(err, res) {
                expect(res).to.have.status(201);
                done();
            });
    });

    //Insertar usuario duplicado por email
    it('Insert user with error duplicity' ,(done) => {
        chai.request(app)
            .post(`${version}/profile/create`)
            .send(userFail)
            .end( function(err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
});

