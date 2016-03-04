var $lastElement;

$("path").click(function () {
    if ($lastElement !== undefined) {
        $lastElement.css("fill", "#c0c0c0");
    }
    $lastElement = $(this);
    $(this).css("fill", "red");
    id = this.id.split("-");
    $.getJSON("http://restcountries.eu/rest/v1/alpha?codes=" + id[0], function (data) {
        var items = [];
        console.log(data[0])
        $.each(data[0], function (key, val) {
            items.push('<li class="country-list-item">' + key + ": " + val + '</li>');
        });
        $("#country-info").text("");
        $('<ul/>', {'class': 'country-list',html: items.join('')}).appendTo("#country-info");
    });

});


