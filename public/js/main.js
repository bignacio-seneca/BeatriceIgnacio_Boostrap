// const company_info = {
//     "company_name": "Some Good Company",
//     "owner": "Amanda Lutz",
//     "address": "Toronto",
//     "phone": "",
//     "website": "",
//     "socials": [
//     {
//     "name": "facebook",
//     "handle": ""
//     },
//     { "name": "twitter", "url": "" },
//     { "name": "instagram", "url": "" }
//     ],
//     "employees": [
//     { "firstName": "Bob", "lastName": "Baker", "id": "5754" },
//     { "firstName": "Susan", "lastName": "Smith", "id": "9764" },
//     { "firstName": "Malcolm", "lastName": "Lutz", "sid": "3456" }
//     ]
//     };

//     console.log('company info: ', company_info);

//     let result = company_info.employees[1].lastName;

//     const lName = document.getElementById('demo');
//     lName.innerHTML = result;

// console.log("hello");


//NAME 
async function getData(){
    try {
        //Fetch and parse the JSON data
        const temp = await fetch("../data/content.json");
        const data = await temp.json();

        //CARD 1

        //display the name in the HTML element with the id="name"
        document.getElementById('overview').innerText = data.overview;
        document.getElementById('name').innerText = data.name;
        document.getElementById('unresolved').innerText = data.card[0].labels[0];
        document.getElementById('23').innerText = data.card[0].data[0];

        document.getElementById('overdue').innerText = data.card[0].labels[1];
        document.getElementById('16').innerText = data.card[0].data[1];

        document.getElementById('open').innerText = data.card[0].labels[2];
        document.getElementById('43').innerText = data.card[0].data[2];

        document.getElementById('onhold').innerText = data.card[0].labels[2];
        document.getElementById('64').innerText = data.card[0].data[3];

        //CARD 2
        document.getElementById('todaystrends').innerText = data.card[1].labels[5];
        document.getElementById('date').innerText = data.card[1].date;
        document.getElementById('today').innerText = data.card[2].day;
        document.getElementById('yesterday').innerText = data.card[1].labels[6];

        document.getElementById('resolved').innerText = data.card[1].labels[0];
        document.getElementById('449').innerText = data.card[1].data[0];

        document.getElementById('received').innerText = data.card[1].labels[1];
        document.getElementById('426').innerText = data.card[1].data[1];

        document.getElementById('average').innerText = data.card[1].labels[2];
        document.getElementById('33m').innerText = data.card[1].data[2];

        document.getElementById('average2').innerText = data.card[1].labels[3];
        document.getElementById('3h').innerText = data.card[1].data[3];

        document.getElementById('resolution').innerText = data.card[1].labels[4];
        document.getElementById('94').innerText = data.card[1].data[4];

        document.getElementById('UnresolvedTickets').innerText = data.card[2].labels[0];
        document.getElementById('Waiting').innerText = data.card[2].labels[1];
        document.getElementById('4238').innerText = data.card[2].data[0];

        document.getElementById('awaiting').innerText = data.card[2].labels[2];
        document.getElementById('1005').innerText = data.card[2].data[1];

        document.getElementById('awaiting').innerText = data.card[2].labels[2];
        document.getElementById('1005').innerText = data.card[2].data[1];

        document.getElementById('awaitingdev').innerText = data.card[2].labels[3];
        document.getElementById('281').innerText = data.card[2].data[2];
        document.getElementById('281b').innerText = data.card[2].data[2];
        document.getElementById('pending').innerText = data.card[2].labels[4];

        document.getElementById('tasks').innerText = data.card[2].labels[8];
        document.getElementById('createnew').innerText = data.card[2].labels[9];
        document.getElementById('todayb').innerText = data.card[2].day;

        document.getElementById('finish').innerText = data.card[2].labels[5];
        document.getElementById('example').innerText = data.card[2].labels[6];
        document.getElementById('update').innerText = data.card[2].labels[7];

        document.getElementById('urgent').innerText = data.card[2].badge[0];
        document.getElementById('new').innerText = data.card[2].badge[1];
        document.getElementById('default').innerText = data.card[2].badge[2];
    }
    catch (error) {
        console.log("error:", error);
    }
}

getData();