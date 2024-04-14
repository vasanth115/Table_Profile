interface DataRow {
    id: number;
    Name: string;
    Phone: number;
    email: string;
    Status: string;
    Submitted: string;
    DOB: string;
    Address: string;
    Edit: string;
}



const datalength:number=20;
let data: DataRow[] = [
    { id: 1, Name: "vasanth", Phone: 6379641143, email: "vasanthk@ksrce.ac.in", Status: "Approved", Submitted: "2024-02-20 10:20:30", DOB: "20-05-2004", Address: "Tiruppur", Edit: "0" },
    { id: 2, Name: "Sutharsan", Phone: 9876123456, email: "sutharsan@ksrce.ac.in", Status: "Approved", Submitted: "1947-04-10 02:31:30", DOB: "10-04-2004", Address: "Erode", Edit: "1" },
    {id:3, Name:"pradeep",Phone:9876234512,email:"pradeep@ksrce.ac.in",Status:"Applied",Submitted:"2023-02-20 10:20:30",DOB:"01-11-2003",Address:"Comibatore",Edit:"2"},
    {id:4, Name:"vimal",Phone:9876345123,email:"vimal@ksrce.ac.in",Status:"Applied",Submitted:"2022-02-20 10:20:30",DOB:"01-01-2000",Address:"Gobi",Edit:"3"},
    {id:5, Name:"vimal Raj",Phone:9876451234,email:"vimalraj@ksrce.ac.in",Status:"Approved",Submitted:"2021-02-20 10:20:30",DOB:"12-04-1998",Address:"Sathiyamangalam",Edit:"4"},
    {id:6, Name:"prithiv",Phone:9876567345,email:"prithiv@ksrce.ac.in",Status:"Applied",Submitted:"2020-02-20 10:20:30",DOB:"07-09-2014",Address:"Namakkal",Edit:"5"},
    {id:7, Name:"jayadev",Phone:9876673456,email:"jayadev@ksrce.ac.in",Status:"Approved",Submitted:"2019-02-20 10:20:30",DOB:"20-05-1985",Address:"Tiruchengode",Edit:"6"},
    {id:8, Name:"subash",Phone:9876784567,email:"subash@ksrce.ac.in",Status:"Applied",Submitted:"2018-02-20 10:20:30",DOB:"03-05-2004",Address:"selam",Edit:"7"},
    {id:9, Name:"Ranjith",Phone:9876895678,email:"ranjith@ksrce.ac.in",Status:"Applied",Submitted:"2017-02-20 10:20:30",DOB:"10-12-2015",Address:"mallur",Edit:"8"},
    {id:10, Name:"jeeva",Phone:9876906789,email:"jeeva@ksrce.ac.in",Status:"Approved",Submitted:"2016-02-20 10:20:30",DOB:"01-02-2010",Address:"Chennai",Edit:"9"},
    {id:11, Name:"vijay",Phone:9876017890,email:"Tigerboy@ksrce.ac.in",Status:"Applied",Submitted:"2015-02-20 10:20:30",DOB:"01-01-2024",Address:"Kallakurichi",Edit:"10"},
    {id:12, Name:"sakthivel",Phone:9876128901,email:"sakthivel@ksrce.ac.in",Status:"Approved",Submitted:"2014-02-20 10:20:30",DOB:"20-12-1947",Address:"Erode",Edit:"11"},
    {id:13, Name:"Nishanth",Phone:9876340123,email:"nishanth@ksrce.ac.in",Status:"Approved",Submitted:"2013-02-20 10:20:30",DOB:"22-06-1976",Address:"Comibatore",Edit:"12"},
    {id:14, Name:"praveen",Phone:9876239012,email:"praveen@ksrce.ac.in",Status:"Applied",Submitted:"2012-02-20 10:20:30",DOB:"03-11-1966",Address:"selam",Edit:"13"},
    {id:15, Name:"kumar",Phone:9876451234,email:"kumar@ksrce.ac.in",Status:"Applied",Submitted:"2011-02-20 10:20:30",DOB:"07-10-2020",Address:"villupuram",Edit:"14"},
    {id:16, Name:"sathyaseelan",Phone:9876562345,email:"sathyaseelan@ksrce.ac.in",Status:"Applied",Submitted:"2010-02-20 10:20:30",DOB:"20-05-2017",Address:"Chennai",Edit:"15"},
    {id:17, Name:"venkatesh",Phone:9876673456,email:"venkatesh@ksrce.ac.in",Status:"Approved",Submitted:"2009-02-20 10:20:30",DOB:"29-01-2020",Address:"Madurai",Edit:"16"},
    {id:18, Name:"vicky",Phone:9876784567,email:"vicky@ksrce.ac.in",Status:"Applied",Submitted:"2008-02-20 10:20:30",DOB:"15-08-2003",Address:"Kallakurichi",Edit:"17"},
    {id:19, Name:"david",Phone:9876895678,email:"david@ksrce.ac.in",Status:"Approved",Submitted:"2007-02-20 10:20:30",DOB:"10-08-2002",Address:"Namakkal",Edit:"18"},
    {id:20, Name:"mathan",Phone:9876906789,email:"mathan@ksrce.ac.in",Status:"Applied",Submitted:"2004-02-20 10:20:30",DOB:"15-08-1947",Address:"Comibatore",Edit:"19"}
];

