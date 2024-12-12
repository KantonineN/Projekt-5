/* Set the width of the side navigation to 250px */
function OpenFilter() {
    document.getElementById("myfilter").style.minWidth = "25%";
    document.getElementById("myfilter").style.display = "flex";
}
  
/* Set the width of the side navigation to 0 */
function CloseFilter() {
    document.getElementById("myfilter").style.minWidth = "0";
    document.getElementById("myfilter").style.display = "none";
}

function FilterProjects() {
    const cards  = document.getElementsByClassName("card");

    const filterStudie = document.getElementById("edit-studie").value.toLocaleLowerCase();
    const filterTeknologi = document.getElementById("edit-teknologi").value.toLocaleLowerCase();

    for (let i = 0; i < cards.length; i++) {
        const listStudie = cards[i].querySelector('p .studie').innerText.toLocaleLowerCase();
        const listTeknologi = cards[i].querySelector('p .teknologi').innerText.toLocaleLowerCase();

        if (Filter(filterStudie, listStudie, filterTeknologi, listTeknologi) == true) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        };
    }
    CloseFilter();
}

function Filter (filterStudie, listStudie, filterTeknologi, listTeknologi) {
    if (filterStudie != "all" && listStudie.indexOf(filterStudie) == -1) {
        return false;
    }
    if (filterTeknologi != "all" && listTeknologi.indexOf(filterTeknologi) == -1) {
        return false;
    }
    return true;
}