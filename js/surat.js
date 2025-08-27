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
        "diliat mulu aelahh, udahan yaa ulang tahun ulang tahunannya, quest nya masi nganggur nih dikerjain yaa cmart girll 😚. nangis nih om asep quest🤕 hehe,hmm tpi nyantai ajaa si yaa soalnya ni quest gak terikat ma waktu seperti halnya aku yang masih di masa lalu dan kamu yang suda menjadi masa depan wkwk, klo misalnya takdir juga pasti jadi masa kini jadi keinget red string theory lagi wkwk... whenver you ready i'll be here for giving the special prize. dan Selamat Quest Anda masih bisa Dikerjakan 🥳 ";

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
