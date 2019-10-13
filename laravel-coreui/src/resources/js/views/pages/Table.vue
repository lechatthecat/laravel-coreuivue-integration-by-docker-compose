<template>
  <b-card>
    <div slot="header" v-html="caption"></div>
    <b-table :dark="dark" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="captions" :current-page="currentPage" :per-page="perPage" :sort-by="sortBy">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
      <template slot="url" slot-scope="data">
        <a :href="`#${data.value.toLowerCase()}`">{{ data.value }}</a>
      </template>
    </b-table>
  </b-card>
</template>

<script>


export default {
  name: 'c-table',
  inheritAttrs: false,
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 10
    },
    dark: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: String,
      default: ''
    },
    sortDesc: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    items: function() {
      const items =  this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  methods: {
    getBadge (status) {
      return status === '作成済み' ? 'success'
        : status === '作成中' ? 'secondary'
          : status === '未定' ? 'warning'
            : status === '中止' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    }
  }
}
</script>
