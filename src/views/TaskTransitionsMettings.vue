<template>
  <div class="app">
    <div class="TaskHeader">
      <PageNavigation />
      <div class="TasksTable">
        <button class="AddMetting">
          <img src="../assets/images/Callendar.svg" alt="">
          <p>ADD MEETING(S)</p>
        </button>
        <button class="SelectAll">
          <img src="../assets/images/SelectAll.svg" alt="">
          <p>SELECT ALL</p>
        </button>
        <button :disabled="isActive" class="AddToScope">
          <p>ADD TO SCOPE</p>
        </button>
        <button :disabled="isActive" class="Mark">
          <p>MARK AS UNSCOPE</p>
        </button>
      </div>
    </div>

    <TaskContent />
    <router-view />
  </div>
</template>

<script>
import PageNavigation from "@/components/TaskTransitionMettingsComponents/PageNavigation";
import TaskContent from "@/components/TaskTransitionMettingsComponents/TaskContent";
export default {
  components: {
    PageNavigation,
    TaskContent,
  },
  data: () => ({
    isActive: true
  }),
};
</script>

<style scoped lang="scss">
.app {
  background-color: #f5f5f6;
}
.TasksTable {
  border-top: 2px solid #d4d4d8;
  margin-top: 45px;
  padding-top: 25px;
  display: flex;
  margin-left: 180px;
  padding-right: 48%;
}

.ContentTable{
  width: 80%;
  height: 400px;
  background-color: white;
  margin-top: 25px;
  border-radius: 25px;
}

.SelectAll{
  padding: 18px 60px 15px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6D32A5;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  img{
    margin-right: 30px;
  }
}

.AddToScope{
  padding: 18px 40px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6D32A5;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  &:disabled{
    background-color: #CCCDD8;
  }
}

.Mark{
  padding: 18px 40px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6D32A5;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  &:disabled{
    background-color: #CCCDD8;
  }
}

.AddMetting{
  padding: 13px 45px 14px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #2B0F4D;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  img{
    margin-right: 15px;
  }
}
</style>
