<template>
   <nav class="navbar">
            <ul>
                <button class="button-n"><li><NuxtLink to="home">Home</NuxtLink></li></button>
                <button class="button-n"><li><NuxtLink to="level">Levels</NuxtLink></li></button>
                <button class="button-n"><li><NuxtLink to="aboutus">About US</NuxtLink></li></button>
                <button class="button-n"><li><NuxtLink to="signup">Contact us</NuxtLink></li></button>
                <button class="button-n"><li><NuxtLink to="allcons">Conservatory</NuxtLink></li></button>
                <button class="button-n"><li><NuxtLink to="ecommerce">E-commerce</NuxtLink></li></button>
               
                <div class="search">
                    <input type="text" name="search" id="search" placeholder="Search this website"/>
                </div>
            </ul>
        </nav>
</template>
<script>
export default {
    name: 'navbar'
}
</script>
<style >
        .navbar{
            background-color: rgb(17, 14, 14);
            border-radius: 30px;
            
        }
        .navbar ul{
            overflow: auto;
        }
        .navbar li{
            float:left;
            list-style: none; 
            margin: 13px 20px;
            
        }
        .navbar li a{
            padding: 3px 3px;
            text-decoration: none;
            color: white;
        }
        .navbar li a:hover{
            color: rgb(243, 226, 226)
        }
        .search{
            float: right;
            color: white;
            padding: 12px 75px;
        }
        .navbar input{
            border: 2px solid black;
            border-radius: 14px;
            padding: 3px 17px;
            width: 129px;
        }
        .button-n {
  position: relative;
  width: 160px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: rgb(6, 1, 6);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  font-family: sans-serif;
}

.button-n:hover {
  position: relative;

  background-color: #161a3f;
  box-shadow: 0px 15px 20px #D3B1C2;
  color: white;
  transform: translateY(-7px);
}
</style>