<template>
  <div class="app1">
    <div class="main_content_two">
      <div class="ShortTask" v-for="(task, index) in TaskReview" :key="index">
        <div class="mush">
          <p>UI/UX DESIGNER</p>
          <div>
            <button class="watchTask">
              <img src="@/assets/images/upload.svg" alt="" />
            </button>
            <button class="watchTask">
              <img src="@/assets/images/eye.svg" alt="" />
            </button>
          </div>
          <p>Integrated with Jira</p>
        </div>
        <h4 class="Task_Date">{{ task.date }}</h4>
        <h4 class="Task_Title">{{ task.title }}</h4>
        <h4 class="Task_Project">{{ task.Project }}</h4>
        <div class="text_task">
          <h4 class="Task">{{ task.task }}</h4>
        </div>
        <div class="CommentSection">
          <div
            class="Main_comment_content"
            v-for="(text, icon) in TaskCommentSection"
            :key="icon"
          >
            <img v-if="text.icon" :src="text.icon" alt="icon" />
            <span v-if="text.count">{{ text.count }}</span>
            <p>{{ text.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    TaskReview: [
      {
        date: "OCT 6TH, 2020",
        title: "Title of the task with a short description",
        Project: "Name of the project",
        task:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],

    TaskInfo: [
      {
        image: require("@/assets/images/complete.svg"),
        percentage: 79 + "%",
        info: "completed",
        task: "Tasks",
        count: 36 + "/" + 48,
        rate: "Completion rate",
        count1: -8 + "%",
      },
      {
        image: require("@/assets/images/Waiting.svg"),
        percentage: 22,
        info: "days to go",
        Transition: "Transition timeframe",
        TimeFrameCount: 56 + "days",
      },
    ],

    TaskCommentSection: [
      {
        count: 10,
        label: "comments",
        icon: require("@/assets/images/Comment.svg"),
      },
      {
        count: 5,
        label: "attachments",
        icon: require("@/assets/images/paperclip.svg"),
      },
      {
        label: "Normal priority",
        icon: require("@/assets/images/time.svg"),
      },
      {
        label: "High criticality",
        icon: require("@/assets/images/High.svg"),
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.app1 {
  width: 95% !important;
}
.main_content_two {
  h4 {
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 30px;
  }
}
.ShortTask {
  background-color: white;
  box-shadow: 0 0 7px 6px #f0f0f0;
  margin: 3% auto;
  border-radius: 40px;
  .mush {
    float: right;
    width: 140px;
    height: 175px;
    position: relative;
    right: 20px;
    top: 30px;
    p {
      color: black;
      font-weight: 700;
      font-size: 12px;
    }
    p:last-of-type {
      font-size: 10px;
      color: black;
      font-weight: 600;
      margin-top: 50px;
    }
    div {
      margin-top: 30px;
      img {
        margin: 0 5px 0 5px;
      }
    }
    .watchTask {
      cursor: pointer;
      background-color: white;
      outline: none;
      border: none;
    }
  }
  .Task_Date {
    color: #51c1d1;
    font-size: 12px;
  }
  .Task_Title {
    color: black;
    padding: 10px 25px 0;
    font-size: 25px;
  }
  .text_task {
    width: 74%;
    height: 70px;
    overflow-y: auto;
    margin: 0 25px;
  }
  .Task_Project {
    color: #51c1d1;
    padding: 10px 25px 0;
  }
  .Task {
    padding: 0 0;
    font-size: 11px;
    line-height: 22px;
  }
}
.CommentSection {
  display: flex;
  margin-top: 10px;
  padding-bottom: 15px;
  .Main_comment_content {
    display: flex;
    align-items: center;
    margin: 0 25px;
    cursor: pointer;
    img {
      width: 15px;
    }
    span {
      margin-left: 8px;
      color: black;
      font-weight: bold;
      font-size: 12px;
    }
    p {
      margin-left: 5px;
      font-size: 12px;
      font-weight: bold;
      color: black;
    }
  }
}
</style>
