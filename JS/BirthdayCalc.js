let birthday = new Date(1989, 8, 2);
let date_now = new Date();
let diff = new Date(date_now.getTime() - birthday.getTime());

age = (diff.getUTCFullYear() - 1970);

document.getElementById('age').textContent = age + " года";
