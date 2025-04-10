// Karijera

function imeValidation() {
    var ime = document.getElementById('ime');
    var prezime = document.getElementById('prezime');
    var file = document.getElementById('file');
    if (ime.value == "") {
      alert('Invalid name input');
    }
    if (prezime.value == "") {
      alert('Invalid surname input');
    }
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions =
      /(\.docx|\.pdf)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type');
      fileInput.value = '';
      return false;
    }
    
    alert('Succsesfully sent! Expect our reply!');
  }