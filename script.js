function initializeAutocomplete() {
    var input = document.getElementById('address-input');
    var options = {
      types: ['geocode'] // Restrict the results to addresses only
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  
  google.maps.event.addDomListener(window, 'load', initializeAutocomplete);