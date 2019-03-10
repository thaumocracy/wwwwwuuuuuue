new Vue ({
    el:'#app',
    data: {
        product:'Socks',
        description:"Very socky socks",
        link:"http://google.com",
        array: [],
    },
    methods : {
        changeInput : function (event) {
            this.description = event.target.value
        },
        makeRed : function (event) {
            this.product = 'Red SOcks'
        },
        makeNormal : function (event) {
            this.product = 'Just Socks'
        }
       }
})

