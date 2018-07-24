(function($){

  // move cover
  var ele_cover = $("#cover");
  ele_cover.appendTo($("#header"));
  // set height of the cover  
  var ele_profile = $("#profile");
  var h_win = $(window).height(), h_nav = $("#main-nav").height(), h_cover = h_win - h_nav, 
  h_profile = ele_profile.height(), padTop_profile = (h_win - h_profile) * 0.4;
  ele_cover.height(h_cover);
  // set margin-top of profile
  ele_profile.css("padding-top", padTop_profile);
  // anystretch
  var cover_url = ele_profile.attr("alt");
  if (cover_url.length)
    ele_cover.anystretch(cover_url);

  $(window).on('resize', function() {
    h_win = $(window).height(), h_cover = h_win - h_nav, padTop_profile = (h_win - h_profile) * 0.4;
    ele_cover.height(h_cover);
    ele_profile.css("padding-top", padTop_profile);
  });
})(jQuery);