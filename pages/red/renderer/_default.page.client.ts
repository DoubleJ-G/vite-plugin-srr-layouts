import { createClientPage } from '../../../renderer/createClientPage';
import RedLayout from '../../../layouts/RedLayout.vue';
const hydrate = createClientPage({
  layout: RedLayout,
});
hydrate();
