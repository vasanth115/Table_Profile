let data = [
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
    {id:17, Name:"venkatesh",Phone:9876673456,email:"venkatesh@ksrce.ac.in",Status:"Approved",Submitted:"2009-02-20 10:20:30",DOB:"29-01-2020",Address:"Madurai",Edit:"15"},
    {id:18, Name:"vicky",Phone:9876784567,email:"vicky@ksrce.ac.in",Status:"Applied",Submitted:"2008-02-20 10:20:30",DOB:"15-08-2003",Address:"Kallakurichi",Edit:"17"},
    {id:19, Name:"david",Phone:9876895678,email:"david@ksrce.ac.in",Status:"Approved",Submitted:"2007-02-20 10:20:30",DOB:"10-08-2002",Address:"Namakkal",Edit:"18"},
    {id:20, Name:"mathan",Phone:9876906789,email:"mathan@ksrce.ac.in",Status:"Applied",Submitted:"2004-02-20 10:20:30",DOB:"15-08-1947",Address:"Comibatore",Edit:"19"}
];



window.onload = () => {
   let username= localStorage.getItem("username")
    let phone=localStorage.getItem("userphone")
    let userdob=localStorage.getItem("userdob")
    let city=localStorage.getItem("city")
    selectedrowid=localStorage.getItem("elementid");
    localStorage.clear()

    //savechanges(username,phone,userdob,city)
}


const searchvalue=document.getElementById('searchInput');
let selectElement = document.getElementById('optionfilter');
let currentPage=1;
let rowsPerPage=5;

let rowid;
let rowName;
let rowPhone
let rowDOB;
let rowAddress;
let selectedrowid;


