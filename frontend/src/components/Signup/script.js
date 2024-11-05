function isEmpty(id) {
    return (document.getElementById(id).value.length == 0)
}

/** 
* @param {HTMLElement} target
*/
function signup(name, user, pass, target) {
    if (isEmpty(name) || isEmpty(user) || isEmpty(pass)) {
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
        name: document.getElementById('name').value,
        user: document.getElementById('user').value,
        pass: document.getElementById('pass').value
    }
    console.log(body);
    console.log(JSON.stringify(body));
    setTimeout(function () {
        fetch("/reg", {
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
            target.value = "Sign Up";
        })
    }, 2000);
}

export default signup;