function disparaitre() {
    var c = document.getElementById("hello");
    c.style.display = "none";
}
setTimeout(disparaitre, 7000);
// Integral 
function integrale() {
    var a = document.getElementById("00a").value;
    var b = document.getElementById("00b").value;
    var deg = document.getElementById("00n").value;
    var un = document.getElementById("00coefai").value;
    var u = Function('return ' + un);
    ai = u(0)
    var an = 1;
    var bn = 1;
    var Fa = 0;
    var Fb = 0;
    for (var i = 0; i <= deg; i++) {
        var an = an * a;
        var bn = bn * b;
        var Fa = Fa - (- (ai[i] / (i + 1)) * an);
        var Fb = Fb - (- (ai[i] / (i + 1)) * bn);
    }
    document.getElementById("00integ").value = Fb - Fa;
}
function dmNN() {
    var a = document.getElementById("d").value;
    if (a <= 0) {
        var text = document.getElementById("f").value = "Input Error !! p > 0 ";
        var text = document.getElementById("result").innerHTML = "Input Error !! p > 0 ";
    }
    else {
        var z = 1;
        var ar = [];
        for (var x = 2; x <= a; x++) {
            var s1 = 0;
            for (var i = 2; i <= x ** 0.5; i++) {
                if (x % i == 0) {
                    var s1 = s1 + 1;
                    break;
                }
            }
            if (s1 == 0) {
                var z = z * x;
                ar.push(x);
            }
            else {
                for (var j = 2; j <= x; j++) {
                    var s2 = 0;
                    for (var p = 2; p <= j ** 0.5; p++) {
                        if (j % p == 0) {
                            var s2 = s2 + 1;
                            break;
                        }
                    }
                    if (s2 == 0) {
                        for (var n = 2; n <= 15; n++) {
                            if (x == j ** n) {
                                var z = z * j;
                                ar.push(j);
                            }
                        }
                    }
                }
            }
        }
        var text = document.getElementById("f").value = z;
        var v = 1;
        for (var k = 2; k <= a; k++) {
            var m = 0;
            for (var i = 0; i <= ar.length - (-10); i++) {
                if (k == ar[i]) {
                    var m = m - (-1);
                }
            }
            if (m > 1) {
                var v = v + " * " + k + "^" + m;
            }
            else {
                if (m == 1) {
                    var v = v + " * " + k;
                }
                else {
                    var v = v + "";
                }
            }
        }
        var text = document.getElementById("result").innerHTML = " [! " + a + "] = " + v + " .";
    }
}


// Calculator 

function dele00() {
    var n = document.getElementById("Equ").value;
    var m = [];
    for (var i = 0; i < n.length - 1; i++) {
        m.push(n[i]);
    }
    document.getElementById("Equ").value = m.join("");
}

function hcal() {
    var text = document.getElementById("Equ").value = "Calculator // Powered By Aiman ";
}

function egale() {
    var un = document.getElementById("Equ").value;
    var u = Function('return ' + un);
    var text = document.getElementById("Equ").value = u(0);
}
function cos(x) {
    return Math.cos(x);
}
function sin(x) {
    return Math.sin(x);
}
function tan(x) {
    return Math.tan(x);
}
function ln(x) {
    return Math.log(x);
}
function log(x) {
    return Math.log10(x);
}
function exp(x) {
    return Math.exp(x);
}
function rac(x) {
    return Math.sqrt(x);
}
function π() {
    return Math.PI;
}
function fact(x) {
    var n = 1;
    for (var i = 1; i <= x; i++) {
        var n = n * i;
    }
    return n;
}
function abs(x) {
    if (x <= 0) {
        var y = -x;
    }
    else {
        var y = x;
    }
    return y
}

function prime(m) {
    if (m == 1) {
        return "× 2^0 × 3^0 × 5^0 × ...."
    }
    else {
        var z = "";
        var n = 0;
        var h = 1;
        for (var x = 2; x <= m; x++) {
            if (h == m) {
                break;
            }
            var s = 0;
            for (var i = 2; i * i <= x; i++) {
                if (x % i == 0) {
                    var s = s + 1;
                    break;
                }
            }
            if (s == 0 && m % x == 0) {
                var w = " × " + x;
                var c = m;
                while (c % x == 0) {
                    var c = c / x;
                    var n = n + 1;
                    var h = h * x;
                }
                if (n == 1) {
                    var z = z + w;
                }
                else {
                    var z = z + w + "^" + n;
                }
                var n = 0;
            }
        }
        return z
    }
}

