var td = document.getElementsByTagName("td");
var display = document.getElementById("write");
var x = 0;
var y = 0;
var op = 0;
var flag = 1;
for (var i = 0; i < td.length; i++) {
    td[i].addEventListener('mousedown', function() {
        this.classList.add("orange");
    });
    td[i].addEventListener('mouseup', function() {
        this.classList.remove("orange");
    });
}
for (var i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function() {
        var a = this.innerText;
        console.log(a);
        if (a == 'AC') {
            x = 0;
            y = 0;
            op = 0;
            flag = 1;
            display.innerText = " ";
        } else if ((a >= 0 && a <= 9) || a == '.') {
            if (op == 0) {
                if (flag == 0) {
                    display.innerText = "Error";
                    x = 0;
                } else {
                    if (x == 0)
                        x = a;
                    else {
                        x += a;
                    }
                    display.innerText = x;
                    console.log(x);
                }
            } else {
                if (y == 0)
                    y = a;
                else {
                    y += a;
                }
                display.innerText = y;
            }
        } else if (a == '+/-') {
            if (y == 0) {
                x = eval(-1 * x);
                display.innerText = x;
            } else {
                y = eval(-1 * y);
                display.innerText = y;
            }
        } else if (a == '=') {
            x = eval(x + " " + op + " " + y);
            y = 0;
            op = 0;
            flag = 0;
            if (x == 'Infinity') {
                display.innerText = "Error";
            } else {
                display.innerText = x;
            }
        } else {
            flag = 1;
            if (op != 0) {
                display.innerText = "Error";
                x = 0;
            } else {
                op = a;
                display.innerText = op;
            }

        }

    });
}