window.onload = (): void => {
    const username: string | null = localStorage.getItem("username");
    const phone: string | null = localStorage.getItem("userphone");
    const userdob: string | null = localStorage.getItem("userdob");
    const city: string | null = localStorage.getItem("city");
    const selectedrowid: string | null = localStorage.getItem("elementid");
    const tableString: string | null = localStorage.getItem("data");

    let table: DataRow[] | null = null;

    if (tableString) {
        table = JSON.parse(tableString);
        if(table)
            {
                data=table
                table.forEach((row: DataRow, i: number) => row.id = i + 1);
            }
    }

    if (table) {
        if (username === null || phone === null || userdob === null || city === null || selectedrowid === null) {
            renderTable(data);
            renderPagination(data);
        } else {
            data=table
            savechanges(username, parseInt(phone), userdob, city, parseInt(selectedrowid), table);
            renderTable(data);
            renderPagination(data);
        }
    } else {
        // If there's no data in local storage, render the table and pagination with the original data array
        if (username === null || phone === null || userdob === null || city === null || selectedrowid === null) {
          return
        }
        else
        {
           savechanges(username, parseInt(phone), userdob, city, parseInt(selectedrowid), table);
           renderTable(data);
           renderPagination(data);
        }
    }
    localStorage.removeItem("username");
    localStorage.removeItem("userphone");
    localStorage.removeItem("userdob");
    localStorage.removeItem("city")
    localStorage.removeItem("elementid")
};





const searchvalue = document.getElementById('searchInput') as HTMLInputElement | null;
const selectElement = document.getElementById('optionfilter') as HTMLSelectElement | null;
let currentPage = 1;
let rowsPerPage = 5;

// let rowid: number;
// let rowName: string;
// let rowPhone: number;
// let rowDOB: string;
// let rowAddress: string;
// let selectedrowid: string | null;

