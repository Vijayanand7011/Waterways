/* Start - Filters */
function initSearchToolbox(){
  initSelect2();
  //setPlaceholderSelect2();
  hiddenSubmitButton();
  controlOpenMoreOptions();
  initMoreOptions();
}

function initSelect2(){
  $(".dyna_form_data_type_dropdown").find("select").select2();
  $(".dyna_form_data_type_listbox").find("select").select2();
}

function setPlaceholderSelect2(){
  // Scale
  $("#id_related").attr("data-placeholder","Select some options");
  // Type
  $("#id_my_type").attr("data-placeholder","Select some options");  
}

function hiddenSubmitButton(){
  $("#dynafef_actions").addClass("hide");
  $("#dynafef_actions").css("display","block");
}

function controlOpenMoreOptions(){
  //if(bSearch == 1 && (aTopic.length>0 || aArea.length>0 || aElements.length>0 || nYearFrom>0 || nYearTo>0) ){
  if(bSearch == 1){
    $(".more_options").find(".fa-arrow-right").addClass("hide");
    $(".more_options").find(".fa-arrow-down").removeClass("hide");
    $(".more_options").find(".content_fields").removeClass("hide");
    // show submit button 
    $("#dynafef_actions").removeClass("hide");    
    // set Value for select2
    //setValueSelect2();
    //setTimeout(setValueSelect2, 1000);
  }
}

function initMoreOptions(){
  $(".more_options").find("h4").on("click", function(){
    $(this).find(".fa").toggleClass("hide");
    $(this).parent().find(".content_fields").toggleClass("hide");
    // show/hide submit button 
    $("#dynafef_actions").toggleClass("hide");
    // set placeholder
    //setPlaceholderSelect2();
  });
}

function setValueSelect2(){
  // Topics: Climate change
  $('#id_tx_mblnewsevent_where').select2('val', aTopic);
  //$('#id_tx_mblnewsevent_where').select2('placeholder', "select some options");
  // Areas of work: development
  $('#id_tx_mblnewsevent_organizer').select2('val', aArea);
  // Element in the National Adaptation Plan (NAP) process
  $('#id_user_extextender_option_list_2').select2('val', aElements);
}        

/* End - Filters */

function showCategory(){
  // get category
  category = parseInt(getParameterByName('category'));
  

  if(isNaN(category)) {
    category = nCategory;
    //alert(category);
  }  
  // remove link from title 
  $(".toolbox-category-list h4").find("a").contents().unwrap();
  // show category content
  switch(parseInt(category)){
    case 84551:
      $(".toolbox-category-view").find("#c526698").show();
    break;
    case 84552:
      $(".toolbox-category-view").find("#c526730").show();
    break;
    case 84553:
      $(".toolbox-category-view").find("#c526731").show();
    break;
    case 84554:
      $(".toolbox-category-view").find("#c526732").show();
    break;
    case 84555:
      $(".toolbox-category-view").find("#c526733").show();
    break;
  }
}





function showPillarCategory(){
   
  // get category
  category = parseInt(document.getElementById('id_page').value);

   // remove link from title
  $(".toolbox-category-list h4").find("a").contents().unwrap();
  // show category content

  switch(parseInt(category)){
    case 97840:
      $(".toolbox-category-view").find("#c670473").show();
    break;
    case 97841:
      $(".toolbox-category-view").find("#c670508").show();
    break;
    case 97842:
      $(".toolbox-category-view").find("#c670509").show();
    break;
    case 97843:
      $(".toolbox-category-view").find("#c670511").show();
    break;
   
  }
}


// get the value in GET by name
function getParameterByName(name){
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
   //alert(results);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

