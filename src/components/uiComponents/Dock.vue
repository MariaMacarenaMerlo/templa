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
        { name: "TemplaIA", icon: templaIA, route: "/templa-ia" },
        { name: "Perfil", icon: perfil, route: "/perfil" },
        { name: "Premium", icon: premium, route: "/premium" },
      ],
    };
  },
};
</script>
<template>
  <nav class="bg-transparent">
    <ul class="flex glass-dock px-[3%]">
      <li
        v-for="navElement in navElements"
        class="flex-1 p-[3px]"
        :class="{
          'bg-[rgba(23,70,89,0.528)] rounded-[10px]':
            $route.path === navElement.route,
        }"
      >
        <router-link :to="navElement.route" class="flex flex-col">
          <img :src="navElement.icon" :alt="navElement.name" class="h-[30px]" />
          <p class="text-lino text-[12px] font-normal text-center">
            {{ navElement.name }}
          </p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
