window.onload = function() {


    var page_url = window.location.pathname;
    var tab1 = document.getElementsByClassName('tab1')[0];
    var tab2 = document.getElementsByClassName('tab2')[0];
    var tab3 = document.getElementsByClassName('tab3')[0];

    if (page_url == '/') {
        tab1.style.opacity = '1';
        tab2.style.opacity = '0.5';
        tab3.style.opacity = '0.5';   
    } else if (page_url == '/about') {
        tab1.style.opacity = '0.5';
        tab2.style.opacity = '1';
        tab3.style.opacity = '0.5';
    } else if (page_url == '/contact') {
        tab1.style.opacity = '0.5';
        tab2.style.opacity = '0.5';
        tab3.style.opacity = '1';
    }

}