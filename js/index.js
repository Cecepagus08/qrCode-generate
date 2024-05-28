
  let qrText = document.getElementById("qrText");
  let qrImg = document.getElementById("qrImg");
  
  function generate(){
     
    
    if(qrText.value == ""){
      console.log("tidak boleh kosong ")
          document.getElementById("btn-download").style.display = "none";
    }else{
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        }
    }
  
   
  

function downloadqrImg(){
            // Ambil elemen gambar
            const img = document.getElementById('qrImg');
            // Buat elemen link
            const link = document.createElement('a');
            // Set atribut href ke src gambar
            link.href = img.src;
            // Set atribut download dengan nama file
            link.download = 'downloaded_image.jpg'; // Ubah nama file sesuai keinginan
            // Simulasikan klik link
            link.click();
        }
        // Mendapatkan elemen img dengan id 'qrImg'
// Mendapatkan elemen img dengan id 'qrImg'



