const button = document.getElementById('btn-hitung');

button.addEventListener('click', function () {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    // kondisi awal input kosong
    if(height == '' || weight == '') {
        alert('Please fill the fields !');
        return;
    }

    // BMI = weight/(heigt/100)^2

    height = height/100 //tinggi diubah cm -> m
    let BMI = (weight/ (height * height)) //tinggi sudah dlm satuan m
    BMI = BMI.toFixed(2); // agar angka dibelakang koma hanya ada 2 saat ditampilkan

    document.querySelector('#hsl-angka').innerHTML = BMI;

    // menampilkan pesan indication
    let indication = '';

    if (BMI < 18.5) {
        indication = "Kurang makan";
    }
    if (BMI >= 18.5 && BMI < 25) {
        indication = "Normal";
    }
    if (BMI >= 25 && BMI <30) {
        indication = "Kelebihan makan";
    }
    if (BMI >= 30) {
        indication = "Obesitas gendut";
    }

    document.querySelector('.komen').innerHTML = `Indication:
    <span id="komen">${indication}</span>`

});