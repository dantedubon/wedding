<template>
  <div class="home" id="home">
    <nav class="navbar navbar-expand-lg">
      <img class="navbar-brand" src="../assets/nd-logo_1.svg">
      <button class="navbar-toggler menu-mobile">
        <span class="navbar-toggler-icon"></span> 
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#Nuestrosi">NUESTRO SÍ
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#TeInvitamos">TE INVITAMOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Ceremonia">CEREMONIA VIRTUAL</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class=" estas-invitado" id="Nuestrosi">
       <div class="container">
         <div class="block-center">
           <img class="bg-header" src="../assets/nadia-dante.svg">
         </div>
      </div>
    </div>
    <div class="nuestro-si ">
      <div class="container">
        <img class="img-inv" src="../assets/invitado.svg" id="TeInvitamos">
        <div class="text-container">
          <p>Estamos felices de compartir con ustedes nuestro enlace matrimonial, ya que han formado parte importante en el proceso de este evento; por ello presentamos la invitación a la ceremonia de amor y eternidad que confirma nuestra unión.</p>
        </div>
        <div class="block-inv mb-5">
          <img src="../assets/bg-wedd-card.png">
        </div>
      </div>
     
    </div>
    <!-- <div class="invitacion-img"></div> -->
    <div class="ceremonia bg-top-left" id="Ceremonia">
      <div class="container">
        <img class="img-inv" src="../assets/ceremonia.svg">
        <div class="text-container text-dark ">
          <p>El enlace a la transmisión via zoom será habilitado a las 11:00 am del 14 de Noviembre del 2020</p>
        </div>
        <button class="button-ceremonia mb-5" type="button" @click="redirectToZoom()" >Enlace de la Ceremonia</button>
      </div>
    </div>
    <footer class="bg-bottom-right">
      <div class="container">
        <div class="block-center mt-3 mb-3">
          <img class="logo-footer" src="../assets/nd-logo_1.svg">
          <p class="text-center">Tegucigalpa, Honduras</p>
          <p class="text-center"> © 2020</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Wedding',
  methods: {
    redirectToZoom: function(){
      window.open("https://us02web.zoom.us/j/84382800826", "_blank")
    }
}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
