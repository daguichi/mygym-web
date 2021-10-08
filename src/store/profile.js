export default {
  user: null,
  sections: [
    { icon: "mdi-account", title: "Ficha tecnica", route: "fichatecnica" },
    { icon: "mdi-tools", title: "Estadisticas", route: "estadisticas" },
    { icon: "mdi-dumbbell", title: "Mis rutinas", route: "misrutinas" },
    { icon: "mdi-history", title: "Historial", route: "historial" },
    { icon: "mdi-tools", title: "Editar perfil", route: "editarperfil" },
  ],
  fichaTecnica: [
    { title: "Peso", content: "73kg"},
    { title: "Edad", content: "20 años"},
    { title: "Fecha de nacimiento", content: "01/03/2000"},
  ],
  estadisticas: [
    {title: "Dias ejercitados", content: "5"},
    {title: "Rutinas", content: "2"},
    {title: "Motivacion", content: "No eres lo que logras, eres lo que superas"}
  ]
};
