//Shakib Tidjani - 11/27/24
$(function () {
    $("#boxes").validate({ //validation function
        rules: {
            1: {
                required: true,
                range: [-50, 50] //boxes must contain a number between -50 and 50
            },
            2: {
                required: true,
                range: [-50, 50]
            },
            3: {
                required: true,
                range: [-50, 50]
            },
            4: {
                required: true,
                range: [-50, 50]
            }
        },
        messages: {
            1: {
                required: "Enter a num between +/-50 into Box 1. ", //otherwise we get this error, messages are the same regardless of the error because its a simple constraint
                range: "Enter a num between +/-50 into Box 1. "
            },
            2: {
                required: "Enter a num between +/-50 into Box 2. ",
                range: "Enter a num between +/-50 into Box 2. "
            },
            3: {
                required: "Enter a num between +/-50 into Box 3. ",
                range: "Enter a num between +/-50 into Box 3. "
            },
            4: {
                required: "Enter a num between +/-50 into Box 4. ",
                range: "Enter a num between +/-50 into Box 4. "
            }
        },
        errorPlacement: function(error) { //add error to our error paragraph that sits under the textboxes for readability
            $("#error").append(error);
        },
    });
    $("#genButton").on("click", function() { //when generate is clicked call the button function
        if ($("#boxes").valid()) {
            button();
        }
    });
});

function button() {
    var minRow = parseInt(document.getElementById("myText").value); //grab our text box values
    var maxRow = parseInt(document.getElementById("myText2").value);
    var minCol = parseInt(document.getElementById("myText3").value);
    var maxCol = parseInt(document.getElementById("myText4").value);
    var table = document.getElementById("table"); //create the table
    table.innerHTML = "";
    var row = table.insertRow();
    for(let i = minCol-1; i <= maxCol; i++) {
        if(i == minCol-1) {
            (row.insertCell()).innerHTML = "";
        }
        else {
            (row.insertCell()).innerHTML = i;
        }
    }
    for (let i = minRow; i <= maxRow; i++) {
        row = table.insertRow();
        for (let j = minCol-1; j <= maxCol; j++) {
            if(j == minCol-1) {
                (row.insertCell()).innerHTML = i;
            }
            else {
                (row.insertCell()).innerHTML = i * j;
            }
        }
    }
}