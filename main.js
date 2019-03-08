const app = new Vue ({
    el:'#app',
    data: {
        product:'Socks',
        description:"Very socky socks",
    },
    methods : {
        changeInput : function (event) {
            this.description = event.target.value
        }
       }
})

