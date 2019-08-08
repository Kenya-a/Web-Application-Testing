 import { foul, strike, ball, hit } from './Dashboard';

describe('Dashboard.js', () => {

    describe('foul()', () => {

        it('should increase strikes value by two when there is one strike', () => {

            expect(foul(2)).toBe(3);

        });

        it('should increace stike value by one when there is no strikes', () => {

            expect(foul(0, 1)).toBe(1)

        });

        it('should not effect strikes if strikes value == 2', () => {

            expect(foul(2, 0)).toBe(2)

        });

    })

    describe('strike()', () => {

        it('should return value to zero once end value == 3', () => {
            //what about getting to 3

            expect(strike()).toBe(0)

        })
    })

    describe('ball()', () => {

        it('should return value to zero once end value == 4', () => {
            //what about getting to 4

            expect(ball()).toBe(0)

        })
    })

    describe('hit()', () => {

        it('should reset any value to zero when hit is recorded', () => {
            //what if numTwo is defined??

            expect(hit(900, )).toBe(0)

        })

    })


})