fetch("https://api.alquran.cloud/v1/surah")
  .then(response => response.json())
  .then(data => {

    let html = "";

    data.data.forEach(surah => {

      html += `
      <a href="surah.html?id=${surah.number}" class="button">
        ${surah.number}. ${surah.name}
      </a>
      `;

    });

    document.getElementById("surah-list").innerHTML = html;

  })
  .catch(() => {

    document.getElementById("surah-list").innerHTML =
      "<p style='color:red;text-align:center;'>تعذر تحميل السور.</p>";

  });
