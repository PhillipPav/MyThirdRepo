const app = Vue.createApp({
    data() {
        return {
            showTitle: true
        }
    },
    methods: {
        toggleTitle() {
            if (!this.showTitle)
            {
                this.showCurrent()
            }
            this.showTitle = !this.showTitle
            
        },
        showCurrent() {
            document.getElementById("about").scrollIntoView()
        }
    }
});

app.mount('#app')

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}