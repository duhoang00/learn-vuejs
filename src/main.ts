import { createApp } from "vue";
import { useListsStore } from "@/stores/lists";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

library.add(faTrashCan);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(useListsStore);
app.use(router);

app.mount("#app");
