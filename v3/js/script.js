const form = document.querySelector("#login-form")

form.addEventListener("submit", function (event){
    event.preventDefault()
    grecaptcha.ready(function() {
        grecaptcha.execute('<public-key>', {action: 'login'}).then(function(token) {
            let recaptchaResponse = document.getElementById("recaptchaResponse")
            recaptchaResponse.value = token

            const xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText)
                }
            }

            xhttp.open("POST", "/560460/reCaptcha/v3/login.php", true)
            xhttp.send(new FormData(form))
        })
    })
})