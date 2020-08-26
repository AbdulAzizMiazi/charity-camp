const salaryArray = [
    410200.25,
    897554.36,
    777854.36,
    1008025,
    9247756.25,
    7836544.23,
    785462,
    996556.99,
    895788.23,
    785421.36,
    8796542,
    7854263.78,
    25478524,
    257894.36,
    369457.99,
    7854789.64,
    763542.78,
    256432.14,
    96314.20,
    8754265,
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(salaryArray);

export default salaryArray;