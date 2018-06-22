<!-- 模板 -->
<template>
  <div class="box">
    <div class="header">
      <div id="search">
        <span id="iditem">ID</span>
          <input type="text" id="input" v-model="searchId" placeholder="请输入查询ID"></input>
          <button id="searchBtn" type="submit" class="btn btn-primary" @click="fetchSearch()">查询</button>     
      </div>
      <div id="classify">
        <span id="label">分类</span>
         <select class="form-control" name="classify" id="select" v-model="classifyOption" @change="sortClassify()">
           <option disabled selected value="">请选择</option>
           <option value="type">课程类别</option>
           <option value="level">课程级别</option>
           <option value="status">课程状态</option>
           <option value="updateTime">更新时间</option>
         </select>
      </div>
      <div id="upload">
        <button id="uploadBtn" type="button" class="btn btn-primary"  data-toggle="modal" data-target="#myModal">新增</button>
      </div>
      <!-- <div id="changeSort">
        <button id="changeSortBtn" type="button" class="btn btn-primary">修改排序方式</button>
      </div> -->
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
            <th>{{course._identity}}</th>
            <th>{{course._title}}</th>         
            <th>{{course._class}}</th>
            <th>{{course._level}}</th>
            <th>{{course._updateTime}}</th>
            <th>{{course._status}}</th>
            <th><a href="#">上线</a>&nbsp&nbsp<a href="#">删除</a>&nbsp&nbsp<a href="#">下线</a></th>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 id="myModalLabel">新增课程</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                    
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" role="form" @submit.prevent="submit">
                      <div class="form-group">
                        <label for="_identity" class="col-sm-5">ID</label>
                        <input v-model="insertCourse._identity" type="text" class="form-control col-sm-7" id="_identity" placeholder="请输入课程ID">
                      </div>
                      <div class="form-group">
                        <label for="_title" class="col-sm-5">课程标题</label>
                        <input v-model="insertCourse._title" type="text" class="form-control col-sm-7" id="_title" placeholder="请输入课程标题">
                      </div>
                      <div class="form-group">
                        <label for="_class" class="col-sm-5">课程分类</label>
                        <input v-model="insertCourse._class" type="text" class="form-control col-sm-7" id="_class" placeholder="请输入课程分类">
                      </div>
                      <div class="form-group">
                        <label for="_level" class="col-sm-5">课程级别</label>
                        <input v-model="insertCourse._level" type="text" class="form-control col-sm-7" id="_level" placeholder="请输入课程级别">
                      </div>
                      <div class="form-group">
                        <label for="_status" class="col-sm-5">课程状态</label>
                        <input v-model="insertCourse._status" type="text" class="form-control col-sm-7" id="_status" placeholder="请输入课程状态">
                      </div>
                      <div class="form-group">
                        <label for="_videoPath" class="col-sm-5">视频路径</label>
                        <input v-model="insertCourse._videoPath" type="text" class="form-control col-sm-7" id="_videoPath" placeholder="请输入课程状态">
                      </div>
                      <div class="form-group">
                        <label for="_imgPath" class="col-sm-5">封面路径</label>
                        <input v-model="insertCourse._imgPath" type="text" class="form-control col-sm-7" id="_imgPath" placeholder="请输入课程状态">
                      </div>
                      <button type="submit" class="btn btn-primary" >新增</button>
                    </form>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
  </div>
</template>
<!-- js -->
<script>
export default {
  name: '首页',
  data () {
    return {
      courses: [],
      searchId:'',
      classifyOption:'',
      insertCourse:{

      },
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
      //fetch发送课程信息到后台查询课程列表  
      fetch('http://localhost:3000/api/course',
                    {
                        method:"POST",
                        mode:"cors",//可以跨域但是不能读取后台数据的
                        body:JSON.stringify({
                          // courseClass:this.state.courseClass,
                          // courseLevel:this.state.courseLevel,
                        }),
                        headers:{
                            "Content-type":"application/json;charset=utf-8"
                        }
                    })
                    .then(response => response.json())
                    .then(json => {
                      this.courses=[];
                      for(let i=0;i<json.length;i++){
                          this.courses.push(json[i]);  
                      }
                      //console.log(this.courses);
                    })
                    .catch(function(error){
                        console.log('发生错误',error);
                    });
    },
    fetchSearchResults:function(){
        fetch('http://localhost:3000/api/course',
                    {
                        method:"POST",
                        mode:"cors",//可以跨域但是不能读取后台数据的
                        body:JSON.stringify({
                          // courseClass:this.state.courseClass,
                          // courseLevel:this.state.courseLevel,
                        }),
                        headers:{
                            "Content-type":"application/json;charset=utf-8"
                        }
                    })
                    .then(response => response.json())
                    .then(json => {
                      if(this.searchId!=''){
                        this.courses=[];
                        for(let i=0;i<json.length;i++){
                          if (json[i]._identity==this.searchId){
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
    // fetchSortResults:function(){
    //     fetch('http://localhost:3000/api/course')
    //     .then(response => response.json())
    //     .then(json => {
    //       switch (this.classifyOption){
    //         case 'class':
    //           this.courses=[];
    //           for(let i=0;i<json.length;i++){
    //             if (json[i].type=='音乐基础课程'){
    //               this.courses.push(json[i]);
    //             }   
    //             console.log(this.courses);
    //           } 
    //         break; 
    //         case 'level':
    //           this.courses=[];
    //           for(let i=0;i<json.length;i++){
    //             if (json[i].level=='初级'){
    //               this.courses.push(json[i]);
    //             }   
    //             console.log(this.courses);
    //           } 
    //         break; 
    //         case 'status':
    //           this.courses=[];
    //           for(let i=0;i<json.length;i++){
    //             if (json[i].status=='已上线'){
    //               this.courses.push(json[i]);
    //             }   
    //             console.log(this.courses);
    //           } 
    //         break; 
    //         case 'updateTime':
    //           this.courses=[];
    //           for(let i=0;i<json.length;i++){
    //             if (json[i].updateTime=='20180423 20:10:00'){
    //               this.courses.push(json[i]);
    //             }   
    //             console.log(this.courses);
    //           } 
    //         break; 
    //       }       
    //     })
    // },
    search:function(){
      this.fetchSearchResults();   
    },
    sortClassify:function(){
      this.fetchSortResults();
      //console.log(this.classifyOption); 

    },
    upload:function(){
        // var modal=document.getElementById('myModal');
        // modal.modal='show';
        console.log('hh');
    },
    submit:function(){
      fetch('http://localhost:3000/api/insertCourse',
                    {
                        method:"POST",
                        mode:"cors",
                        headers:{
                            "Content-type":"application/json;charset=utf-8"
                        },
                        body:JSON.stringify({
                          insertCourse:this.insertCourse,
                        })                        
                    })
                    .then(response => response.json())
                    .then(json => {
                      console.log("hah");       
                    })   
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 样式 -->
<style scoped>
.box {width: 100%;font-weight: normal;}
.header {width: 100%;height: 90px;background-color:#999999;padding-top:10px;font-size: 30px;}
#search {width:350px;height: 80px;display: inline-block;position: relative;}
#iditem {position: absolute;left:10px;top:33px;width: 20px;}
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
.modal-header{position: relative;}
#myModalLabel{position: absolute;left:200px;}
.modal-body .form-group{position: relative;}
.modal-body label{float:left;}
</style>
