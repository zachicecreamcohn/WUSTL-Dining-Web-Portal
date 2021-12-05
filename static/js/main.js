window.onload = function() {


    var page_url = window.location.pathname;
    var tab1 = document.getElementsByClassName('tab1')[0];
    var tab2 = document.getElementsByClassName('tab2')[0];
    var tab3 = document.getElementsByClassName('tab3')[0];
    var tab4 = document.getElementsByClassName('tab4')[0];
    var tab5 = document.getElementsByClassName('tab5')[0];


    if (page_url == '/') {
        tab1.style.backgroundColor = 'rgb(96, 120, 255)';
        tab2.style.backgroundColor = 'rgb(185, 196, 255)';
        tab3.style.backgroundColor = 'rgb(185, 196, 255)';
        tab4.style.backgroundColor = 'rgb(185, 196, 255)';
        tab5.style.backgroundColor = 'rgb(185, 196, 255)';
    } else if (page_url == '/locations') {
        tab1.style.backgroundColor = 'rgb(185, 196, 255)';
        tab2.style.backgroundColor = 'rgb(96, 120, 255)';
        tab3.style.backgroundColor = 'rgb(185, 196, 255)';
        tab4.style.backgroundColor = 'rgb(185, 196, 255)';
        tab5.style.backgroundColor = 'rgb(185, 196, 255)';
    } else if (page_url == '/productsales') {
        tab1.style.backgroundColor = 'rgb(185, 196, 255)';
        tab2.style.backgroundColor = 'rgb(185, 196, 255)';
        tab3.style.backgroundColor = 'rgb(96, 120, 255)';
        tab4.style.backgroundColor = 'rgb(185, 196, 255)';
        tab5.style.backgroundColor = 'rgb(185, 196, 255)';
    } else if (page_url == '/customcompare') {
        tab1.style.backgroundColor = 'rgb(185, 196, 255)';
        tab2.style.backgroundColor = 'rgb(185, 196, 255)';
        tab3.style.backgroundColor = 'rgb(185, 196, 255)';
        tab4.style.backgroundColor = 'rgb(96, 120, 255)';
        tab5.style.backgroundColor = 'rgb(185, 196, 255)';
    } else if (page_url == '/settings') {
        tab1.style.backgroundColor = 'rgb(185, 196, 255)';
        tab2.style.backgroundColor = 'rgb(185, 196, 255)';
        tab3.style.backgroundColor = 'rgb(185, 196, 255)';
        tab4.style.backgroundColor = 'rgb(185, 196, 255)';
        tab5.style.backgroundColor = 'rgb(96, 120, 255)';
    }

}