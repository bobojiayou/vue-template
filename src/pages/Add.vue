<template>
  <div>
    <h3>新建用户</h3>
    <form class="form form-horizontal">
      <div class="form-group form-group-sm">
        <label class="col-sm-2 control-label">角色名称：</label>
        <div class="col-sm-6">
          <input v-model="userInfo.name" class="form-control" type="text" name="rolename" />
        </div>
      </div>
      <div class="form-group form-group-sm">
        <label class="col-sm-2 control-label">年龄：</label>
        <div class="col-sm-6">
          <input v-model="userInfo.age" class="form-control" type="text" name="roleage" />
        </div>
      </div>
      <div class="form-group form-group-sm">
        <label class="col-sm-2 control-label">地址：</label>
        <div class="col-sm-6">
          <input v-model="userInfo.addr" class="form-control" type="text" name="roleaddr" />
        </div>
      </div>
    </form>
    <div class="col-sm-offset-2">
      <button class="btn btn-success" v-on:click="submit()">确定</button>
      <button class="btn btn-default col-sm-offset-2" v-on:click="cancel()">返回</button>
    </div>
  </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
              userInfo: {
                name: '',
                age: '',
                addr: ''
              }
            }
        },
        methods: {
          submit: function (){
            console.log(this.userInfo);
          },
          cancel: function(){
            console.log('go back');
          }
        },
        components:{

        }
    }
</script>