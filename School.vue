<template>
  <div class="demo">
      <h1>学校名称：{{schoolName}}</h1>
      <h1>学校地址：{{address}}</h1>
      <button @click="show">点我提示学校名</button>
  </div>
</template>

<script>
export default {
        name:'School',
        data(){
            return {
                schoolName:'清华大学',
                address:'北京'
            }
        },
        methods: {
            show(){
                 alert(this.schoolName);
            }
           
        },
}
</script>

<style>
.demo{
    background-color: greenyellow;
}
</style>