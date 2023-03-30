function calculateLoan() {
    let meblegmiqdari = document.getElementById('mebleg').value;
    let meblegfaizi = document.getElementById('faiz').value;
    let meblegmuddeti = document.getElementById('muddet').value;

    let ayliqmeblegfaizi = (meblegfaizi / 100) / 12;
    let odenisinsayi = meblegmuddeti * 12;

    let numerator = ayliqmeblegfaizi * Math.pow(ayliqmeblegfaizi, odenisinsayi);
    let denominator = Math.pow(ayliqmeblegfaizi, odenisinsayi);

    let ayliqPayment = meblegmiqdari * (numerator / denominator);
    let umumiodenis = ayliqPayment * odenisinsayi;
    let umumifaiz = umumiodenis - meblegmiqdari;

    let cavab = document.getElementById('cavab');
    cavab.innerHTML = `
      Ayliq Odenis: ${ayliqPayment.toFixed(2)} AZN<br>
      Umumi Odenis: ${umumiodenis.toFixed(2)} AZN<br>
      Umumi Faiz: ${umumifaiz.toFixed(2)} AZN
    `;
}

