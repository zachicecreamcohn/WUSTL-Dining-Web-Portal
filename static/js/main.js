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

    if (page_url == '/') {
        var profit_date = document.getElementById('profit-date');
        var selected_date = document.getElementById('profit-date-selector')
        //set profit_date to selected_date

        profit_date.innerText = "Profit for " + selected_date.value;
        
        selected_date.addEventListener('change', (event) => {
            const selected_date = document.getElementById('profit-date-selector').value;
            profit_date.innerText = "Profit for " + selected_date;
        });




        var revenue_date = document.getElementById('revenue-date');
        var selected_date1 = document.getElementById('revenue-date-selector')
        //set profit_date to selected_date

        revenue_date.innerText = "Revenue for " + selected_date1.value;
        
        selected_date1.addEventListener('change', (event) => {
            const selected_date1 = document.getElementById('revenue-date-selector').value;
            revenue_date.innerText = "revenue for " + selected_date1;
        });
    
    }


    // add class selected-menu-option to td if on corrosponding page.
    // this highlights the menu option that is selected.
    var menu_table = document.getElementById('menu-table');
    var item_selected = false;
    for (var i = 0; i < menu_table.rows.length; i++) {
        var row = menu_table.rows[i];
        var cell = row.cells[0];
        var cell_url = cell.getElementsByTagName("a")[0].href;
        var suburl = "/"+cell_url.split('/')[3];
        if (suburl == page_url) {
            console.log("match");
            cell.classList.add("selected-menu-option");
            item_selected = true;
        }
    }

    //this highlights all menu options if no item is selected.
    if (!item_selected) {
        for (var i = 0; i< menu_table.rows.length; i++) {
            var row = menu_table.rows[i];
            var cell = row.cells[0];
            var cell_url = cell.getElementsByTagName("a")[0].href;
            var suburl = "/"+cell_url.split('/')[3];
            cell.classList.add("selected-menu-option");
        }
    }

} 