var it1 = document.getElementById("item1");
var it2 = document.getElementById("item2");
var it3 = document.getElementById("item3");
var it4 = document.getElementById("item4");
var it5 = document.getElementById("item5");
var it6 = document.getElementById("item6");
var a = 1;

function Btn() {
    if (a == 1) {
        document.getElementById("burger__button").style.transform = 'rotate (-90deg)';
        document.getElementById("item1").style.display = 'block';
        document.getElementById("item2").style.display = 'block';
        document.getElementById("item3").style.display = 'block';
        document.getElementById("item4").style.display = 'block';
        document.getElementById("item5").style.display = 'block';
        document.getElementById("item6").style.display = 'block';
        a = 2;
    }else{
        document.getElementById("item1").style.display = 'none';
        document.getElementById("item2").style.display = 'none';
        document.getElementById("item3").style.display = 'none';
        document.getElementById("item4").style.display = 'none';
        document.getElementById("item5").style.display = 'none';
        document.getElementById("item6").style.display = 'none';
        a = 1;
    }
}
