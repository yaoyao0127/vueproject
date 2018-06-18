<!-- 模板 -->
<template>
  <div class="div">
    <div class="header">
      <div id="search">
        <span id="id">ID</span>
          <input type="text" id="input" v-model="searchId" placeholder="请输入查询ID"></input>
          <button id="searchBtn" type="submit" class="btn btn-primary" @click="search()">查询</button>     
      </div>
      <div id="classify">
        <span id="label">分类</span>
         <select name="classify" id="select" v-modal="selected" @change="sortClassify()">
           <option value="class">课程类别</option>
           <option value="level">课程级别</option>
           <option value="status">课程状态</option>
           <option value="updateTime">更新时间</option>
         </select>
      </div>
      <div id="upload">
        <button id="uploadBtn" type="button" class="btn btn-primary">上传</button>
      </div>
      <div id="changeSort">
        <button id="changeSortBtn" type="button" class="btn btn-primary">修改排序方式</button>
      </div>
    </div>
    <div class="fgx"></div>
    <div class="content">
      <table class="table table-striped" id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>标题</th>
            <th>分类</th>
            <th>级别</th>
            <th>更新时间</th>
            <th>状态</th>
            <th colspan='3'>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses">
            <th>{{course.id}}</th>
            <th>{{course.title}}</th>         
            <th>{{course.class}}</th>
            <th>{{course.level}}</th>
            <th>{{course.updateTime}}</th>
            <th>{{course.status}}</th>
            <th><a href="#">上线</a>&nbsp&nbsp<a href="#">删除</a>&nbsp&nbsp<a href="#">下线</a></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<!-- js -->
<script>
export default {
  name: 'Mypage',
  data () {
    return {
      courses: [],
      searchId:'',
      selected:'',
    }
  },
  mounted(){
    this.fetchCourses();
    this.sortClassify();
  },
  beforeUpdate(){  
  },
  methods:{
    fetchCourses:function(){
      fetch('http://localhost:8080/api/courses')
        .then(response => response.json())
        .then(json => {
          for(let i=0;i<json.length;i++){
            this.courses.push(json[i]);
            //console.log(this.courses);
          }          
        })
    },
    fetchSearchResults:function(){
        fetch('http://localhost:8080/api/courses')
        .then(response => response.json())
        .then(json => {
          if(this.searchId!=''){
            this.courses=[];
            for(let i=0;i<json.length;i++){
              if (json[i].id==this.searchId){
                this.courses.push(json[i]);
              }   
              //console.log(this.courses);
            }
          }else{
              this.courses=[];
              for(let i=0;i<json.length;i++){
              this.courses.push(json[i]);
              //console.log(this.courses);
            } 
          }          
        })
    },
    fetchSortResults:function(){
        fetch('http://localhost:8080/api/courses')
        .then(response => response.json())
        .then(json => {
          switch (this.selected){
            case 'class':
              this.courses=[];
              for(let i=0;i<json.length;i++){
                if (json[i].class=='音乐基础课程'){
                  this.courses.push(json[i]);
                }   
                //console.log(this.courses);
              } 
              break; 
          }       
        })
    },
    search:function(){
      this.fetchSearchResults();   
    },
    sortClassify:function(){
      this.fetchSortResults(); 
      console.log(this.selected);  
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 样式 -->
<style scoped>
.div {width: 100%;font-weight: normal;}
.header {width: 100%;height: 90px;background-color:#CCCCCC;padding-top:10px;font-size: 30px;}
#search {width:350px;height: 80px;display: inline-block;position: relative;}
#id {position: absolute;left:10px;top:33px;width: 20px;}
#input {position: absolute;left:50px;top:40px;width: 167px;height: 30px;font-size: 15px;}
#searchBtn {position: absolute;left:250px;top:37px;}
#classify {width:200px;height: 80px;display: inline-block;position: relative;}
#label {position: absolute;left:10px;top:35px;}
#select{width: 100px;height: 30px;position: absolute;left:90px;top:40px;font-size: 15px;}
#upload {width:200px;height: 80px;display: inline-block;position: relative;}
#uploadBtn {position: absolute;left:80px;top:35px;}
#changeSort {width:400px;height: 80px;display: inline-block;position: relative;}
#changeSortBtn {position: absolute;left:230px;top:35px;}
.fgx {width: 100%;height: 30px;background-color: black;}
.content {width: 100%;height: 600px;}
#table{}
</style>
