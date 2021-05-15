$(".container").hide();
close();

function display(bool) {
  if (bool) {
    $(".container").fadeIn(1000);
  } else {
    $(".container").fadeOut(500);
  }
}

window.addEventListener('message', function(event) {
  var item = event.data;
  if (item.type === "ui") {
    if (item.status == true) {
      display(true)
    } else {
      display(false)
    }
  }
})

document.onkeyup = function (data) {
  if (data.which == 27) {
    $.post('https://vb-mcdonalds/exit', JSON.stringify({}));
    return
  }
};

$("#donecombomeal").click(function () {
  $(".mcdonalds-preview").fadeOut(500);
  $("#combomeal").fadeIn(500);
  $("#combomealfinal").fadeIn(500);
  var value = parseInt(document.getElementById('number').value, 10);
  document.getElementById('combomealnumber').value = value;
});

$("#botondonepatatas").click(function () {
  $(".mcdonalds-preview2").fadeOut(500);
  $("#patatas").fadeIn(500);
  $("#patatasfinal").fadeIn(500);  
});

$("#botondone2").click(function () {
  $(".mcdonalds-burgers").fadeOut(500);  
});

$("#donebigmac").click(function () {
  $("#mcdonalds-previewbigmac").fadeOut(500);
  $("#bigmac").fadeIn(500);
  $("#bigmacfinal").fadeIn(500);
});

$("#donehappymeal").click(function () {
  $(".mcdonalds-happymeal").fadeOut(500);
  $("#happymeal").fadeIn(500);
  $("#happymealfinal").fadeIn(500);  
});

$("#cerrarmenubigmac").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewbigmac").fadeOut(500);
});

$("#donemcpollo").click(function () {
  $("#mcdonalds-previewmcpollo").fadeOut(500);
  $("#mcpollo").fadeIn(500);
  $("#mcpollofinal").fadeIn(500);
});

$("#cerrarmenumcpollo").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewmcpollo").fadeOut(500);
});

$("#donemcroyaldeluxe").click(function () {
  $("#mcdonalds-previewmcroyaldeluxe").fadeOut(500);
  $("#mcroyaldeluxe").fadeIn(500);
  $("#mcroyaldeluxefinal").fadeIn(500);
});

$("#cerrarmenumcroyaldeluxe").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewmcroyaldeluxe").fadeOut(500);
});

$("#donecbo").click(function () {
  $("#mcdonalds-previewcbo").fadeOut(500);
  $("#cbo").fadeIn(500);
  $("#cbofinal").fadeIn(500);
});

$("#cerrarmenucbo").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewcbo").fadeOut(500);
});

$("#donecuartodelibra").click(function () {
  $("#mcdonalds-previewcuartodelibra").fadeOut(500);
  $("#cuartodelibra").fadeIn(500);
  $("#cuartodelibrafinal").fadeIn(500);
});

$("#cerrarmenucuartodelibra").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewcuartodelibra").fadeOut(500);
});

$("#donegrandmcextreme").click(function () {
  $("#mcdonalds-previewgrandmcextreme").fadeOut(500);
  $("#grandmcextreme").fadeIn(500);
  $("#grandmcextremefinal").fadeIn(500);
});

$("#cerrarmenugrandmcextreme").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewgrandmcextreme").fadeOut(500);
});

$("#donebigchickensupreme").click(function () {
  $("#mcdonalds-previewbigchickensupreme").fadeOut(500);
  $("#bigchickensupreme").fadeIn(500);
  $("#bigchickensupremefinal").fadeIn(500);
});

$("#cerrarmenubigchickensupreme").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewbigchickensupreme").fadeOut(500);
});

$("#donebigcrispybbq").click(function () {
  $("#mcdonalds-previewbigcrispybbq").fadeOut(500);
  $("#bigcrispybbq").fadeIn(500);
  $("#bigcrispybbqfinal").fadeIn(500);
});

$("#cerrarmenubigcrispybbq").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewbigcrispybbq").fadeOut(500);
});

$("#donebigdoublecheese").click(function () {
  $("#mcdonalds-previewbigdoublecheese").fadeOut(500);
  $("#bigdoublecheese").fadeIn(500);
  $("#bigdoublecheesefinal").fadeIn(500);
});

$("#cerrarmenubigdoublecheese").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewbigdoublecheese").fadeOut(500);
});

$("#donehamburgesa").click(function () {
  $("#mcdonalds-previewhamburgesa").fadeOut(500);
  $("#hamburgesa").fadeIn(500);
  $("#hamburgesafinal").fadeIn(500);
});

$("#cerrarmenuhamburgesa").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewhamburgesa").fadeOut(500);  
});

$("#donehamburgesadepollo").click(function () {
  $("#mcdonalds-previewhamburgesadepollo").fadeOut(500);
  $("#hamburgesadepollo").fadeIn(500);
  $("#hamburgesadepollofinal").fadeIn(500);  
});

$("#cerrarmenuhamburgesadepollo").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewhamburgesadepollo").fadeOut(500);  
});

$("#donemcfish").click(function () {
  $("#mcdonalds-previewmcfish").fadeOut(500);
  $("#mcfish").fadeIn(500);
  $("#mcfishfinal").fadeIn(500);  
});

$("#cerrarmenuhamburgesadepollo").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
  $("#mcdonalds-previewmcfish").fadeOut(500);  
});

$("#donecocacola").click(function () {
  $("#mcdonalds-previewcocacola").fadeOut(500);
  $("#cocacola").fadeIn(500);
  $("#cocacolafinal").fadeIn(500);  
});

$("#cerrarmenucocacola").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewcocacola").fadeOut(500);  
});

$("#donefanta").click(function () {
  $("#mcdonalds-previewfanta").fadeOut(500);
  $("#fanta").fadeIn(500);
  $("#fantafinal").fadeIn(500);  
});

$("#cerrarmenufanta").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewfanta").fadeOut(500);  
});

$("#doneaquarius").click(function () {
  $("#mcdonalds-previewaquarius").fadeOut(500);
  $("#aquarius").fadeIn(500);
  $("#aquariusfinal").fadeIn(500);  
});

$("#cerrarmenuaquarius").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewaquarius").fadeOut(500);  
});

$("#donenestea").click(function () {
  $("#mcdonalds-previewnestea").fadeOut(500);
  $("#nestea").fadeIn(500);
  $("#nesteafinal").fadeIn(500);  
});

$("#cerrarmenunestea").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewnestea").fadeOut(500);  
});

$("#donemonsterenergy").click(function () {
  $("#mcdonalds-previewmonsterenergy").fadeOut(500);
  $("#monsterenergy").fadeIn(500);
  $("#monsterenergyfinal").fadeIn(500);  
});

$("#cerrarmenumonsterenergy").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewmonsterenergy").fadeOut(500);  
});

