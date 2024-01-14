class Duck {
    constructor(name, color, age, weight, pic) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.pic = pic;
    }
    Show()
    {
        let str = "name: " + this.name + " color: " + this.color + " age: " + this.age + " weight: " + this.weight + " pic:";

        document.getElementById("ph").innerHTML = str;
        let duckImg = document.createElement("img");
        duckImg.src = this.pic;
        duckImg.width = '100';
        duckImg.height = '100';
        document.getElementById("ph").appendChild(duckImg);

        
    }
    Quack()
    {
        let str = "";
        let times = (Number(this.age) * Number(this.weight)) / 2;
        for (var i = 0; i < times; i++)
        {
            str += "Quack ";
        }
        
        var sound1 = new Audio("duck-quack.mp3");
        var sound2 = new Audio("duck-quack.mp3");
        var sound3 = new Audio("duck-quack.mp3");
        sound1.play();
        sound1.addEventListener("ended", () => { sound2.play() });
        sound2.addEventListener("ended", () => { sound3.play() });
        return str;

    }

}