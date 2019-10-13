<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col sm="12">
        <c-table :table-data="itemsArray" :fields="fields" :per-page=99999 hover striped bordered small fixed caption="モックページ一覧" :sort-by="sortBy"></c-table>
      </b-col>
    </b-row>

  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

const someData = () => shuffleArray([
  {page: 'ログインページ', url: '/pages/login-modified', status: '作成済み'},
  {page: 'ユーザー登録ページ', url: '/pages/register-modified', status: '作成中'},
  {page: 'ダッシュボード', url: '/dashboard-modified', status: '作成中'},
  {page: '問い合わせ一覧ページ', url: '/base/tables-modified', status: '作成中'},
],)

export default {
  name: 'tables',
  components: {cTable},
  data: () => {
    return {
      sortBy: 'url',
      sortDesc: false,
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'page', label: 'ページ'},
        {key: 'url', sortable: true},
        {key: 'status', sortable: true}
      ],
    }
  }
}
</script>
