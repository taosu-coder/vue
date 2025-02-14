Vue.component("swiperItem", {
    template: `
    <div class="swiper-slide">
        <slot></slot>
    </div>
    `
})
Vue.component("swiper", {
    props: {
        loop: {
            type: Boolean,
            default: true
        }
    },
    template: `
<div class="swiper taosu">
    <div class="swiper-wrapper">
       <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
</div>`,
    mounted() {
        console.log("mounted")
        new Swiper(".swiper", {
            // direction: 'vertical', // 垂直切换选项
            loop: this.loop, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    destroyed() {
        console.log("destroyed")
    }
})
