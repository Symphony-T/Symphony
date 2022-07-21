<template>
   <nav class="navbar">
            <ul>
                <li><NuxtLink to="home">Home</NuxtLink></li>
                <li><NuxtLink to="level">Levels</NuxtLink></li>
                <li><NuxtLink to="aboutus">About US</NuxtLink></li>
                <li><NuxtLink to="signup">Contact us</NuxtLink></li>
                <li><NuxtLink to="allcons">Conservatory</NuxtLink></li>
                <li><NuxtLink to="ecommerce">E-commerce</NuxtLink></li>
                <div class="search">
                    <input type="text" name="search" id="search" placeholder="Search this website"/>
                </div>
            </ul>
        </nav>
</template>
<script>
export default {}
</script>
<style >
        .navbar{
            background-color: black;
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
            color: red
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
</style>