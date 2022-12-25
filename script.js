regBtn.addEventListener('click', () => {
    regBtn.style = 'animation: regDown .5s forwards;';
    document.querySelector('.reg-box').style = `
    width: 48vh;`;
    setTimeout(() => {
        signUpBtnSpan.textContent = 'Done';
        document.querySelector('.reg-form ').style = 'opacity: 1;';
    },50)
})

autorisBtn.addEventListener('click', () => {
    autorisBtn.style = 'animation: autorisDown .5s forwards;';
    document.querySelector('.autoris-box').style = `
    width: 48vh;`;
    setTimeout(() => {
        signInBtnSpan.textContent = 'Done';
        document.querySelector('.log-form ').style = 'opacity: 1;';
    },50)
})

//reg login legend
regInp.onfocus = () => {
    regInpLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
}
regInp.onblur = () => {
    if (regInp.value) {
        regInpLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
    }
    else {
        regInpLegend.style = 'margin-top: 9%; color: rgb(74, 41, 134);'
    }
}

//reg mail legend
regMail.onfocus = () => {
    regMailLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
}
regMail.onblur = () => {
    if (regMail.value) {
        regMailLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
    }
    else {
        regMailLegend.style = 'margin-top: 9%; color: rgb(74, 41, 134);'
    }
}

//reg password legend
regPass.onfocus = () => {
    regPassLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
}
regPass.onblur = () => {
    if (regPass.value) {
        regPassLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
    }
    else {
        regPassLegend.style = 'margin-top: 9%; color: rgb(74, 41, 134);'
    }
}



//log login legend
logInp.onfocus = () => {
    logInpLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
}
logInp.onblur = () => {
    if (logInp.value) {
        logInpLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
    }
    else {
        logInpLegend.style = 'margin-top: 9%; color: rgb(74, 41, 134);'
    }
}

//log password legend
logPass.onfocus = () => {
    logPassLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
}
logPass.onblur = () => {
    if (logPass.value) {
        logPassLegend.style = 'margin-top: 2%; color: rgb(105, 8, 129);'
    }
    else {
        logPassLegend.style = 'margin-top: 9%; color: rgb(74, 41, 134);'
    }
}