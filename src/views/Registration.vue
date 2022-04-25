<template>
  <div class="main">
    <div class="center">
      <h1>Registration</h1>
      <form>
        <div class="inputbox">
          <input type="text" required="required">
          <span>Email</span>
        </div>
        <div class="inputbox">
          <input type="text" required="required">
          <span>Password</span>
        </div>
        <div class="regbox">
          <input type="button" value="Registration">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>

<style scoped lang="scss">
.main{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #05081D;
}

.center {
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
}
.center h1 {
  font-size: 2em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
}
.center .inputbox {
  position: relative;
  width: 400px;
  height: 50px;
  margin-bottom: 50px;
}
.center .inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  &:focus{
    border: 3px solid #6D32A5;
  }
}
.center .inputbox:last-child {
  margin-bottom: 0;
}
.center .inputbox span {
  position: absolute;
  top: 14px;
  color: black;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
.center .inputbox input:focus ~ span,
.center .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
.center .regbox [type="button"] {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 20px;
  border: #535c68;
}
.center .regbox:hover [type="button"] {
  background: linear-gradient(45deg, #05081D, #43BCCD);
}
</style>
