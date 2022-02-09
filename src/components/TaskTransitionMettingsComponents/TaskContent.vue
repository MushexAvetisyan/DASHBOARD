<template>
  <div class="app">
    <table class="table">
      <thead>
      <tr>
        <th>Subject</th>
        <th>Organiser</th>
        <th>Date</th>
        <th>Subject</th>
        <th>Organiser</th>
        <th>Date</th>
        <th>Subject</th>
        <th>Organiser</th>
        <th>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td><input type="checkbox">{{user.firstName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      { firstName: 'Frank',  email: 'frank.murphy@test.com', role: 'User' },
      { firstName: 'Vic',  email: 'vic.reynolds@test.com', role: 'Admin' },
      { firstName: 'Gina',  email: 'gina.jabowski@test.com', role: 'Admin' },
      { firstName: 'Jessi',  email: 'jessi.glaser@test.com', role: 'User' },
      { firstName: 'Jay',  email: 'jay.bilzerian@test.com', role: 'User' },
      { firstName: 'Jay',  email: 'jay.bilzerian@test.com', role: 'User' },
      { firstName: 'Jay',  email: 'jay.bilzerian@test.com', role: 'User' }
    ]
  })
}
</script>

<style scoped lang="scss">
.table{
  width: 80%;
  background-color: white;
  margin-top: 25px;
  border-radius: 25px;
  padding: 15px;
  text-align: left;
}
</style>
