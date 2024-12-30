<template>
  <NavBar></NavBar>
  <div id="thisPage">
    <div>
      <section>
        <div class="box">
          <div class="title">
            <h1>榛果繽紛樂 - 網頁App目錄</h1>
          </div>
          <div id="box2">
            <a v-for="app in apps" :key="app.id" :href="app.url">
              <div class="list">
                <div class="imgBox" style="margin-right: 15px;">
                  <img :src="app.imgSrc">
                </div>
                <div class="content">
                  <h2>{{ app.title }}</h2>
                  <p>{{ app.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

// 外部圖片使用 ref
import { ref } from 'vue';
const tsppPlusImage = ref('https://src.hazelnut-paradise.com/TSPPplus-logo.png');
const accountCenterImage = ref('https://src.hazelnut-paradise.com/AccountCenter-logo.png');
const ItemGlowImage = ref('https://src.hazelnut-paradise.com/ItemGlow-logo.png');
const dbPlaygroundImage = ref('https://src.hazelnut-paradise.com/dbPlayground-logo.png');
const mailImage = ref('https://src.hazelnut-paradise.com/mail-logo.png');
const siteImage = ref('https://src.hazelnut-paradise.com/HazelnutParadise-logo.png');
const AdminyXImage = ref('https://src.hazelnut-paradise.com/AdminyX-logo.png');

export default {
  name: "AppDirectory",
  components: {
    NavBar,
  },
  data() {
    return {
      apps: [
        {
          id: "tsppPlus",
          title: "TSPP+ 台股預言家",
          description: "使用先進AI科技預測股價",
          imgSrc: tsppPlusImage,
          url: "/tspp-plus",
        },
        {
          id: "dbPlayground",
          title: "DB Playground",
          description: "SQL練習神器",
          imgSrc: dbPlaygroundImage,
          url: "https://db-playground.hazelnut-paradise.com",
        },
        {
          id: "itemGlow",
          title: "ItemGlow",
          description: "專為電商賣家打造的商品照自動優化器",
          imgSrc: ItemGlowImage,
          url: "https://itemglow.hazelnut-paradise.com",
        },
        {
          id: "accountCenter",
          title: "登入/註冊/帳號中心",
          description: "管理您的帳號",
          imgSrc: accountCenterImage,
          url: "https://hazelnut-paradise.com/account",
        },
        {
          id: "mail",
          title: "網站信箱",
          description: "聯繫我們",
          imgSrc: mailImage,
          url: "/mail",
        },
        {
          id: "guessTheWeather",
          title: "天氣猜猜猜",
          description: "小遊戲",
          imgSrc: siteImage,
          url: "/guess-the-weather",
        },
        {
          id: "AdminyX",
          title: "AdminyX",
          description: "[管理員專用] 後台管理系統",
          imgSrc: AdminyXImage,
          url: "https://admin.hazelnut-paradise.com",
        },
        {
          id: "home",
          title: "回首頁",
          description: "回到 榛果繽紛樂 首頁",
          imgSrc: siteImage,
          url: "https://www.hazelnut-paradise.com",
        },
        // Add other apps here in similar fashion
      ],
    };
  },
};
</script>

<style scoped>
@import './app.css'
/* Add your CSS here. Remember to scope your styles if they're specific to this component */
</style>
