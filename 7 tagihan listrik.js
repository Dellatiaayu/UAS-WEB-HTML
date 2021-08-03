function hasil(){
    var kategori = document.getElementById("kategori").value;
    let jumlah = document.getElementById("jumlahpemakaian").value;
    let pajak;

  switch (kategori) {
    case "sosial":
            // document.getElementById("pajak").innerHTML="0%";
            pajak = 0;
        break;
    case "rumah":
            // document.getElementById("pajak").innerHTML="10%";
            pajak = 0.10;
        break;
    case "industri":
            // document.getElementById("pajak").innerHTML="30%"; 
            pajak = 0.30;      
        break;
  }

  let y=jumlah;
  let tarifSosial = 0;
  let tarifRumah = 0;
  let tarifIndustri = 0;
  let abodemen;
  let subtotal;
  
  let teks = "";
  let jumlahPemakaian = "";
  let hasilAbodemen = "";
  let hasilSubtotal = "";
  for(let i=1; i <= y; i++){
    jumlahPemakaian +=+ i + "<br>";
    if(kategori == "rumah"){
      tarifRumah += 500;
      teks += tarifRumah + "<br>";

      abodemen = 30000;
      subtotal = abodemen+tarifRumah;
      
      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
    }else if(kategori == "sosial"){
      tarifSosial += 300;
      teks += tarifSosial + "<br>";
      
      abodemen = 10000;
      subtotal = abodemen+tarifSosial;

      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
    }else if(kategori == "industri"){
      tarifIndustri += 1000;
      teks += tarifIndustri + "<br>";
      
      abodemen = 50000;
      subtotal = abodemen+tarifIndustri;

      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
     
    }

    document.getElementById("jumlah").innerHTML= jumlahPemakaian;
    document.getElementById("tarif").innerHTML= teks;
    document.getElementById("abodemen").innerHTML= hasilAbodemen;
    document.getElementById("subtotal").innerHTML= hasilSubtotal;
    if(i==i){
      document.getElementById("total").innerHTML= subtotal;  
      let outpajak=pajak*subtotal;
      document.getElementById("pajak").innerHTML= outpajak;
      let bayar = outpajak + subtotal;
      document.getElementById("bayar").innerHTML= bayar;
    }
  }
  
}