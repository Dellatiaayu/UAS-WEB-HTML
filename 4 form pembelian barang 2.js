function hasil() {
    var namabarang = document.getElementById("namabarang").value;
    var jumlah = document.getElementById("jumlah").value;
    var status = document.getElementById("status").value;
    var total = document.getElementById("total").value;

    switch (namabarang) {
        case "monitor":
            var hargamonitor = document.getElementById("harga").value=200000;
            total=hargamonitor*jumlah
            document.getElementById("total").value=total
            break;
        case "printer":
            var hargaprinter = document.getElementById("harga").value=1000000;
            total=hargaprinter*jumlah
            document.getElementById("total").value=total
            break;
        case "laptop":
            var hargalaptop = document.getElementById("harga").value=6000000;
            total=hargalaptop*jumlah
            document.getElementById("total").value=total
            break;
        
    }
    switch (status) {
        case "pelanggan":
            document.getElementById("diskon").value="10%";
            var diskon = document.getElementById("total").value *0.10;
            bayar = document.getElementById("total").value - diskon;
            document.getElementById("bayar").value=bayar;
            break;
        case "bukanpelanggan":
            document.getElementById("diskon").value="0%";
            document.getElementById("bayar").value=total;
            break;

    }
}