const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
        randomEmail: "",
      }
    },
    
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(resp => {
            this.randomEmail = resp.data.response;
            this.emails.push(this.randomEmail);
            });          
        }
    }
  }).mount('#app')