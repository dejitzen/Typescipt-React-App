<template>
<div>
  <div class="container">
			<h1>URL Shortener</h1>
			<form action="/short" method="POST" >
				<label for="fullUrl">Enter Url Here: </label>
				<input
					required
					placeholder="www.example.com/sample"
					type="url"
					name="url"
					id="url"
					class="form"
				/>
				<button class="btn" enctype="application/x-www-form-urlencoded" type="submit">Shrink</button>
			</form>
		</div>
    <div class="table-container">
      <h3>Recent shortened URL-s</h3>
      <table class="styled-table">
      <thead>
        <tr>
           <th >#</th>
          <th >Full</th>
          <th>Short</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dat,index) in data" v-bind:key="dat._id"> 
          <td>{{index+1}}</td>
          <td>{{dat.full}}</td>
          <td>{{dat.short}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Main",
  data() {
      return {
        data: null,
      };
    },
    created: function() {
      axios
      .get('/fetch')
      .then(response => {this.data=response.data.results})
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  color:#40B27F;
  margin-bottom: 110px;
  font-size: 80px;
  margin-top: -70px;
}
h3{
  color:#40B27F;
  margin-bottom: 40px;
  font-size: 30px;
}
label{
  color: #32475B;
  font-size: 20px;
}
form{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
}
.form{
  height: 40px;
  width: 60%;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: 0;
   padding: 4px 7px;
   font-size: 20px;
     -moz-box-shadow: 2px 2px 3px #666;
  -webkit-box-shadow: 2px 2px 3px #666;
  box-shadow: 2px 2px 3px #666;
}
.btn{
  height: 50px;
  border-radius: 10px;
  outline: 0;
   padding: 4px 7px;
   font-size: 20px;
     -moz-box-shadow: 2px 2px 3px #666;
  -webkit-box-shadow: 2px 2px 3px #666;
  box-shadow: 2px 2px 3px #666;
  border: 1px solid #40B27F;
  background-color: #40B27F;
  cursor: pointer;
  color: white;
  transition-duration: 350ms;
}
.btn:hover{
background-color: #61d3a0;
  -moz-box-shadow: 2px 5px 7px #666;
  -webkit-box-shadow: 2px 5px 7px #666;
  box-shadow: 2px 5px 7px #666;
  border: 1px solid #61d3a0;
}
.table-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
   
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px !important; 
    overflow: hidden;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
    text-align: left;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}


</style>
