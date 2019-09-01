$(".tablet-viewer-container").hide();

function changeDisplayMode(display) {
  if (display === "phone") {
    $(".tablet-viewer-container").hide();
    $(".phone-viewer-container").show();
  } else {
    $(".tablet-viewer-container").show();
    $(".phone-viewer-container").hide();
  }
}

$("form").submit((event) => {
  event.preventDefault();
  const urlInput = $("#url-input").val();
  const displayMode = $("#display-select").val();

  $("iframe").attr("src", urlInput);
  changeDisplayMode(displayMode);
});
