function Login() {
    var done=0;
    var usuario = document.getElementsByName('email_login')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha_login')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="/p/admin.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }