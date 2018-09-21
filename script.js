function sleep_in(weekday, vacation){
    if(weekday == true && vacation == false){
        var sleep_in = false;
    }else{
        sleep_in = true;
    }
    return sleep_in;
}

function monkey_trouble(a, b){
    if(a == b){
        var trouble = true;
    }else{
        trouble = false;
    }
    return trouble;
}

function string_times(string, n){
    var text = string
    for(var i = 0; i < n; i++){
        if(i > 0){
            text += string;
        }
    }
    if(n != 0){
        return text;
    }else{
        return "";
    }
}

function front_times(string, n){
    var front = string.substring(0, 3);
    var repeat = "";
    for(var i = 0; i < n; i++){
        repeat = repeat + front;
    }
    return repeat;
}

function string_bits(string){
    var stringLength = string.length;
    var newString = "";
    var letter = "";
    for(var i = 0; i < stringLength/2; i++){
        letter = string.substring(0 + 2 * i, 1 + 2 * i);
        newString += letter;
    }
    return newString;
}

function caughtSpeeding(speed, birthday){
    if(birthday == false){
        if(speed <= 60){
            var num = 0;
        }
        if(speed > 60 && speed <= 80){
            num = 1;
        }
        if(speed > 80){
            num = 2;
        }
    }else{
        if(speed <= 65){
            num = 0;
        }
        if(speed > 65 && speed <= 85){
            num = 1;
        }
        if(speed > 85){
            num = 2;
        }
    }
    return num;
}

function fizz_buzz(num){
    var number = "";
    if(num % 3 == 0 && num % 5 != 0){
        number = "Fizz";
    }else if(num % 5 == 0 && num % 3 != 0){
        number = "Buzz"
    }else if(num % 5 == 0 && num % 3 == 0 ){
        number = "FizzBuzz";
    }else{
        number = num + "!";
    }
    return number;
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        var party = 0;
    }else if(tea >= 5 && candy >= 5 && (tea >= 2 * candy || candy >= 2 * tea)){
        party = 2;
    }else{
        party = 1;
    }
    return party;
}

function blackjack(x, y){
    if(x > 21 && y > 21){
        var blackjack = 0;
    }else{
        if(x > y && x <= 21){
            blackjack = x;
        }else{
            if(y <= 21){
                blackjack = y;
            }else{
                blackjack = x
            }
        }
    }
    return blackjack
}

function loneSum(a, b, c){
    var sum = "";
    if(a == b && a != c){
        sum += c;
    }else if(a == c && a != b){
        sum += b;
    }else if(b == c && b != a){
        sum += a;
    }else if(a == b && a == c){
        sum = 0;
    }else{
        allSum = a + b + c;
        sum += allSum;
    }
    return sum;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("hello", 6);
    document.getElementById("output").innerHTML += front_times("hello", 5);
    document.getElementById("output").innerHTML += string_bits("hello");
    document.getElementById("output").innerHTML += caughtSpeeding(60, true);
    document.getElementById("output").innerHTML += fizz_buzz(5);
    document.getElementById("output").innerHTML += teaParty(5, 6);
    document.getElementById("output").innerHTML += blackjack(21, 14);
    document.getElementById("output").innerHTML += loneSum(3, 4, 5);
}

//