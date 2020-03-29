const { expect } = require('chai')
var { executeSync } = require('yop-postgresql')

describe('mocha1', ()=>{

    it('is ready', ()=> {
        expect(1+2).to.equal(3)
    })
})

describe('postgresql1', ()=> {

    beforeEach(()=>{
        process.env.PGUSER='dev';
        process.env.PGDATABASE='data';
        process.env.PGHOST='postgres';
        process.env.PGPASSWORD='dev';
    })

    it('is ready', async ()=>{
        var rows = await executeSync('select current_user')

        expect(rows.length).to.equal(1)
        expect(rows[0].current_user).to.equal('dev')
    })
})