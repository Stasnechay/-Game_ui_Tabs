
$(document).ready(function() {
 
  $('ul.ba-tabs__title').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.ba-tabs').find('div.ba-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  
});


  