$("#donesprite").click(function () {
  $("#mcdonalds-previewsprite").fadeOut(500);
  $("#sprite").fadeIn(500);
  $("#spritefinal").fadeIn(500);  
});

$("#cerrarmenusprite").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewsprite").fadeOut(500);  
});

$("#botonvolveratras").click(function () {
  $(".mcdonaldsendpedido").fadeOut(500);  
});

$("#doneagua").click(function () {
  $("#mcdonalds-previewagua").fadeOut(500);
  $("#agua").fadeIn(500);
  $("#aguafinal").fadeIn(500);  
});

$("#cerrarmenuagua").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewagua").fadeOut(500);  
});

$("#donecerveza").click(function () {
  $("#mcdonalds-previewcerveza").fadeOut(500);
  $("#cerveza").fadeIn(500);
  $("#cervezafinal").fadeIn(500);  
});

$("#cerrarmenucerveza").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewcerveza").fadeOut(500);  
});

$("#donecolacao").click(function () {
  $("#mcdonalds-previewcolacao").fadeOut(500);
  $("#colacao").fadeIn(500);
  $("#colacaofinal").fadeIn(500);
});

$("#cerrarmenucolacao").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
  $("#mcdonalds-previewcolacao").fadeOut(500);
});

// APARTADO BURGERS (SHOW FUNCTIONS)

$("#openbigmac").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewbigmac").fadeIn(500);
});

$("#openmcpollo").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewmcpollo").fadeIn(500);
});

$("#openmcroyaldeluxe").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewmcroyaldeluxe").fadeIn(500);  
});

$("#opencbo").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewcbo").fadeIn(500);
});

$("#opencuartodelibra").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewcuartodelibra").fadeIn(500);
});

$("#opengrandmcextreme").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewgrandmcextreme").fadeIn(500);
});

$("#openbigchickensupreme").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewbigchickensupreme").fadeIn(500);
});

$("#openbigcrispybbq").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewbigcrispybbq").fadeIn(500);
});

$("#openbigdoublecheese").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewbigdoublecheese").fadeIn(500);
});

$("#openhamburgesa").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewhamburgesa").fadeIn(500);
});

$("#openhamburgesadepollo").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewhamburgesadepollo").fadeIn(500);
});

$("#openmcfish").click(function () {
  $(".mcdonalds-burgers").fadeOut(800);
  $("#mcdonalds-previewmcfish").fadeIn(500);
});

$("#opencocacola").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewcocacola").fadeIn(500);
});

$("#openfanta").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewfanta").fadeIn(500);
});

$("#openaquarius").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewaquarius").fadeIn(500);
});

$("#opennestea").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewnestea").fadeIn(500);
});

$("#openmonsterenergy").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewmonsterenergy").fadeIn(500);
});

$("#opensprite").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewsprite").fadeIn(500);
});

$("#openagua").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewagua").fadeIn(500);
});

$("#opencerveza").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewcerveza").fadeIn(500);
});

$("#opencolacao").click(function () {
  $(".mcdonalds-bebidas").fadeOut(800);
  $("#mcdonalds-previewcolacao").fadeIn(500);
});

//APARTADO COMPRA RAPIDA (HOMEPAGE)

$("#botonbajo1").click(function () {
  $("#mcdonalds-previewbigmac").fadeIn(500);
});

$("#botonbajo2").click(function () {
  $("#mcdonalds-previewmcpollo").fadeIn(500); 
});

$("#botonbajo3").click(function () {
  $("#mcdonalds-previewcuartodelibra").fadeIn(500);
});

// MCDONALDS

$("#botontomaraqui").click(function () {
  $(".vb-mcdonalds").fadeIn(500);
  $(".pantallatupedido").fadeIn(300);
  $(".productospedido").fadeIn(300);
});

$("#botontomarfuera").click(function () {
  $(".vb-mcdonalds").fadeIn(300);
  $(".pantallatupedido").fadeIn(300);
  $(".productospedido").fadeIn(300);
});

$("#boton1").click(function () {
  $(".mcdonalds-preview").fadeIn(500);
});

$("#cerrarmenu").click(function () {
  $(".mcdonalds-preview").fadeOut(500);
});

$("#cerrarmenu2").click(function () {
  $(".mcdonalds-preview2").fadeOut(500);
});

$("#cerrarmenu3").click(function () {
  $(".mcdonalds-bebidas").fadeOut(500);
});

$("#textodolares").click(function () {
  $(".textodolares").fadeIn(100);
});

$("#cerrarmenu4").click(function () {
  $(".mcdonalds-nuggets").fadeOut(500);
});


$("#cerrarmenu5").click(function () {
  $(".mcdonalds-burgers").fadeOut(500);
});

$("#cerrarmenu6").click(function () {
  $(".mcdonalds-happymeal").fadeOut(500);
});

$("#patatasbutton").click(function () {
  $(".mcdonalds-preview2").fadeIn(500);
});

$("#bebidasbutton").click(function () {
  $(".mcdonalds-bebidas").fadeIn(500);
});

$("#nuggetsbutton").click(function () {
  $(".mcdonalds-nuggets").fadeIn(500);
});

$("#happymealbutton").click(function () {
  $(".mcdonalds-happymeal").fadeIn(500);
});

$("#burgers").click(function () {
  $(".mcdonalds-burgers").fadeIn(500);
});

$("#botondonenuggets").click(function () {
  $(".mcdonalds-nuggets").fadeOut(500);
  $("#nuggets").fadeIn(500);
  $("#nuggetsfinal").fadeIn(500);
});

$("#iratras").click(function () {
  $(".mcdonalds-personalizar").fadeOut(500);
});

$("#botonhechopersonalizar").click(function () {
  $(".mcdonalds-personalizar").fadeOut(500);
});

$("#botoncustomizar").click(function () {
  $(".mcdonalds-personalizar").fadeIn(500);
});

