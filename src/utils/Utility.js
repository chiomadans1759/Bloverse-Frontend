class Utility {
  static readFileToData(file, callback) {
    var reader = new FileReader();
    reader.onload = (e) => callback(e.target.result);
    reader.readAsDataURL(file);
  }
}

export default Utility;
