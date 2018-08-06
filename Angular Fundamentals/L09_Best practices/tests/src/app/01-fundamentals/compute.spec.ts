import {compute} from './compute'

describe('compute',()=>{
    it('should return 0 for negative number',()=>{
        const result = compute(-1)
        expect(result).toBe(0)
    })
})