function renderTable(dataarray: DataRow[]) {
    let tablebody = document.querySelector("tbody")!;
    tablebody.innerHTML = '';

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = dataarray.slice(startIndex, endIndex);

    paginatedData.forEach((row, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td id="idnumber" >${row.id}</td>
          <td id="Name" >${row.Name}</td>
          <td id="Phone">${row.Phone}</td>
          <td class="email" >${row.email}</td>
          <td>${row.Status}</td>
          <td>${row.Submitted}</td> 
          <td id="DOB">${row.DOB}</td>
          <td id="Address">${row.Address}</td>
          <td> <button class="deletebtn" id="${row.Name}" onclick="DataDelete(${row.Edit})"><i class='bx bx-trash'></i>Delete</Button></td> 
          <td> <button class="edit" id="edit" onclick="ProcessEdit(${row.Edit})" ><i class='bx bx-edit-alt'></i> Edit</button> </td>`;
        tr.id = `${row.id}`;
        tablebody.appendChild(tr);
    });
}

if (searchvalue && selectElement!==null) {
    searchvalue.addEventListener('input', (e) => {
        const searchTerm: string = (e.target as HTMLInputElement).value.toLowerCase();
        const filteredData: DataRow[] = data.filter(row =>
            row.Name.toLowerCase().includes(searchTerm) ||
            row.email.toLowerCase().includes(searchTerm) ||
            row.Phone.toString().includes(searchTerm) ||
            row.id.toString().includes(searchTerm) ||
            row.Address.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        const target = selectElement as HTMLSelectElement;
        const selectedValue: string = target.value;
        if (searchTerm === ""&& selectElement) {
            if (selectedValue === 'All') {
                renderTable(data);
                renderPagination(data);
            } else if (selectedValue === 'Approved') {
                const approveditem: DataRow[] = data.filter(row => row.Status === 'Approved');
                renderTable(approveditem);
                renderPagination(approveditem);
            } else if (selectedValue === 'Applied') {
                const applieditem: DataRow[] = data.filter(row => row.Status === 'Applied');
                renderTable(applieditem);
                renderPagination(applieditem);
            }
        } else {
            renderTable(filteredData);
            renderPagination(filteredData);
        }
    });
}

let total: number;

// Render pagination
function renderPagination(data: DataRow[]) {
    const paginationDiv = document.getElementById('pagination');
    if (paginationDiv) {
        paginationDiv.innerHTML = '';

        const totalPages: number = Math.ceil(data.length / rowsPerPage);
        total = totalPages;
        for (let i = 1; i <= totalPages; i++) {
            const pageLink: HTMLSpanElement = document.createElement('span');
            pageLink.textContent = i.toString();
            pageLink.onclick = function () {
                currentPage = i;
                renderTable(data);
                renderPagination(data);
            };
            paginationDiv.appendChild(pageLink);
        }
    }
}

// Delete Event

function DataDelete(Editid: string): void {
    let index = data.findIndex(row => row.Edit.toString() === Editid.toString());
    if (index !== -1) {
        data.splice(index, 1);
        switch ((document.getElementById('optionfilter') as HTMLSelectElement).value) {
            case 'All':
                data.forEach((row, i) => row.id = i + 1);
                currentPage = 1;
                renderTable(data);
                renderPagination(data);
                break;
            case 'Applied':
                const appliedData = data.filter(item => item.Status === 'Applied');
                appliedData.forEach((row, i) => row.id = i + 1);
                currentPage = 1;
                renderTable(appliedData);
                renderPagination(appliedData);
                break;
            case 'Approved':
                const approvedData = data.filter(item => item.Status === 'Approved');
                approvedData.forEach((row, i) => row.id = i + 1);
                currentPage = 1;
                renderTable(approvedData);
                renderPagination(approvedData);
                break;
        }
        localStorage.setItem("data", JSON.stringify(data));
    }
}


function selectionProcess(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue: string = target.value;
    switch (selectedValue) {
        case 'All':
            data.forEach((row: DataRow, i: number) => row.id = i + 1);
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            const filtered: DataRow[] = data.filter((item: DataRow) => item.Status === 'Applied');
            filtered.forEach((row: DataRow, i: number) => row.id = i + 1);
            currentPage = 1;
            renderTable(filtered);
            renderPagination(filtered);
            break;
        case 'Approved':
            const filtereditem: DataRow[] = data.filter((item: DataRow) => item.Status === 'Approved');
            filtereditem.forEach((row: DataRow, i: number) => row.id = i + 1);
            currentPage = 1;
            renderTable(filtereditem);
            renderPagination(filtereditem);
            break;
        default:
            break;
    }
}

// Intitial Render
renderTable(data)
renderPagination(data)

//Toggle Dark And Light Mode

const body: HTMLElement | null = document.querySelector("body");
const toggle: HTMLElement | null = document.getElementById("toggle");

if (body && toggle) {
    toggle.onclick = function() {
        if (body.className === 'light') {
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
        }
    };
}


// Changing Row Per Page
const rowsPerPageSelect: HTMLSelectElement | null = document.getElementById('rowsPerPage') as HTMLSelectElement | null;

if (rowsPerPageSelect) {
    rowsPerPageSelect.addEventListener('change', (e) => {
        rowsPerPage = parseInt((e.target as HTMLSelectElement).value);
        currentPage = 1;

        const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;

        switch (optionFilterValue) {
            case 'All':
                renderTable(data);
                renderPagination(data);
                break;
            case 'Applied':
                const filterforApplied = data.filter((item) => item.Status === 'Applied');
                filterforApplied.forEach((row, i) => row.id = i + 1);
                currentPage = 1;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
                break;
            case 'Approved':
                const filterforApproved = data.filter((item) => item.Status === 'Approved');
                filterforApproved.forEach((row, i) => row.id = i + 1);
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
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    
    switch (optionFilterValue) {
        case 'All':
            if (currentPage === total) {
                alert("No more pages");
            } else {
                currentPage++;
                renderTable(data);
                renderPagination(data);
            }
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            filterforApplied.forEach((row, i) => row.id = i + 1);
            if (currentPage === total) {
                alert("No more pages");
            } else {
                currentPage++;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
            }
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            filterforApproved.forEach((row, i) => row.id = i + 1);
            if (currentPage === total) {
                alert("No more pages");
            } else {
                currentPage++;
                renderTable(filterforApproved);
                renderPagination(filterforApproved);
            }
            break;
    }
}

// Change page to left by Arrow
function pageleftchange() {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    
    switch (optionFilterValue) {
        case 'All':
            if (currentPage === 1) {
                alert("No more pages");
            } else {
                currentPage--;
                renderTable(data);
                renderPagination(data);
            }
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            filterforApplied.forEach((row, i) => row.id = i + 1);
            if (currentPage === 1) {
                alert("No more pages");
            } else {
                currentPage--;
                renderTable(filterforApplied);
                renderPagination(filterforApplied);
            }
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            filterforApproved.forEach((row, i) => row.id = i + 1);
            if (currentPage === 1) {
                alert("No more pages");
            } else {
                currentPage--;
                renderTable(filterforApproved);
                renderPagination(filterforApproved);
            }
            break;
    }
}

// Change Page First By arrow
function pagefirst() {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    
    switch (optionFilterValue) {
        case 'All':
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            filterforApplied.forEach((row, i) => row.id = i + 1);
            currentPage = 1;
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            filterforApproved.forEach((row, i) => row.id = i + 1);
            currentPage = 1;
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
    }
}

// Change page Over to Last By Arrow
function pagelast() {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    
    switch (optionFilterValue) {
        case 'All':
            currentPage = total;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            filterforApplied.forEach((row, i) => row.id = i + 1);
            currentPage = total;
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            filterforApproved.forEach((row, i) => row.id = i + 1);
            currentPage = total;
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
    }
}


function dateformat(dob: string): string {
    const parts = dob.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

// Profile Updation Page Change and SetItems in LocalStorage
function UserProfile(uname: string, uphone: string, udob: string, uaddress: string, editid: string) {
    localStorage.setItem("username", uname);
    localStorage.setItem("userphone", uphone);
    localStorage.setItem("userdob", udob);
    localStorage.setItem("city", uaddress);
    localStorage.setItem("elementid", editid);
    window.location.href = "front.html";
}

function savechanges(paramName: string, paramPhone: number, paramDOB: string, paramAddress: string, editId: number,paramdata) {
    data[editId].Name = paramName;
    data[editId].Phone = paramPhone;
    data[editId].DOB = dateformat(paramDOB);
    data[editId].Address = paramAddress;     
}


const ProcessEdit = (editId: number) => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    localStorage.setItem("data", JSON.stringify(data));
    switch(optionFilterValue) {
        case 'All':
            const editIndex = data.findIndex(row => row.Edit === editId.toString());
            const rowName = data[editIndex].Name;
            const rowPhone = data[editIndex].Phone;
            const rowDOB = data[editIndex].DOB;
            const rowAddress = data[editIndex].Address;
            UserProfile(rowName, rowPhone.toString(), rowDOB, rowAddress, editIndex.toString());
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            const appliedIndex = filterforApplied.findIndex(item => item.Edit === editId.toString());
            const indexApplied = data.findIndex(row => row.Name === filterforApplied[appliedIndex].Name);
            const rowNameApp = data[indexApplied].Name;
            const rowPhoneApp = data[indexApplied].Phone;
            const rowDOBApp = data[indexApplied].DOB;
            const rowAddressApp = data[indexApplied].Address;
            UserProfile(rowNameApp, rowPhoneApp.toString(), rowDOBApp, rowAddressApp, indexApplied.toString());
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            const approvedIndex = filterforApproved.findIndex(item => item.Edit === editId.toString());
            const indexApproved = data.findIndex(row => row.Name === filterforApproved[approvedIndex].Name);
            const rowNameApproved = data[indexApproved].Name;
            const rowPhoneApproved = data[indexApproved].Phone;
            const rowDOBApproved = data[indexApproved].DOB;
            const rowAddressApproved = data[indexApproved].Address;
            UserProfile(rowNameApproved, rowPhoneApproved.toString(), rowDOBApproved, rowAddressApproved, indexApproved.toString());
            break;
    }
}



const sortusingIDfunc = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    switch(optionFilterValue) {
        case 'All':
            // Sorting for 'All' option
            const sortOptionAll = document.getElementById('sortingID') as HTMLSelectElement;
            if (sortOptionAll.value === 'ascending') {
                data.sort((a, b) => a.id - b.id);
                sortOptionAll.style.background="red"
            } else {
                data.sort((a, b) => b.id - a.id);
                sortOptionAll.style.background="red"
            }
            renderTable(data);
            break;
        case 'Applied':
            // Sorting for 'Applied' option
            const appliedData = data.filter(item => item.Status === 'Applied');
            const sortOptionApplied = document.getElementById('sortingID') as HTMLSelectElement;
            if (sortOptionApplied.value === 'ascending') {
                appliedData.sort((a, b) => a.id - b.id);
                sortOptionApplied.style.background="red"
            } else {
                appliedData.sort((a, b) => b.id - a.id);
                sortOptionApplied.style.background="red"
            }
            renderTable(appliedData);
            break;
        case 'Approved':
            // Sorting for 'Approved' option
            const approvedData = data.filter(item => item.Status === 'Approved');
            const sortOptionApproved = document.getElementById('sortingID') as HTMLSelectElement;
            if (sortOptionApproved.value === 'ascending') {
                approvedData.sort((a, b) => a.id - b.id);
                sortOptionApproved.style.background="red"
            } else {
                approvedData.sort((a, b) => b.id - a.id);
                sortOptionApproved.style.background="red"
            }
            renderTable(approvedData);
            break;
    }
    activesort('sortingID')
}
const sortingID: HTMLSelectElement | null = document.getElementById('sortingID') as HTMLSelectElement | null;
if (sortingID) {
    sortingID.addEventListener("change", sortusingIDfunc);
}

const sortusingname = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    const sortOptionname = document.getElementById('namesort') as HTMLSelectElement;

    switch(optionFilterValue) {
        case 'All':
            if (sortOptionname.value === 'ascending') {
                data.sort((a, b) => a.Name.localeCompare(b.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            } else {
                data.sort((a, b) => b.Name.localeCompare(a.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            }
            data.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(data);
            renderPagination(data)
            break;
        case 'Applied':
            const appliedData = data.filter(item => item.Status === 'Applied');
            if (sortOptionname.value === 'ascending') {
                appliedData.sort((a, b) => a.Name.localeCompare(b.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            } else {
                appliedData.sort((a, b) => b.Name.localeCompare(a.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            }
            appliedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(appliedData);
            renderPagination(data)
            break;
        case 'Approved':
            const approvedData = data.filter(item => item.Status === 'Approved');
            if (sortOptionname.value === 'ascending') {
                approvedData.sort((a, b) => a.Name.localeCompare(b.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            } else {
                approvedData.sort((a, b) => b.Name.localeCompare(a.Name));
                sortOptionname.style.background="red"
                activesort('namesort')
            }
            approvedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(approvedData);
            renderPagination(data)
            break;
    }
};

const namesort: HTMLSelectElement | null = document.getElementById('namesort') as HTMLSelectElement | null;
if (namesort) {
    namesort.addEventListener("change", sortusingname);
}

const sortusingphoneno = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    const sortOption = document.getElementById('mobilenumbersort') as HTMLSelectElement;

    switch(optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort((a, b) => parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()));
                sortOption.style.background="red"
                activesort('mobilenumbersort')
            } else {
                data.sort((a, b) => parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()));
                sortOption.style.background="red"
                activesort('mobilenumbersort')
            }
            data.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(data);
            break;
        case 'Applied':
            const appliedData = data.filter(item => item.Status === 'Applied');
            if (sortOption.value=== 'ascending') {
                appliedData.sort((a, b) => parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()));
                sortOption.style.background="red"
                activesort('mobilenumbersort')
            } else {
                appliedData.sort((a, b) => parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()));
                sortOption.style.background="red"
                activesort('mobilenumbersort')
            }
            appliedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(appliedData);
            break;
        case 'Approved':
            const approvedData = data.filter(item => item.Status === 'Approved');
            if (sortOption.value === 'ascending') {
                approvedData.sort((a, b) => parseInt(a.Phone.toString()) - parseInt(b.Phone.toString()));
                sortOption.style.background="red"
                activesort('mobilenumbersort')
            } else {
                approvedData.sort((a, b) => parseInt(b.Phone.toString()) - parseInt(a.Phone.toString()));
                sortOption.style.background="red"
                 activesort('mobilenumbersort')
            }
            approvedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(approvedData);
            break;
    }
    sortOption.style.background="red"
   // activesort()
};

const Phonenosort: HTMLSelectElement | null = document.getElementById('mobilenumbersort') as HTMLSelectElement | null;
if (Phonenosort) {
    Phonenosort.addEventListener("change", sortusingphoneno);
}

const sortusingEmail = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    const sortOption = document.getElementById('emailsort') as HTMLSelectElement;

    switch(optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort((a, b) => a.email.localeCompare(b.email));
                sortOption.style.background="red"
                activesort('emailsort')
            } else {
                data.sort((a, b) => b.email.localeCompare(a.email));
                sortOption.style.background="red"
                activesort('emailsort')
            }
            data.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(data);
            break;
        case 'Applied':
            const appliedData = data.filter(item => item.Status === 'Applied');
            if (sortOption.value === 'ascending') {
                appliedData.sort((a, b) => a.email.localeCompare(b.email));
                sortOption.style.background="red"
                activesort('emailsort')
            } else {
                appliedData.sort((a, b) => b.email.localeCompare(a.email));
                sortOption.style.background="red"
                activesort('emailsort')
            }
            appliedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(appliedData);
            break;
        case 'Approved':
            const approvedData = data.filter(item => item.Status === 'Approved');
            if (sortOption.value === 'ascending') {
                approvedData.sort((a, b) => a.email.localeCompare(b.email));
                sortOption.style.background="red"
                activesort('emailsort')
            } else {
                approvedData.sort((a, b) => b.email.localeCompare(a.email));
                sortOption.style.background="red"
                activesort('emailsort')
            }
            approvedData.forEach((row, i) => row.id = i + 1); // Change the data ID according to index
            renderTable(approvedData);
            break;
    }
};

const emailsort: HTMLSelectElement | null = document.getElementById('emailsort') as HTMLSelectElement | null;
if (emailsort) {
    emailsort.addEventListener("change", sortusingEmail);
}


const sortingSelect: HTMLSelectElement | null = document.getElementById('Sorting') as HTMLSelectElement | null;

if (sortingSelect) {
    sortingSelect.addEventListener("change", sortData);
}

function sortData() {
    const sortOption = (document.getElementById('Sorting') as HTMLSelectElement);
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;

    switch (optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort((a, b) => new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime());
                data.forEach((row, i) => row.id = i + 1);
            } else {
                data.sort((a, b) => new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime());
                data.forEach((row, i) => row.id = i + 1);
            }
            currentPage = 1;
            renderTable(data);
            renderPagination(data);
            break;
        case 'Applied':
            const filterforApplied = data.filter((item) => item.Status === 'Applied');
            if (sortOption.value === 'ascending') {
                filterforApplied.sort((a, b) => new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime());
                filterforApplied.forEach((row, i) => row.id = i + 1);
            } else {
                filterforApplied.sort((a, b) => new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime());
                filterforApplied.forEach((row, i) => row.id = i + 1);
            }
            renderTable(filterforApplied);
            renderPagination(filterforApplied);
            break;
        case 'Approved':
            const filterforApproved = data.filter((item) => item.Status === 'Approved');
            if (sortOption.value === 'ascending') {
                filterforApproved.sort((a, b) => new Date(a.Submitted).getTime() - new Date(b.Submitted).getTime());
                filterforApproved.forEach((row, i) => row.id = i + 1);
            } else {
                filterforApproved.sort((a, b) => new Date(b.Submitted).getTime() - new Date(a.Submitted).getTime());
                filterforApproved.forEach((row, i) => row.id = i + 1);
            }
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
        default:
            break;
    }
    sortOption.style.background="red"
    activesort('Sorting')
}

const sortusingdob = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    const sortOption = document.getElementById('dobsort') as HTMLSelectElement;

    switch(optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort((a, b) => compareDates(a.DOB, b.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            } else {
                data.sort((a, b) => compareDates(b.DOB, a.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            }
            break;
        case 'Applied':
            const appliedData = data.filter(item => item.Status === 'Applied');
            if (sortOption.value === 'ascending') {
                appliedData.sort((a, b) => compareDates(a.DOB, b.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            } else {
                appliedData.sort((a, b) => compareDates(b.DOB, a.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            }
            renderTable(appliedData);
            break;
        case 'Approved':
            const approvedData = data.filter(item => item.Status === 'Approved');
            if (sortOption.value === 'ascending') {
                approvedData.sort((a, b) => compareDates(a.DOB, b.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            } else {
                approvedData.sort((a, b) => compareDates(b.DOB, a.DOB));
                sortOption.style.background="red"
                activesort('dobsort')
            }
            renderTable(approvedData);
            break;
    }
    // Change the data ID according to index
    data.forEach((row, i) => row.id = i + 1);
    renderTable(data);
};

function compareDates(dateA: string, dateB: string): number {
    const partsA = dateA.split("-").map(Number);
    const partsB = dateB.split("-").map(Number);

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

const dobsort: HTMLSelectElement | null = document.getElementById('dobsort') as HTMLSelectElement | null;
if (dobsort) {
    dobsort.addEventListener("change", sortusingdob);
}

const sortusingcity = () => {
    const optionFilterValue = (document.getElementById('optionfilter') as HTMLSelectElement).value;
    const sortOption = document.getElementById('citysort') as HTMLSelectElement;

    switch(optionFilterValue) {
        case 'All':
            if (sortOption.value === 'ascending') {
                data.sort((a, b) => a.Address.localeCompare(b.Address));
                sortOption.style.background="red"
                activesort('citysort')
            } else {
                data.sort((a, b) => b.Address.localeCompare(a.Address));
                sortOption.style.background="red"
                activesort('citysort')
            }
            data.forEach((row, i) => row.id = i + 1);
            renderTable(data);
            break;
        case 'Applied':
            const appliedData = data.filter(item => item.Status === 'Applied');
            if (sortOption.value === 'ascending') {
                appliedData.sort((a, b) => a.Address.localeCompare(b.Address));
                sortOption.style.background="red"
                activesort('citysort')
            } else {
                appliedData.sort((a, b) => b.Address.localeCompare(a.Address));
                sortOption.style.background="red"
                activesort('citysort')
            }
            data.forEach((row, i) => row.id = i + 1);
            renderTable(appliedData);
            break;
        case 'Approved':
            const approvedData = data.filter(item => item.Status === 'Approved');
            if (sortOption.value === 'ascending') {
                approvedData.sort((a, b) => a.Address.localeCompare(b.Address));
                sortOption.style.background="red"
                activesort('citysort')
            } else {
                approvedData.sort((a, b) => b.Address.localeCompare(a.Address));
                sortOption.style.background="red"
                activesort('citysort')
            }
            data.forEach((row, i) => row.id = i + 1);
            renderTable(approvedData);
            break;
    }
};

const citysort: HTMLSelectElement | null = document.getElementById('citysort') as HTMLSelectElement | null;
if (citysort) {
    citysort.addEventListener("change", sortusingcity);
}

// Get all select elements
const activesort = (changedSelectId: string) => {
    // Get all select elements
    const sortOptions = [
        'Sorting',
        'sortingID',
        'mobilenumbersort',
        'namesort',
        'dobsort',
        'citysort',
        'emailsort'
    ].map(id => document.getElementById(id) as HTMLSelectElement);

    // Set the background of the changed select to red and others to white
    sortOptions.forEach(select => {
        if (select.id === changedSelectId) {
            select.style.background = "red";
            select.style.color="white"
        } else {
            select.style.background = "white";
            select.style.color="black"
        }
    });
};                                                                                                                        