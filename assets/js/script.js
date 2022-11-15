var dataBarang = [
    "Mie",
    "Roti",
    "Sabun",
    "Minuman Teh",
    "Roko Sehat",
    "Shampoo",
    "Minyak Goreng",
    "Air Mineral",
    "Chiki",
    "Odol",
    "Sabun Cuci",
    "Pensil",
    "Buku"

];

var hargaEceran = [
    "3500",
    "2000",
    "3000",
    "3500",
    "20000",
    "1000",
    "15000",
    "3000",
    "2000",
    "4000",
    "2000",
    "3000",
    "5000"
    
];

var hargaGrosir = [
    "3000",
    "1450",
    "2450",
    "3000",
    "17600",
    "650",
    "12500",
    "2450",
    "1550",
    "3300",
    "1300",
    "2400",
    "4200"
];


function tampil() {
    var tabelBarang = document.getElementById("tabelBarang");
    tabelBarang.innerHTML = "<tr><th>No</th><th>Nama Barang</th><th>Harga Satuan</th><th>Harga Grosir <br>(Lebih dari 12) </th><th>Action</th></tr>";
    for (let i = 0; i < dataBarang.length && hargaEceran.length && hargaGrosir.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabelBarang.innerHTML += "<tr><td>" + j + "</td><td>" + dataBarang[i] + "</td><td>" + hargaEceran[i] + "</td><td>" + hargaGrosir[i] + "</td><td>" + btnEdit + " " + btnHapus + " " + "</tr>";
    } 
}

function tambah() {
    var input1 = document.querySelector("input[name=namaBarang]");
    dataBarang.push(input1.value);
    tampil();
    input1.value = "";

    var input2 = document.querySelector("input[name=hargaEceran]");
    hargaEceran.push(input2.value);
    tampil();
    input2.value = "";

    var input3 = document.querySelector("input[name=hargaGrosir]");
    hargaGrosir.push(input3.value);
    tampil();
    input3.value = "";
}

function edit(id) {
    var baru1 = prompt("Edit Nama Barang", dataBarang[id]);
    dataBarang[id] = baru1;
    tampil();

    var baru2 = prompt("Edit Harga Eceran", hargaEceran[id]);
    hargaEceran[id] = baru2;
    tampil();

    var baru3 = prompt("Edit Harga Grosir", hargaGrosir[id]);
    hargaGrosir[id] = baru3;
    tampil();
}

function hapus(id) {
    dataBarang.splice(id, 1);
    hargaEceran.splice(id, 1);
    hargaGrosir.splice(id, 1);
    tampil();
}


tampil();
