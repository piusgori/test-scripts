const { expect } = require('chai');
const authMiddleware = require('../middleware/is-auth');

it('should throw an error if there is no authorization header is present', () => {
    const req = {
        get: function (headerName) {
            return null;
        }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw('Not authenticated.');
})

