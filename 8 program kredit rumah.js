function proses(){
    let harga;
    let uangmuka = .2;
    const typerumah = document.getElementById("rumah").value;
    let lamakredit = parseInt(document.getElementById("kredit").value);
    let angsuran=4000000;

    if(lamakredit==0){
        alert("Masukkan Lama Kredit Terlebih Dahulu");

        return;
    }
    if(typerumah == "mawar"){
        harga=130000000;
    }else if(typerumah == "alamanda"){
        harga=120000000;
    }else{
        alert("Pilih Tipe Rumah Terlebih Dahulu");
        return;
    }

    let hasiluang = uangmuka*harga;
    
    let hasilsisa = hargaRumah-hasiluang;
    let bulan = "";
    let oangsuran = "";
    let total = "";
    let angsur = 0;
    let totalangsur=hasilsisa-angsur;

    let x=kredit;
    for(let i=1; i<=x; i++){
        bulan += i + "<br>";
        oangsuran += angsur + "<br>";
        totalangsur -= 4000000;
        total += totalangsur + "<br>";
    }
    
    document.getElementById("typerumah").innerHTML=tipeRumah;
    document.getElementById("harga").innerHTML=hargaRumah;
    document.getElementById("uangmuka").innerHTML=hasiluang;
    document.getElementById("sisa").innerHTML=hasilsisa;
    document.getElementById("kredit").innerHTML=kredit;
    document.getElementById("angsur").innerHTML=angsur;
    document.getElementById("bulan").innerHTML=bulan;
    document.getElementById("oangsuran").innerHTML=oangsur;
    document.getElementById("osisa").innerHTML=total;
}
