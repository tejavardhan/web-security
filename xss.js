function () {
    var taskIds = [760,1437,758];
    for (var i = 0; i < taskIds.length; i++) {
        var postData = {
            "rating": 7,
            "taskAppraiserId": taskId[i]
        }
        $.ajax({
            type: 'POST',
            url: "http://192.168.1.211:8080/beesheets/employee/appraisals/othersRating/save",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function (data) {
            }
        });
    }
}
alert('hi');
//xssRatings();
