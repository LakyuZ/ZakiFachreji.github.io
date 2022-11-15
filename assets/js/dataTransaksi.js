var dataBarang = [{
    nama_barang: "namaBarang",
    jumlah: "satuan",
    total: 0
  }];
  
  function showBarang() {
    var listBarang = document.getElementById("tabelBarang");
  
    listBarang.innerHTML = "<tr><th>No</th><th>Nama Barang</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";
  
    for (let i = 0; i < dataBarang.length; i++) {
      if (i !== 0) {
        var btnEdit = "<a href='#' class='btn btn-primary btn-sm' onclick='editBarang(" + i + ")'>Edit</a>";
        var btnHapus = "<a href='#' class='btn btn-danger btn-sm' style='margin:5px;' onclick='deleteBarang(" + i + ")'>Hapus</a>";
        j = i + 0;
        listBarang.innerHTML +=
        "<tr><td>" + j + "</td><td>" +  dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + " " + btnHapus + " " + "</tr>";
      } else {
        // listBarang.innerHTML = "Data Belum Di Masukan";
      }
    }
  
    const sum = dataBarang.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
  
    const totalBayar = document.getElementById("total_bayar");
    totalBayar.innerHTML = sum;

  }

  function bayar()
  {
    var bayar = $("#bayar").val()
    var totalBayar = $("#total_bayar").text()
    $("#kembalian").html(parseInt(bayar) - parseInt(totalBayar));
  
  }

  function addBarang() {
    var jenisBarang = document.getElementById("jenis_barang").value;
    var jumlah = document.getElementById("jumlah").value;
  
    const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
    dataBarang.push(newDataBarang);
    showBarang();

  }
  
  function editBarang(id) {
    var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
    const detailJenisBarang = dataBarang[id].nama_barang;
  
    const newDataBarang = cekTotalHarga(
      detailJenisBarang,
      newjumlah || dataBarang[id].jumlah
    );
  
    dataBarang[id] = newDataBarang;
    showBarang();
  }
  
  function deleteBarang(id) {
    dataBarang.splice(id, 1);
    showBarang();
  }

  
  function cekTotalHarga(jenisBarang, jumlah) {
    if (jenisBarang == "Mie" && jumlah >= 12) {
      const total = jumlah * 3000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Mie" && jumlah < 12) {
      const total = jumlah * 3500;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Roti" && jumlah >= 12) {
      const total = jumlah * 1450;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Roti" && jumlah < 12) {
      const total = jumlah * 2000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Sabun" && jumlah >= 12) {
      const total = jumlah * 2450;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Sabun" && jumlah < 12) {
        const total = jumlah * 3000;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Minuman Teh" && jumlah >= 12) {
        const total = jumlah * 3500;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Minuman Teh" && jumlah < 12) {
          const total = jumlah * 3000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Roko Sehat" && jumlah >= 12) {
        const total = jumlah * 17600;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Roko Sehat" && jumlah < 12) {
          const total = jumlah * 20000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Shampoo" && jumlah >= 12) {
        const total = jumlah * 600;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Shampoo" && jumlah < 12) {
          const total = jumlah * 1000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Minyak Goreng" && jumlah >= 12) {
        const total = jumlah * 12500;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Minyak Goreng" && jumlah < 12) {
          const total = jumlah * 15000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Air Mineral" && jumlah >= 12) {
        const total = jumlah * 2450;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Air Mineral" && jumlah < 12) {
          const total = jumlah * 3000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Chiki" && jumlah >= 12) {
        const total = jumlah * 1550;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Chiki" && jumlah < 12) {
          const total = jumlah * 2000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Odol" && jumlah >= 12) {
        const total = jumlah * 3300;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Odol" && jumlah < 12) {
          const total = jumlah * 4000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Sabun Cuci" && jumlah >= 12) {
        const total = jumlah * 1300;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Sabun Cuci" && jumlah < 12) {
          const total = jumlah * 2000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Pensil" && jumlah >= 12) {
        const total = jumlah * 2400;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Pensil" && jumlah < 12) {
          const total = jumlah * 3000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    } else if (jenisBarang == "Buku" && jumlah >= 12) {
        const total = jumlah * 4200;
        return {
          nama_barang: jenisBarang,
          jumlah: jumlah,
          total: total,
        };
    } else if (jenisBarang == "Buku" && jumlah < 12) {
          const total = jumlah * 5000;
          return {
            nama_barang: jenisBarang,
            jumlah: jumlah,
            total: total,
          };
    }
  }
  
  showBarang();