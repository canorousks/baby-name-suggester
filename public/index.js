var myList = document.getElementById("names");

document.getElementById("first_letter_input").value = "A";
document.getElementById("lucky_count_input").value = "34"

var data = {};
document.querySelector("#getdata").addEventListener("click", function () {

    data.first_letter = document.getElementById("first_letter_input").value;

    data.gender = document.getElementById("gender_input").value
    data.category = document.getElementById("category_input").value
    var  count = parseInt(document.getElementById("lucky_count_input").value)
    var type = document.getElementById("algorithm_input").value
    if (type == 1 || type == 3) data['pythagorean'] = count;
    if (type == 2 || type == 3) data['chaldean'] = count;
    if(data.gender == 'all') data.gender = null

    console.log(data)
    display();

});

function display() {
    // let url = "https://baby-name-suggester-api.herokuapp.com/find"
    let url = "http://localhost:3000/find";
    ;
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

        .then(out => {
            myList.innerHTML = "";
            for (var i = 0; i < out.length; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = '<strong>' + out[i].name + '</strong>';
                myList.appendChild(listItem);
            }
        });
}




