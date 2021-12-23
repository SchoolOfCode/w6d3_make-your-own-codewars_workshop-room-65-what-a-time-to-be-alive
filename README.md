# School of Code 2070 Room Allocation Problem

## Scenario

It's 2070, and School of Code is now an international school for aspiring software developers with thousands of budding bootcampers.

In typical Chris fashion, we have assigned to you the task of allocating students and coaches to their breakout rooms in zoom based on their cohort.

We have given you three arrays of objects in the following format:

```
Students = [
 {name: "Bob", cohort: 19},
 {name: "Jim", cohort: 20}
];

Coaches = [
 {name: "Chris", cohort: 19},
 {name: "Liz", cohort: 20}
];

Rooms = [
 {cohort: 19, room: 1},
 {cohort: 20, room: 2}
 ];
```

You will need to write a function that takes in the three arrays above as input, and outputs an array in the same format to the one below.

```
Output = [
{name: "Bob", cohort: 19, room: 1}
{name: "Jim", cohort: 19, room: 2}
{name: "Chris", cohort: 19, room: 1}
{name: "liz", cohort: 20, room: 2}
];
```
