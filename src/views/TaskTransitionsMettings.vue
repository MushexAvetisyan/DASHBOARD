<template>
  <div class="app">
    <div class="TaskHeader">
      <PageNavigation />
      <div class="TasksTable">
        <button class="AddMetting">
          <img src="../assets/images/Callendar.svg" alt="" />
          <span>ADD MEETING(S)</span>
        </button>
        <button class="SelectAll" @click="checkboxesHandler">
          <img src="../assets/images/SelectAll.svg" alt="" />
          <span>SELECT ALL</span>
        </button>
        <button :disabled="isActive" class="AddToScope">
          <span>ADD TO SCOPE</span>
        </button>
        <button :disabled="isActive" class="Mark">
          <span>MARK AS UNSCOPE</span>
        </button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>SUBJECT</th>
          <th style="padding-left: 10px">ORGANISER</th>
          <th>DATE</th>
          <th>TIME</th>
          <th>TYPE</th>
          <th>FREQUENCY</th>
          <th>NOTE</th>
          <th>SOURCE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td align="CENTER" width="20px">
            <input
              class="checking"
              type="checkbox"
              v-model="checkedUsers"
              :value="user.id"
            />
          </td>
          <td>
            <span class="check">{{ user.subject }}</span>
          </td>
          <td>{{ user.organiser }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.time }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.frequency }}</td>
          <td>{{ user.note }}</td>
          <td>
            <img
              width="25px"
              height="25px"
              v-if="user.source"
              :src="user.source"
              alt="img"
            />
          </td>
          <td>
            <span class="status">{{ user.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <span>Selected Ids: {{ checkedUsers }}</span>
    <router-view />
  </div>
</template>

<script>
import PageNavigation from "@/components/TaskTransitionMettingsComponents/PageNavigation";
export default {
  components: {
    PageNavigation,
  },
  data: () => ({
    isActive: true,
    checkedUsers: [],
    users: [
      {
        id: 1,
        subject: "Lorem Ipsum dolor",
        organiser: "frank.murphy@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Add",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 2,
        subject: "Lorem Ipsum Dolor",
        organiser: "vic.reynolds@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 3,
        subject: "Lorem Ipsum Dolor",
        organiser: "gina.jabowski@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 4,
        subject: "Lorem Ipsum Dolor",
        organiser: "jessi.glaser@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 5,
        subject: "Lorem Ipsum Dolor",
        organiser: "jay.bilzerian@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 6,
        subject: "Lorem Ipsum Dolor",
        organiser: "jay.bilzerian@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
      {
        id: 7,
        subject: "Lorem Ipsum Dolor",
        organiser: "jay.bilzerian@test.com",
        date: new Date().toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
        type: "Recurring",
        frequency: "Low",
        note: "Lorem Ipsum",
        source: require("@/assets/images/Outlook.png"),
        status: "Scoped",
      },
    ],
  }),
  methods: {
    checkboxesHandler() {
      if (!this.checkedUsers.length) {
        for (let i = 0; i < this.users.length; i++) {
          this.checkedUsers.push(this.users[i].id);
        }
      } else {
        this.checkedUsers = [];
      }
    },
  },
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

.ContentTable {
  width: 80%;
  height: 400px;
  background-color: white;
  margin-top: 25px;
  border-radius: 25px;
}

.SelectAll {
  padding: 18px 60px 15px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6d32a5;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  img {
    margin-right: 30px;
  }
}

.AddToScope {
  padding: 18px 40px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6d32a5;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  &:disabled {
    background-color: #cccdd8;
  }
}

.Mark {
  padding: 18px 40px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #6d32a5;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  &:disabled {
    background-color: #cccdd8;
  }
}

.AddMetting {
  padding: 13px 45px 14px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: 800;
  background-color: #2b0f4d;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  img {
    margin-right: 15px;
  }
}

.table {
  width: 80%;
  background-color: white;
  margin-top: 25px;
  border-radius: 25px;
  padding: 15px;
  text-align: left;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: 2px solid #eaeaec;
    }
    th {
      color: #a7aabc;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    th:first-of-type {
      padding-left: 35px;
    }
  }
  tbody {
    .status {
      background-color: #6d32a5;
      padding: 10px 15px;
      border-radius: 25px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
    .check {
      margin-left: 15px;
      color: black;
      font-weight: 700;
      font-size: 13px;
      font-family: CircularFontFamily;
    }
    tr {
      border-bottom: 2px solid #eaeaec;
      .checking {
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        border: 1px solid #acafc0;
        border-radius: 5px;
        &:checked {
          background-color: forestgreen;
        }
        &:checked:after {
          content: "\2713";
          color: #fff;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          font-size: 20px;
        }
      }
    }
    td {
      padding: 10px 0;
    }
    input {
      cursor: pointer;
      width: 25px;
      height: 25px;
      position: relative;
      top: 4px;
    }
  }
}
</style>
