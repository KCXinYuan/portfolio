var articleView={};

articleView.mainNav = function() {
  $('.main-nav').on('click', '.tab', function (e) {
    $('.tab-content').hide();
    $('#'+ $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.mainNav();
