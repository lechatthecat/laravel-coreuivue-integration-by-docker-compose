require('./bootstrap');
require('bootstrap-vue');
require('vue');
require('vue-style-loader');
require('chart.js');
require('vue-chartjs');
require('@coreui/coreui-plugin-chartjs-custom-tooltips');
require('@coreui/vue');

// vue modules
import Vue from 'vue'

// Route information
import Routes from '@/js/routes.js'
Vue.use(Routes)

// Component files
import App from '@/js/views/App'

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue' //Importing
Vue.use(BootstrapVue)

// coreui-vue
import Breadcrumb from '@coreui/vue'
import Callout from '@coreui/vue'
import Footer from '@coreui/vue'
import Switch from '@coreui/vue'
import { Aside, AsideToggler } from '@coreui/vue'
import { Header, HeaderDropdown } from '@coreui/vue'
import { Sidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, SidebarNavDivider, SidebarNavItem, SidebarNavDropdown, SidebarNavLabel, SidebarNavLink, SidebarNavTitle, SidebarToggler } from '@coreui/vue'

const LibraryModule = {
  Aside,
  AsideToggler,
  Breadcrumb,
  Callout,
  Footer,
  Header,
  HeaderDropdown,
  Sidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  SidebarNavDivider,
  SidebarNavDropdown,
  SidebarNavItem,
  SidebarNavLabel,
  SidebarNavLink,
  SidebarNavTitle,
  SidebarToggler,
  Switch,

  install(Vue) {
    // Register components with vue
    Vue.component("Aside", Aside)
    Vue.component("AsideToggler", AsideToggler)
    Vue.component("Breadcrumb", Breadcrumb)
    Vue.component("Callout", Callout)
    Vue.component("Footer", Footer);
    Vue.component("Header", Header)
    Vue.component("HeaderDropdown", HeaderDropdown)
    Vue.component("Sidebar", Sidebar)
    Vue.component("SidebarFooter", SidebarFooter)
    Vue.component("SidebarForm", SidebarForm)
    Vue.component("SidebarHeader", SidebarHeader)
    Vue.component("SidebarMinimizer", SidebarMinimizer)
    Vue.component("SidebarNav", SidebarNav)
    Vue.component("SidebarNavDivider", SidebarNavDivider)
    Vue.component("SidebarNavDropdown", SidebarNavDropdown)
    Vue.component("SidebarNavItem", SidebarNavItem)
    Vue.component("SidebarNavLabel", SidebarNavLabel)
    Vue.component("SidebarNavLink", SidebarNavLink)
    Vue.component("SidebarNavTitle", SidebarNavTitle)
    Vue.component("SidebarToggler", SidebarToggler)
    Vue.component("UI-Switch", Switch);
  }
};

const app = new Vue({
  el: '#app',
  router: Routes,
  render: h => h(App),
})

export default app;