function EdmN(a) {
    if (a == 0) {
        return "!!";
    }
    else {
        var ar = [];
        for (var x = 2; x <= a; x++) {
            var s1 = 0;
            for (var i = 2; i <= x ** 0.5; i++) {
                if (x % i == 0) {
                    var s1 = s1 + 1;
                    break;
                }
            }
            if (s1 == 0) {
                ar.push(x);
            }
            else {
                for (var j = 2; j <= x; j++) {
                    var s2 = 0;
                    for (var p = 2; p <= j ** 0.5; p++) {
                        if (j % p == 0) {
                            var s2 = s2 + 1;
                            break;
                        }
                    }
                    if (s2 == 0) {
                        for (var n = 2; n <= 15; n++) {
                            if (x == j ** n) {
                                ar.push(j);
                                break;
                            }
                        }
                    }
                }
            }
        }
        var v = " " + 1;
        for (var k = 2; k <= a; k++) {
            var m = 0;
            for (var i = 0; i <= ar.length - (-10); i++) {
                if (k == ar[i]) {
                    var m = m - (-1);
                }
            }
            if (m > 1) {
                var v = v + " * " + k + "**" + m;
            }
            else {
                if (m == 1) {
                    var v = v + " * " + k;
                }
                else {
                    var v = v + "";
                }
            }
        }
        return v + " ";
    }
}

function pgcd(a, b) {
    while (b > 0) {
        var r = a % b;
        var a = b;
        var b = r;
    }
    return a
}

function mod(a, b) {
    return a % b;
}
function matrix2(a, b, c, d) {
    return a * d - b * c;
}
function matrix3(a, b, c, d, e, f, g, h, i) {
    return (a * (e * i - h * f)) - (b * (d * i - g * f)) - (-c * (d * h - g * e));
}
function sumpui(x, n) {
    var m = 1;
    var s = 0;
    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= n; j++) {
            var m = m * i;
        }
        var s = s + m;
        var m = 1;
    }
    return s
}
function prdpui(x, n) {
    var m = 1;
    var s = 1;
    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= n; j++) {
            var m = m * i;
        }
        var s = s * m;
        var m = 1;
    }
    return s;
}
function SMatr(ar1, ar2) {
    var arr = [];
    for (var i = 0; i < ar1.length; i++) {
        var x = ar1[i] + ar2[i];
        arr.push(x);
    }
    return "[" + arr + "]";
}
function ESoulition(a, b, c) {
    if (a != 0) {
        var d = b ** 2 - 4 * a * c;
        if (d == 0) {
            var x1 = -b / (2 * a);
            return " S = { " + x1 + " } ";
        }
        else {
            if (d > 0) {
                var x1 = (-b - d ** (1 / 2)) / (2 * a);
                var x2 = (-b + d ** (1 / 2)) / (2 * a);
                return " S = { " + x1 + " ; " + x2 + " } ";
            }
            else {
                return " S = { No Soulition } ";
            }
        }
    }
    else {
        var x1 = -c / b;
        return " S = { " + x1 + " } ";
    }
}
function Prime(x) {
    var s = 0;
    for (var i = 2; i <= x ** 0.5; i++) {
        if (x % i == 0) {
            var s = s + 1;
        }
    }
    if (s != 0) {
        return x + " : Non Prime Number "
    }
    else {
        return x + " : Prime Number "
    }
}
function BSystem(n) {
    var z = "";
    var t = n;
    while (n != 0) {
        if (n % 2 == 0) {
            var n = n / 2;
            var z = z + 0;
        }
        else {
            var n = (n - 1) / 2;
            var z = z + 1;
        }
    }
    return z + " = [2]" + t;
}
function Total(note, co) {
    var s = 0;
    var n = 0;
    for (var i = 0; i <= note.length - 1; i++) {
        var x = note[i] * co[i];
        var s = s + x;
        var n = n + co[i];
    }
    return s / n;
}
function on1() {
    document.getElementById('Equ').value = "";
}
function div() {
    var t = document.getElementById('Equ').value += "/";
}
function plus() {
    var t = document.getElementById('Equ').value += "+";
}
function moin() {
    var t = document.getElementById('Equ').value += "-";
}
function mult() {
    var t = document.getElementById('Equ').value += "*";
}
function seven() {
    var t = document.getElementById('Equ').value += "7";
}
function one() {
    var t = document.getElementById('Equ').value += "1";
}
function two() {
    var t = document.getElementById('Equ').value += "2";
}
function three() {
    var t = document.getElementById('Equ').value += "3";
}
function fourh() {
    var t = document.getElementById('Equ').value += "4";
}
function five() {
    var t = document.getElementById('Equ').value += "5";
}
function six() {
    var t = document.getElementById('Equ').value += "6";
}
function eight() {
    var t = document.getElementById('Equ').value += "8";
}
function nine() {
    var t = document.getElementById('Equ').value += "9";
}
function zero() {
    var t = document.getElementById('Equ').value += "0";
}
function verg() {
    var t = document.getElementById('Equ').value += ".";
}
function lef() {
    var t = document.getElementById('Equ').value += "(";
}
function rig() {
    var t = document.getElementById('Equ').value += ")";
}
function raci() {
    var t = document.getElementById('Equ').value += "rac(";
}
function facti() {
    var t = document.getElementById('Equ').value += "fact(";
}
function absi() {
    var t = document.getElementById('Equ').value += "abs(";
}
function lni() {
    var t = document.getElementById('Equ').value += "ln(";
}
function logi() {
    var t = document.getElementById('Equ').value += "log(";
}
function primi() {
    var t = document.getElementById('Equ').value += "prime(";
}
function EdmNi() {
    var t = document.getElementById('Equ').value += "EdmN(";
}
function pgcdi() {
    var t = document.getElementById('Equ').value += "pgcd(";
}
function cosi() {
    var t = document.getElementById('Equ').value += "cos(";
}
function expi() {
    var t = document.getElementById('Equ').value += "exp(";
}
function sini() {
    var t = document.getElementById('Equ').value += "sin(";
}
function tani() {
    var t = document.getElementById('Equ').value += "tan(";
}
function pui() {
    var t = document.getElementById('Equ').value += "**";
}
function tenpui() {
    var t = document.getElementById('Equ').value += "*10**";
}
function modi() {
    var t = document.getElementById('Equ').value += "mod(";
}
function ver() {
    var t = document.getElementById('Equ').value += ",";
}
function DetM2() {
    var t = document.getElementById('Equ').value += "matrix2(";
}
function DetM3() {
    var t = document.getElementById('Equ').value += "matrix3(";
}
function sumpuie() {
    var t = document.getElementById('Equ').value += "sumpui(";
}
function prdpuie() {
    var t = document.getElementById('Equ').value += "prdpui(";
}
function SumM() {
    var t = document.getElementById('Equ').value += "SMatr(";
}
function let() {
    var t = document.getElementById('Equ').value += "[";
}
function rih() {
    var t = document.getElementById('Equ').value += "]";
}
function eqsou() {
    var t = document.getElementById('Equ').value += "ESoulition(";
}
function primee() {
    var t = document.getElementById('Equ').value += "Prime(";
}
function pii() {
    var t = document.getElementById('Equ').value += "π()";
}
function binsystem() {
    var t = document.getElementById('Equ').value += "BSystem(";
}
function note() {
    var t = document.getElementById('Equ').value += "Total(";
}

