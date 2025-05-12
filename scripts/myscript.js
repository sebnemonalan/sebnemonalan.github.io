document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('transportForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Formun sayfayı yenilemesini engeller

    // Formdan alınan veriler
    const transportType = document.getElementById('transportType').value;
    const departureDate = document.getElementById('departureDate').value;

    // Veriyi localStorage'a kaydet
    localStorage.setItem('transportType', transportType);
    localStorage.setItem('departureDate', departureDate);

    // Sonuç sayfasına yönlendirme
    window.location.href = 'sonuc.html'; // Yönlendirme
  });
});
window.onload = function() {
  // localStorage'tan veriyi al
  const transportType = localStorage.getItem('transportType');
  const departureDate = localStorage.getItem('departureDate');

  // Veriler varsa, result id'sine yazdır
  if (transportType && departureDate) {
    document.getElementById('result').innerHTML = `
      <h3>Rezervasyon Bilgileri</h3>
      <p>Ulaşım Türü: ${transportType}</p>
      <p>Kalkış Tarihi: ${departureDate}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = `
      <h3>Veri bulunamadı!</h3>
      <p>Lütfen formu doğru şekilde doldurun ve tekrar deneyin.</p>
    `;
  }
};
window.onload = function() {
  // localStorage'tan veriyi al
  const transportType = localStorage.getItem('transportType');
  const departureDate = localStorage.getItem('departureDate');

  // Veriler varsa, result id'sine yazdır
  if (transportType && departureDate) {
    document.getElementById('result').innerHTML = `
      <h3>Rezervasyon Bilgileri</h3>
      <p>Ulaşım Türü: ${transportType}</p>
      <p>Kalkış Tarihi: ${departureDate}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = `
      <h3>Veri bulunamadı!</h3>
      <p>Lütfen formu doğru şekilde doldurun ve tekrar deneyin.</p>
    `;
  }
};
