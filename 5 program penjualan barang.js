function hasil() {
    let usb = document.getElementById("usb").checked;
    let memory = document.getElementById("memory").checked;
    let speaker = document.getElementById("speaker").checked;
    let harga = document.getElementById("harga").value;
    let jumlah = document.getElementById("jumlah").value;
    let total = document.getElementById("total").value;
    let pajak = document.getElementById("pajak").value;
    let bayar = document.getElementById("bayar").value;

    if (usb==true) {
        document.getElementById("harga").value="50000";
        harga=50000;
        harga*jumlah;
    }
    if (memory==true) {
        document.getElementById("harga").value="120000";
        harga=120000;
        harga*jumlah;
    }
    if (speaker==true) {
        document.getElementById("harga").value="40000";
        harga=40000;
        harga*jumlah;
    }
    if (usb ==true && memory==true && speaker==true) {
        document.getElementById("harga").value="210000";
        harga=50000+120000+40000;
        harga*jumlah;
    }
    total=harga*jumlah;
    document.getElementById("total").value=total;
    pajak=total*0.10;
    document.getElementById("pajak").value=pajak;
    bayar=total-pajak;
    document.getElementById("bayar").value=bayar;


}