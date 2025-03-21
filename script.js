function searchTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("scheduleTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let tdArray = tr[i].getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < tdArray.length; j++) {
            if (tdArray[j]) {
                let textValue = tdArray[j].textContent || tdArray[j].innerText;
                if (textValue.toLowerCase().indexOf(input) > -1) {
                    found = true;
                    break;
                }
            }
        }

        tr[i].style.display = found ? "" : "none";
    }
}