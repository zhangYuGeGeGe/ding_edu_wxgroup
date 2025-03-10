function validateStudentId() {
  const studentId = document.getElementById('studentIdInput').value;
  const validIds = [
    "248803026", "248803027", "248803032", "248803034", "248803047",
    "248803049", "248803054", "248803060", "248803062", "248803069",
    "248803073", "248803105", "248803106", "248803108", "248803109",
    "248803116", "248803126", "248803128", "248803139", "248803140",
    "248803143", "248803148", "248803161", "248803162", "248803164",
    "248803178", "248803179", "248803180", "248803182", "248803206",
    "248803208", "248803210", "248803216", "248803220", "248803226",
    "248803241", "248803244"
  ];
  if (validIds.includes(studentId)) {
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = "your_image.jpg"; /* 请替换为你实际要展示的图片路径 */
    img.width = 300; /* 根据需要调整图片宽度 */
    imageContainer.appendChild(img);
  }
}