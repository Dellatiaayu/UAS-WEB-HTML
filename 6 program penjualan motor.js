function hasil() {
    let merekmotor = document.getElementById("merekmotor").value;

    let rancing = document.getElementById("racing");
    let helm = document.getElementById("helm");
    let jaket = document.getElementById("jaket");
    let tunai = document.getElementById("tunai");
    let kredit = document.getElementById("kredit");

    let total = document.getElementById("total").value;

    let honda= 15000000;
    let yamaha= 14000000;
    let suzuki= 13000000;

    switch (merekmotor) {
        case "honda":
            merekmotor=honda;
            document.getElementById("harga").value=merekmotor;
            break;
        case "yamaha":
            merekmotor=yamaha;
            document.getElementById("harga").value=merekmotor;
            break;
        case "suzuki":
            merekmotor=suzuki;
            document.getElementById("harga").value=merekmotor;
            break;
    }

    if (rancing.checked) {
        let hargaracing=450000+merekmotor;
        document.getElementById("harga").value=hargaracing;
    } else if (helm.checked) {
        let hargahelm=250000+merekmotor;
        document.getElementById("harga").value=hargahelm;
    } else if (jaket.checked) {
        let hargajaket=300000+merekmotor;
        document.getElementById("harga").value=hargajaket;
    } 

    if (rancing.checked && helm.checked && jaket.checked){
        let harga = merekmotor+450000+250000+30000;
        document.getElementById("harga").value=harga;
    } else if (helm.checked && jaket.checked){
        let harga = merekmotor+250000+30000;
        document.getElementById("harga").value=harga;
    } else if (rancing.checked && helm.checked){
        let harga = merekmotor+450000+250000;
        document.getElementById("harga").value=harga;
    } else if (rancing.checked && jaket.checked){
        let harga = merekmotor+450000+30000;
        document.getElementById("harga").value=harga;
    }

    if (tunai.checked) {
        let diskon = 0.10* document.getElementById("harga").value;
        total = document.getElementById("harga").value - diskon;
        document.getElementById("total").value=total;
        document.getElementById("diskon").value="Mendapat diskon 10%";
    } else if (kredit.checked) {
        let hasilharga = parseInt(document.getElementById("harga").value);
        diskon = 0.15;
        let hitung=hasilharga*diskon;
        total=hitung+hasilharga;
        document.getElementById("total").value=total;
        document.getElementById("diskon").value="Mendapat Bunga 15%";

    }


}