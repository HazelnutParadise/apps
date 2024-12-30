// 文件：src/components/Navbar.vue
<template>
    <div id="navbar-placeholder"></div>
</template>

<script>
export default {
    name: 'Navbar',
    mounted() {
        this.loadNavbar();
    },
    methods: {
        loadNavbar() {
            fetch('https://src.hazelnut-paradise.com/navbar.html?content-type=text/html', {
                method: "GET"
            })
                .then(response => response.text())
                .then(html => {
                    this.$el.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading navbar:', error);
                });
        }
    }
}
</script>

<style scoped>
</style>
