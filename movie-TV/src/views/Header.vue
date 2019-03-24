<template>
  <div class="header">
      <div class="navbar-header">
            <a class="navbar-brand" href="https://www.qubit.tv/inicio/">
                <img src="https://ringo.cdnar.net/assets/public/qubit/production/logo-qubit-azul.svg">
            </a>
      </div>
      <div class="navbar-right">
          <a href="https://ayuda.qubit.tv/hc/es" class="navbar__help-button btn">Ayuda</a>
      </div>
      
    <!-- <header id="m_header" class="m-grid__item m-header header">
        <div class="m-container m-container--fluid m-container--full-height">
            <div class="m-stack m-stack--ver m-stack--desktop">	
                <div class="iconsHeader" >                        
                    <a href="#" class="m-nav__link" @click="$router.go(-1)" style="margin: 0 auto;">
                        <i class="employeeInfo icon-Left"></i>
                    </a>
                </div>
                <div class="iconsHeader" > 
                    <router-link class="m-nav__link" style="margin: 0 auto;">
                        <i class="employeeInfo icon-Left"></i>
                    </router-link> 
                </div>
                <div class="title">
                    <span>{{title}}</span>
                    <div class="logout">
                        <svg width="25" height="25" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 1.95C0.5 1.1402 1.1429 0.5 1.88329 0.5H9.13208C9.87249 0.5 10.5154 1.14019 10.5154 1.95V5.44121C10.5154 5.50436 10.4642 5.55556 10.401 5.55556C10.3379 5.55556 10.2867 5.50436 10.2867 5.44121V1.95C10.2867 1.30307 9.79856 0.772222 9.13208 0.772222H1.88329C1.21685 0.772222 0.728699 1.30306 0.728699 1.95V14.05C0.728699 14.6969 1.21685 15.2278 1.88329 15.2278H9.13208C9.79856 15.2278 10.2867 14.6969 10.2867 14.05V10.5588C10.2867 10.4956 10.3379 10.4444 10.401 10.4444C10.4642 10.4444 10.5154 10.4956 10.5154 10.5588V14.05C10.5154 14.8598 9.87249 15.5 9.13208 15.5H1.88329C1.1429 15.5 0.5 14.8598 0.5 14.05V1.95Z" fill="white" stroke="white"/>
                            <path d="M4.99995 8.8877C4.72381 8.8877 4.49995 8.66384 4.49995 8.3877C4.49995 8.11155 4.72381 7.8877 4.99995 7.8877V8.8877ZM17.2881 8.8877H4.99995V7.8877H17.2881V8.8877Z" fill="white"/>
                            <path d="M13.1843 5.7728C12.9595 5.61245 12.9072 5.30021 13.0675 5.07539C13.2279 4.85057 13.5401 4.7983 13.7649 4.95865L13.1843 5.7728ZM17.7119 8.3878L18.0022 7.98073L18.573 8.3878L18.0022 8.79487L17.7119 8.3878ZM13.7649 11.8169C13.5401 11.9773 13.2279 11.925 13.0675 11.7002C12.9072 11.4754 12.9595 11.1631 13.1843 11.0028L13.7649 11.8169ZM13.7649 4.95865L18.0022 7.98073L17.4216 8.79487L13.1843 5.7728L13.7649 4.95865ZM18.0022 8.79487L13.7649 11.8169L13.1843 11.0028L17.4216 7.98073L18.0022 8.79487Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header> -->
  </div>
</template>

<script >
/* import { Component, Prop, Vue} from 'vue-property-decorator';
import axios from 'axios';
import Config from '@/config/index';
import swal from 'sweetalert2'; */

/* @Component({
  components: {
  },
}), */
export default {
    /* @Prop() private title!: string;
    @Prop() private backIcon!: string;
    @Prop() private logoutIcon!: string;
    logout(){
        let action_logout:any = this.$t('message.action_logout'); 
        let header_logout:any = this.$t('message.header_logout'); 
        let yes_logout_text:any = this.$t('message.yes_logout_text'); 
        let not_logout_text:any = this.$t('message.not_logout_text'); 
        swal({
            title: header_logout,
            text: action_logout,
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonColor: '#88A09E',
            confirmButtonColor: '#54CAA6',
            cancelButtonText: not_logout_text,
            confirmButtonText: yes_logout_text,
        }).then((result) => {
            if (result.value) {
                localStorage.jwt = '';
                axios.post(`${Config.TRCB_ADMIN_URL}/salir`, { withCredentials: true });
                this.$router.push('/login');
            }
        });
    } */
}
</script>

<style scoped lang="scss">
.header {
    position:fixed;
    /* height: 64px !important; */
    background-color: #001d3e;
    text-align:center;
    color:#fff;
    top: 0;
    z-index: 998;
    right: 0;
    left: 0;
}
.navbar-brand{
    width: 120px;
    display: inline-block;
    vertical-align: middle;
    padding: 11px 0;
}
.navbar-header{
    display: inline-block;
    margin-top: 0;
    left: 15px;
}
.navbar-right {
    padding: 15px 15px 0 0;
    width: 10%;
    height: 80%;
    display: inline-block;
    text-align: right;
    position: absolute;
    right: 10px
}
/* @import "./public/assets/scss/_config.scss";
.icon-Left:before {
    color: $white;
}
.iconsHeader {
    display: inline-block;
    position: absolute;
    top: 22px;
    left: 15px;
}
.title{
    width: 100%;
    display: inline-block;
    margin-top: 20px;
    span{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: 27px;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
    }
}
.logout{
    width: 10%;
    display: inline-block;
    margin-top: 0px;
    text-align: right;
    position: absolute;
    right: 10px
}
.swal2-title{
    font-size: 14px !important;
    color: $bluePrimary !important;
} */
</style>

