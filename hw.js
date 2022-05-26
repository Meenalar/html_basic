//1 Function that counts the numbers of charcters
var String = "How are you?"
console.log("String length is " + String.length)

//2 Function that accepts an two numbers & return the larger number
function largerNumber(a, b) {
    if (a > b) {
        console.log('Lager Number is ' + a)
    }
    else {
        console.log("Larger Number is " + b)
    }
}
largerNumber(500, 100)

//3 Returns boolean value
function fbetween(a) {
    console.log(a >= 5000 && a < 9999)
}
fbetween(8000)

//4 Return cuberoot of number
var a = 125
console.log("cube value of " + a + " is " + Math.cbrt(a))

//5 convert inches into feet
function inchesToFeet(a) {
    var vinches = a;
    var vfeet = vinches / 12;
    console.log(vfeet + " Feet")
}
inchesToFeet(1200)

//6 converts degrees to Fahrenheit
function DtoF(a) {
    var vDegree = a
    var vFahrenheit = ((vDegree * 9 / 5) + 32)
    console.log(vFahrenheit + " Fahrenheit")
}
DtoF(10)

//7 converts kg to lb or lb to kg
function kg2lb2kg(a) {
    if (a.indexOf("kg") > 0) {
        var vkg = a.substring(0, a.indexOf("kg"))
        console.log((vkg * 2.0246) + " lbs")
    }
    else if (a.indexOf("lb") > 0) {
        var vlb = a.substring(0, a.indexOf("lb"))
        console.log((vlb / 2.0246) + " kgs")
    }
    else {
        console.log("Enter Kg/Lb")
    }
}
kg2lb2kg("117lb")
kg2lb2kg("240 kg")
kg2lb2kg("70")

//8 States & Properties
const USAStates = {

    "States10": {


        "New York":
        {
            "Appreiation": "NY",
            "capital": "Albany",
            "Location": "Northen America",
            "Time_Zone": "EST",
            "Population": "10L",
            "State_Park": "800",
            "Schools": "10000",
            "Famous": "Niagara Falls",
        },

        "New Mexico": {
            "Appreiation": "NM",
            "capital": "SantaFe",
            "Location": "Southwest America",
            "Time_Zone": "MDT",
            "Population": "5L",
            "State_Park": "100",
            "Schools": "700",
            "Famous": "White Sands"
        },

        "Texas": {
            "Appreiation": "Tx",
            "capital": "Austin",
            "Location": "South Central",
            "Time_Zone": "MDT",
            "Population": "100L",
            "State_Park": "10L",
            "Schools": "100L",
            "Famous": "Houson"
        },

        "Florida": {
            "Appreiation": "FL",
            "capital": "Tallahassee",
            "Location": "South Eastern",
            "Time_Zone": "EST",
            "Population": "21M",
            "State_Park": "8000",
            "Schools": "60L",
            "Famous": "Beaches"
        },


        "North Carolina": {
            "Appreiation": "NA",
            "capital": "Raleigh",
            "Location": "South Eastern America",
            "Time_Zone": "EST",
            "Population": "20L",
            "State_Park": "500",
            "Schools": "7000",
            "Famous": "Grand Father Mountain"
        },


        "Pennsylvania": {
            "Appreiation": "PA",
            "capital": "Harrisburg",
            "Location": "Mid-Atlantic",
            "Time_Zone": "EST",
            "Population": "100L",
            "State_Park": "80L",
            "Schools": "20000",
            "Famous": "Liberty Bell"
        },


        "Michigan": {
            "Appreiation": "MI",
            "capital": "Lansing",
            "Location": "Midwestern America",
            "Time_Zone": "EST",
            "Population": "200L",
            "State_Park": "1500",
            "Schools": "20000",
            "Famous": "Fishing"
        },


        "Tennessee": {
            "Appreiation": "TN",
            "capital": "Nashville",
            "Location": "South",
            "Time_Zone": "EST",
            "Population": "7L",
            "State_Park": "1400",
            "Schools": "4000",
            "Famous": "Fall Colors"
        },
        "Virginia": {
            "Appreiation": "VI",
            "capital": "Richmond",
            "Location": "South Eastern America",
            "Time_Zone": "EST",
            "Population": "25L",
            "State_Park": "500",
            "Schools": "3000",
            "Famous": "National Parks"
        },
        "California": {
            "Appreiation": "CA",
            "capital": "Sacramento",
            "Location": "Western America",
            "Time_Zone": "PDT",
            "Population": "100m",
            "State_Park": "3500",
            "Schools": "20L",
            "Famous": "Hollywood"
        }

    }
}
//console.log(USAStates.States10)
console.log(USAStates.States10.Pennsylvania.Famous)


//9 cricket team & players
const Cricket_Team = {
    "Names": ["Indian National cricket Team", "Pakistan National Cricket Team", "NewZealan Cricket Team"],
    "Teams": "Indian Cricket",
    "captain": "Virat Hohli",
    "Player's Names": ["Rohit", "Jadeja", "Rahul", "Karthi", "Ravi", "Kuldeep Yadav", "Navdeep", "Rishabh Pant", "Hardik Pandya", "Jasprit Bumarah"],
    "Best":
    {
        "bowler": "Ajit Agarkar",
        "Spinner": "Anil Kumble",
        "Bat Man": "Sachin",
        "Award_year": "2000",
        "Players": ["Dhoni", "Kohli", "Dravid", "Sachin"]
    }
}
console.log(Cricket_Team.Best.Award_year)
console.log(Cricket_Team.captain)

//10 Longest string 
function LongestStr(a, b) {
    if (a.length > b.length) {
        console.log("Longest String is " + a)
    }
    else { (console.log("Longest String is " + b)) }
}
LongestStr("Hi", "Hello")
LongestStr("Beautiful", "Hello")


//11 Shortest length if array is passed

function shorestarray([a, b]) {
    if (a.length < b.length) {
        console.log("shorest Array is " + a)
    }
    else { console.log("Shorest Array is " + b) }
}
shorestarray(["aaaaaaaaabbbbbb", "cdddd"])
shorestarray(["xyxyxy", "uvuvuvuvuvuvu"])

