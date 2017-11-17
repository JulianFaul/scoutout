<template>
  <div id="app">

    <ons-page>
      <header-top></header-top>
      <router-view/>
       <page-footer-nav></page-footer-nav>
    </ons-page>
  </div>
</template>



<script>
import PageFooterNav from "@/components/FooterNav.vue";
import HeaderTop from "@/components/HeaderTop.vue";

export default {
  name: "app",
  components: {
    HeaderTop,
    PageFooterNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
.button--material {
  position: relative;
  display: inline-block;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  line-height: normal;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 17px;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: auto;
  text-decoration: none;
  padding: 4px 10px;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0;
  color: #fff;
  vertical-align: middle;
  background-color: rgba(24,103,194,0.81);
  border: 0px solid currentColor;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  min-height: 36px;
  line-height: 36px;
  padding: 0px 16px;
  -webkit-transition: -webkit-box-shadow 0.2s ease;
  -moz-transition: box-shadow 0.2s ease;
  -o-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
  text-align: center;
  font-size: 14px;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  text-transform: uppercase;
  background-color: #009688;
  color: #ffffff;
  font-family: 'Roboto', 'Noto', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
}
.button--material:active {
  -webkit-box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.4);
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.4);
  background-color: #009688;
  opacity: 1;
}
.button--material:focus {
  outline: 0;
}
.button--material:disabled,
.button--material[disabled] {
  opacity: 0.5;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.text-input--material {
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  line-height: normal;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  vertical-align: top;
  outline: none;
  line-height: 1;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 17px;

  -webkit-font-smoothing: antialiased;
  color: #212121;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(1px, transparent), color-stop(1px, #afafaf));
  background-image: -webkit-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: -moz-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: -o-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: linear-gradient(to top, transparent 1px, #afafaf 1px);
  -webkit-background-size: 100% 2px;
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  border: none;
  padding-bottom: 2px;
  -webkit-border-radius: 0;
  border-radius: 0;
  height: 24px;
  -webkit-transform: translate3d(0, 0, 0);
}
.text-input--material__label {
  color: #afafaf;
  position: absolute;
  left: 0px;
  top: 2px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', 'Noto', sans-serif;
  pointer-events: none;
}
.text-input--material__label--active {
  color: #009688;
  -webkit-transform: translate(0, -75%) scale(0.75);
  -moz-transform: translate(0, -75%) scale(0.75);
  -ms-transform: translate(0, -75%) scale(0.75);
  -o-transform: translate(0, -75%) scale(0.75);
  transform: translate(0, -75%) scale(0.75);
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
  -webkit-transition: -webkit-transform 0.1s ease-in, color 0.1s ease-in;
  -moz-transition: -moz-transform 0.1s ease-in, color 0.1s ease-in;
  -o-transition: -o-transform 0.1s ease-in, color 0.1s ease-in;
  transition: transform 0.1s ease-in, color 0.1s ease-in;
}
.text-input--material:focus {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left bottom, left top, color-stop(1px, transparent), color-stop(1px, #afafaf));
  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: -moz-linear-gradient(#009688, #009688), -moz-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  background-image: linear-gradient(#009688, #009688), linear-gradient(to top, transparent 1px, #afafaf 1px);
  -webkit-animation: material-text-input-animate 0.3s forwards;
  -moz-animation: material-text-input-animate 0.3s forwards;
  -o-animation: material-text-input-animate 0.3s forwards;
  animation: material-text-input-animate 0.3s forwards;
}
.text-input--material::-webkit-input-placeholder {
  color: #afafaf;
  line-height: 20px;
}
.text-input--material::-moz-placeholder {
  color: #afafaf;
  line-height: 20px;
}
.text-input--material::-ms-input-placeholder {
  color: #afafaf;
  line-height: 20px;
}
.text-input--material:-ms-input-placeholder {
  color: #afafaf;
  line-height: 20px;
}
.text-input--material::-ms-clear {
  display: none;
}
@-moz-keyframes material-text-input-animate {
  0% {
    background-size: 0% 2px, 100% 2px;
  }
  100% {
    background-size: 100% 2px, 100% 2px;
  }
}
@-webkit-keyframes material-text-input-animate {
  0% {
    -webkit-background-size: 0% 2px, 100% 2px;
    background-size: 0% 2px, 100% 2px;
  }
  100% {
    -webkit-background-size: 100% 2px, 100% 2px;
    background-size: 100% 2px, 100% 2px;
  }
}
@-o-keyframes material-text-input-animate {
  0% {
    background-size: 0% 2px, 100% 2px;
  }
  100% {
    background-size: 100% 2px, 100% 2px;
  }
}
@keyframes material-text-input-animate {
  0% {
    -webkit-background-size: 0% 2px, 100% 2px;
    background-size: 0% 2px, 100% 2px;
  }
  100% {
    -webkit-background-size: 100% 2px, 100% 2px;
    background-size: 100% 2px, 100% 2px;
  }
}
.form-row {
  margin: 4px;
}

.width-full {
  width: 100%;
}

.width-half {
  width: 48.6%;
}

.lucent {
  opacity: 0.4;
}

.note {
  margin: 12px 8px;
  font-size: 13px;
}

.vspc {
  margin-top: 20px;
}

.formarea {
  width: 90%;
  margin: 50px auto 0px auto;
}

input[type=text],
input[type=password] {
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>
