window.sessionUtil = {
  logOut: function (){
    $.ajax({
      url: "/session",
      type: "delete",
      success: function () {
        window.location = "/";
      }
    })
  },
}
