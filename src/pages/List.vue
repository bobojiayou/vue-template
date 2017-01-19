<template>
  <div class="list">
    <div class="row">
      <h4>用户列表{{count}}</h4>
    </div>
    <form class="form form-inline clearfix">
      <div class="col-sm-5">
        <strong>
        <router-link to="/add"><input type="button" value="创建一个任务" class="primary"></input></router-link>
      </strong>
      </div>
      <div class="col-sm-7">
        <input type="text" class="form-control" v-model="searchVal" v-on:keyup.enter="onEnter($event)" />
        <input type="button" class="btn btn-success btn-sm" v-on:click="search()" value="搜索 "></input>
      </div>
      <div class="form-group form-group-sm">
        用户列表（共{{pagination.total || 0}}条）
      </div>
      <div class="row">
        <ul>
          <li v-for="item in list">
            姓名：{{ item.name }} 年龄： {{item.age}} 地址：{{item.addr}}
          </li>
        </ul>
      </div>

    </form>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                  pagination:{
                  },
                     list: [
                    {name: 'test1', age: 11, addr: '星球-号'},
                    {name: 'test2', age: 12, addr: '星球二号'},
                    {name: 'test3', age: 13, addr: '星球三号'},
                    {name: 'test4', age: 14, addr: '星球四号'},
                    {name: 'test5', age: 15, addr: '星球五号'}
                  ],
                  searchVal: '我是空的'
            }
        },
        methods: {
          search: function(){
            console.log(this.searchVal)
          },
          onEnter: function(event){
            this.search()
            console.log(this.count);
          }
        },
        computed: {
           count(){
                return this.$store.state.count
           } 
        },
        created () {
         this.$store.dispatch('getlist')
        }
    }
</script>