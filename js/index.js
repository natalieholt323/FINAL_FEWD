var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
