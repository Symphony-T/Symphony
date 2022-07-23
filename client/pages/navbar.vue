<template>
   <nav class="navbar">
       <li><NuxtLink to="home"><i class="gg-home-alt" id="homz"></i></NuxtLink></li>
            <ul>
                <li><NuxtLink to="allcons"><i class="gg-piano"></i></NuxtLink></li>
                <li><NuxtLink to="ecommerce"><i class="gg-shopping-cart"></i></NuxtLink></li>
                <li><NuxtLink to="level"><i class="gg-bolt"></i></NuxtLink></li>
                <li><NuxtLink to="aboutus"><i class="gg-info"></i></NuxtLink></li>
               
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
#homz{
    margin-right: 200px;
    margin-left: 0px;
}
        .navbar{
            background-color: rgb(0, 0, 0);
            border-radius: 10px;
            margin-left: 50px;
            margin-right: 50px;
        }
        .navbar ul{
            overflow: auto;
        }
        .navbar li{
            float:left;
            list-style: none; 
            margin-left: 150px;
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
            color: rgb(243, 243, 243);
            padding: 12px 75px;
            margin-top: 5px;
        }
        .navbar input{
            border: 2px solid black;
            border-radius: 8px;
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
.gg-home-alt {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 18px;
    height: 14px;
    border: 2px solid;
    border-top: 0;
    border-radius: 2px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: -2px
}
.gg-home-alt::after,
.gg-home-alt::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
}
.gg-home-alt::before {
    border-top: 2px solid;
    border-left: 2px solid;
    border-top-left-radius: 4px;
    transform: rotate(45deg);
    top: -5px;
    border-radius: 3px;
    width: 14px;
    height: 14px;
    left: 0
}
.gg-home-alt::after {
    width: 6px;
    height: 10px;
    background: currentColor;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    left: 4px;
    bottom: -2px
}
  .gg-piano {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 23px;
    height: 18px;
    border: 2px solid;
    border-radius: 2px
}
.gg-piano::after,
.gg-piano::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 10px;
    background: currentColor;
    box-shadow:
        5px 0 0,
        10px 0 0
}
.gg-piano::before {
    top: -2px;
    width: 3px;
    left: 3px
}
.gg-piano::after {
    width: 1px;
    bottom: -2px;
    left: 4px
}
.gg-shopping-cart {
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 21px;
    background:
        linear-gradient(
            to left,currentColor 12px,
            transparent 0)
            no-repeat -1px 6px/18px 2px,
        linear-gradient(
            to left,currentColor 12px,
            transparent 0)
            no-repeat 6px 14px/11px 2px,
        linear-gradient(
            to left,currentColor 12px,
            transparent 0)
            no-repeat 0 2px/4px 2px,
        radial-gradient(
            circle,currentColor 60%,
            transparent 40%)
            no-repeat 12px 17px/4px 4px,
        radial-gradient(
            circle,currentColor 60%,
            transparent 40%)
            no-repeat 6px 17px/4px 4px
}
.gg-shopping-cart::after,
.gg-shopping-cart::before {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 2px;
    height: 14px;
    background: currentColor;
    top: 2px;
    left: 4px;
    transform: skew(12deg)
}
.gg-shopping-cart::after {
    height: 10px;
    top: 6px;
    left: 16px;
    transform: skew(-12deg)
}
.gg-info {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 40px
}
.gg-info::after,
.gg-info::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    background: currentColor;
    left: 7px
}
.gg-info::after {
    bottom: 2px;
    height: 8px
}
.gg-info::before {
    height: 2px;
    top: 2px
}
.gg-bolt {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 6px;
    height: 21px
}
.gg-bolt::after,
.gg-bolt::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(30deg)
}
.gg-bolt::before {
    border-bottom: 12px solid;
    left: 0;
    top: 0
}
.gg-bolt::after {
    border-top: 12px solid;
    right: 0;
    bottom: 0
}
</style>