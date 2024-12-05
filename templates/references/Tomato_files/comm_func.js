$(document).ready(function(){
  $("#content a[href^='http://www.fao.org'], #content a[href^='/']").not("#content a.freetarget, #content a[href*='.pdf'], #content a[href$='.png'],#content a[href$='.gif'],#content a[href$='.jpg'],#content a[href$='.doc'], #content a[href$='.xls']").attr("target","_top");
  $("#content a[href^='http']").not("#content a[href*='www.fao.org'], #content a[href*='api.linkedin.com']").attr("target","_blank");
  $("#top-banner a[href^='http://www.fao.org'], #top-banner a[href^='/']").not("#top-banner a[href*='.pdf'], #top-banner a[href$='.png'],#top-banner a[href$='.gif'],#top-banner a[href$='.jpg'],#top-banner a[href$='.doc'], #top-banner a[href$='.xls']").attr("target","_top");
  $("#top-banner a[href^='http']").not("#top-banner a[href*='www.fao.org'], #top-banner a[href*='api.linkedin.com']").attr("target","_blank");
  $(".csc-default a[href^='http://www.fao.org'], .csc-default a[href^='/']").not(".csc-default a.freetarget, .csc-default a[href*='.pdf'], .csc-default a[href$='.png'],.csc-default a[href$='.gif'],.csc-default a[href$='.jpg'],.csc-default a[href$='.doc'], .csc-default a[href$='.xls']").attr("target","_top");
  $(".csc-default a[href^='http']").not(".csc-default a[href*='www.fao.org'], .csc-default a[href*='api.linkedin.com']").attr("target","_blank");
  $(".csc-default a[href*='fao-stories/article/']").attr("target","_blank");
  $(".csc-default a[href*='sustainable-development-goals/goals/']").attr("target","_blank");
  $(".csc-default a[href*='www.fao.org/3/']").attr("target","_blank");
  $(".white-table a[href*='www.fao.org/3/']").attr("target","_blank");
  $(".csc-default a[href*='www.fao.org/documents/']").attr("target","_blank");
  $(".white-table a[href*='www.fao.org/documents/']").attr("target","_blank");
  $(".csc-default a[href*='www.fao.org/docrep/']").attr("target","_blank");
  $(".white-table a[href*='www.fao.org/docrep/']").attr("target","_blank");

 $("ul.topmenu li.top-no-active ul.sub-top").hover(function () {
    $(this).parent().toggleClass("topmenu-hover");
 });
 
});
function blurLink(){
 // blurLink fnc
};










