$(document).ready(function (e) {
    e.preventDefault;
    var brokweAdd = "wss://test.mosquitto.org:8081/mqtt";
    client = mqtt.connect(brokweAdd);
    client.on("connect", function () {
        $(document).on('click', 'button', function () {
            var click = $(this).attr("id")
            $('span').empty();
            $('span').append(click);
            client.subscribe('jane/fan/status')
            client.publish('jane/fan/status', "Turned at " + click + " : " + new Date($.now()))
        })
    })
})