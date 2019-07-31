$(function() {
  $("#video").dialog({
    autoOpen: false,
    height: "auto",
    width: "auto",
    position: { my: "center", at: "center", of: window },
    modal: true,
  });

  $("#showHide").click(function() {
    $("#video").dialog("open");
  });
});
