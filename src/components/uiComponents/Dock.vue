<script>
import inicio from "../../assets/icons/dock/home.svg";
import descubre from "../../assets/icons/dock/descubre.svg";
import templaIA from "../../assets/icons/dock/templaIA.svg";
import perfil from "../../assets/icons/dock/perfil.svg";
import premium from "../../assets/icons/dock/premium.svg";

export default {
  name: "Dock",
  data() {
    return {
      inicio,
      descubre,
      templaIA,
      perfil,
      premium,
      navElements: [
        { name: "Inicio", icon: inicio, route: "/" },
        { name: "Descubre", icon: descubre, route: "/descubre" },
        { name: "TemplaIA", icon: templaIA, route: "/templaIa" },
        { name: "Perfil", icon: perfil, route: "/perfil" },
        { name: "Premium", icon: premium, route: "/premium" },
      ],
    };
  },
};
</script>
<template>
  <nav class="bg-transparent">
    <ul class="flex glass-dock gap-[18px]">
      <li v-for="navElement in navElements">
        <router-link :to="navElement.route" class="flex flex-col">
          <img :src="navElement.icon" :alt="navElement.name" class="h-[30px]" />
          <p class="text-lino text-[12px] font-normal">{{ navElement.name }}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