function renderTable(dataarray) {
  let tablebody = document.querySelector("tbody");
  tablebody.innerHTML = '';

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = dataarray.slice(startIndex, endIndex);

  paginatedData.forEach((row,index)=> {
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
          <td> <button class="deletebtn" id="${row.Name}" onclick="DataDelete(${row.Edit.toString()})">Delete <i class='bx bx-trash'></i> </Button></td> `;
          tr.id=`${row.id}`
        //   tr.onclick = function(){
        //      rowid=this.querySelector("#idnumber")?.textContent;
        //      rowName = this.querySelector("#Name")?.textContent;
        //      console.log(rowName);
        //      const findindexofclick=data.findIndex(row => row.Name === rowName)
        //      selectedrowid=findindexofclick
        //      console.log(selectedrowid);
        //      rowPhone = this.querySelector("#Phone")?.textContent;
        //      rowDOB = this.querySelector("#DOB")?.textContent;
        //      rowAddress = this.querySelector("#Address")?.textContent;
        //     UserProfile(rowName,rowPhone,rowDOB,rowAddress)
        //   }
      tablebody.appendChild(tr);
  })
}



// Function to handle search
searchvalue.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = data.filter(row =>
      row.Name.toLowerCase().includes(searchTerm) ||
      row.email.toLowerCase().includes(searchTerm) ||
      row.Phone.toString().includes(searchTerm) ||
      row.id.toString().includes(searchTerm) ||
      row.Address.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    if(searchTerm==="")
    {
       if(selectElement.value==='All')
       {
        renderTable(data);
        renderPagination(data);
       }
       else if(selectElement.value==='Approved')
       {
        const approveditem=data.filter(row => row.Status==='Approved');
        renderTable(approveditem);
        renderPagination(approveditem);
       }
       else if(selectElement.value==='Applied')
       {
        const applieditem=data.filter(row => row.Status === 'Applied');
        renderTable(applieditem);
        renderPagination(applieditem);
       }
    }
    else
    {
      renderTable(filteredData);
      renderPagination(filteredData);
    }

  });
let total;
  //pagesrender
  function renderPagination(data) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage);
    total=totalPages;
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('span');
        pageLink.textContent = i;
        pageLink.onclick = function() {
            currentPage = i;
            renderTable(data); 
            renderPagination(data);
        };
        paginationDiv.appendChild(pageLink);
    }
}



function DataDelete(Editid) {
    let index = data.findIndex(row => {
        console.log(row.Edit, Editid);
        return row.Edit.toString() === Editid.toString();
    });
    alert(index);
    if (index !== -1) {
        data.splice(index, 1);
        switch (document.getElementById('optionfilter').value) {
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



// filters selection

selectElement.addEventListener('change', selectionProcess);
function selectionProcess(event)
{
  let selectedValue = event.target.value;
  switch (selectedValue) {
    case 'All':
      data.forEach((row, i) => row.id = i + 1);
      currentPage=1
      renderTable(data);
      renderPagination(data);
      break;
      case 'Applied':
        const filtered=data.filter((item)=> item.Status==='Applied')
        filtered.forEach((row, i) => row.id = i + 1);
        currentPage=1
       renderTable(filtered);
       renderPagination(filtered);
        break;
        case 'Approved':
          const filtereditem=data.filter((item)=> item.Status==='Approved')
          filtereditem.forEach((row, i) => row.id = i + 1);
          currentPage=1
         renderTable(filtereditem);
         renderPagination(filtereditem);
          break;
    default:
      break;
  }
}

//initial render
  renderTable(data)
  renderPagination(data)

  // Toggle Modes
const body = document.querySelector("body")
const toggle=document.getElementById("toggle")
toggle.onclick = function() {
  if (body.className === 'light') {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
};


//row per page 
let rowsPerPageSelect = document.getElementById('rowsPerPage');

rowsPerPageSelect.addEventListener('change', (e) => {
    rowsPerPage = parseInt(e.target.value);
    currentPage = 1;
    switch (document.getElementById('optionfilter').value) {
      case 'All':
        renderTable(data);
        renderPagination(data);
        break;
      case 'Applied':
        const filterforApplied=data.filter((item)=> item.Status==='Applied')
        filterforApplied.forEach((row, i) => row.id = i + 1);
          currentPage=1
         renderTable(filterforApplied);
         renderPagination(filterforApplied);
         break;
      case 'Approved':
        const filterforApproved=data.filter((item)=> item.Status==='Approved')
        filterforApproved.forEach((row, i) => row.id = i + 1);
            currentPage=1
           renderTable(filterforApproved);
           renderPagination(filterforApproved);
    }
});



// Sorting 
let sortingSelect = document.getElementById('Sorting');
sortingSelect.addEventListener("change",sortData)

function sortData() {
  const sortOption = document.getElementById('Sorting').value;
  switch (document.getElementById('optionfilter').value) {
    case 'All':
      if (sortOption === 'ascending') {
        data.sort((a, b) => new Date(a.Submitted) - new Date(b.Submitted));
        data.forEach((row, i) => row.id = i + 1);
      } else {
        data.sort((a, b) => new Date(b.Submitted) - new Date(a.Submitted));
        data.forEach((row, i) => row.id = i + 1);
      }
      currentPage = 1;
      renderTable(data);
      renderPagination(data);
      break;
      case 'Applied':
        const filterforApplied=data.filter((item)=> item.Status==='Applied')
        if (sortOption === 'ascending') {
          filterforApplied.sort((a, b) => new Date(a.Submitted) - new Date(b.Submitted));
          filterforApplied.forEach((row, i) => row.id = i + 1);
        } else {
          filterforApplied.sort((a, b) => new Date(b.Submitted) - new Date(a.Submitted));
          filterforApplied.forEach((row, i) => row.id = i + 1); 
        }
        renderTable(filterforApplied);
        renderPagination(filterforApplied);
        break;
      case 'Approved':
        const filterforApproved=data.filter((item)=> item.Status==='Approved')
            if (sortOption === 'ascending') {
              filterforApproved.sort((a, b) => new Date(a.Submitted) - new Date(b.Submitted));
              filterforApproved.forEach((row, i) => row.id = i + 1);
            } else {
              filterforApproved.sort((a, b) => new Date(b.Submitted) - new Date(a.Submitted));
              filterforApproved.forEach((row, i) => row.id = i + 1);  
            }
            renderTable(filterforApproved);
            renderPagination(filterforApproved);
            break;
  }
}


// Page change over by arrows 
// change page to right
function pagerightchange()
{
  switch (document.getElementById('optionfilter').value) {
    case 'All':
      currentPage === total ? alert("No more pages") : currentPage++;
      renderTable(data);
      renderPagination(data);
      break;
    case 'Applied':
      const filterforApplied=data.filter((item)=> item.Status==='Applied')
      filterforApplied.forEach((row, i) => row.id = i + 1);
      currentPage === total ? alert("No more pages") : currentPage++;
       renderTable(filterforApplied);
       renderPagination(filterforApplied);
       break;
    case 'Approved':
      const filterforApproved=data.filter((item)=> item.Status==='Approved')
      filterforApproved.forEach((row, i) => row.id = i + 1);
      currentPage === total ? alert("No more pages") : currentPage++;
         renderTable(filterforApproved);
         renderPagination(filterforApproved);
  }
}


// change page to left
function pageleftchange()
{
  switch (document.getElementById('optionfilter').value) {
    case 'All':
      currentPage === 1 ? alert("No more pages") : currentPage--;
      renderTable(data);
      renderPagination(data);
      break;
    case 'Applied':
      const filterforApplied=data.filter((item)=> item.Status==='Applied')
      filterforApplied.forEach((row, i) => row.id = i + 1);
      currentPage === 1 ? alert("No more pages") : currentPage--;
       renderTable(filterforApplied);
       renderPagination(filterforApplied);
       break;
    case 'Approved':
      const filterforApproved=data.filter((item)=> item.Status==='Approved')
      filterforApproved.forEach((row, i) => row.id = i + 1);
      currentPage === 1 ? alert("No more pages") : currentPage--;
         renderTable(filterforApproved);
         renderPagination(filterforApproved);
  }
}

//page First arrow
function pagefirst()
{
  switch (document.getElementById('optionfilter').value) {
    case 'All':
      currentPage =1
      renderTable(data);
      renderPagination(data);
      break;
    case 'Applied':
      const filterforApplied=data.filter((item)=> item.Status==='Applied')
      filterforApplied.forEach((row, i) => row.id = i + 1);
      currentPage =1
       renderTable(filterforApplied);
       renderPagination(filterforApplied);
       break;
    case 'Approved':
      const filterforApproved=data.filter((item)=> item.Status==='Approved')
      filterforApproved.forEach((row, i) => row.id = i + 1);
      currentPage =1
         renderTable(filterforApproved);
         renderPagination(filterforApproved);
  }
}

//page last arrow
function pagelast()
{
  switch (document.getElementById('optionfilter').value) {
    case 'All':
      currentPage =total
      renderTable(data);
      renderPagination(data);
      break;
    case 'Applied':
      const filterforApplied=data.filter((item)=> item.Status==='Applied')
      filterforApplied.forEach((row, i) => row.id = i + 1);
      currentPage =total
       renderTable(filterforApplied);
       renderPagination(filterforApplied);
       break;
    case 'Approved':
      const filterforApproved=data.filter((item)=> item.Status==='Approved')
      filterforApproved.forEach((row, i) => row.id = i + 1);
      currentPage =total
         renderTable(filterforApproved);
         renderPagination(filterforApproved);
  }
}

function formatDate(dob) {
  const parts = dob.split("-");
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


// Profile Updation
function UserProfile(uname, uphone, udob, uaddress) {
  localStorage.setItem("username",uname);
  localStorage.setItem("userphone",uphone)
  localStorage.setItem("userdob",udob);
  localStorage.setItem("city",uaddress)
  localStorage.setItem("elementid",selectedrowid);
  window.location.href="front.html"
}


function formatDate(dob) {
  const parts = dob.split("-");
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


function savechanges(paramname, paramphone, paramdob, paramaddress) {
  switch (document.getElementById('optionfilter').value) {
      case 'All':
          if (selectedrowid !== undefined && selectedrowid !== -1) {
              data[selectedrowid].Name = paramname;
              data[selectedrowid].Phone = paramphone;
              data[selectedrowid].DOB = formatDate(paramdob);
              data[selectedrowid].Address = paramaddress;
          } 
          renderTable(data);
          renderPagination(data);
          break;

      //Applied
      case 'Applied':
          const filterforApplied = data.filter((item) => item.Status === 'Applied');
          if (selectedrowid !== undefined && selectedrowid !== -1) {
              filterforApplied[selectedrowid].Name = paramname;
              filterforApplied[selectedrowid].Phone = paramphone;
              filterforApplied[selectedrowid].DOB = formatDate(paramdob);
              filterforApplied[selectedrowid].Address = paramaddress;
          } 
          renderTable(filterforApplied);
          renderPagination(filterforApplied);
          break;

      case 'Approved':
          const filterforApproved = data.filter((item) => item.Status === 'Approved');
          if (selectedrowid !== undefined && selectedrowid !== -1) {
              filterforApproved[selectedrowid].Name = paramname;
              filterforApproved[selectedrowid].Phone = paramphone;
              filterforApproved[selectedrowid].DOB = formatDate(paramdob);
              filterforApproved[selectedrowid].Address = paramaddress;
          } 
          renderTable(filterforApproved);
          renderPagination(filterforApproved);
          break;
  }
}
