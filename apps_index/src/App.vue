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

<script setup>
import NavBar from "./components/Navbar.vue";
import { ref } from 'vue';

// 圖片 URLs
const accountCenterImage = 'https://src.hazelnut-paradise.com/AccountCenter-logo.png';
const ItemGlowImage = 'https://src.hazelnut-paradise.com/ItemGlow-logo.png';
const dbPlaygroundImage = 'https://src.hazelnut-paradise.com/dbPlayground-logo.png';
const gmapsReviewsImage = 'https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png';
const mailImage = 'https://src.hazelnut-paradise.com/mail-logo.png';
const siteImage = 'https://src.hazelnut-paradise.com/HazelnutParadise-logo.png';
const storeCoachImage = 'https://src.hazelnut-paradise.com/StoreCoach-logo.png';
const linebotrmImage = 'https://src.hazelnut-paradise.com/LineRMManager.png';

// 應用程式列表
const apps = ref([
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
    id: "gmapsReviews",
    title: "估咩評論小扒手🫳",
    description: "輕鬆爬取 Google Maps 商家評論",
    imgSrc: gmapsReviewsImage,
    url: "https://gmaps-reviews.hazelnut-paradise.com",
  },
  {
    id: "storeCoach",
    title: "StoreCoach 商店教練",
    description: "專為店家提供的智慧分析",
    imgSrc: storeCoachImage,
    url: "https://storecoach.hazelnut-paradise.com",
  },
  {
    id: "linebotrm",
    title: "LINE Bot Rich Menu Manager",
    description: "輕鬆管理您的 LINE Bot Rich Menu",
    imgSrc: linebotrmImage,
    url: "https://linebotrm.hazelnut-paradise.com",
  },
  // {
  //   id: "accountCenter",
  //   title: "登入/註冊/帳號中心",
  //   description: "管理您的帳號",
  //   imgSrc: accountCenterImage,
  //   url: "https://hazelnut-paradise.com/account",
  // },
  {
    id: "home",
    title: "回首頁",
    description: "回到 榛果繽紛樂 首頁",
    imgSrc: siteImage,
    url: "https://www.hazelnut-paradise.com",
  },
]);
</script>

<style scoped>
@import './app.css'
</style>
