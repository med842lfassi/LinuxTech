document.addEventListener("DOMContentLoaded", () => {
  const lang = navigator.language.slice(0, 2);
  const translations = {
    fr: {
      title: "KaliLinux Étude",
      subtitle: "Apprenez le hacking éthique et la cybersécurité intelligemment",
      start_learning: "Commencer l'apprentissage",
      join_community: "Rejoindre la communauté"
    },
    ar: {
      title: "دراسة KaliLinux",
      subtitle: "تعلم الاختراق الأخلاقي والأمن السيبراني بطريقة ذكية",
      start_learning: "ابدأ التعلم",
      join_community: "انضم إلى المجتمع"
    }
  };
  const texts = document.querySelectorAll("[data-i18n]");
  if (translations[lang]) {
    texts.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }
});
