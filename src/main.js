import { createApp } from "vue";
import App from "./App.vue";

import './assets/main.css'

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

/* add icons to the library */
library.add(faHouseUser);
library.add(faBars);
library.add(faAddressCard);
library.add(faAddressBook);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");