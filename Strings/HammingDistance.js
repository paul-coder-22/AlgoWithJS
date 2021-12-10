class HammingDistance {
    constructor(stringA, stringB) {
        this.stringA = stringA
        this.stringB = stringB
    }
    hammingDistance() {
        if (this.stringA.length !== this.stringB.length) {
            throw ("Insuffient Data")
        }
        let value = 0;
        for (let index = 0; index < this.stringA.length; index++) {
            if (this.stringA[index] !== this.stringB[index]) {
                value += 1
            }
        }
        console.log(`Number Of Hamming String ${value}`)
    }
}

module.exports = HammingDistance;