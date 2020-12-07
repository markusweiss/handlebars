console.log('http://localhost:1234 works fine....');

document.addEventListener("DOMContentLoaded", function(event) {

    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    var data = {
                    vorname: "Markus",
                    nachname: "Weiß"
                };
    var html    = template(data);
    document.getElementById('form').innerHTML = html;

    console.log("DOM geladen und geparsed");
});
