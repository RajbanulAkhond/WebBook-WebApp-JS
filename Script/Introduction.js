function redraw() {

    var i, j;
    var detail = document.getElementsByTagName("details");
    var listitem = document.getElementsByTagName("li");

    if (pbflag && window.innerHeight > 600) {
        document.getElementById("project").style.marginLeft = "42%";
        document.getElementById("link").style.marginLeft = "5%";
        document.getElementById("screenshot").style.marginLeft = "5%";
        document.getElementById("structure").style.height = "initial";
        document.getElementById("structure").style.marginTop = "10%";
        document.getElementById("list").style.marginTop = "8%";
        document.getElementById("boxcontainer").style.marginLeft = "7%";
    }
    else {
        if (window.innerHeight > 600) {
            document.getElementById("project").style.marginLeft = "39%";
            document.getElementById("link").style.marginLeft = "20%";
            document.getElementById("screenshot").style.marginLeft = "10%";
        }
        document.getElementById("structure").style.height = "40%";
        document.getElementById("structure").style.marginTop = "5%";
        document.getElementById("list").style.marginTop = "0%";
        document.getElementById("boxcontainer").style.marginLeft = "15%";
    }

    for (i = 0; i < detail.length; i++) {
        if (i != 1) {
            if (detail[i].open != false) {
                if (window.innerHeight > 600) { detail[i].style.marginBottom = (window.innerWidth * (15 / 100)) + "px"; }
                else { detail[i].style.marginBottom = "120px"; }
            }
            else {
                detail[i].style.marginBottom = "10px";
            }
        }
        else {
            if (detail[i].open != false) {
                if (window.innerHeight > 600) { detail[i].style.marginBottom = (window.innerWidth * (10 / 100)) + "px"; }
                else { detail[i].style.marginBottom = "70px"; }
            }
            else {
                detail[i].style.marginBottom = "10px";
            }
        }
    }

    for (j = 0; j < listitem.length; j++) {
        if (pbflag && window.innerHeight > 600) { listitem[j].style.margin = "2.5%"; }
        else if (pcflag && window.innerHeight > 600) { listitem[j].style.margin = "2%"; }
        else { listitem[j].style.margin = "0%"; }
    }

    for (i = 0; i < detail.length; i++) {
        if (i != 1) {
            detail[i].children[0].addEventListener('click', function (event) {
                if (this.parentElement.open == false) {
                    if (window.innerHeight > 600) { this.parentElement.style.marginBottom = (window.innerWidth * (15 / 100)) + "px"; }
                    else { this.parentElement.style.marginBottom = "120px"; }
                }
                else {
                    this.parentElement.style.marginBottom = "10px";
                }
            }
                , false);
        }
        else {
            detail[i].children[0].addEventListener('click', function (event) {
                if (this.parentElement.open == false) {
                    if (window.innerHeight > 600) { this.parentElement.style.marginBottom = (window.innerWidth * (10 / 100)) + "px"; }
                    else { this.parentElement.style.marginBottom = "70px"; }
                }
                else {
                    this.parentElement.style.marginBottom = "10px";
                }
            }
                , false);
        }
    }

    var score = 0, dropValue = 0;
    var myString = ["HTML", "CSS", "JavaScript"];
    // Get a reference to the drop target.
    var dragSource = document.getElementsByClassName("draggable");
    var dropTarget = document.getElementsByClassName("target");
    var result = document.getElementById("result");
    for (i = 0; i < dropTarget.length; i++) {
        if (window.innerHeight > 600) {
            dragSource[i].style.width = dragSource[i].style.height = (window.innerWidth * (8 / 100)) + "px";
            dropTarget[i].style.width = (window.innerWidth * (13 / 100)) + "px";
            dropTarget[i].style.height = (window.innerWidth * (8 / 100)) + "px";
            result.style.fontSize = (window.innerWidth * (2 / 100)) + "px";
        }
        else {
            dragSource[i].style.width = dragSource[i].style.height = (window.innerWidth * (8 / 100)) + "px";
            dropTarget[i].style.width = (window.innerWidth * (11 / 100)) + "px";
            dropTarget[i].style.height = (window.innerWidth * (6 / 100)) + "px";
            result.style.fontSize = "20px";
        }
    }
    if (window.innerWidth > 650) {
        document.getElementById("box").style.marginLeft = "17%";
        document.getElementById("boxcontainer").style.marginLeft = "7%";
    }
    else {
        document.getElementById("box").style.marginLeft = "10%";
        document.getElementById("boxcontainer").style.marginLeft = "2%";
    }
    for (i = 0; i < dropTarget.length; i++) {
        dropTarget[i].myValue = myString[i];
    }
    for (i = 0; i < dropTarget.length; i++) {
        // Add a dragstart event handler to the dragsource element.
        dragSource[i].addEventListener('dragstart', function (event) {
            // Initialize the dataTransfer object with the current text.
            event.dataTransfer.setData('text', this.innerText);
        }, false);
        // Add a dragenter event handler to the drop target.
        dropTarget[i].addEventListener('dragenter', function (event) {
            // Add the 'over' CSS class to the drop target. This lets the user know that
            // they have dragged something over a valid drop target.
            this.classList.add('over');
        }, false);
        // Add a dragleave event handler to the drop target.
        dropTarget[i].addEventListener('dragleave', function (event) {
            // Remove the 'over' CSS class.
            this.classList.remove('over');
        }, false);
        // Add a dragover event handler to the drop target.
        dropTarget[i].addEventListener('dragover', function (event) {
            // Prevent the default event action.
            event.preventDefault();
        }, false);
        // A counter that indicates how many times something has been dropped onto the
        // drop target.
        // Add a drop event handler to the drop target.
        dropTarget[i].addEventListener('drop', function (event) {
            dropValue++;
            // Update the counter and remove the 'over' CSS class.
            this.children[0].innerHTML = event.dataTransfer.getData('text');
            this.classList.remove('over');
            if (this.myValue == this.children[0].innerText) { this.classList.add('right'); score++; }
            else { this.classList.add('wrong'); }
            if (dropValue == 3) {
                if (score == 3) {
                    result.style.color = "green";
                    result.innerHTML = "You Won.<br><br>Tip: Using developer tools makes life easy. I used google crome's build in devetoper tools. It's nice.";
                }
                else { result.style.color = "red"; result.innerText = "You Lost. Reload and try again."; }
            }
        }, false);
    }

    document.getElementById("web").style.fontSize = (window.innerWidth * (7.321 / 100)) + "px";
    document.getElementById("book").style.fontSize = (window.innerWidth * (6.6 / 100)) + "px";
    document.getElementById("project").style.fontSize = (window.innerWidth * (5.124 / 100)) + "px";
    for (j = 0; j < document.getElementsByTagName("h1").length; j++) {
        if (window.innerHeight > 600) { document.getElementsByTagName("h1")[j].style.fontSize = (window.innerWidth * (2.93 / 100)) + "px"; }
        else { document.getElementsByTagName("h1")[j].style.fontSize = (window.innerWidth * (2.5 / 100)) + "px"; }
    }

    for (j = 0; j < document.getElementsByClassName("text").length; j++) {
        if (window.innerWidth > 650 && window.innerHeight > 600) { document.getElementsByClassName("text")[j].style.fontSize = (window.innerWidth * (1.50 / 100)) + "px"; }
        else { document.getElementsByClassName("text")[j].style.fontSize = "10px"; }
    }
    for (j = 0; j < document.getElementsByClassName("detailtext").length; j++) {
        if (window.innerWidth > 650 && window.innerHeight > 600) {
            document.getElementsByClassName("detailtext")[j].style.fontSize = (window.innerWidth * (1.25 / 100)) + "px";
            document.getElementsByTagName("summary")[j].style.fontSize = (window.innerWidth * (1.50 / 100)) + "px";
        }
        else { document.getElementsByClassName("detailtext")[j].style.fontSize = "10px"; document.getElementsByTagName("summary")[j].style.fontSize = "10px"; }
    }
    if (window.innerHeight > 600) { document.getElementById("screenshot").style.height = parseInt(pages[0].style.height.split(".")[0]) * (45 / 100) + "px"; }
    else { document.getElementById("screenshot").style.height = parseInt(pages[0].style.height.split(".")[0]) * (40 / 100) + "px"; }
    if (window.innerWidth > 650 && window.innerHeight > 600) { document.getElementById("list").style.fontSize = (window.innerWidth * (1.50 / 100)) + "px"; }
    else { document.getElementById("list").style.fontSize = "10px"; }
}