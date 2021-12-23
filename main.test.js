//👉 Write your tests below here:

import * as arrays from './data.js'
import {expected2021, expected2070} from './expected.js'
import {merge} from './main.js'

describe('The Students are Placed Successfully in their respective rooms', () => {
    test(`2021:= Given three arrays, the output will be a merged arrays assigning students
            and coaches to their respective rooms based on their cohort`, ()=> {
                const actual = merge(arrays.nationalCohortCoaches2021, arrays.nationalCohortStudents2021, arrays.nationalCohortRooms2021);
                const expected = expected2021;
                expect(actual).toStrictEqual(expected)
            })

    test(`2070:= Given three arrays, the output will be a merged arrays assigning students
            and coaches to their respective rooms based on their cohort`, ()=> {
                const actual = merge(arrays.nationalCohortCoaches2070, arrays.nationalCohortStudents2070, arrays.nationalCohortRooms2070);
                const expected = expected2070;
                expect(actual).toStrictEqual(expected)
            })
    
})
