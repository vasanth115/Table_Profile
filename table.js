var datalength = 20;
var data = [
    { id: 1, Name: "vasanth", Phone: 6379641143, email: "vasanthk@ksrce.ac.in", Status: "Approved", Submitted: "2024-02-20 10:20:30", DOB: "20-05-2004", Address: "Tiruppur", Edit: "0" },
    { id: 2, Name: "Sutharsan", Phone: 9876123456, email: "sutharsan@ksrce.ac.in", Status: "Approved", Submitted: "1947-04-10 02:31:30", DOB: "10-04-2004", Address: "Erode", Edit: "1" },
    { id: 3, Name: "pradeep", Phone: 9876234512, email: "pradeep@ksrce.ac.in", Status: "Applied", Submitted: "2023-02-20 10:20:30", DOB: "01-11-2003", Address: "Comibatore", Edit: "2" },
    { id: 4, Name: "vimal", Phone: 9876345123, email: "vimal@ksrce.ac.in", Status: "Applied", Submitted: "2022-02-20 10:20:30", DOB: "01-01-2000", Address: "Gobi", Edit: "3" },
    { id: 5, Name: "vimal Raj", Phone: 9876451234, email: "vimalraj@ksrce.ac.in", Status: "Approved", Submitted: "2021-02-20 10:20:30", DOB: "12-04-1998", Address: "Sathiyamangalam", Edit: "4" },
    { id: 6, Name: "prithiv", Phone: 9876567345, email: "prithiv@ksrce.ac.in", Status: "Applied", Submitted: "2020-02-20 10:20:30", DOB: "07-09-2014", Address: "Namakkal", Edit: "5" },
    { id: 7, Name: "jayadev", Phone: 9876673456, email: "jayadev@ksrce.ac.in", Status: "Approved", Submitted: "2019-02-20 10:20:30", DOB: "20-05-1985", Address: "Tiruchengode", Edit: "6" },
    { id: 8, Name: "subash", Phone: 9876784567, email: "subash@ksrce.ac.in", Status: "Applied", Submitted: "2018-02-20 10:20:30", DOB: "03-05-2004", Address: "selam", Edit: "7" },
    { id: 9, Name: "Ranjith", Phone: 9876895678, email: "ranjith@ksrce.ac.in", Status: "Applied", Submitted: "2017-02-20 10:20:30", DOB: "10-12-2015", Address: "mallur", Edit: "8" },
    { id: 10, Name: "jeeva", Phone: 9876906789, email: "jeeva@ksrce.ac.in", Status: "Approved", Submitted: "2016-02-20 10:20:30", DOB: "01-02-2010", Address: "Chennai", Edit: "9" },
    { id: 11, Name: "vijay", Phone: 9876017890, email: "Tigerboy@ksrce.ac.in", Status: "Applied", Submitted: "2015-02-20 10:20:30", DOB: "01-01-2024", Address: "Kallakurichi", Edit: "10" },
    { id: 12, Name: "sakthivel", Phone: 9876128901, email: "sakthivel@ksrce.ac.in", Status: "Approved", Submitted: "2014-02-20 10:20:30", DOB: "20-12-1947", Address: "Erode", Edit: "11" },
    { id: 13, Name: "Nishanth", Phone: 9876340123, email: "nishanth@ksrce.ac.in", Status: "Approved", Submitted: "2013-02-20 10:20:30", DOB: "22-06-1976", Address: "Comibatore", Edit: "12" },
    { id: 14, Name: "praveen", Phone: 9876239012, email: "praveen@ksrce.ac.in", Status: "Applied", Submitted: "2012-02-20 10:20:30", DOB: "03-11-1966", Address: "selam", Edit: "13" },
    { id: 15, Name: "kumar", Phone: 9876451234, email: "kumar@ksrce.ac.in", Status: "Applied", Submitted: "2011-02-20 10:20:30", DOB: "07-10-2020", Address: "villupuram", Edit: "14" },
    { id: 16, Name: "sathyaseelan", Phone: 9876562345, email: "sathyaseelan@ksrce.ac.in", Status: "Applied", Submitted: "2010-02-20 10:20:30", DOB: "20-05-2017", Address: "Chennai", Edit: "15" },
    { id: 17, Name: "venkatesh", Phone: 9876673456, email: "venkatesh@ksrce.ac.in", Status: "Approved", Submitted: "2009-02-20 10:20:30", DOB: "29-01-2020", Address: "Madurai", Edit: "16" },
    { id: 18, Name: "vicky", Phone: 9876784567, email: "vicky@ksrce.ac.in", Status: "Applied", Submitted: "2008-02-20 10:20:30", DOB: "15-08-2003", Address: "Kallakurichi", Edit: "17" },
    { id: 19, Name: "david", Phone: 9876895678, email: "david@ksrce.ac.in", Status: "Approved", Submitted: "2007-02-20 10:20:30", DOB: "10-08-2002", Address: "Namakkal", Edit: "18" },
    { id: 20, Name: "mathan", Phone: 9876906789, email: "mathan@ksrce.ac.in", Status: "Applied", Submitted: "2004-02-20 10:20:30", DOB: "15-08-1947", Address: "Comibatore", Edit: "19" }
];
window.onload = function () {
    var username = localStorage.getItem("username");
    var phone = localStorage.getItem("userphone");
    var userdob = localStorage.getItem("userdob");
    var city = localStorage.getItem("city");
    var selectedrowid = localStorage.getItem("elementid");
    var tableString = localStorage.getItem("data");
    var table = null;
    if (tableString) {
        table = JSON.parse(tableString);
        if (table) {
            data = table;
            table.forEach(function (row, i) { return row.id = i + 1; });
        }
    }
    if (table) {
        if (username === null || phone === null || userdob === null || city === null || selectedrowid === null) {
            renderTable(data);
            renderPagination(data);
        }
        else {
            data = table;
            savechanges(username, parseInt(phone), userdob, city, parseInt(selectedrowid), table);
            renderTable(data);
            renderPagination(data);
        }
    }
    else {
        // If there's no data in local storage, render the table and pagination with the original data array
        if (username === null || phone === null || userdob === null || city === null || selectedrowid === null) {
            return;
        }
        else {
            savechanges(username, parseInt(phone), userdob, city, parseInt(selectedrowid), table);
            renderTable(data);
            renderPagination(data);
        }
    }
    localStorage.removeItem("username");
    localStorage.removeItem("userphone");
    localStorage.removeItem("userdob");
    localStorage.removeItem("city");
    localStorage.removeItem("elementid");
};
var searchvalue = document.getElementById('searchInput');
var selectElement = document.getElementById('optionfilter');
var currentPage = 1;
var rowsPerPage = 5;
// let rowid: number;
// let rowName: string;
// let rowPhone: number;
// let rowDOB: string;
// let rowAddress: string;
// let selectedrowid: string | null;
function renderTable(dataarray) {
    var tablebody = document.querySelector("tbody");
    tablebody.innerHTML = '';
    var startIndex = (currentPage - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;
    var paginatedData = dataarray.slice(startIndex, endIndex);
    paginatedData.forEach(function (row, index) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n          <td id=\"idnumber\" >".concat(row.id, "</td>\n          <td id=\"Name\" >").concat(row.Name, "</td>\n          <td id=\"Phone\">").concat(row.Phone, "</td>\n          <td class=\"email\" >").concat(row.email, "</td>\n          <td>").concat(row.Status, "</td>\n          <td>").concat(row.Submitted, "</td> \n          <td id=\"DOB\">").concat(row.DOB, "</td>\n          <td id=\"Address\">").concat(row.Address, "</td>\n          <td> <button class=\"deletebtn\" id=\"").concat(row.Name, "\" onclick=\"DataDelete(").concat(row.Edit, ")\"><i class='bx bx-trash'></i>Delete</Button></td> \n          <td> <button class=\"edit\" id=\"edit\" onclick=\"ProcessEdit(").concat(row.Edit, ")\" ><i class='bx bx-edit-alt'></i> Edit</button> </td>");
        tr.id = "".concat(row.id);
        tablebody.appendChild(tr);
    });
}
if (searchvalue && selectElement !== null) {
    searchvalue.addEventListener('input', function (e) {
        var searchTerm = e.target.value.toLowerCase();
        var filteredData = data.filter(function (row) {
            return row.Name.toLowerCase().includes(searchTerm) ||
                row.email.toLowerCase().includes(searchTerm) ||
                row.Phone.toString().includes(searchTerm) ||
                row.id.toString().includes(searchTerm) ||
                row.Address.toLowerCase().includes(searchTerm);
        });
        currentPage = 1;
        var target = selectElement;
        var selectedValue = target.value;
        if (searchTerm === "" && selectElement) {
            if (selectedValue === 'All') {
                renderTable(data);
                renderPagination(data);
            }
            else if (selectedValue === 'Approved') {
                var approveditem = data.filter(function (row) { return row.Status === 'Approved'; });
                renderTable(approveditem);
                renderPagination(approveditem);
            }
            else if (selectedValue === 'Applied') {
                var applieditem = data.filter(function (row) { return row.Status === 'Applied'; });
                renderTable(applieditem);
                renderPagination(applieditem);
            }
        }
        else {
            renderTable(filteredData);
            renderPagination(filteredData);
        }
    });
}
var total;
// Render pagination
function renderPagination(data) {
    var paginationDiv = document.getElementById('pagination');
    if (paginationDiv) {
        paginationDiv.innerHTML = '';
        var totalPages = Math.ceil(data.length / rowsPerPage);
        total = totalPages;
        var _loop_1 = function (i) {
            var pageLink = document.createElement('span');
            pageLink.textContent = i.toString();
            pageLink.onclick = function () {
                currentPage = i;
                renderTable(data);
                renderPagination(data);
            };
            paginationDiv.appendChild(pageLink);
        };
        for (var i = 1; i <= totalPages; i++) {
            _loop_1(i);
        }
    }
}
// Delete Event
function DataDelete(Editid) {
    var index = data.findIndex(function (row) { return row.Edit.toString() === Editid.toString(); });
    if (index !== -1) {
        data.splice(index, 1);
        switch (document.getElementById('optionfilter').value) {
            case 'All':
                data.forEach(function (row, i) { return row.id = i + 1; });
                currentPage = 1;
                renderTable(data);
                renderPagination(data);
                break;
            case 'Applied':
                var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
                appliedData.forEach(function (row, i) { return row.id = i + 1; });
                currentPage = 1;
                renderTable(appliedData);
                renderPagination(appliedData);
                break;
            case 'Approved':
                var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
                approvedData.forEach(function (row, i) { return row.id = i + 1; });
                currentPage = 1;
                renderTable(approvedData);
                renderPagination(approvedData);
                break;
        }
        localStorage.setItem("data", JSON.stringify(data));
    }
}
function selectionProcess(event) {
    var target = event.target;
    var selectedValue = target.value;
    switch (selectedValue) {
        case 'All':
            data.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            var filtered = data.filter(function (item) { return item.Status === 'Applied'; });
            filtered.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = 1;
            renderTable(filtered);
            renderPagination(filtered);
            break;
        case 'Approved':
            var filtereditem = data.filter(function (item) { return item.Status === 'Approved'; });
            filtereditem.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = 1;
            renderTable(filtereditem);
            renderPagination(filtereditem);
            break;
        default:
            break;
    }
}
// Intitial Render
renderTable(data);
renderPagination(data);
//Toggle Dark And Light Mode
var body = document.querySelector("body");
var toggle = document.getElementById("toggle");
if (body && toggle) {
    toggle.onclick = function () {
        if (body.className === 'light') {
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else {
            body.classList.remove("dark");
            body.classList.add("light");
        }
    };
}
// Changing Row Per Page
var rowsPerPageSelect = document.getElementById('rowsPerPage');
if (rowsPerPageSelect) {
    rowsPerPageSelect.addEventListener('change', function (e) {
        rowsPerPage = parseInt(e.target.value);
        currentPage = 1;
        var optionFilterValue = document.getElementById('optionfilter').value;
        switch (optionFilterValue) {
            case 'All':
                renderTable(data);
                renderPagination(data);
                break;
            case 'Applied':
                var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
                filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
                currentPage = 1;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
                break;
            case 'Approved':
                var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
                filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
                currentPage = 1;
                renderTable(filterforApproved);
                renderPagination(filterforApproved);
                break;
            default:
                break;
        }
    });
}
// Change page right by Arrows
function pagerightchange() {
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            if (currentPage === total) {
                alert("No more pages");
            }
            else {
                currentPage++;
                renderTable(data);
                renderPagination(data);
            }
            break;
        case 'Applied':
            var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
            filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            if (currentPage === total) {
                alert("No more pages");
            }
            else {
                currentPage++;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
            }
            break;
        case 'Approved':
            var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
            filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            if (currentPage === total) {
                alert("No more pages");
            }
            else {
                currentPage++;
                renderTable(filterforApproved);
                renderPagination(filterforApproved);
            }
            break;
    }
}
// Change page to left by Arrow
function pageleftchange() {
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            if (currentPage === 1) {
                alert("No more pages");
            }
            else {
                currentPage--;
                renderTable(data);
                renderPagination(data);
            }
            break;
        case 'Applied':
            var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
            filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            if (currentPage === 1) {
                alert("No more pages");
            }
            else {
                currentPage--;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
            }
            break;
        case 'Approved':
            var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
            filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            if (currentPage === 1) {
                alert("No more pages");
            }
            else {
                currentPage--;
                renderTable(filterforApproved);
                renderPagination(filterforApproved);
            }
            break;
    }
}
// Change Page First By arrow
function pagefirst() {
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
            filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = 1;
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
            filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = 1;
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
    }
}
// Change page Over to Last By Arrow
function pagelast() {
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            currentPage = total;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
            filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = total;
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
            filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            currentPage = total;
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
    }
}
function dateformat(dob) {
    var parts = dob.split("-");
    return "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
}
// Profile Updation Page Change and SetItems in LocalStorage
function UserProfile(uname, uphone, udob, uaddress, editid) {
    localStorage.setItem("username", uname);
    localStorage.setItem("userphone", uphone);
    localStorage.setItem("userdob", udob);
    localStorage.setItem("city", uaddress);
    localStorage.setItem("elementid", editid);
    window.location.href = "front.html";
}
function savechanges(paramName, paramPhone, paramDOB, paramAddress, editId, paramdata) {
    data[editId].Name = paramName;
    data[editId].Phone = paramPhone;
    data[editId].DOB = dateformat(paramDOB);
    data[editId].Address = paramAddress;
}
var ProcessEdit = function (editId) {
    var optionFilterValue = document.getElementById('optionfilter').value;
    localStorage.setItem("data", JSON.stringify(data));
    switch (optionFilterValue) {
        case 'All':
            var editIndex = data.findIndex(function (row) { return row.Edit === editId.toString(); });
            var rowName = data[editIndex].Name;
            var rowPhone = data[editIndex].Phone;
            var rowDOB = data[editIndex].DOB;
            var rowAddress = data[editIndex].Address;
            UserProfile(rowName, rowPhone.toString(), rowDOB, rowAddress, editIndex.toString());
            break;
        case 'Applied':
            var filterforApplied_1 = data.filter(function (item) { return item.Status === 'Applied'; });
            var appliedIndex_1 = filterforApplied_1.findIndex(function (item) { return item.Edit === editId.toString(); });
            var indexApplied = data.findIndex(function (row) { return row.Name === filterforApplied_1[appliedIndex_1].Name; });
            var rowNameApp = data[indexApplied].Name;
            var rowPhoneApp = data[indexApplied].Phone;
            var rowDOBApp = data[indexApplied].DOB;
            var rowAddressApp = data[indexApplied].Address;
            UserProfile(rowNameApp, rowPhoneApp.toString(), rowDOBApp, rowAddressApp, indexApplied.toString());
            break;
        case 'Approved':
            var filterforApproved_1 = data.filter(function (item) { return item.Status === 'Approved'; });
            var approvedIndex_1 = filterforApproved_1.findIndex(function (item) { return item.Edit === editId.toString(); });
            var indexApproved = data.findIndex(function (row) { return row.Name === filterforApproved_1[approvedIndex_1].Name; });
            var rowNameApproved = data[indexApproved].Name;
            var rowPhoneApproved = data[indexApproved].Phone;
            var rowDOBApproved = data[indexApproved].DOB;
            var rowAddressApproved = data[indexApproved].Address;
            UserProfile(rowNameApproved, rowPhoneApproved.toString(), rowDOBApproved, rowAddressApproved, indexApproved.toString());
            break;
    }
};
var sortusingIDfunc = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            // Sorting for 'All' option
            var sortOptionAll = document.getElementById('sortingID');
            if (sortOptionAll.value === 'ascending') {
                data.sort(function (a, b) { return a.id - b.id; });
                sortOptionAll.style.background = "red";
            }
            else {
                data.sort(function (a, b) { return b.id - a.id; });
                sortOptionAll.style.background = "red";
            }
            renderTable(data);
            break;
        case 'Applied':
            // Sorting for 'Applied' option
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            var sortOptionApplied = document.getElementById('sortingID');
            if (sortOptionApplied.value === 'ascending') {
                appliedData.sort(function (a, b) { return a.id - b.id; });
                sortOptionApplied.style.background = "red";
            }
            else {
                appliedData.sort(function (a, b) { return b.id - a.id; });
                sortOptionApplied.style.background = "red";
            }
            renderTable(appliedData);
            break;
        case 'Approved':
            // Sorting for 'Approved' option
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            var sortOptionApproved = document.getElementById('sortingID');
            if (sortOptionApproved.value === 'ascending') {
                approvedData.sort(function (a, b) { return a.id - b.id; });
                sortOptionApproved.style.background = "red";
            }
            else {
                approvedData.sort(function (a, b) { return b.id - a.id; });
                sortOptionApproved.style.background = "red";
            }
            renderTable(approvedData);
            break;
    }
    activesort('sortingID');
};
var sortingID = document.getElementById('sortingID');
if (sortingID) {
    sortingID.addEventListener("change", sortusingIDfunc);
}
var sortusingname = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    var sortOptionname = document.getElementById('namesort');
    switch (optionFilterValue) {
        case 'All':
            if (sortOptionname.value === 'ascending') {
                data.sort(function (a, b) { return a.Name.localeCompare(b.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            else {
                data.sort(function (a, b) { return b.Name.localeCompare(a.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOptionname.value === 'ascending') {
                appliedData.sort(function (a, b) { return a.Name.localeCompare(b.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            else {
                appliedData.sort(function (a, b) { return b.Name.localeCompare(a.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            appliedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(appliedData);
            renderPagination(data);
            break;
        case 'Approved':
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOptionname.value === 'ascending') {
                approvedData.sort(function (a, b) { return a.Name.localeCompare(b.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            else {
                approvedData.sort(function (a, b) { return b.Name.localeCompare(a.Name); });
                sortOptionname.style.background = "red";
                activesort('namesort');
            }
            approvedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(approvedData);
            renderPagination(data);
            break;
    }
};
var namesort = document.getElementById('namesort');
if (namesort) {
    namesort.addEventListener("change", sortusingname);
}
var sortusingphoneno = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    var sortOption = document.getElementById('mobilenumbersort');
    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort(function (a, b) { return parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            else {
                data.sort(function (a, b) { return parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(data);
            break;
        case 'Applied':
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOption.value === 'ascending') {
                appliedData.sort(function (a, b) { return parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            else {
                appliedData.sort(function (a, b) { return parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            appliedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(appliedData);
            break;
        case 'Approved':
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOption.value === 'ascending') {
                approvedData.sort(function (a, b) { return parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            else {
                approvedData.sort(function (a, b) { return parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()); });
                sortOption.style.background = "red";
                activesort('mobilenumbersort');
            }
            approvedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(approvedData);
            break;
    }
    sortOption.style.background = "red";
    // activesort()
};
var Phonenosort = document.getElementById('mobilenumbersort');
if (Phonenosort) {
    Phonenosort.addEventListener("change", sortusingphoneno);
}
var sortusingEmail = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    var sortOption = document.getElementById('emailsort');
    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort(function (a, b) { return a.email.localeCompare(b.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            else {
                data.sort(function (a, b) { return b.email.localeCompare(a.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(data);
            break;
        case 'Applied':
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOption.value === 'ascending') {
                appliedData.sort(function (a, b) { return a.email.localeCompare(b.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            else {
                appliedData.sort(function (a, b) { return b.email.localeCompare(a.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            appliedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(appliedData);
            break;
        case 'Approved':
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOption.value === 'ascending') {
                approvedData.sort(function (a, b) { return a.email.localeCompare(b.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            else {
                approvedData.sort(function (a, b) { return b.email.localeCompare(a.email); });
                sortOption.style.background = "red";
                activesort('emailsort');
            }
            approvedData.forEach(function (row, i) { return row.id = i + 1; }); // Change the data ID according to index
            renderTable(approvedData);
            break;
    }
};
var emailsort = document.getElementById('emailsort');
if (emailsort) {
    emailsort.addEventListener("change", sortusingEmail);
}
var sortingSelect = document.getElementById('Sorting');
if (sortingSelect) {
    sortingSelect.addEventListener("change", sortData);
}
function sortData() {
    var sortOption = document.getElementById('Sorting');
    var optionFilterValue = document.getElementById('optionfilter').value;
    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort(function (a, b) { return new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime(); });
                data.forEach(function (row, i) { return row.id = i + 1; });
            }
            else {
                data.sort(function (a, b) { return new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime(); });
                data.forEach(function (row, i) { return row.id = i + 1; });
            }
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            var filterforApplied = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOption.value === 'ascending') {
                filterforApplied.sort(function (a, b) { return new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime(); });
                filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            }
            else {
                filterforApplied.sort(function (a, b) { return new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime(); });
                filterforApplied.forEach(function (row, i) { return row.id = i + 1; });
            }
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            var filterforApproved = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOption.value === 'ascending') {
                filterforApproved.sort(function (a, b) { return new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime(); });
                filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            }
            else {
                filterforApproved.sort(function (a, b) { return new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime(); });
                filterforApproved.forEach(function (row, i) { return row.id = i + 1; });
            }
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
        default:
            break;
    }
    sortOption.style.background = "red";
    activesort('Sorting');
}
var sortusingdob = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    var sortOption = document.getElementById('dobsort');
    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort(function (a, b) { return compareDates(a.DOB, b.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            else {
                data.sort(function (a, b) { return compareDates(b.DOB, a.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            break;
        case 'Applied':
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOption.value === 'ascending') {
                appliedData.sort(function (a, b) { return compareDates(a.DOB, b.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            else {
                appliedData.sort(function (a, b) { return compareDates(b.DOB, a.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            renderTable(appliedData);
            break;
        case 'Approved':
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOption.value === 'ascending') {
                approvedData.sort(function (a, b) { return compareDates(a.DOB, b.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            else {
                approvedData.sort(function (a, b) { return compareDates(b.DOB, a.DOB); });
                sortOption.style.background = "red";
                activesort('dobsort');
            }
            renderTable(approvedData);
            break;
    }
    // Change the data ID according to index
    data.forEach(function (row, i) { return row.id = i + 1; });
    renderTable(data);
};
function compareDates(dateA, dateB) {
    var partsA = dateA.split("-").map(Number);
    var partsB = dateB.split("-").map(Number);
    // Compare years
    if (partsA[2] !== partsB[2]) {
        return partsA[2] - partsB[2];
    }
    // Compare months
    if (partsA[1] !== partsB[1]) {
        return partsA[1] - partsB[1];
    }
    // Compare days
    return partsA[0] - partsB[0];
}
var dobsort = document.getElementById('dobsort');
if (dobsort) {
    dobsort.addEventListener("change", sortusingdob);
}
var sortusingcity = function () {
    var optionFilterValue = document.getElementById('optionfilter').value;
    var sortOption = document.getElementById('citysort');
    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort(function (a, b) { return a.Address.localeCompare(b.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            else {
                data.sort(function (a, b) { return b.Address.localeCompare(a.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; });
            renderTable(data);
            break;
        case 'Applied':
            var appliedData = data.filter(function (item) { return item.Status === 'Applied'; });
            if (sortOption.value === 'ascending') {
                appliedData.sort(function (a, b) { return a.Address.localeCompare(b.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            else {
                appliedData.sort(function (a, b) { return b.Address.localeCompare(a.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; });
            renderTable(appliedData);
            break;
        case 'Approved':
            var approvedData = data.filter(function (item) { return item.Status === 'Approved'; });
            if (sortOption.value === 'ascending') {
                approvedData.sort(function (a, b) { return a.Address.localeCompare(b.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            else {
                approvedData.sort(function (a, b) { return b.Address.localeCompare(a.Address); });
                sortOption.style.background = "red";
                activesort('citysort');
            }
            data.forEach(function (row, i) { return row.id = i + 1; });
            renderTable(approvedData);
            break;
    }
};
var citysort = document.getElementById('citysort');
if (citysort) {
    citysort.addEventListener("change", sortusingcity);
}
// Get all select elements
var activesort = function (changedSelectId) {
    // Get all select elements
    var sortOptions = [
        'Sorting',
        'sortingID',
        'mobilenumbersort',
        'namesort',
        'dobsort',
        'citysort',
        'emailsort'
    ].map(function (id) { return document.getElementById(id); });
    // Set the background of the changed select to red and others to white
    sortOptions.forEach(function (select) {
        if (select.id === changedSelectId) {
            select.style.background = "red";
            select.style.color = "white";
        }
        else {
            select.style.background = "white";
            select.style.color = "black";
        }
    });
};
