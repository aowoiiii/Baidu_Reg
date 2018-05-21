var app = new Vue({
    el: '#app',
    data: {
        onfocus_name: false,
        onfocus_phone: false,
        onfocus_password: false,
        password: '',

    },
    methods: {
        display_tip_name: function () {
            this.onfocus_name = !this.onfocus_name
        },
        display_tip_phone: function () {
            this.onfocus_phone = !this.onfocus_phone
        },

        display_tip_password: function () {
            this.onfocus_password = !this.onfocus_password
        },

    }
})