// Program 11 

function suite() {
    var un = document.getElementById("un").value;
    var u = Function('n', 'return ' + un);
    var vn = document.getElementById("vn").value;
    var v = Function('n', 'return ' + vn);

    var no = document.getElementById("no").value;
    var uno = u(no);
    var text = document.getElementById("uno").value = uno;
    var vno = v(no);
    var text = document.getElementById("vno").value = vno;
}

function adjacent() {
    var un = document.getElementById("un").value;
    var u = Function('n', 'return ' + un);
    var vn = document.getElementById("vn").value;
    var v = Function('n', 'return ' + vn);

    var oo = 10 ** 30;
    var wn1 = u(oo) - v(oo);
    if (Math.abs(wn1) < 0.125) {
        var text = document.getElementById("lim").value = " Lim(+oo) (Un - Vn) = 0 ";
    }
    else {
        var text = document.getElementById("lim").value = " Lim(+oo) (Un - Vn) # 0 ";
    }
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    for (var i = 1; i <= 10 ** 4; i++) {
        if (u(i) <= u(i - (-1))) {
            var s1 = s1 + 1;
        }
        if (u(i) >= u(i - (-1))) {
            var s2 = s2 + 1;
        }
        if (v(i) <= v(i - (-1))) {
            var s3 = s3 + 1;
        }
        if (v(i) >= v(i - (-1))) {
            var s4 = s4 + 1;
        }
    }
    if (s1 > s2) {
        var text = document.getElementById("mo1").value = " (Un) Ascending "
    }
    if (s1 < s2) {
        var text = document.getElementById("mo1").value = " (Un) Decreasing "
    }
    if (s1 == s2) {
        var text = document.getElementById("mo1").value = " (Un) Constant "
    }
    if (s3 > s4) {
        var text = document.getElementById("mo2").value = " (Vn) Ascending "
    }
    if (s3 < s4) {
        var text = document.getElementById("mo2").value = " (Vn) Decreasing "
    }
    if (s3 == s4) {
        var text = document.getElementById("mo2").value = " (Vn) Constant "
    }
    if (Math.abs(wn1) < 0.125) {
        if (s1 > s2) {
            if (s3 < s4) {
                var text = document.getElementById("result03").value = " (Un) & (Vn) are Adjacent ";
            }
            else {
                var text = document.getElementById("result03").value = " (Un) & (Vn) not Adjacent ";
            }
        }
        else {
            if (s3 > s4) {
                var text = document.getElementById("result03").value = " (Un) & (Vn) are Adjacent ";
            }
            else {
                var text = document.getElementById("result03").value = " (Un) & (Vn) not Adjacent ";
            }
        }
    }
    else {
        var text = document.getElementById("result03").value = " (Un) & (Vn) not Adjacent ";
    }
}

