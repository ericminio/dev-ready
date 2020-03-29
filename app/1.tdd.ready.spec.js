const { expect } = require('chai')

describe('environment', ()=>{

    it('is ready for tdd', ()=> {
        expect(1+2).to.equal(3);
    })
})