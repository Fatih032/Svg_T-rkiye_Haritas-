function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );


    $('#marmara').click(function () {
      var secilenrenk = $("#renk").val();
      $(".marmara").css("fill", secilenrenk);
      });

  $('#ege').click(function() {
    var secilenrenk = $("#renk").val();
      $(".ege").css("fill", secilenrenk);
    });

  $('#akdeniz').click(function() {
      var secilenrenk = $("#renk").val();
      $(".akdeniz").css("fill", secilenrenk);
    });

  $('#karadeniz').click(function() {
      var secilenrenk = $("#renk").val();
      $(".karadeniz").css("fill", secilenrenk);
    });

  $('#içanadolu').click(function() {
      var secilenrenk = $("#renk").val();
      $(".içanadolu").css("fill", secilenrenk);
});
  $('#doğuanadolu').click(function() {
      var secilenrenk = $("#renk").val();
      $(".doğuanadolu").css("fill", secilenrenk);
});
  $('#güneydoğu').click(function() {
    var secilenrenk = $("#renk").val();
      $(".güneydoğu").css("fill", secilenrenk);
});
//marmara 11 il
  $('#edirne1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("edirne");
    sample.style.fill = secilenrenk;
});
  $('#istanbul1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("istanbul");
    sample.style.fill = secilenrenk;
});
  $('#kırklareli1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kirklareli");
    sample.style.fill = secilenrenk;
});
  $('#tekirdağ1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("tekirdag");
    sample.style.fill = secilenrenk;
});
  $('#çanakkale1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("canakkale");
    sample.style.fill = secilenrenk;
});
  $('#bursa1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bursa");
    sample.style.fill = secilenrenk;
});
  $('#yalova1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("yalova");
    sample.style.fill = secilenrenk;
});
  $('#balıkesir1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("balikesir");
    sample.style.fill = secilenrenk;
});
  $('#kocaeli1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kocaeli");
    sample.style.fill = secilenrenk;
});
  $('#sakarya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("sakarya");
    sample.style.fill = secilenrenk;
});
  $('#bilecik1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bilecik");
    sample.style.fill = secilenrenk;
});
//ege 8 il
  $('#izmir1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("izmir");
    sample.style.fill = secilenrenk;
});
  $('#afyonkarahisar1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("afyonkarahisar");
    sample.style.fill = secilenrenk;
});
  $('#muğla1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("mugla");
    sample.style.fill = secilenrenk;
});
  $('#aydın1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("aydin");
    sample.style.fill = secilenrenk;
});
  $('#uşak1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("usak");
    sample.style.fill = secilenrenk;
});
  $('#manisa1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("manisa");
    sample.style.fill = secilenrenk;
});
  $('#denizli1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("denizli");
    sample.style.fill = secilenrenk;
});
  $('#kütahya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kutahya");
    sample.style.fill = secilenrenk;
});
  //iç anadolu 13 il
  $('#ankara1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("ankara");
    sample.style.fill = secilenrenk;
});
  $('#sivas1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("sivas");
    sample.style.fill = secilenrenk;
});
  $('#nevşehir1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("nevsehir");
    sample.style.fill = secilenrenk;
});
  $('#kırşehir1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kirsehir");
    sample.style.fill = secilenrenk;
});
  $('#konya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("konya");
    sample.style.fill = secilenrenk;
});
  $('#çankırı1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("cankiri");
    sample.style.fill = secilenrenk;
});
  $('#yozgat1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("yozgat");
    sample.style.fill = secilenrenk;
});
  $('#niğde1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("nigde");
    sample.style.fill = secilenrenk;
});
  $('#karaman1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("karaman");
    sample.style.fill = secilenrenk;
});
  $('#eskişehir1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("eskisehir");
    sample.style.fill = secilenrenk;
});
  $('#aksaray1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("aksaray");
    sample.style.fill = secilenrenk;
});
  $('#kırıkkale1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kirikkale");
    sample.style.fill = secilenrenk;
});
  $('#kayseri1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kayseri");
    sample.style.fill = secilenrenk;
});
 //akdeniz  8 il
  $('#antalya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("antalya");
    sample.style.fill = secilenrenk;
});
  $('#ısparta1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("isparta");
    sample.style.fill = secilenrenk;
});
  $('#burdur1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("burdur");
    sample.style.fill = secilenrenk;
});
  $('#mersin1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("mersin");
    sample.style.fill = secilenrenk;
});
  $('#kahramanmaraş1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kahramanmaras");
    sample.style.fill = secilenrenk;
});
  $('#adana1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("adana");
    sample.style.fill = secilenrenk;
});
  $('#hatay1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("hatay");
    sample.style.fill = secilenrenk;
});
  $('#osmaniye1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("osmaniye");
    sample.style.fill = secilenrenk;
});
  //karadeniz 18 il
  $('#artvin1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("artvin");
    sample.style.fill = secilenrenk;
});
  $('#bartın1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bartin");
    sample.style.fill = secilenrenk;
});
  $('#bayburt1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bayburt1");
    sample.style.fill = secilenrenk;
});
  $('#bolu1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bolu");
    sample.style.fill = secilenrenk;
});
  $('#çorum1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("corum");
    sample.style.fill = secilenrenk;
});
  $('#gümüşhane1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("gumushane");
    sample.style.fill = secilenrenk;
});
  $('#giresun1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("giresun");
    sample.style.fill = secilenrenk;
});
  $('#karabük1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("karabuk");
    sample.style.fill = secilenrenk;
});
  $('#kastamonu1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kastamonu");
    sample.style.fill = secilenrenk;
});
  $('#ordu1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("ordu");
    sample.style.fill = secilenrenk;
});
  $('#rize1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("rize");
    sample.style.fill = secilenrenk;
});
  $('#samsun1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("samsun");
    sample.style.fill = secilenrenk;
});
  $('#sinop1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("sinop");
    sample.style.fill = secilenrenk;
});
  $('#tokat1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("tokat");
    sample.style.fill = secilenrenk;
});
  $('#trabzon1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("trabzon");
    sample.style.fill = secilenrenk;
});
  $('#zonguldak1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("zonguldak");
    sample.style.fill = secilenrenk;
});
  $('#düzce1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("duzce");
    sample.style.fill = secilenrenk;
});
  $('#amasya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("amasya");
    sample.style.fill = secilenrenk;
});
  //doğu anadolu 15 il
  $('#kars1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kars");
    sample.style.fill = secilenrenk;
});
  $('#ağrı1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("agri");
    sample.style.fill = secilenrenk;
});
  $('#bingöl1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bingol");
    sample.style.fill = secilenrenk;
});
  $('#şirnak1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("sirnak");
    sample.style.fill = secilenrenk;
});
  $('#ardahan1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("ardahan");
    sample.style.fill = secilenrenk;
});
  $('#bitlis1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("bitlis");
    sample.style.fill = secilenrenk;
});
  $('#elazığ1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("elazig");
    sample.style.fill = secilenrenk;
});
  $('#erzincan1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("erzincan");
    sample.style.fill = secilenrenk;
});
  $('#erzurum1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("erzurum");
    sample.style.fill = secilenrenk;
});
  $('#hakkari1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("hakkari");
    sample.style.fill = secilenrenk;
});
  $('#ığdır1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("igdir");
    sample.style.fill = secilenrenk;
});
  $('#malatya1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("malatya");
    sample.style.fill = secilenrenk;
});
  $('#muş1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("mus");
    sample.style.fill = secilenrenk;
});
  $('#tunceli1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("tunceli");
    sample.style.fill = secilenrenk;
});
  $('#van1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("van");
    sample.style.fill = secilenrenk;
});
  //güneydoğu 8 il
  $('#diyarbakır1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("diyarbakir");
    sample.style.fill = secilenrenk;
});
  $('#şanlıurfa1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("sanliurfa");
    sample.style.fill = secilenrenk;
});
  $('#batman1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("batman");
    sample.style.fill = secilenrenk;
});
  $('#adıyaman1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("adiyaman");
    sample.style.fill = secilenrenk;
});
  $('#siirt1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("siirt");
    sample.style.fill = secilenrenk;
});
  $('#mardin1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("mardin");
    sample.style.fill = secilenrenk;
});
  $('#kilis1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("kilis");
    sample.style.fill = secilenrenk;
});
  $('#gaziantep1').click(function() {
    var secilenrenk = $("#renk").val();
    var sample = document.getElementById("gaziantep");
    sample.style.fill = secilenrenk;
});


  $(document).ready(function() {
    $("#svg-turkiye-haritasi path").click(function() {
        var secilenrenk = $("#renk").val();
        $(this).css("fill", secilenrenk);
    });
});

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function () {
      info.innerHTML = '';
    }
  );
  
  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');


        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




