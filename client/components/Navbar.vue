<template>
    <div>
       <a href="#" class="logo"></a>
   <ul>
    <li style="--i:#a955ff;--j:#ea51ff;">
      <span class="icon">
        <ion-icon name="home-outline"></ion-icon>
      </span>
      <span class="title">Home</span>
    </li>
    <li style="--i:#56ccf2;--j:#2f80ed;">
      <span class="icon">
        <ion-icon name="chatbox-outline"></ion-icon>
      </span>
      <span class="title">Message</span>
    </li>
    <li style="--i:#ff9966;--j:#ff5e62;">
      <span class="icon">
        <ion-icon name="heart-outline"></ion-icon>
      </span>
      <span class="title">Favourite</span>
    </li>
    <li style="--i:#7ee8fa;--j:#16db65;">
      <span class="icon">
        <ion-icon name="call-outline"></ion-icon>
      </span>
      <span class="title">Call</span>
    </li>
    <li style="--i:#ffa9c6;--j:#f434e2;">
      <span class="icon">
        <ion-icon name="settings-outline"></ion-icon>
      </span>
      <span class="title">Settings</span>
    </li>
  </ul>
    </div>
</template>
<script>
export default {
    name : 'Navbar'
}
</script>
<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

ul {
  position: relative;
  display: flex;
  gap: 25px;
}

ul li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #ffff;
  box-shadow: 0 10px 25px rgb(0, 0, 0, 0.1);
  transition: 0.5s;
  cursor: pointer;
}

ul li:hover {
  width: 180px;
  box-shadow: 0 10px 25px rgb(0, 0, 0, 0);
}

ul li::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  border-radius: 60px;
  transition: 0.5s;
  background: linear-gradient(45deg, var(--i), var(--j));
}

ul li:hover::before {
  opacity: 1;
}

ul li::after {
  content: "";
  position: absolute;
  top: 10px;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  opacity: 0;
  transition: 0.5s;
  background: linear-gradient(45deg, var(--i), var(--j));
  filter: blur(15px);
  z-index: -1;
}

ul li:hover::after {
  opacity: 0.5;
}

ul li ion-icon {
  color: #777;
  font-size: 1.75em;
  transition: 0.5s;
  transition-delay: 0.25s;
}

ul li:hover ion-icon {
  color: #ffff;
  font-size: 1.75em;
  transform: scale(0);
  transition-delay: 0s;
}

ul li span {
  position: absolute;
}

ul li .title {
  color: #ffff;
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: scale(0);
  transition: 0.5s;
  transition-delay: 0s;
}

ul li:hover .title {
  transform: scale(1);
  transition-delay: 0.25s;
}
</style>