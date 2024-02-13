document.getElementById('bubble').addEventListener('click', function() {
    $('#notificationModal').modal('show'); // Membuka modal saat bubble diklik
});

// Menutup modal saat tombol ditutup atau ikon "X" diklik
document.querySelector('.modal .close').addEventListener('click', function() {
    $('#notificationModal').modal('hide');
});

// Menutup modal saat pengguna mengklik di luar modal
document.querySelector('.modal').addEventListener('click', function(event) {
    if (event.target === this) {
        $('#notificationModal').modal('hide');
    }
});

// Menutup modal saat tombol "Tutup" di dalam modal diklik
document.querySelector('#notificationModal .close-modal-btn').addEventListener('click', function() {
    $('#notificationModal').modal('hide');
});

document.getElementById('letterGif').addEventListener('click', function() {
    $('#nameModal').modal('show');
});

document.querySelector('#nameModal .close-modal-btn').addEventListener('click', function() {
    $('#nameModal').modal('hide');
});

document.getElementById('submitName').addEventListener('click', function() {
    var name = document.getElementById('inputName').value;
    if (name.trim() !== "") {
        // Daftar nama yang diperbolehkan
        var allowedNames = ["utada", "tada", "kholida", "azha", "utada kholida", "utada kholida azha", "kholida azha"]; 

        // Cek apakah nama ada dalam daftar nama yang diperbolehkan
        if (allowedNames.includes(name.toLowerCase())) {
            alert(":D");

            window.location.href = "main.html";
        } else {
            // Jika nama tidak sesuai, tampilkan pesan alert
            alert("Web ini bukan untuk kamu.");
        }
    } else {
        // Jika input kosong, munculkan pesan alert
        alert("Siapa?");
    }
});
