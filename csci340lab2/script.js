$(document).ready(function() {
  jQuery.ajaxPrefilter(function(options) {

});

const getCat = () =>{
  $.ajax({
    dataType: "json",
    method: 'GET',
    url: "https://thecatapi.com/",
    success: function(results) {
      $('#setup').text(results["setup"]);
      $('#punchline').text(results["punchline"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}

const getFact = () =>{
  $.ajax({
    dataType: "json",
    method: 'GET',
    Header: {"X-Requested-With":"XMLHttpRequest"},
    url: "https://thecatapi.com/",
    success: function(results) {
            $('#size_controller').attr("src",results[0]);

    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}
  getCat();
  getFact();
$('#gen_cat').click(function () {
  getCat();
});

$('#gen_fact').click(function () {
  getFact();
});

$('#generate').click(function () {
  getCat();
  getFat();
});
});
