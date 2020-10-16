const { expect } = require('chai')
const { executeSync } = require('yop-postgresql')

describe('mocha', ()=>{

    it('is ready', ()=> {
        expect(1+2).to.equal(3)
    })
})

describe('postgresql', ()=> {

    it('is ready', async ()=>{
        var rows = await executeSync('select current_user')

        expect(rows.length).to.equal(1)
        expect(rows[0].current_user).to.equal('dev')
    })
})