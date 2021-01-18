function filterSelection(buttonChoice) {
    var myDivs, myDiv, myButton, myButtons;
    myDivs = document.getElementsByClassName("filterDiv");
    myButtons = document.getElementsByClassName("filterButtons");

    if (buttonChoice == 'All') {
        var b, myButtonClassList;
        for (b = 0; b < myButtons.length; b++) {
            myButton = myButtons[b];
            myButtonClassList = myButton.classList.value.split(" ");
            if (myButtonClassList.includes(buttonChoice)) {
                myButton.classList.remove("button-secondary");
                myButton.classList.remove("button-primary");
                myButton.classList.add("button-primary");
            } else {
                myButton.classList.remove("button-secondary");
                myButton.classList.remove("button-primary");
                myButton.classList.add("button-secondary");
            }
        }
        var i;
        for (i = 0; i < myDivs.length; i++) {
            myDiv = myDivs[i];
            myDiv.style.display = 'flex';
        }
    } else {
        var c, myButtonClassList2;
        for (c = 0; c < myButtons.length; c++) {
            myButton = myButtons[c];
            myButtonClassList2 = myButton.classList.value.split(" ");
            if (myButtonClassList2.includes(buttonChoice)) {
                myButton.classList.remove("button-secondary");
                myButton.classList.remove("button-primary");
                myButton.classList.add("button-primary");
            } else {
                myButton.classList.remove("button-secondary");
                myButton.classList.remove("button-primary");
                myButton.classList.add("button-secondary");
            }
        }
        var j, myClassList;
        for (j = 0; j < myDivs.length; j++) {
            myDiv = myDivs[j];
            myClassList = myDiv.classList.value.split(" ");
            if (myClassList.includes(buttonChoice)) {
                myDiv.style.display = 'flex';
            } else {
                myDiv.style.display = 'none';
            }
        }
    }
  }

