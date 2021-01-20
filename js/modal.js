function populateModal(divName) {
    var myDiv = document.getElementById(divName);
    var myModal = document.getElementById('exampleModal');
    myModal.innerHTML =
        "<div class=\"modal-dialog\" role=\"document\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <div class=\"modal-body\">\n" +
        "\n" + myDiv.outerHTML.replaceAll(divName, 'bis-' + divName) +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>";
}