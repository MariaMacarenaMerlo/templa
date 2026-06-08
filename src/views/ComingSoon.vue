<script>
export default {
  name: "ComingSoon",
};
</script>

<template>
  <main
    class="min-h-screen bg-lino text-texto flex items-center justify-center px-6"
  >
    <section class="max-w-md w-full text-center">
      <div class="mb-10">
        <p class="text-sm tracking-[0.35em] uppercase text-durazno mb-4">
          Próximamente
        </p>

        <h1 class="text-5xl font-light mb-6">Templa</h1>

        <p class="text-xl leading-relaxed text-texto/80">
          Un espacio para volver a vos.
        </p>
      </div>

      <div
        class="w-44 h-44 mx-auto mb-10 rounded-full border border-white/70 bg-durazno/80 shadow-[0_0_45px_10px_rgba(255,249,214,0.8)] flex items-center justify-center"
      >
        <div
          class="w-32 h-32 rounded-full border border-white/50 flex items-center justify-center"
        >
          <div class="w-20 h-20 rounded-full border border-white/40"></div>
        </div>
      </div>

      <p class="text-base leading-7 text-texto/70 mb-8">
        Templa está creciendo. Una aplicación de bienestar emocional,
        respiración guiada y pausas conscientes para acompañarte en momentos de
        ansiedad, estrés o saturación.
      </p>

      <div class="border-t border-piedra pt-6">
        <p class="text-sm text-texto/60">
          Menos ruido. Más presencia. Más templanza.
        </p>
        <button
          @click="router.push('/breath')"
          class="text-sm text-durazno mt-2"
        >
          Probar ejercicio de respiración
        </button>
      </div>

      <footer class="mt-12 text-xs tracking-widest uppercase text-texto/40">
        templa.life
      </footer>
    </section>
  </main>
</template>
