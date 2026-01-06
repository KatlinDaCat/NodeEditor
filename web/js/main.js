const G = {};

function InitMenuBar() {
    G.menuBar = new HTMLDivElement();
    
}

function NEInit() {
    InitMenuBar();
}

function NEInject(divID) {
    G.NEDiv = document.getElementById(divID);
    NEInit();
}