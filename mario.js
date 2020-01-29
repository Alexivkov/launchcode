//import $ from 'jquery'
printPyramid(10);

function printPyramid(height) {
    var temp;
    hashtag = "<span>#</span>";
    for (let i = height; i > 0; i--) {
        pre = "&nbsp;".repeat(i);
        hashtag += "<span>#</span>";
        //pre = pre.substring(0, pre.length - 1);
        temp = "<p>" + pre  + hashtag + "</p>";
        //console.log(temp);
        $("#pyramid").append(temp);
    }
}

$("#construction").css({"display": "none"});



