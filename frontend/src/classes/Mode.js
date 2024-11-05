class Mode {
    constructor(mainBG, navBG, navTxt, button, txt, card, card2) {
        this.mainBG = mainBG;
        this.navBG = navBG;
        this.navTxt = navTxt;
        this.button = button;
        this.txt = txt;
        this.card = card;
        this.card2 = card2;
    }
}
//                             mainbg      navbg       navtxt    button     maintxt     card        card2
export const light = new Mode('#FFFFFF', '#2E073F', '#FFFFFF', '#800080', '#000000', '#3f669133', '#3f679196');
export const dark = new Mode('#2E073F', '#FFFFFF', '#000000', '#f008f0', '#FFFFFF', '#7c7c7c51', '#53525251');