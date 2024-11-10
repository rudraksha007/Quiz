class Mode {
    constructor(mainBG, navBG, navTxt, button, txt, card, card2, submit, submit2) {
        this.mainBG = mainBG;
        this.navBG = navBG;
        this.navTxt = navTxt;
        this.button = button;
        this.txt = txt;
        this.card = card;
        this.card2 = card2;
        this.submit = submit
        this.submit2 = submit2;
    }
}
//                             mainbg      navbg       navtxt    button     txt        card        card2       submit      submit2
export const light = new Mode('#FFFFFF', '#000000', '#FFFFFF', '#00754b', '#000000', '#aca7cb', '#474554', '#628281', '#7ab71f');
export const dark = new Mode('#000000', '#FFFFFF', '#000000', '#00c9c8', '#FFFFFF', '#4b4a54', '#2a272a', '#506EE6', '#549914');