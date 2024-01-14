class Counter {
    constructor(value) {
        this.value = value;
    }
    Initialize(value) {
        this.value = value;
    }
    Increment() {
        this.value = Number(this.value) + 1;
    }
    Go() {
        let res = [];
        for (var i = 0; i < Number(this.value)+1; i++) {
            res.push(i);
        }
        return res;
    }
}
