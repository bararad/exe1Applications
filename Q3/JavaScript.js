class Time
{
    
    constructor(hours, minutes, seconds, state){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.state = state;
        
    }
    ConverToSeconds()
    {
       return (this.hours*3600 + this.minutes*60 + this.seconds)
    }
    Show() {
        let time = "";
        if (this.hours<10) {
            time += '0' + this.hours;
        }
        else {
            time += this.hours;
        }
        if (this.minutes < 10) {
            time += ':0' + this.minutes;
        }
        else
        {
            time += ':' + this.minutes;
        }
        if (this.hours < 10)
        {
            time += ':0' + this.seconds;
        }
        else
        {
            time += ':' + this.seconds;
        }
        return time;
    }
}

let times = [];
function formSubmission(e)
{
    e.preventDefault();
    t = CreateTime();
    times.push(t);
    if (times.length == 5)
    {
        showDiv = document.createElement("div");
        document.body.appendChild(showDiv);
        for (var i = 0; i < times.length; i++) {

            par = document.createElement("p");
            par.innerHTML = "the time is:"+times[i].Show()+" and the conversion to seconds is: "+times[i].ConverToSeconds();
            showDiv.appendChild(par);
        
        }
    }
    document.getElementById("myform").reset();
}
function CreateTime()
{
    hours = document.getElementById("hoursinp").value;
    minutes = document.getElementById("minutesinp").value;
    seconds = document.getElementById("secondsinp").value;
    state = document.getElementById("stateinp").value;
    return (new Time(hours, minutes, seconds, state));
    
}