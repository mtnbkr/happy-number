document.getElementById("submit").onclick = function happyNumber() {
    var numlist = [];
    var sumlist = [];
    var xplot = [];
    var counter = 0;
    var number = document.getElementById("number").value;
    var n;

    //document.getElementById("happy").innerHTML = "";
    //document.getElementById("iterations").innerHTML = "";

    document.getElementById("myDiv").innerHTML = "";

    while (counter < 20) {
        number = number.toString();
        for (i in number) {
            //var d = parseInt(i);
            var square = Math.pow(number[i], 2);
            numlist.push(square);
        }

        arrSum = function (arr) {
            return arr.reduce(function (a, b) {
                return a + b
            }, 0);
        }

        numsum = arrSum(numlist);

        sumlist.push(numsum);
        if (numsum == 1) {
            document.getElementById("happy").innerHTML = "The Number is Happy :)";
            document.getElementById("iterations").innerHTML = "The Number of Iterations is: " + counter;
            exit();
        } else {
            counter = counter + 1;
            xplot.push(counter);
            number = numsum;
            numlist = [];
            if (counter == 20) {
                document.getElementById("happy").innerHTML = "The number is not happy";
                document.getElementById("iterations").innerHTML = "";
                var trace1 = {
                    x: xplot,
                    y: sumlist,
                    type: 'scatter',
                };

                var data = [trace1];

                Plotly.newPlot('myDiv', data, {}, {
                    showSendToCloud: true
                });
            }
        }

    }

}