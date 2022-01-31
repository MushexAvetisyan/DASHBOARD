<template>
  <div class="app">
    <div class="main_content">
      <h4>Recent tasks to review</h4>
      <div class="ShortTask" v-for="(task, index) in TaskReview" :key="index">
        <h4 class="Task_Date">{{task.date}}</h4>
        <h4 class="Task_Title">{{task.title}}</h4>
        <h4 class="Task_Project">{{task.Project}}</h4>
        <div class="text_task">
          <h4 class="Task">{{task.task}}</h4>
        </div>
        <div class="CommentSection">
          <div class="Main_comment_content" v-for="(text, icon) in TaskCommentSection" :key="icon">
            <img v-if="text.icon" :src="text.icon" alt="icon">
            <span v-if="text.count">{{text.count}}</span>
            <p>{{text.label}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Second_Content">

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    TaskReview: [
      {
        date: 'OCT 6TH, 2020',
        title: 'Title of the task with a short description',
        Project: 'Name of the project',
        task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ],
    TaskCommentSection: [
      {
        count: 10,
        label: 'comments',
        icon: require("@/assets/images/Comment.svg")
      },
      {
        count: 5,
        label: 'attachments',
        icon: require("@/assets/images/paperclip.svg")
      },
      {
        label: 'Normal priority',
        icon: require("@/assets/images/time.svg")
      },
      {
        label: 'High criticality',
        icon: require("@/assets/images/High.svg")
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.app{
  display: flex;
  width: 80%;
  margin-top: 30px;
}
.main_content{
  width: 1047px;
  height: 380px;
  background-color: white;
  border-radius: 40px;
  h4{
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 30px;
  }
}
.ShortTask{
  background-color: white;
  width: 95%;
  height: 220px;
  box-shadow: 0 0 7px 6px #f0f0f0;
  margin: 5% auto;
  border-radius: 40px;
  .Task_Date{
    color: #51C1D1;
    font-size: 12px;
  }
  .Task_Title{
    color: black;
    padding: 10px 25px 0;
    font-size: 25px;
  }
  .text_task{
    width: 100%;
    height: 70px;
    overflow-y: auto;
  }
  .Task_Project{
    color: #51C1D1;
    padding: 10px 25px 0;
  }
  .Task{
    padding: 0 25px;
    font-size: 11px;
    line-height: 22px;
  }
}
.CommentSection{
  display: flex;
  margin-top: 10px;
  .Main_comment_content{
    display: flex;
    align-items: center;
    margin: 0 25px;
    cursor: pointer;
    img{
      width: 15px;
    }
    span{
      margin-left: 8px;
      color: black;
      font-weight: bold;
      font-size: 12px;
    }
    p{
      margin-left: 5px;
      font-size: 12px;
      font-weight: bold;
      color: black;
    }
  }
}
.Second_Content{
  width: 580px;
  height: 380px;
  background-color: white;
  margin-left: 30px;
  border-radius: 40px;
}
</style>
