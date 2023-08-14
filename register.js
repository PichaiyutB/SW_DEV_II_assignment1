function check() {
  var namecom = document.forms["member"]["namecom"].value;
  var numchair = parseInt(document.forms["member"]["numchair"].value);
  var name = document.forms["member"]["name"].value;
  var tel = document.forms["member"]["tel"].value;
  console.log(namecom);
  console.log(typeof numchair);
  console.log(name);
  console.log(tel);
  if (
    name === "" ||
    namecom === "" ||
    tel === "" ||
    numchair < 1 ||
    numchair > 10
  ) {
    event.preventDefault();
    alert(
      "Please fill in all fields correctly.\nชื่อบริษัท,ชื่อผู้ติดต่อ,และเบอร์ผู้ติดต่อ,ห้ามเป็นคำว่าง \nต้องมีการเลือกขนาดบูธ \nจำนวนเก้าอี้ ถ้ามีการใส่ค่ามา ค่าต้องเป็นตัวเลข ระหว่าง 1 ถึง 10 เท่านั้น"
    );
  }
}
