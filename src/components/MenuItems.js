export default {
    profile: {
      name: "Iván Martínez",
      onClick: () => {
        console.log("Profile");
      },
    },
    items: [
      {
        id: 0,
        title: "Home",
        icon: "fa-house-user",
        onClick() {
          console.log("Home");
        },
      },
      {
        id: 1,
        title: "About",
        icon: "fa-address-card",
        onClick() {
          console.log("about");
        },
      },
      {
        id: 2,
        title: "Contact",
        icon: "fa-address-book",
        onClick() {
          console.log("contact");
        },
      },
    ],
  };