function isEmpty(id) {
    return (document.getElementById(id).value.length == 0)
}

/** 
* @param {HTMLElement} target
*/
function login(user, pass, submit) {
    var target = document.getElementById(submit);
    if (isEmpty(user) || isEmpty(pass)) {
        alert("Please fill all the fields");
        return;
    }
    if (document.getElementById(user).textContent.includes(" ")) {
        alert("Username can't contain spaces");
        return;
    }
    target.value = "";
    target.style.backgroundImage = "url('/pics/loading.gif')"
    target.style.backgroundRepeat = "no-repeat";
    target.style.backgroundSize = "contain";
    target.style.backgroundPosition = "center";
    var body = {
        user: document.getElementById(user).value,
        pass: document.getElementById(pass).value
    }
    setTimeout(function () {
        fetch("http:localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" },
            mode: 'cors'
        }).then(async function (response) {
            if (response.status == 200) {
                let msg = await response.text();
                alert(msg);
            }
        }).finally(() => {
            target.style.backgroundImage = "none";
            target.value = "Login";
        })
    }, 2000);
};

export default login;