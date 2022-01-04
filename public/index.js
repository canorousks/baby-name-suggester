var myList = document.getElementById("names");

document.getElementById("first_letter_input").value = "A";
document.getElementById("lucky_count_input").value = "34"

var data = {};
document.querySelector("#getdata").addEventListener("click", function () {

    data.first_letter = document.getElementById("first_letter_input").value;

    data.gender = document.getElementById("gender_input").value
    data.category = document.getElementById("category_input").value
    var count = document.getElementById("lucky_count_input").value
    var type = document.getElementById("algorithm_input").value
    if (type == 1 || type == 3) data['pythagorean'] = count;
    if (type == 2 || type == 3) data['chaldean'] = count;
    if(data.gender = 'all') data.gender = null

    console.log(data)
    display();
});


// data = {
//     "first_letter": "A",
//     "category": "hindu",
//     "gender": "boy",
//     "pythagorean": 15
// };


function display() {

    let url = 'https://limitless-hamlet-38404.herokuapp.com/find';
    fetch(url, {

        // Adding method type
        method: "POST",

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        // Adding body or contents to send
        body: JSON.stringify(data)

        // Adding headers to the request
    })

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(out => {

            // window.location.href = "http://127.0.0.1:5500/names.html";
            // document.querySelector(".frontPage").classList.add("hideClass");

            for (var i = 0; i < out.length; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = '<strong>' + out[i].name + '</strong>';
                myList.appendChild(listItem);
            }
        });
}


// alert(myList[0])
// for(var i = 0;i < myList.length;i++){
//     console.log(myList[i]);
//     // document.write(myList[i]);
// }




