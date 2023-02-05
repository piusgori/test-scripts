const sinon = require('sinon');
const { expect } = require('chai');

const User = require('../models/user');
const authController = require('../controllers/auth');

describe('Auth Controller - Login', () => {
    it('should throw an error if accessing database fails', () => {
        sinon.stub(User, 'findOne');
        User.findOne.throws();
        authController.login({ body: { email: 'test@test.com', password: 'tester' } }, {}, () => {}).then(result => {
            expect(result).to.be.an('error');
            expect(result).to.have.property('statusCode', 500);
        })
        User.findOne.restore();
    })
});