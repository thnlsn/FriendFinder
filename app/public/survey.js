console.log("survey.js working")

$("#submit-button").on("click", function(event) {
    event.preventDefault();

    function validateForm() {
        let isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
    };

    if (validateForm()) {
        userData = {
          name: $("#input-name").val(),
          photo: $("#input-pic").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };
        console.log(userData);

        $.post("/api/friends", userData, function(data) {
            console.log('userData from friends post: ' + data);
        });
        
    } else {
        alert("Please fill out every field!");
    };




});




/* let userData = {
    name: '',
    photo: '',
    scores: []
}; */