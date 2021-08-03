function hasil() {
    var jamkerja = document.getElementById("jamkerja").value;
    var upahperjam = document.getElementById("upahperjam").value;
    var anak = document.getElementById("anak").value;
    var gaji = jamkerja*upahperjam*30
    document.getElementById("gaji").value=gaji
    
    var tunjanak = anak*0.10*gaji
    document.getElementById("tunjanak").value=tunjanak;
    var totalgaji = gaji+tunjanak
    document.getElementById("totalgaji").value=totalgaji

}