// CLOSE COMPLETE UI
function close() {
  $(".vb-mcdonalds").fadeOut(500);
  $(".mcdonalds-preview").fadeOut(500);
  $(".mcdonalds-preview2").fadeOut(500);
  $(".mcdonalds-personalizar").fadeOut(500);
  $(".mcdonalds-bebidas").fadeOut(500);
  $(".mcdonalds-nuggets").fadeOut(500);
  $(".mcdonalds-burgers").fadeOut(500);
  $(".mcdonalds-happymeal").fadeOut(500);
  $(".productospedido").fadeOut(500);
  $(".textodolares").fadeOut(500);
  $(".mcdonaldsendpedido").fadeOut(500);
  $("#combomeal").fadeOut(500);
  $("#bigmac").fadeOut(500);
  $("#mcpollo").fadeOut(500);
  $("#mcroyaldeluxe").fadeOut(500);
  $("#cbo").fadeOut(500);
  $("#cuartodelibra").fadeOut(500);
  $("#grandmcextreme").fadeOut(500);
  $("#bigchickensupreme").fadeOut(500);
  $("#bigcrispybbq").fadeOut(500);
  $("#bigdoublecheese").fadeOut(500);
  $("#hamburgesa").fadeOut(500);
  $("#hamburgesadepollo").fadeOut(500);
  $("#mcfish").fadeOut(500);
  $("#happymeal").fadeOut(500);
  $("#cocacola").fadeOut(500);
  $("#nestea").fadeOut(500);
  $("#agua").fadeOut(500);
  $("#fanta").fadeOut(500);
  $("#monsterenergy").fadeOut(500);
  $("#cerveza").fadeOut(500);
  $("#aquarius").fadeOut(500);
  $("#sprite").fadeOut(500);
  $("#colacao").fadeOut(500);
  $("#nuggets").fadeOut(500);
  $("#patatas").fadeOut(500);
  $("#topfries").fadeOut(500);
  $(".productosfinal").fadeOut(500);
  $("#mcdonalds-previewbigmac").fadeOut(500);
  $("#mcdonalds-previewmcpollo").fadeOut(500);
  $("#mcdonalds-previewmcroyaldeluxe").fadeOut(500);
  $("#mcdonalds-previewcbo").fadeOut(500);
  $("#mcdonalds-previewcuartodelibra").fadeOut(500);
  $("#mcdonalds-previewgrandmcextreme").fadeOut(500);
  $("#mcdonalds-previewbigchickensupreme").fadeOut(500);
  $("#mcdonalds-previewbigcrispybbq").fadeOut(500);
  $("#mcdonalds-previewbigdoublecheese").fadeOut(500);
  $("#mcdonalds-previewhamburgesa").fadeOut(500);
  $("#mcdonalds-previewhamburgesadepollo").fadeOut(500);
  $("#mcdonalds-previewmcfish").fadeOut(500);
  $("#mcdonalds-previewcocacola").fadeOut(500);
  $("#mcdonalds-previewfanta").fadeOut(500);
  $("#mcdonalds-previewaquarius").fadeOut(500);
  $("#mcdonalds-previewnestea").fadeOut(500);
  $("#mcdonalds-previewmonsterenergy").fadeOut(500);
  $("#mcdonalds-previewsprite").fadeOut(500);
  $("#mcdonalds-previewagua").fadeOut(500);
  $("#mcdonalds-previewcerveza").fadeOut(500);
  $("#mcdonalds-previewcolacao").fadeOut(500);
  $(".container").fadeOut(500);
  $.post('https://vb-mcdonalds/exit', JSON.stringify({}));
};

// increment value func:  1
function incrementValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number').value = value;
    sumaTotal();
  }
};
function decrementValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 1) {
    value--;
    document.getElementById('number').value = value;
    sumaTotal();
  }
};
// increment value func:  2
function incrementValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number2').value = value;
    sumaTotal();
  }
};
function decrementValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number2').value = value;
    sumaTotal();
  }
};
// increment value func:  3
function incrementValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number3').value = value;
    sumaTotal();
  }
};
function decrementValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number3').value = value;
    sumaTotal();
  }
}

// increment value func:  4
function incrementValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number4').value = value;
    sumaTotal();
  }
}
function decrementValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number4').value = value;
    sumaTotal();
  }
}

// increment value func:  5
function incrementValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number5').value = value;
    sumaTotal();
  }
}
function decrementValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number5').value = value;
    sumaTotal();
  }
}

// increment value func:  6
function incrementValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number6').value = value;
    sumaTotal();
  }
}
function decrementValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number6').value = value;
    sumaTotal();
  }
}

// increment value func:  7
function incrementValue7() {
  var value = parseInt(document.getElementById('number7').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number7').value = value;
    sumaTotal();
  }
}
function decrementValue7() {
  var value = parseInt(document.getElementById('number7').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number7').value = value;
    sumaTotal();
  }
}

// increment value func:  8
function incrementValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number8').value = value;
    sumaTotal();
  }
}
function decrementValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number8').value = value;
    sumaTotal();
  }
}

// increment value func:  9
function incrementValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('number9').value = value;
    sumaTotal();
  }
}

function decrementValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('number9').value = value;
    document.getElementById('number9').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $(".mcdonalds-nuggets").fadeOut(500);
    $("#nuggets").fadeOut(500);
    document.getElementById('number9').value = value;
    sumaTotal();
  }
}

