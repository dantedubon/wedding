<template>
  <div class="home" id="home">
    <nav class="navbar navbar-expand-lg">
      <img class="navbar-brand" src="../assets/nd-logo_1.svg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">NUESTRO SÍ
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TE INVITAMOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CEREMONIA VIRTUAL</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class=" estas-invitado">
       <div class="container">
         <div class="block-center">
           <img class="bg-header" src="../assets/nadia-dante.svg">
         </div>
      </div>
    </div>
    <div class="nuestro-si ">
      <div class="container">
        <img class="img-inv" src="../assets/invitado.svg">
        <div class="text-container mb-5">
          <p>Estamos felices de compartir con ustedes nuestro enlace matrimonial, ya que han formado parte importante en el proceso de este evento; por ello presentamos la invitación a la ceremonia de amor y eternidad que confirma nuestra unión.</p>
        </div>
      </div>
    </div>
    <div class="invitacion-img"></div>
    <div class="ceremonia">
      <div class="container">
        <img class="img-inv-ceremonia" src="../assets/ceremonia.svg">
        <div class="text-container text-dark mb-5">
          <p>El enlace a la transmisión via zoom será habilitado a las 11:00 am del 14 de Noviembre del 2020</p>
        </div>
        <button class="button-ceremonia" type="button">Enlace de la Ceremonia</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wedding',

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
