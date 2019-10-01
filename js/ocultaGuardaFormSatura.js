
  $('#formSaturaSub').submit(function (ev) {
    $.ajax({
      type: $('#formSaturaSub').attr('method'),
      url: $('#formSaturaSub').attr('action'),
      data: $('#formSaturaSub').serialize(),
      success: function (data) { alert('Datos enviados !!!'); }
    });
    ev.preventDefault();
  });

function ocultaForm(){
  console.log("En función oculta Formulario");
  document.getElementById('ocultoFormulario').style.display='none';
}
