class Fisheryates {
    constructor(userArr) {
        this.userArr = userArr
    }
    shuffleArr() {
        console.log(this.userArr)
        if (!this.userArr || this.userArr.length === 1) {
            throw ("Insuffient Data")
            return
        }
        for (let index = 0; index < this.userArr.length; index++) {
            [this.userArr[index], this.userArr[Math.floor(Math.random() * (index + 1))]] =
                [this.userArr[Math.floor(Math.random() * (index + 1))], this.userArr[index]]
        }
        console.log(this.userArr)
    }
}


module.exports = Fisheryates;