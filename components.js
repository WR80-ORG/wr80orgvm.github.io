// Create a class for the element
class W80Opcode extends HTMLElement {
  static observedAttributes = ["address", "opcode", "arg1"];

  constructor() {
    // Always call super first in constructor
    super();
    const shadow = this.attachShadow({ mode: "open" });
    // console.log("Custom element created",this);
    this.address_container = document.createElement("b");
    this.address_container.style.color = "gray";
    this.address_container.style.fontWeight = "bold";
    shadow.appendChild(this.address_container);

    this.opcode_container = document.createElement("b");
    this.opcode_container.style.color = "purple";
    this.opcode_container.style.fontWeight = "bold";
    this.opcode_container.style.marginLeft = "10px";
    shadow.appendChild(this.opcode_container);

    this.arg_container = document.createElement("b");
    this.arg_container.style.color = "blue";
    this.arg_container.style.fontWeight = "bold";
    this.arg_container.style.marginLeft = "10px";
    shadow.appendChild(this.arg_container);

    var sty = document.createElement("style");
    sty.innerHTML = ":host(:hover){background-color:lightgray;} :host{padding:3px;font-family: monospace;}";
    shadow.appendChild(sty);
  }

  connectedCallback() {
    // console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    // console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    // console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    // console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(`Attribute ${name} has changed.`);
    if(name==="address"){
        while(newValue.length<5)
        {
            newValue = "0" + newValue;
        }
        this.address_container.innerHTML = newValue;
    }else if(name=="opcode"){
        if(newValue.length==1){
            newValue = "0" + newValue;
        }
        var scri = "";
        this.opcode_container.style.color = "purple";
        switch(newValue){
            case "0E":
                scri = "CDR";
                break;
            case "18":
                scri = "PUSHB";
                break;
            case "19":
                scri = "POPB";
                break;
            case "1A":
                scri = "PUSHS";
                break;
            case "1D":
                scri = "ABP";
                break;
            case "28":
                scri = "PUSHD";
                break;
            case "2F":
                scri = "SBW";
                break;
            case "40":
                scri = "ADD";
                this.arg_container.innerHTML = "R0";
                break;
            case "48":
                scri = "POP";
                this.arg_container.innerHTML = "R0";
                break;
            default:
                if(newValue.startsWith("6")){
                    scri = "ST";
                    this.arg_container.innerHTML = newValue.charAt(1);
                }else{
                    scri = newValue;
                    this.opcode_container.style.color = "red";
                }
        }
        this.opcode_container.innerHTML = scri;
    }
  }
}

class W80Casette extends HTMLElement {

    constructor(){
        super();
        
    }

    updatescheck(nodes){
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.innerHTML = "";
        var sty = document.createElement("style");
        sty.innerHTML = ".marked { background-color: pink}";
        this.shadow.appendChild(sty);

        for(var r = 0 ; r < nodes.length ; r++){
            var th = document.createElement("section");
            th.appendChild(nodes[r]);
            this.shadow.appendChild(th);
        }
        this.setAttribute("nodecount", nodes.length);
        this.setAttribute("pc", -1);
    }

    grabInstruction(where){
        var pickednode = this.shadow.querySelectorAll("w80-opcode[address='"+where+"']");
        if(pickednode.length!=1){
            throw new Error("Cant grab instruction " + where);
        }
        pickednode = pickednode[0];
        return pickednode;
    }

    nextInstruction(mark){
        if(this.shadow===undefined){
            window.alert("No program loaded. Please load a program first from the cardridge menu.");
            return;
        }
        this.setAttribute("pc", Number(this.getAttribute("pc"))+1);
        var deze = this.grabInstruction(this.getAttribute("pc"));
        if(mark){
            var pickednode = this.shadow.querySelectorAll("w80-opcode.marked");
            for(var i = 0 ; i < pickednode.length ; i++){
                pickednode[i].classList.remove("marked");
            }
            deze.classList.add("marked");
        }
        return deze;
    }
}

class W80Button extends HTMLElement {
  static observedAttributes = ["label", "icon", "onclick"];

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        // console.log("Custom element created",this);
        const styleurl = document.createElement("link");
        styleurl.setAttribute("rel","stylesheet");
        styleurl.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
        shadow.appendChild(styleurl);
        const style = document.createElement("style");
        style.innerHTML = ".buttonicon { font-size: 50px; } \nbutton{width: 100px;height: 100px;font-size: 20px;border: solid lightblue 1px;background: linear-gradient(aliceblue,lightblue,aliceblue);}\\nbutton:hover{background: linear-gradient(lightblue,aliceblue,lightblue);border: solid blue 1px;cursor: pointer;}";
        shadow.appendChild(style);
        this.base_button = document.createElement("button");
        this.icontag = document.createElement("i");
        this.icontag.classList.add("buttonicon");
        this.icontag.classList.add("bi");
        this.base_button.appendChild(this.icontag);
        this.base_button.appendChild(document.createElement("br"));
        this.labeltag = document.createElement("span");
        this.base_button.appendChild(this.labeltag);
        shadow.appendChild(this.base_button);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Attribute ${name} has changed.`);
        if(name==="label"){
            this.labeltag.innerHTML = newValue;
        }else if(name==="icon"){
            this.icontag.className = "buttonicon bi " + newValue;
        }
    }
}

customElements.define("w80-opcode", W80Opcode);
customElements.define("w80-casette", W80Casette);
customElements.define("w80-button", W80Button);