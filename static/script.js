const data = [
    {
        "name": "Andhra Pradesh",
        "area": 160205,
        "capital": "Amaravati",
        "cm": "Y. S. Jagan Mohan Reddy",
        "governor": "S. Abdul Nazeer",
        "population": 49577103
    },
    {
        "name": "Arunachal Pradesh",
        "area": 83743,
        "capital": "Itanagar",
        "cm": "Pema Khandu",
        "governor": "Kaiwalya Trivikram Parnaik",
        "population": 1383727
    },
    {
        "name": "Assam",
        "area": 78438,
        "capital": "Dispur",
        "cm": "Himanta Biswa Sarma",
        "governor": "Gulab Chand Kataria",
        "population": 31205576
    },
    {
        "name": "Bihar",
        "area": 94163,
        "capital": "Patna",
        "cm": "Nitish Kumar",
        "governor": "Rajendra Arlekar",
        "population": 104099452
    },
    {
        "name": "Chhattisgarh",
        "area": 135192,
        "capital": "Raipur",
        "cm": "Bhupesh Baghel",
        "governor": "Vishwabhusan Harichandan",
        "population": 25545198
    },
    {
        "name": "Goa",
        "area": 3702,
        "capital": "Panaji",
        "cm": "Pramod Sawant",
        "governor": "P. S. Sreedharan Pillai",
        "population": 1458545
    },
    {
        "name": "Gujarat",
        "area": 196024,
        "capital": "Gandhinagar",
        "cm": "Bhupendrabhai Patel",
        "governor": "Acharya Devvrat",
        "population": 60439692
    },
    {
        "name": "Haryana",
        "area": 44212,
        "capital": "Chandigarh",
        "cm": "Manohar Lal Khattar",
        "governor": "Bandaru Dattatreya",
        "population": 25351462
    },
    {
        "name": "Himachal Pradesh",
        "area": 55673,
        "capital": "Shimla",
        "cm": "Sukhvinder Singh Sukhu",
        "governor": "Shiv Pratap Shukla",
        "population": 6864602
    },
    {
        "name": "Jharkhand",
        "area": 79716,
        "capital": "Ranchi",
        "cm": "Hemant Soren",
        "governor": "C. P. Radhakrishnan",
        "population": 32988134
    },
    {
        "name": "Karnataka",
        "area": 191791,
        "capital": "Bengaluru",
        "cm": "Siddaramaiah",
        "governor": "Thawar Chand Gehlot",
        "population": 61095297
    },
    {
        "name": "Kerala",
        "area": 38863,
        "capital": "Thiruvananthapuram",
        "cm": "Pinarayi Vijayan",
        "governor": "Arif Mohammad Khan",
        "population": 33406061
    },
    {
        "name": "Madhya Pradesh",
        "area": 308252,
        "capital": "Bhopal",
        "cm": "Shivraj Singh Chouhan",
        "governor": "Mangubhai C. Patel",
        "population": 72626809
    },
    {
        "name": "Maharashtra",
        "area": 307713,
        "capital": "Mumbai",
        "cm": "Eknath Shinde",
        "governor": "Ramesh Bais",
        "population": 112374333
    },
    {
        "name": "Manipur",
        "area": 22327,
        "capital": "Imphal",
        "cm": "N. Biren Singh",
        "governor": "Anusuiya Uikey",
        "population": 2855794
    },
    {
        "name": "Meghalaya",
        "area": 22429,
        "capital": "Shillong",
        "cm": "Conrad Sangma",
        "governor": "Phagu Chauhan",
        "population": 2966889
    },
    {
        "name": "Mizoram",
        "area": 21081,
        "capital": "Aizawl",
        "cm": "Zoramthanga",
        "governor": "Kambhampati Hari Babu",
        "population": 1097206
    },
    {
        "name": "Nagaland",
        "area": 16579,
        "capital": "Kohima",
        "cm": "Neiphiu Rio",
        "governor": "La. Ganesan",
        "population": 1978502
    },
    {
        "name": "Odisha",
        "area": 155707,
        "capital": "Bhubaneswar",
        "cm": "Naveen Patnaik",
        "governor": "Ganeshi Lal",
        "population": 41974218
    },
    {
        "name": "Punjab",
        "area": 50362,
        "capital": "Chandigarh",
        "cm": "Bhagwant Mann",
        "governor": "Banwarilal Purohit",
        "population": 27743338
    },
    {
        "name": "Rajasthan",
        "area": 342239,
        "capital": "Jaipur",
        "cm": "Ashok Gehlot",
        "governor": "Kalraj Mishra",
        "population": 68548437
    },
    {
        "name": "Sikkim",
        "area": 7096,
        "capital":. "Gangtok",
        "cm": "Prem Singh Tamang",
        "governor": "Lakshman Acharya",
        "population": 610577
    },
    {
        "name": "Tamil Nadu",
        "area": 130058,
        "capital": "Chennai",
        "cm": "M. K. Stalin",
        "governor": "R. N. Ravi",
        "population": 72147030
    },
    {
        "name": "Telangana",
        "area": 112077,
        "capital": "Hyderabad",
        "cm": "K. Chandrashekar Rao",
        "governor": "Tamilisai Soundararajan",
        "population": 35193978
    },
    {
        "name": "Tripura",
        "area": 10491,
        "capital": "Agartala",
        "cm": "Manik Saha",
        "governor": "Satyadev Narayan Arya",
        "population": 3673917
    },
    {
        "name": "Uttar Pradesh",
        "area": 240928,
        "capital": "Lucknow",
        "cm": "Yogi Adityanath",
        "governor": "Anandiben Patel",
        "population": 199812341
    },
    {
        "name": "Uttarakhand",
        "area": 53483,
        "capital": "Dehradun",
        "cm": "Pushkar Singh Dhami",
        "governor": "Gurmit Singh",
        "population": 10086292
    },
    {
        "name": "West Bengal",
        "area": 88752,
        "capital": "Kolkata",
        "cm": "Mamata Banerjee",
        "governor": "C. V. Ananda Bose",
        "population": 91276115
    },
    {
        "name": "Andaman and Nicobar Islands",
        "area": 8249,
        "capital": "Port Blair",
        "cm": "",
        "governor": "D K Joshi",
        "population": 380581
    },
    {
        "name": "Chandigarh",
        "area": 114,
        "capital": "Chandigarh",
        "cm": "",
        "governor": "Banwarilal Purohit",
        "population": 1055450
    },
    {
        "name": "Dadra and Nagar Haveli and Daman and Diu",
        "area": 603,
        "capital": "Daman",
        "cm": "",
        "governor": "Praful Khoda Patel",
        "population": 586956
    },
    {
        "name": "Delhi",
        "area": 1484,
        "capital": "New Delhi",
        "cm": "Arvind Kejriwal",
        "governor": "Vinai Kumar Saxena",
        "population": 16787941
    },
    {
        "name": "Jammu and Kashmir",
        "area": 42241,
        "capital": "Srinagar (Summer), Jammu (Winter)",
        "cm": "",
        "governor": "Manoj Sinha",
        "population": 12267013
    },
    {
        "name": "Ladakh",
        "area": 59146,
        "capital": "Leh",
        "cm": "",
        "governor": "B. D. Mishra",
        "population": 274289
    },
    {
        "name": "Lakshadweep",
        "area": 32,
        "capital": "Kavaratti",
        "cm": "",
        "governor": "Praful Khoda Patel",
        "population": 64473
    },
    {
        "name": "Puducherry",
        "area": 479,
        "capital": "Puducherry",
        "cm": "N. Rangaswamy",
        "governor": "Tamilisai Soundararajan",
        "population": 1247953
    }
];

const table = document.getElementById("statesTable").getElementsByTagName('tbody')[0];

data.forEach(item => {
    let row = table.insertRow();
    let name = row.insertCell(0);
    name.innerHTML = item.name;
    let area = row.insertCell(1);
    area.innerHTML = item.area;
    let capital = row.insertCell(2);
    capital.innerHTML = item.capital;
    let cm = row.insertCell(3);
    cm.innerHTML = item.cm;
    let governor = row.insertCell(4);
    governor.innerHTML = item.governor;
    let population = row.insertCell(5);
    population.innerHTML = item.population;
});

function searchTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("statesTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
