class Mode {
    constructor(mainBG, navBG, navTxt, button, txt, card) {
        this.mainBG = mainBG;
        this.navBG = navBG;
        this.navTxt = navTxt;
        this.button = button;
        this.txt = txt;
        this.card = card
    }
}
//                             mainbg      navbg       navtxt    button     maintxt     cardsbg
export const light = new Mode('#FFFFFF', '#2E073F', '#FFFFFF', '#800080', '#000000', '#f0e8e8');
export const dark = new Mode('#2E073F', '#FFFFFF', '#000000', '#f008f0', '#FFFFFF', '#420d58');