class Point
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Show()
    {
        let p = "(" + Number(this.x) + "," + Number(this.y) + ")";
        return p;
    }
    Equals(p) {
        if ((p.x == this.x) && (p.y == this.y))
        {
            return true;
        }
        return false;
    }
}
pointArr = [new Point(1, 1), new Point(2, 2), new Point(3, 3), new Point(4, 4), new Point(5,5)];
function f2(pointArr, x, y)
{
    let p = new Point(x, y);
    for (var i = 0; i < pointArr.length; i++) {
        if (pointArr[i].Equals(p)) {
            return true;
        }
    }
    return false;
}

function f3(pointArr, p)
{
    for (var i = 0; i < pointArr.length; i++) {
        if (pointArr[i].Equals(p)) {
            return true;
        }
    }
    return false;
}

function f4(pointArr)
{
    let length = 0;
    for (var i = 0; i < pointArr.length-1; i++)
    {
        x1 = pointArr[i].x;
        y1 = pointArr[i].y;
        x2 = pointArr[i + 1].x;
        y2 = pointArr[i + 1].y;

        length += Math.sqrt(Math.pow(x1 - x2, 2)+ Math.pow(y1 - y2, 2));

    }
    return length;
}
function tests()
{
    //test for 2: true
    //x=1,y=1
    console.log(f2(pointArr, 1, 1));

    //test for 2: false
    //x=1,y=2
    console.log(f2(pointArr, 1, 2));

    //test for 3: true
    //x=1,y=1
    let p1 = new Point(1, 1);
    console.log(f3(pointArr, p1));

    //test for 3: false
    //x=1,y=2
    let p2 = new Point(1, 2);
    console.log(f3(pointArr, p2));

    //test for 4:
    
    console.log(f4(pointArr));
}
