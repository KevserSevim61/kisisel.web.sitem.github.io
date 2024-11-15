/* Daha Fazla Gör Daha Az Gör*/
function myFunction() {
    var dots = document.getElementById("noktalar");
    var moreText = document.getElementById("daha_fazla");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Daha Fazla";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Daha Az";
        moreText.style.display = "inline";
    }
}



/* Saat ve Tarih*/
function saatTarihGuncelle() {
    const now = new Date();
    const tarih = now.toLocaleDateString("tr-TR");
    const saat = now.toLocaleTimeString("tr-TR");

    document.getElementById("saatTarih").innerHTML = `${tarih} - ${saat}`;
}

/*Her saniyede bir saat ve tarihi güncelleyin*/
setInterval(saatTarihGuncelle, 1000);


/* Projelerimi Tarihe Göre Sıralama */
function filterProjects(criteria) {
    const projectsContainer = document.querySelector('.innerprojelerim');
    const projects = Array.from(projectsContainer.children);

    if (criteria === 'recent') {
        /* Tarihe göre sırala (en yeni projeler üstte olacak şekilde)*/
        projects.sort((a, b) => {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        });

        /* Sıralanmış projeleri tekrar ekle*/
        projects.forEach(project => projectsContainer.appendChild(project));
    }
}


   /* İletişim Formu */ 
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const errorElement = document.getElementById("error");

    /*Hata mesajını sıfırla*/
    errorElement.textContent = "";

    /* Alanların boş olup olmadığını kontrol et*/
    if (!name || !email || !subject || !message) {
        errorElement.textContent = "Lütfen tüm alanları doldurun.";
        return false;
    }

    /* E-posta formatını kontrol et*/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Lütfen geçerli bir e-posta adresi girin.";
        return false;
    }

    /* Eğer tüm kontroller geçildiyse*/
    alert("Form başarıyla gönderildi!");
    return true;
}





function openModal(title, imageUrl, description) {
    // Modal elemanını al
    const modal = document.getElementById("lightboxModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    
    // Modal içeriğini güncelle
    modalImage.src = imageUrl;
    modalCaption.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
    
    // Modal'ı göster
    modal.style.display = "block";
}

function closeModal() {
    // Modal'ı gizle
    const modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
}

// Modal dışında bir yere tıklandığında kapatma
window.onclick = function(event) {
    const modal = document.getElementById("lightboxModal");
    if (event.target == modal) {
        closeModal();
    }
}



