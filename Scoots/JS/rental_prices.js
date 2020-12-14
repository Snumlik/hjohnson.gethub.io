const requestURL = 'JS/rentaldata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rental = jsonObject['rental'];
        var table = document.createElement("table");
        table.style.width = "75%"; 

        var trTitle = table.insertRow(-1);
        var title = trTitle.insertCell(-1);
        title.colSpan = 6;
        title.innerHTML = "<b>Max Persons and Price Chart (Includes Tax)</b>";

        var trDesc = table.insertRow(-1);
        var desc1 = trDesc.insertCell(-1);
        desc1.colSpan = 2;
        var desc2 = trDesc.insertCell(-1);
        desc2.colSpan = 2;
        desc2.innerHTML = "<b>Reservation</b>";
        var desc3 = trDesc.insertCell(-1);
        desc3.colSpan = 2;
        desc3.innerHTML = "<b>Walk-In</b>";

        var trHeader = table.insertRow(-1);
        var head1 = trHeader.insertCell(-1);
        head1.innerHTML = "<b>Rental Type</b>";
        var head2 = trHeader.insertCell(-1);
        head2.innerHTML = "<b>Max. Persons</b>";
        var head3 = trHeader.insertCell(-1);
        head3.innerHTML = "<b>Half Day (3 hrs)</b>";
        var head4 = trHeader.insertCell(-1);
        head4.innerHTML = "<b>Full Day</b>";
        var head5 = trHeader.insertCell(-1);
        head5.innerHTML = "<b>Half Day (3 hrs)</b>";
        var head6 = trHeader.insertCell(-1);
        head6.innerHTML = "<b>Full Day</b>";

        for (let i = 0; i < rental.length; i++) {
            var tabRow = table.insertRow(-1);
            var cellName = tabRow.insertCell(-1);
            cellName.innerHTML = rental[i].name;
            var cellMaxPersons = tabRow.insertCell(-1);
            cellMaxPersons.innerHTML = rental[i].MaxPersons;    
            var cellResHalf = tabRow.insertCell(-1);
            cellResHalf.innerHTML = rental[i].ReservationHalfDay;  
            var cellResFull = tabRow.insertCell(-1);
            cellResFull.innerHTML = rental[i].ReservationFullDay;  
            var cellWalkHalf = tabRow.insertCell(-1);
            cellWalkHalf.innerHTML = rental[i].WalkinHalfDay;  
            var cellWalkFull = tabRow.insertCell(-1);
            cellWalkFull.innerHTML = rental[i].WalkinFullDay;           
        }

        document.querySelector('div.rental_table').appendChild(table);
    });