import { createClientPage } from '../../../renderer/createClientPage';
import BlueLayout from '../../../layouts/BlueLayout.vue';
const hydrate = createClientPage({
  layout: BlueLayout,
});
hydrate();