function combomealincrementValue() {
  var value = parseInt(document.getElementById('combomealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('combomealnumber').value = value;
    document.getElementById('combomealnumberfinal').value = value;
    sumaTotal();
  }
}

function combomealdecrementValue() {
  var value = parseInt(document.getElementById('combomealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('combomealnumber').value = value;
    document.getElementById('combomealnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('combomealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {

    $("#combomeal").fadeOut(500);
    $("#combomealfinal").fadeOut(500);
    document.getElementById('combomealnumber').value = value;
    sumaTotal();
  }
}

function bigmacincrementValue() {
  var value = parseInt(document.getElementById('bigmacnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('bigmacnumber').value = value;
    document.getElementById('bigmacnumber2').value = value;
    document.getElementById('bigmacnumberfinal').value = value;
    sumaTotal();
  }
}

function bigmacdecrementValue() {
  var value = parseInt(document.getElementById('bigmacnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('bigmacnumber').value = value;
    document.getElementById('bigmacnumber2').value = value;
    document.getElementById('bigmacnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('bigmacnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewbigmac").fadeOut(500);
    $("#bigmac").fadeOut(500);
    $("#bigmacfinal").fadeOut(500);
    document.getElementById('bigmacnumber').value = value;
    document.getElementById('bigmacnumberfinal').value = value;
    sumaTotal();
  }
}


function mcpolloincrementValue() {
  var value = parseInt(document.getElementById('mcpollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('mcpollonumber').value = value;
    document.getElementById('mcpollonumber2').value = value;
    document.getElementById('mcpollonumberfinal').value = value;
    sumaTotal();
  }
}

function mcpollodecrementValue() {
  var value = parseInt(document.getElementById('mcpollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('mcpollonumber').value = value;
    document.getElementById('mcpollonumber2').value = value;
    document.getElementById('mcpollonumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('mcpollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewmcpollo").fadeOut(500);
    $("#mcpollo").fadeOut(500);
    $("#mcpollofinal").fadeOut(500);
    document.getElementById('mcpollonumber').value = value;
    document.getElementById('mcpollonumberfinal').value = value;
    sumaTotal();
  }
}

function mcroyaldeluxeincrementValue() {
  var value = parseInt(document.getElementById('mcroyaldeluxenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('mcroyaldeluxenumber').value = value;
    document.getElementById('mcroyaldeluxenumber2').value = value;
    document.getElementById('mcroyaldeluxenumberfinal').value = value;
    sumaTotal();
  }
}

function mcroyaldeluxedecrementValue() {
  var value = parseInt(document.getElementById('mcroyaldeluxenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('mcroyaldeluxenumber').value = value;
    document.getElementById('mcroyaldeluxenumber2').value = value;
    document.getElementById('mcroyaldeluxenumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('mcroyaldeluxenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewmcroyaldeluxe").fadeOut(500);
    $("#mcroyaldeluxe").fadeOut(500);
    $("#mcroyaldeluxefinal").fadeOut(500);
    document.getElementById('mcroyaldeluxenumber').value = value;
    document.getElementById('mcroyaldeluxenumberfinal').value = value;
    sumaTotal();
  }
}

function cboincrementValue() {
  var value = parseInt(document.getElementById('cbonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('cbonumber').value = value;
    document.getElementById('cbonumber2').value = value;
    document.getElementById('cbonumberfinal').value = value;
    sumaTotal();
  }
}

function cbodecrementValue() {
  var value = parseInt(document.getElementById('cbonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('cbonumber').value = value;
    document.getElementById('cbonumber2').value = value;
    document.getElementById('cbonumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('cbonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewcbo").fadeOut(500);
    $("#cbo").fadeOut(500);
    $("#cbofinal").fadeOut(500);
    document.getElementById('cbonumber').value = value;
    document.getElementById('cbonumberfinal').value = value;
    sumaTotal();
  }
}

function cuartodelibraincrementValue() {
  var value = parseInt(document.getElementById('cuartodelibranumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('cuartodelibranumber').value = value;
    document.getElementById('cuartodelibranumber2').value = value;
    document.getElementById('cuartodelibranumberfinal').value = value;
    sumaTotal();
  }
}

function cuartodelibradecrementValue() {
  var value = parseInt(document.getElementById('cuartodelibranumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('cuartodelibranumber').value = value;
    document.getElementById('cuartodelibranumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('cuartodelibranumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewcuartodelibra").fadeOut(500);
    $("#cuartodelibra").fadeOut(500);
    $("#cuartodelibrafinal").fadeOut(500);
    document.getElementById('cuartodelibranumber').value = value;
    document.getElementById('cuartodelibranumber2').value = value;
    document.getElementById('cuartodelibranumberfinal').value = value;
    sumaTotal();
  }
}

function grandmcextremeincrementValue() {
  var value = parseInt(document.getElementById('grandmcextremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('grandmcextremenumber').value = value;
    document.getElementById('grandmcextremenumber2').value = value;
    document.getElementById('grandmcextremenumberfinal').value = value;
    sumaTotal();
  }
}

function grandmcextremedecrementValue() {
  var value = parseInt(document.getElementById('grandmcextremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('grandmcextremenumber').value = value;
    document.getElementById('grandmcextremenumber2').value = value;
    document.getElementById('grandmcextremenumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('grandmcextremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewgrandmcextreme").fadeOut(500);
    $("#grandmcextreme").fadeOut(500);
    $("#grandmcextremefinal").fadeOut(500);
    document.getElementById('grandmcextremenumber').value = value;
    document.getElementById('grandmcextremenumberfinal').value = value;
    sumaTotal();
  }
}


function bigchickensupremeincrementValue() {
  var value = parseInt(document.getElementById('bigchickensupremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('bigchickensupremenumber').value = value;
    document.getElementById('bigchickensupremenumber2').value = value;
    document.getElementById('bigchickensupremenumberfinal').value = value;
    sumaTotal();
  }
}

function bigchickensupremedecrementValue() {
  var value = parseInt(document.getElementById('bigchickensupremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('bigchickensupremenumber').value = value;
    document.getElementById('bigchickensupremenumber2').value = value;
    document.getElementById('bigchickensupremenumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('bigchickensupremenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewbigchickensupreme").fadeOut(500);
    $("#bigchickensupreme").fadeOut(500);
    $("#bigchickensupremefinal").fadeOut(500);
    document.getElementById('bigchickensupremenumber').value = value;
    document.getElementById('bigchickensupremenumberfinal').value = value;
    sumaTotal();
  }
}


function bigcrispybbqincrementValue() {
  var value = parseInt(document.getElementById('bigcrispybbqnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('bigcrispybbqnumber').value = value;
    document.getElementById('bigcrispybbqnumber2').value = value;
    document.getElementById('bigcrispybbqnumberfinal').value = value;
    sumaTotal();
  }
}

function bigcrispybbqdecrementValue() {
  var value = parseInt(document.getElementById('bigcrispybbqnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('bigcrispybbqnumber').value = value;
    document.getElementById('bigcrispybbqnumber2').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('bigcrispybbqnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewbigcrispybbq").fadeOut(500);
    $("#bigcrispybbq").fadeOut(500);
    $("#bigcrispybbqfinal").fadeOut(500);
    document.getElementById('bigcrispybbqnumber').value = value;
    document.getElementById('bigcrispybbqnumberfinal').value = value;
    sumaTotal();
  }
}

function bigdoublecheeseincrementValue() {
  var value = parseInt(document.getElementById('bigdoublecheesenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('bigdoublecheesenumber').value = value;
    document.getElementById('bigdoublecheesenumber2').value = value;
    document.getElementById('bigdoublecheesenumberfinal').value = value;
    sumaTotal();
  }
}

function bigdoublecheesedecrementValue() {
  var value = parseInt(document.getElementById('bigdoublecheesenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('bigdoublecheesenumber').value = value;
    document.getElementById('bigdoublecheesenumber2').value = value;
    document.getElementById('bigdoublecheesenumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('bigdoublecheesenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewbigdoublecheese").fadeOut(500);
    $("#bigdoublecheese").fadeOut(500);
    $("#bigdoublecheesefinal").fadeOut(500);
    document.getElementById('bigdoublecheesenumber').value = value;
    document.getElementById('bigdoublecheesenumberfinal').value = value;
    sumaTotal();
  }
}

function hamburgesaincrementValue() {
  var value = parseInt(document.getElementById('hamburgesanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('hamburgesanumber').value = value;
    document.getElementById('hamburgesanumber2').value = value;
    document.getElementById('hamburgesanumberfinal').value = value;
    sumaTotal();
  }
}

function hamburgesadecrementValue() {
  var value = parseInt(document.getElementById('hamburgesanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('hamburgesanumber').value = value;
    document.getElementById('hamburgesanumber2').value = value;
    document.getElementById('hamburgesanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('hamburgesanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewhamburgesa").fadeOut(500);
    $("#hamburgesa").fadeOut(500);
    $("#hamburgesafinal").fadeOut(500);
    document.getElementById('hamburgesanumber').value = value;
    document.getElementById('hamburgesanumberfinal').value = value;
    sumaTotal();
  }
}


function hamburgesadepolloincrementValue() {
  var value = parseInt(document.getElementById('hamburgesadepollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('hamburgesadepollonumber').value = value;
    document.getElementById('hamburgesadepollonumber2').value = value;
    document.getElementById('hamburgesadepollonumberfinal').value = value;
    sumaTotal();
  }
}

function hamburgesadepollodecrementValue() {
  var value = parseInt(document.getElementById('hamburgesadepollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('hamburgesadepollonumber').value = value;
    document.getElementById('hamburgesadepollonumber2').value = value;
    document.getElementById('hamburgesadepollonumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('hamburgesadepollonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewhamburgesadepollo").fadeOut(500);
    $("#hamburgesadepollo").fadeOut(500);
    $("#hamburgesadepollofinal").fadeOut(500);
    document.getElementById('hamburgesadepollonumber').value = value;
    document.getElementById('hamburgesadepollonumberfinal').value = value;
    sumaTotal();
  }
}

function mcfishincrementValue() {
  var value = parseInt(document.getElementById('mcfishnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('mcfishnumber').value = value;
    document.getElementById('mcfishnumber2').value = value;
    document.getElementById('mcfishnumberfinal').value = value;
    sumaTotal();
  }
}

function mcfishdecrementValue() {
  var value = parseInt(document.getElementById('mcfishnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('mcfishnumber').value = value;
    document.getElementById('mcfishnumber2').value = value;
    document.getElementById('mcfishnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('mcfishnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewmcfish").fadeOut(500);
    $("#mcfish").fadeOut(500);
    $("#mcfishfinal").fadeOut(500);
    document.getElementById('mcfishnumber').value = value;
    document.getElementById('mcfishnumberfinal').value = value;
    sumaTotal();
  }
}


function happymealincrementValue() {
  var value = parseInt(document.getElementById('happymealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('happymealnumber').value = value;
    document.getElementById('happymealnumberfinal').value = value;
    sumaTotal();
  }
}

function happymealdecrementValue() {
  var value = parseInt(document.getElementById('happymealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('happymealnumber').value = value;
    document.getElementById('happymealnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('happymealnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $(".mcdonalds-happymeal").fadeOut(500);
    $("#happymeal").fadeOut(500);
    $("#happymealfinal").fadeOut(500);
    document.getElementById('happymealnumber').value = value;
    document.getElementById('happymealnumberfinal').value = value;
    sumaTotal();
  }
}

function cocacolaincrementValue() {
  var value = parseInt(document.getElementById('cocacolanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('cocacolanumber').value = value;
    document.getElementById('cocacolanumber2').value = value;
    document.getElementById('cocacolanumberfinal').value = value;
    sumaTotal();
  }
}

function cocacoladecrementValue() {
  var value = parseInt(document.getElementById('cocacolanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('cocacolanumber').value = value;
    document.getElementById('cocacolanumber2').value = value;
    document.getElementById('cocacolanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('cocacolanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewcocacola").fadeOut(500);
    $("#cocacola").fadeOut(500);
    $("#cocacolafinal").fadeOut(500);
    document.getElementById('cocacolanumber').value = value;
    document.getElementById('cocacolanumberfinal').value = value;
    sumaTotal();
  }
}

function nesteaincrementValue() {
  var value = parseInt(document.getElementById('nesteanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('nesteanumber').value = value;
    document.getElementById('nesteanumber2').value = value;
    document.getElementById('nesteanumberfinal').value = value;
    sumaTotal();
  }
}

function nesteadecrementValue() {
  var value = parseInt(document.getElementById('nesteanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('nesteanumber').value = value;
    document.getElementById('nesteanumber2').value = value;
    document.getElementById('nesteanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('nesteanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewnestea").fadeOut(500);
    $("#nestea").fadeOut(500);
    $("#nesteafinal").fadeOut(500);
    document.getElementById('nesteanumber').value = value;
    document.getElementById('nesteanumberfinal').value = value;
    sumaTotal();
  }
}

function aguaincrementValue() {
  var value = parseInt(document.getElementById('aguanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('aguanumber').value = value;
    document.getElementById('aguanumber2').value = value;
    document.getElementById('aguanumberfinal').value = value;
    sumaTotal();
  }
}

function aguadecrementValue() {
  var value = parseInt(document.getElementById('aguanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('aguanumber').value = value;
    document.getElementById('aguanumber2').value = value;
    document.getElementById('aguanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('aguanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewagua").fadeOut(500);
    $("#agua").fadeOut(500);
    $("#aguafinal").fadeOut(500);
    document.getElementById('aguanumber').value = value;
    document.getElementById('aguanumberfinal').value = value;
    sumaTotal();
  }
}

function fantaincrementValue() {
  var value = parseInt(document.getElementById('fantanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('fantanumber').value = value;
    document.getElementById('fantanumber2').value = value;
    document.getElementById('fantanumberfinal').value = value;
    sumaTotal();
  }
}

function fantadecrementValue() {
  var value = parseInt(document.getElementById('fantanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('fantanumber').value = value;
    document.getElementById('fantanumber2').value = value;
    document.getElementById('fantanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('fantanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewfanta").fadeOut(500);
    $("#fanta").fadeOut(500);
    $("#fantafinal").fadeOut(500);
    document.getElementById('fantanumber').value = value;
    document.getElementById('fantanumberfinal').value = value;
    sumaTotal();
  }
}

function monsterenergyincrementValue() {
  var value = parseInt(document.getElementById('monsterenergynumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('monsterenergynumber').value = value;
    document.getElementById('monsterenergynumber2').value = value;
    document.getElementById('monsterenergynumberfinal').value = value;
    sumaTotal();
  }
}

function monsterenergydecrementValue() {
  var value = parseInt(document.getElementById('monsterenergynumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('monsterenergynumber').value = value;
    document.getElementById('monsterenergynumber2').value = value;
    document.getElementById('monsterenergynumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('monsterenergynumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewmonsterenergy").fadeOut(500);
    $("#monsterenergy").fadeOut(500);
    $("#monsterenergyfinal").fadeOut(500);
    document.getElementById('monsterenergynumber').value = value;
    document.getElementById('monsterenergynumberfinal').value = value;
    sumaTotal();
  }
}

function cervezaincrementValue() {
  var value = parseInt(document.getElementById('cervezanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('cervezanumber').value = value;
    document.getElementById('cervezanumber2').value = value;
    document.getElementById('cervezanumberfinal').value = value;
    sumaTotal();
  }
}

function cervezadecrementValue() {
  var value = parseInt(document.getElementById('cervezanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('cervezanumber').value = value;
    document.getElementById('cervezanumber2').value = value;
    document.getElementById('cervezanumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('cervezanumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewcerveza").fadeOut(500);
    $("#cerveza").fadeOut(500);
    $("#cervezafinal").fadeOut(500);
    document.getElementById('cervezanumber').value = value;
    document.getElementById('cervezanumberfinal').value = value;
    sumaTotal();
  }
}

function aquariusincrementValue() {
  var value = parseInt(document.getElementById('aquariusnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('aquariusnumber').value = value;
    document.getElementById('aquariusnumber2').value = value;
    document.getElementById('aquariusnumberfinal').value = value;
    sumaTotal();
  }
}

function aquariusdecrementValue() {
  var value = parseInt(document.getElementById('aquariusnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('aquariusnumber').value = value;
    document.getElementById('aquariusnumber2').value = value;
    document.getElementById('aquariusnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('aquariusnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewaquarius").fadeOut(500);
    $("#aquarius").fadeOut(500);
    $("#aquariusfinal").fadeOut(500);
    document.getElementById('aquariusnumber').value = value;
    document.getElementById('aquariusnumberfinal').value = value;
    sumaTotal();
  }
}

function spriteincrementValue() {
  var value = parseInt(document.getElementById('spritenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('spritenumber').value = value;
    document.getElementById('spritenumber2').value = value;
    document.getElementById('spritenumberfinal').value = value;
    sumaTotal();
  }
}

function spritedecrementValue() {
  var value = parseInt(document.getElementById('spritenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('spritenumber').value = value;
    document.getElementById('spritenumber2').value = value;
    document.getElementById('spritenumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('spritenumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewsprite").fadeOut(500);
    $("#sprite").fadeOut(500);
    $("#spritefinal").fadeOut(500);
    document.getElementById('spritenumber').value = value;
    document.getElementById('spritenumberfinal').value = value;
    sumaTotal();
  }
}

function colacaoincrementValue() {
  var value = parseInt(document.getElementById('colacaonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('colacaonumber').value = value;

    document.getElementById('colacaonumber2').value = value;
    document.getElementById('colacaonumberfinal').value = value;
    sumaTotal();
  }
}

function colacaodecrementValue() {
  var value = parseInt(document.getElementById('colacaonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('colacaonumber').value = value;
    document.getElementById('colacaonumber2').value = value;
    document.getElementById('colacaonumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('colacaonumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $("#mcdonalds-previewcolacao").fadeOut(500);
    $("#colacao").fadeOut(500);
    $("#colacaofinal").fadeOut(500);
    document.getElementById('colacaonumber').value = value;
    document.getElementById('colacaonumberfinal').value = value;
    sumaTotal();
  }
}

function nuggetsincrementValue() {
  var value = parseInt(document.getElementById('nuggetsnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('nuggetsnumber').value = value;
    document.getElementById('nuggetsnumber2').value = value;
    document.getElementById('nuggetsnumberfinal').value = value;
    sumaTotal();
  }
}

function nuggetsdecrementValue() {
  var value = parseInt(document.getElementById('nuggetsnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('nuggetsnumber').value = value;
    document.getElementById('nuggetsnumber2').value = value;
    document.getElementById('nuggetsnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('nuggetsnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $(".mcdonalds-nuggets").fadeOut(500);
    $("#nuggets").fadeOut(500);
    $("#nuggetsfinal").fadeOut(500);
    document.getElementById('nuggetsnumber').value = value;
    document.getElementById('nuggetsnumberfinal').value = value;
    sumaTotal();
  }
}

function patatasincrementValue() {
  var value = parseInt(document.getElementById('patatasnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('patatasnumber').value = value;
    document.getElementById('patatasnumber2').value = value;
    document.getElementById('patatasnumberfinal').value = value;
    sumaTotal();
  }
}

function patatasdecrementValue() {
  var value = parseInt(document.getElementById('patatasnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('patatasnumber').value = value;
    document.getElementById('patatasnumber2').value = value;
    document.getElementById('patatasnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('patatasnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $(".mcdonalds-preview2").fadeOut(500);
    $("#patatas").fadeOut(500);
    $("#patatasfinal").fadeOut(500);
    document.getElementById('patatasnumber').value = value;
    document.getElementById('patatasnumberfinal').value = value;
    sumaTotal();
  }
}


function topfriesincrementValue() {
  var value = parseInt(document.getElementById('topfriesnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    document.getElementById('topfriesnumber').value = value;
    document.getElementById('topfriesnumberfinal').value = value;
    sumaTotal();
  }
}

function topfriesdecrementValue() {
  var value = parseInt(document.getElementById('topfriesnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
    document.getElementById('topfriesnumber').value = value;
    document.getElementById('topfriesnumberfinal').value = value;
    sumaTotal();
  }
  var value = parseInt(document.getElementById('topfriesnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 0) {
    $(".mcdonalds-preview2").fadeOut(500);
    $("#topfries").fadeOut(500);
    $("#topfriesfinal").fadeOut(500);
    document.getElementById('topfriesnumber').value = value;
    document.getElementById('topfriesnumberfinal').value = value;
    sumaTotal();
  }
}

function cambiarcolorboton1() {
  document.getElementById('botonhappy1').style.backgroundColor = ('red');
  document.getElementById('botonhappy4').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy7').style.backgroundColor = ('transparent');
}

function cambiarcolorboton2() {
  document.getElementById('botonhappy2').style.backgroundColor = ('red');
  document.getElementById('botonhappy5').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy8').style.backgroundColor = ('transparent');
}

function cambiarcolorboton3() {
  document.getElementById('botonhappy3').style.backgroundColor = ('red');
  document.getElementById('botonhappy6').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy9').style.backgroundColor = ('transparent');
}

function cambiarcolorboton4() {
  document.getElementById('botonhappy4').style.backgroundColor = ('red');
  document.getElementById('botonhappy1').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy7').style.backgroundColor = ('transparent');
}

function cambiarcolorboton5() {
  document.getElementById('botonhappy5').style.backgroundColor = ('red');
  document.getElementById('botonhappy2').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy8').style.backgroundColor = ('transparent');
}

function cambiarcolorboton6() {
  document.getElementById('botonhappy6').style.backgroundColor = ('red');
  document.getElementById('botonhappy3').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy9').style.backgroundColor = ('transparent');
}

function cambiarcolorboton7() {
  document.getElementById('botonhappy7').style.backgroundColor = ('red');
  document.getElementById('botonhappy1').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy4').style.backgroundColor = ('transparent');
}

function cambiarcolorboton8() {
  document.getElementById('botonhappy8').style.backgroundColor = ('red');
  document.getElementById('botonhappy2').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy5').style.backgroundColor = ('transparent');
}

function cambiarcolorboton9() {
  document.getElementById('botonhappy9').style.backgroundColor = ('red');
  document.getElementById('botonhappy3').style.backgroundColor = ('transparent');
  document.getElementById('botonhappy6').style.backgroundColor = ('transparent');
}

function sumaTotal() { //hace la suma del total.
  var total = 0.0; //total de la compra 
  if (!($(combomeal).css("display") == "none")) { 
    var preciocombomeal = Number('15.79');
    var cantidadcombomeal = parseInt(document.getElementById('combomealnumber').value, 10); 
    total = preciocombomeal * cantidadcombomeal + total; 
  }
  if (!($(bigmac).css("display") == "none")) { 
    var preciobigmac = Number('10.99');
    var cantidadbigmac = parseInt(document.getElementById('bigmacnumber').value, 10); 
    total = preciobigmac * cantidadbigmac + total; 
  }
  if (!($(mcpollo).css("display") == "none")) {
    var preciomcpollo = Number('12.99');
    var cantidadmcpollo = parseInt(document.getElementById('mcpollonumber').value, 10); 
    total = preciomcpollo * cantidadmcpollo + total; 
  }
  if (!($(mcroyaldeluxe).css("display") == "none")) {
    var preciomcroyaldeluxe = Number('9.99');
    var cantidadmcroyaldeluxe = parseInt(document.getElementById('mcroyaldeluxenumber').value, 10); 
    total = preciomcroyaldeluxe * cantidadmcroyaldeluxe + total; 
  }
  if (!($(cbo).css("display") == "none")) {
    var preciocbo = Number('11.50');
    var cantidadcbo = parseInt(document.getElementById('cbonumber').value, 10); 
    total = preciocbo * cantidadcbo + total; 
  }
  if (!($(cuartodelibra).css("display") == "none")) {
    var preciocuartodelibra = Number('9.50');
    var cantidadcuartodelibra = parseInt(document.getElementById('cuartodelibranumber').value, 10); 
    total = preciocuartodelibra * cantidadcuartodelibra + total; 
  }
  if (!($(grandmcextreme).css("display") == "none")) {
    var preciograndmcextreme = Number('9.50');
    var cantidadgrandmcextreme = parseInt(document.getElementById('grandmcextremenumber').value, 10); 
    total = preciograndmcextreme * cantidadgrandmcextreme + total; 
  }
  if (!($(bigchickensupreme).css("display") == "none")) {
    var preciobigchickensupreme = Number('14.50');
    var cantidadbigchickensupreme = parseInt(document.getElementById('bigchickensupremenumber').value, 10); 
    total = preciobigchickensupreme * cantidadbigchickensupreme + total; 
  }
  if (!($(bigcrispybbq).css("display") == "none")) {
    var preciobigcrispybbq = Number('11.45');
    var cantidadbigcrispybbq = parseInt(document.getElementById('bigcrispybbqnumber').value, 10); 
    total = preciobigcrispybbq * cantidadbigcrispybbq + total; 
  }
  if (!($(bigdoublecheese).css("display") == "none")) {
    var preciobigdoublecheese = Number('10.50');
    var cantidadbigdoublecheese = parseInt(document.getElementById('bigdoublecheesenumber').value, 10); 
    total = preciobigdoublecheese * cantidadbigdoublecheese + total; 
  }
  if (!($(hamburgesa).css("display") == "none")) {
    var preciohamburgesa = Number('7.50');
    var cantidadhamburgesa = parseInt(document.getElementById('hamburgesanumber').value, 10); 
    total = preciohamburgesa * cantidadhamburgesa + total; 
  }
  if (!($(hamburgesadepollo).css("display") == "none")) {
    var preciohamburgesadepollo = Number('8.50');
    var cantidadhamburgesadepollo = parseInt(document.getElementById('hamburgesadepollonumber').value, 10); 
    total = preciohamburgesadepollo * cantidadhamburgesadepollo + total; 
  }
  if (!($(mcfish).css("display") == "none")) {
    var preciomcfish = Number('6.99');
    var cantidadmcfish = parseInt(document.getElementById('mcfishnumber').value, 10); 
    total = preciomcfish * cantidadmcfish + total; 
  }
  if (!($(happymeal).css("display") == "none")) {
    var preciohappymeal = Number('15.99');
    var cantidadhappymeal = parseInt(document.getElementById('happymealnumber').value, 10); 
    total = preciohappymeal * cantidadhappymeal + total; 
  }
  if (!($(cocacola).css("display") == "none")) {
    var preciococacola = Number('4.99');
    var cantidadcocacola = parseInt(document.getElementById('cocacolanumber').value, 10); 
    total = preciococacola * cantidadcocacola + total; 
  }
  if (!($(nestea).css("display") == "none")) {
    var precionestea = Number('5.99');
    var cantidadnestea = parseInt(document.getElementById('nesteanumber').value, 10); 
    total = precionestea * cantidadnestea + total; 
  }
  if (!($(agua).css("display") == "none")) {
    var precioagua = Number('3.99');
    var cantidadagua = parseInt(document.getElementById('aguanumber').value, 10); 
    total = precioagua * cantidadagua + total; 
  }
  if (!($(fanta).css("display") == "none")) {
    var preciofanta = Number('4.99');
    var cantidadfanta = parseInt(document.getElementById('fantanumber').value, 10); 
    total = preciofanta * cantidadfanta + total; 
  }
  if (!($(monsterenergy).css("display") == "none")) {
    var preciomonsterenergy = Number('8.99');
    var cantidadmonsterenergy = parseInt(document.getElementById('monsterenergynumber').value, 10); 
    total = preciomonsterenergy * cantidadmonsterenergy + total; 
  }
  if (!($(cerveza).css("display") == "none")) {
    var preciocerveza = Number('10.99');
    var cantidadcerveza = parseInt(document.getElementById('cervezanumber').value, 10); 
    total = preciocerveza * cantidadcerveza + total; 
  }
  if (!($(aquarius).css("display") == "none")) {
    var precioaquarius = Number('7.99');
    var cantidadaquarius = parseInt(document.getElementById('aquariusnumber').value, 10); 
    total = precioaquarius * cantidadaquarius + total; 
  }
  if (!($(sprite).css("display") == "none")) {
    var preciosprite = Number('9.99');
    var cantidadsprite = parseInt(document.getElementById('spritenumber').value, 10); 
    total = preciosprite * cantidadsprite + total; 
  }
  if (!($(colacao).css("display") == "none")) {
    var preciocolacao = Number('12.99');
    var cantidadcolacao = parseInt(document.getElementById('colacaonumber').value, 10); 
    total = preciocolacao * cantidadcolacao + total; 
  }
  if (!($(nuggets).css("display") == "none")) {
    var precionuggets = Number('10.99');
    var cantidadnuggets = parseInt(document.getElementById('nuggetsnumber').value, 10); 
    total = precionuggets * cantidadnuggets + total; 
  }
  if (!($(patatas).css("display") == "none")) {
    var preciopatatas = Number('9.99');
    var cantidadpatatas = parseInt(document.getElementById('patatasnumber').value, 10); 
    total = preciopatatas * cantidadpatatas + total; 
  }
  if (!($(topfries).css("display") == "none")) {
    var preciotopfries = Number('14.99');
    var cantidadtopfries = parseInt(document.getElementById('topfriesnumber').value, 10); 
    total = preciotopfries * cantidadtopfries + total; 
  }
  document.getElementById("totalpedido").innerHTML = "$";
  if (total.toString().length >= 6) {
    document.getElementById("totalpedido").innerHTML += Math.trunc(total);
  } else {
    document.getElementById("totalpedido").innerHTML += total;
  }
  console.log("Order Total:", total, "$");
}

function menufinalizarpedido() {
  $(".mcdonaldsendpedido").fadeIn(500);
  sumaTotal();
}

function finalizarpedido() {
  var total = 0.0; // Total Sum
  if (!($(combomeal).css("display") == "none")) { 
    var cantidadcombomeal = parseInt(document.getElementById('combomealnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "combomeal",
      price: 16,
      amount: cantidadcombomeal
    }))
  }
  if (!($(bigmac).css("display") == "none")) { 
    var cantidadbigmac = parseInt(document.getElementById('bigmacnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "bigmac",
      price: 11,
      amount: cantidadbigmac
    }))
  }
  if (!($(mcpollo).css("display") == "none")) {
    var cantidadmcpollo = parseInt(document.getElementById('mcpollonumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "mcpollo",
      price: 13,
      amount: cantidadmcpollo
    }))
  }
  if (!($(mcroyaldeluxe).css("display") == "none")) {
    var cantidadmcroyaldeluxe = parseInt(document.getElementById('mcroyaldeluxenumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "mcroyaldeluxe",
      price: 10,
      amount: cantidadmcroyaldeluxe
    }))
  }
  if (!($(cbo).css("display") == "none")) {
    var cantidadcbo = parseInt(document.getElementById('cbonumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "cbo",
      price: 12,
      amount: cantidadcbo
    }))
  }
  if (!($(cuartodelibra).css("display") == "none")) {
    var cantidadcuartodelibra = parseInt(document.getElementById('cuartodelibranumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "cuartodelibra",
      price: 13,
      amount: cantidadcuartodelibra
    }))
  }
  if (!($(grandmcextreme).css("display") == "none")) {
    var cantidadgrandmcextreme = parseInt(document.getElementById('grandmcextremenumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "grandmcextreme",
      price: 10,
      amount: cantidadgrandmcextreme
    }))
  }
  if (!($(bigchickensupreme).css("display") == "none")) {
    var cantidadbigchickensupreme = parseInt(document.getElementById('bigchickensupremenumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "bigchickensupreme",
      price: 14,
      amount: cantidadbigchickensupreme
    }))
  }
  if (!($(bigcrispybbq).css("display") == "none")) {
    var cantidadbigcrispybbq = parseInt(document.getElementById('bigcrispybbqnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "bigcrispybbq",
      price: 12,
      amount: cantidadbigcrispybbq
    }))
  }
  if (!($(bigdoublecheese).css("display") == "none")) {
    var cantidadbigdoublecheese = parseInt(document.getElementById('bigdoublecheesenumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "bigdoublecheese",
      price: 11,
      amount: cantidadbigdoublecheese
    }))
  }
  if (!($(hamburgesa).css("display") == "none")) {
    var cantidadhamburgesa = parseInt(document.getElementById('hamburgesanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "hamburgesa",
      price: 8,
      amount: cantidadhamburgesa
    }))
  }
  if (!($(hamburgesadepollo).css("display") == "none")) {
    var cantidadhamburgesadepollo = parseInt(document.getElementById('hamburgesadepollonumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "hamburgesadepollo",
      price: 9,
      amount: cantidadhamburgesadepollo
    }))
  }
  if (!($(mcfish).css("display") == "none")) {
    var cantidadmcfish = parseInt(document.getElementById('mcfishnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "mcfish",
      price: 13,
      amount: cantidadmcfish
    }))
  }
  if (!($(happymeal).css("display") == "none")) {
    var cantidadhappymeal = parseInt(document.getElementById('happymealnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "happymeal",
      price: 16,
      amount: cantidadhappymeal
    }))
  }
  if (!($(cocacola).css("display") == "none")) {
    var cantidadcocacola = parseInt(document.getElementById('cocacolanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "cocacola",
      price: 5,
      amount: cantidadcocacola
    }))
  }
  if (!($(nestea).css("display") == "none")) {
    var cantidadnestea = parseInt(document.getElementById('nesteanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "nestea",
      price: 6,
      amount: cantidadnestea
    }))
  }
  if (!($(agua).css("display") == "none")) {
    var cantidadagua = parseInt(document.getElementById('aguanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "agua",
      price: 4,
      amount: cantidadagua
    }))
  }
  if (!($(fanta).css("display") == "none")) {
    var cantidadfanta = parseInt(document.getElementById('fantanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "fanta",
      price: 5,
      amount: cantidadfanta
    }))
  }
  if (!($(monsterenergy).css("display") == "none")) {
    var cantidadmonsterenergy = parseInt(document.getElementById('monsterenergynumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "monsterenergy",
      price: 6,
      amount: cantidadmonsterenergy
    }))
  }
  if (!($(cerveza).css("display") == "none")) {
    var cantidadcerveza = parseInt(document.getElementById('cervezanumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "cerveza",
      price: 11,
      amount: cantidadcerveza
    }))

  }
  if (!($(aquarius).css("display") == "none")) {
    var cantidadaquarius = parseInt(document.getElementById('aquariusnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "aquarius",
      price: 8,
      amount: cantidadaquarius
    }))

  }
  if (!($(sprite).css("display") == "none")) {
    var cantidadsprite = parseInt(document.getElementById('spritenumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "sprite",
      price: 10,
      amount: cantidadsprite
    }))
  }
  if (!($(colacao).css("display") == "none")) {
    var cantidadcolacao = parseInt(document.getElementById('colacaonumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "colacao",
      price: 13,
      amount: cantidadcolacao
    }))
  }
  if (!($(nuggets).css("display") == "none")) {
    var cantidadnuggets = parseInt(document.getElementById('nuggetsnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "nuggets",
      price: 11,
      amount: cantidadnuggets
    }))
  }
  if (!($(patatas).css("display") == "none")) {
    var cantidadpatatas = parseInt(document.getElementById('patatasnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "patatasfritas",
      price: 10,
      amount: cantidadpatatas
    }))
  }
  if (!($(topfries).css("display") == "none")) {
    var cantidadtopfries = parseInt(document.getElementById('topfriesnumber').value, 10); 
    $.post('https://vb-mcdonalds/realizarpedido', JSON.stringify({
      item: "topfries",
      price: 15,
      amount: cantidadtopfries
    }))
  }
  console.log("Order done, total:", total, "$");
  close()
  sumaTotal();
  $.post('https://vb-mcdonalds/exit', JSON.stringify({}))
}