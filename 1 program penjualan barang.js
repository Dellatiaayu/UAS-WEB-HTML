function hasil() {
    var harga=document.getElementById("harga").value;
    var jumlah=document.getElementById("jumlah").value;
    var total=harga*jumlah;
    document.getElementById("total").value=total;
    var diskon=0.10;
    if(total>100000){
        bayar=total-(total*diskon);
        document.getElementById("diskon").value="10%";
        document.getElementById("bayar").value=bayar;
        
    }else {
        document.getElementById("diskon").value="0%";
        document.getElementById("bayar").value=bayar;
    }
}
