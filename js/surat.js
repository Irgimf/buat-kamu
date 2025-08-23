$(document).ready(function () {
  // Event untuk buka/tutup amplop
  $(".valentines").click(function () {
    let card = $(".card");
    if (card.css("top") === "0px") {
      card.stop().animate({ top: "-90px" }, "slow");
    } else {
      card.stop().animate({ top: "0px" }, "slow");
    }
  });

  // Event untuk hadiah
  let typingTimeout;
  $("#giftBox")
    .off("click")
    .on("click", function () {
      console.log("🎁 GiftBox diklik");
      $("#messageBox").fadeIn();

      let message =
        "Selamaatt Ulang Tahun Saa!!😍 sedikit pesan untuk orang yang lahirnya samaan tanggal 24 wkwk.. wish u got anything u want, sehat selalu, wish u the best pokoknya.. Makasih buat keseruannya selama ini, even we are stranger in rl, jauh beribu km, beda pulau, beda kepercayaankah?🧐, tetapi entah kenapa tiap main ama kamu tuh terasa deket banget like our strike in GAG yang tb tb gede itu wkwkwk.. senang bisa mendengar suara isa, ketawanya isa, bercandanya isa seakan akan mendengar something special yang telah ditakdirkan untuk membuat alam tersenyum tertawa senang dengan kehadiran isa isa ini.. and yup i hope we still contact each other even nanti kita pasti punya kesibukan tersendiri.. semangattt untuk berprosesnya yaa cmartt girl... buat hadiahnya ku kasih sebuah quest aja ya wkwkwk, kerjain questnya nanti dapet hadiah spesial pake banget.. dan Selamat Kamu mendapatkan sebuah quest spesial 🎉";

      let i = 0;
      let speed = 50;

      clearTimeout(typingTimeout);
      $("#typingText").text("");
      $("#questButton").hide();

      function typeWriter() {
        if (i < message.length) {
          $("#typingText").append(message.charAt(i));
          i++;
          typingTimeout = setTimeout(typeWriter, speed);
        } else {
          $("#questButton").fadeIn();
        }
      }

      typeWriter();
    });

  // Buka modal quest
  $("#questButton")
    .off("click")
    .on("click", function () {
      console.log("📜 Tombol quest diklik");
      $("#questModal").fadeIn(150);

      // Hilangkan pesan singkat & tombol quest setelah dibuka
      $("#messageBox").fadeOut();
      $("#typingText").text("");
      $("#questButton").hide();
    });

  // Tutup modal quest
  $(".close")
    .off("click")
    .on("click", function () {
      $("#questModal").fadeOut(150);
    });

  // Klik luar modal → tutup
  $(window)
    .off("click.quest")
    .on("click.quest", function (e) {
      if ($(e.target).is("#questModal")) $("#questModal").fadeOut(150);
    });

  // Tombol selesai quest
  $("#finishQuest")
    .off("click")
    .on("click", function () {
      console.log("✅ Tombol selesai quest diklik");
      const doneAll = $("#q1").is(":checked") && $("#q2").is(":checked");
      console.log("Status q1:", $("#q1").is(":checked"));
      console.log("Status q2:", $("#q2").is(":checked"));
      if (doneAll) {
        console.log("🎉 Semua quest selesai");
        $("#questModal").fadeOut(150);

        // Tambah pesan quest selesai
        const newBox = $(`
  <div class='extra-message'>
✅ Quest selesai! Kamu layak dapat hadiah spesial 🎁
  Silahkan hubungi tuan muda pembuat surat ini untuk mengklaim hadiah anda ☺️
  </div>
`);

        $("#extraMessages").append(newBox);
      } else {
        console.log("⚠️ Masih ada quest yang belum dicentang");
        if (!$(".quest-warn").length) {
          $(`
            <div class='quest-warn' style='margin-top:8px;color:#b00020;font-family:monospace;'>
              Centang semua quest dulu ya ✨
            </div>
          `).appendTo(".modal-content.quest-style");
        }
      }
    });
});
