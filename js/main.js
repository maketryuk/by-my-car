$('#other-field').focus(function() {
  $('#other').prop("checked", true);
});

$(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('lock');
    $('.dropdown').toggleClass('dropdown--active');
    $('.mobile-nav-sidebar__trigger').removeClass('mobile-nav-sidebar__trigger--active');
    $('.hero-sidebar').removeClass('hero-sidebar--active');
  });
});

$(function() {
  $('.dropdown__close').click(function() {
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('lock');
    $('.dropdown').toggleClass('dropdown--active');
  });
});

$(function() {
  $('.mobile-nav-sidebar__trigger').click(function() {
    $('.mobile-nav-sidebar__trigger').toggleClass('mobile-nav-sidebar__trigger--active');
    $('body').toggleClass('lock');
    $('.hero-sidebar').toggleClass('hero-sidebar--active');
  });
});

$(function() {
  $('.hero-sidebar__button').click(function() {
    $('.mobile-nav-sidebar__trigger').toggleClass('mobile-nav-sidebar__trigger--active');
    $('body').toggleClass('lock');
    $('.hero-sidebar').toggleClass('hero-sidebar--active');
  });
});

$(function() {
  $('.hero-sidebar__more').click(function() {
    $('.type-container-more').slideToggle(300);
  })
});