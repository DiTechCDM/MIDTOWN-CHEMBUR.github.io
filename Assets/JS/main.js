jQuery('#enquire_now').on('submit', function (e) {
    e.preventDefault();
    jQuery('#alert').html('Please wait...');
    jQuery('#submit').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzSc0D5MZuVc1r2qD-1oav7t05Y_b8YNt1D3kt_LhvtDG7aKKOVE-JOSQL6ll10hqGa/exec',
        type: 'post',
        data: jQuery('#enquire_now').serialize(),
        success: function (result) {
            jQuery('#enquire_now')[0].reset();
            jQuery('#alert').html('Thank You');
            jQuery('#submit').attr('disabled', false);
        }
    });
});

jQuery('#modal_enquiry').on('submit', function (e) {
    e.preventDefault();
    jQuery('#alerts').html('Please wait...');
    jQuery('#submits').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzSc0D5MZuVc1r2qD-1oav7t05Y_b8YNt1D3kt_LhvtDG7aKKOVE-JOSQL6ll10hqGa/exec',
        type: 'post',
        data: jQuery('#modal_enquiry').serialize(),
        success: function (result) {
            jQuery('#modal_enquiry')[0].reset();
            jQuery('#alerts').html('Thank You');
            jQuery('#submits').attr('disabled', false);
        }
    });
});

jQuery('#fixed_enquiry').on('submit', function (e) {
    e.preventDefault();
    jQuery('#alertss').html('Please wait...');
    jQuery('#submitss').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzSc0D5MZuVc1r2qD-1oav7t05Y_b8YNt1D3kt_LhvtDG7aKKOVE-JOSQL6ll10hqGa/exec',
        type: 'post',
        data: jQuery('#fixed_enquiry').serialize(),
        success: function (result) {
            jQuery('#fixed_enquiry')[0].reset();
            jQuery('#alertss').html('Thank You');
            jQuery('#submitss').attr('disabled', false);
        }
    });
});

jQuery('#enquiry_contact').on('submit', function (e) {
    e.preventDefault();
    jQuery('#calert').html('Please wait...');
    jQuery('#csubmit').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzSc0D5MZuVc1r2qD-1oav7t05Y_b8YNt1D3kt_LhvtDG7aKKOVE-JOSQL6ll10hqGa/exec',
        type: 'post',
        data: jQuery('#enquiry_contact').serialize(),
        success: function (result) {
            jQuery('#enquiry_contact')[0].reset();
            jQuery('#calert').html('Thank You');
            jQuery('#csubmit').attr('disabled', false);
        }
    });
});