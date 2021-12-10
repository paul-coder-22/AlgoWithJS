class Cartesian {
    constructor(setA, setB) {
        this.setA = setA;
        this.setB = setB;
    }

    processWith() {
        if (!this.setA || !this.setA || !this.setA || !this.setB) {
            console.log("Sorry Put Valid Arguemnet");
            return
        }
        let productArr = []
        for (let firstindex = 0; firstindex < this.setA.length; firstindex++) {
            for (let secondindex = 0; secondindex < this.setB.length; secondindex++) {
                productArr.push([this.setA[firstindex], this.setB[secondindex]])
            }
        }
        console.log(productArr)
    }
}

module.exports = Cartesian