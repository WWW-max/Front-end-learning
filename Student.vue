<template>
<div>
    <h1>学生姓名：{{studentName}}</h1>
    <h1>学生年龄：{{age}}</h1>
</div>
</template>
<script>
     export default{
         name:'Student',
         data(){
             return {
                 studentName:'张三',
                 age:'24'
             }
         }
     }
</script>
<style>

</style>