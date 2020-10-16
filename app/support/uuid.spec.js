const { executeSync } = require('yop-postgresql')
const { expect } = require('chai')
const crypto = require('crypto')

describe('uuid generator', ()=>{

    let duplicates = (item, index, collection)=>{ 
        return collection.indexOf(item) != collection.lastIndexOf(item)
    }

    describe('from node', ()=>{
        let ids

        beforeEach(()=>{
            ids = []
            for(var i=0; i<10; i++) {
                ids.push(crypto.randomBytes(16).toString('hex'))                        
            }         
        })
        it('generates uuid without hyphen', ()=> {
            expect(ids.length).to.equal(10)
            for(var i=0; i<10; i++) {
                expect(ids[i].length).to.equal(32)
            }
            expect(ids.filter(duplicates).length).to.equal(0)
        })        
    })

    describe('from postgres', ()=>{
        let ids

        beforeEach(async ()=>{
            ids = []
            for(var i=0; i<10; i++) {
                await executeSync('CREATE EXTENSION IF NOT EXISTS pgcrypto')
                var rows = await executeSync('SELECT gen_random_uuid() AS uuid')
                ids.push(rows[0].uuid)
            }         
        })
        it('generates uuid with hyphen', ()=> {
            expect(ids.length).to.equal(10)
            for(var i=0; i<10; i++) {
                expect(ids[i].length).to.equal(36)
                expect(ids[i].replace(/-/g, '').length).to.equal(32)
            }
            expect(ids.filter(duplicates).length).to.equal(0)
        })        
    })
})