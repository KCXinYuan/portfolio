var articleView={};

articleView.mainNav = function() {
  $('.main-nav').on('click', '.tab', function (e) {
    $('.tab-content').hide();
    $('#'+ $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.addCategories = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      var options = '<option value="' + val + '">' + val + '</option>';
      if ($('category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(options);
      }
    }
  });
};

articleView.changeCategories = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    }
    else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

articleView.mainNav();
articleView.addCategories();
articleView.changeCategories();
