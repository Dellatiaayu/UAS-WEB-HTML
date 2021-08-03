function hasil() {
    var namabarang = document.getElementById("namabarang").value;
    var jumlah = document.getElementById("jumlah").value;

    switch (namabarang) {
        case "monitor":
            var hargamonitor = document.getElementById("harga").value=200000;
            document.getElementById("total").value=jumlah*hargamonitor;
            break;
        case "printer":
            var hargaprinter = document.getElementById("harga").value=1000000;
            document.getElementById("total").value=jumlah*hargaprinter;
            break;
        case "laptop":
            var hargalaptop = document.getElementById("harga").value=6000000;
            document.getElementById("total").value=jumlah*hargalaptop;
            break;
        
    }
}