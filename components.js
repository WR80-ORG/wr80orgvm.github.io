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
        newValue = newValue.padStart(3,"0");
        this.address_container.innerHTML = newValue;
    }else if(name=="opcode"){
        if(newValue.length==1){
            newValue = "0" + newValue;
        }
        var scri = "";
        this.opcode_container.style.color = "purple";
        switch(newValue){
            case "01":
                scri = "AND";
                this.arg_container.innerHTML = "R1";
                break;
            case "02":
                scri = "AND";
                this.arg_container.innerHTML = "R2";
                break;
            case "03":
                scri = "AND";
                this.arg_container.innerHTML = "R3";
                break;
            case "04":
                scri = "AND";
                this.arg_container.innerHTML = "R4";
                break;
            case "05":
                scri = "AND";
                this.arg_container.innerHTML = "R5";
                break;
            case "06":
                scri = "AND";
                this.arg_container.innerHTML = "R6";
                break;
            case "07":
                scri = "AND";
                this.arg_container.innerHTML = "R7";
                break;
            case "0E":
                scri = "CDR";
                break;
            case "11":
                scri = "OR";
                this.arg_container.innerHTML = "R1";
                break;
            case "12":
                scri = "OR";
                this.arg_container.innerHTML = "R2";
                break;
            case "13":
                scri = "OR";
                this.arg_container.innerHTML = "R3";
                break;
            case "14":
                scri = "OR";
                this.arg_container.innerHTML = "R4";
                break;
            case "15":
                scri = "OR";
                this.arg_container.innerHTML = "R5";
                break;
            case "16":
                scri = "OR";
                this.arg_container.innerHTML = "R6";
                break;
            case "17":
                scri = "OR";
                this.arg_container.innerHTML = "R7";
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
            case "21":
                scri = "NOT";
                this.arg_container.innerHTML = "R1";
                break;
            case "22":
                scri = "NOT";
                this.arg_container.innerHTML = "R2";
                break;
            case "23":
                scri = "NOT";
                this.arg_container.innerHTML = "R3";
                break;
            case "24":
                scri = "NOT";
                this.arg_container.innerHTML = "R4";
                break;
            case "25":
                scri = "NOT";
                this.arg_container.innerHTML = "R5";
                break;
            case "26":
                scri = "NOT";
                this.arg_container.innerHTML = "R6";
                break;
            case "27":
                scri = "NOT";
                this.arg_container.innerHTML = "R7";
                break;
            case "28":
                scri = "PUSHD";
                break;
            case "2A":
                scri = "SBW";
                break;
            case "2F":
                scri = "RET";
                break;
            case "31":
                scri = "XOR";
                this.arg_container.innerHTML = "R1";
                break;
            case "32":
                scri = "XOR";
                this.arg_container.innerHTML = "R2";
                break;
            case "33":
                scri = "XOR";
                this.arg_container.innerHTML = "R3";
                break;
            case "34":
                scri = "XOR";
                this.arg_container.innerHTML = "R4";
                break;
            case "35":
                scri = "XOR";
                this.arg_container.innerHTML = "R5";
                break;
            case "36":
                scri = "XOR";
                this.arg_container.innerHTML = "R6";
                break;
            case "37":
                scri = "XOR";
                this.arg_container.innerHTML = "R7";
                break;
            case "40":
                scri = "ADD";
                this.arg_container.innerHTML = "R0";
                break;
            case "41":
                scri = "ADD";
                this.arg_container.innerHTML = "R1";
                break;
            case "42":
                scri = "ADD";
                this.arg_container.innerHTML = "R2";
                break;
            case "43":
                scri = "ADD";
                this.arg_container.innerHTML = "R3";
                break;
            case "44":
                scri = "ADD";
                this.arg_container.innerHTML = "R4";
                break;
            case "45":
                scri = "ADD";
                this.arg_container.innerHTML = "R5";
                break;
            case "46":
                scri = "ADD";
                this.arg_container.innerHTML = "R6";
                break;
            case "47":
                scri = "ADD";
                this.arg_container.innerHTML = "R7";
                break;
            case "48":
                scri = "POP";
                this.arg_container.innerHTML = "R0";
                break;
            case "51":
                scri = "SUB";
                this.arg_container.innerHTML = "R1";
                break;
            case "52":
                scri = "SUB";
                this.arg_container.innerHTML = "R2";
                break;
            case "53":
                scri = "SUB";
                this.arg_container.innerHTML = "R3";
                break;
            case "54":
                scri = "SUB";
                this.arg_container.innerHTML = "R4";
                break;
            case "55":
                scri = "SUB";
                this.arg_container.innerHTML = "R5";
                break;
            case "56":
                scri = "SUB";
                this.arg_container.innerHTML = "R6";
                break;
            case "57":
                scri = "SUB";
                this.arg_container.innerHTML = "R7";
                break;
            case "89":
                scri = "MUL";
                this.arg_container.innerHTML = "R1";
                break;
            case "8A":
                scri = "MUL";
                this.arg_container.innerHTML = "R2";
                break;
            case "8B":
                scri = "MUL";
                this.arg_container.innerHTML = "R3";
                break;
            case "8C":
                scri = "MUL";
                this.arg_container.innerHTML = "R4";
                break;
            case "8D":
                scri = "MUL";
                this.arg_container.innerHTML = "R5";
                break;
            case "8E":
                scri = "MUL";
                this.arg_container.innerHTML = "R6";
                break;
            case "8F":
                scri = "MUL";
                this.arg_container.innerHTML = "R7";
                break;
            case "99":
                scri = "DIV";
                this.arg_container.innerHTML = "R1";
                break;
            case "9A":
                scri = "DIV";
                this.arg_container.innerHTML = "R2";
                break;
            case "9B":
                scri = "DIV";
                this.arg_container.innerHTML = "R3";
                break;
            case "9C":
                scri = "DIV";
                this.arg_container.innerHTML = "R4";
                break;
            case "9D":
                scri = "DIV";
                this.arg_container.innerHTML = "R5";
                break;
            case "9E":
                scri = "DIV";
                this.arg_container.innerHTML = "R6";
                break;
            case "9F":
                scri = "DIV";
                this.arg_container.innerHTML = "R7";
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
        sty.innerHTML = ".marked { background-color: pink;} section { width: 100%; } w80-opcode { width: 100%} table{ width: 100%} fieldset{ overflow-y: scroll; height: 300px;}";
        this.shadow.appendChild(sty);


        var basetable = document.createElement("table");
        this.shadow.appendChild(basetable);
        var baserow = document.createElement("tr");
        var cellleft = document.createElement("td");
        cellleft.style.width="70%";
        baserow.appendChild(cellleft);
        var cellright = document.createElement("td");
        baserow.appendChild(cellright);
        basetable.appendChild(baserow);


        var lod = document.createElement("fieldset");
        var leg = document.createElement("legend");
        leg.innerHTML = "Program";
        lod.appendChild(leg);
        cellleft.appendChild(lod);

        for(var r = 0 ; r < nodes.length ; r++){
            var th = document.createElement("section");
            th.appendChild(nodes[r]);
            lod.appendChild(th);
        }
        this.setAttribute("nodecount", nodes.length);
        this.setAttribute("pc", -1);

        var lod = document.createElement("fieldset");
        var leg = document.createElement("legend");
        leg.innerHTML = "CPU state";
        lod.appendChild(leg);


        var rega = document.createElement("table");
        lod.appendChild(rega);
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.innerHTML = "Name";
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.innerHTML = "Value";
        row.appendChild(cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Private Registers";
        cell.style.fontWeight="bold";
        row.appendChild(cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Instruction Register";
        row.appendChild(cell);
        this.ir_cell = document.createElement("td");
        this.ir_cell.innerHTML = "0";
        row.appendChild(this.ir_cell);
        rega.appendChild(row);

        var opcode = parseInt(this.ir_cell.innerHTML,16);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "- IR opcode";
        row.appendChild(cell);
        this.ir_op_cell = document.createElement("td");
        this.ir_op_cell.innerHTML = (opcode & 0xF).toString(16).toUpperCase();
        row.appendChild(this.ir_op_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "- IR extension";
        row.appendChild(cell);
        this.ir_ex_cell = document.createElement("td");
        this.ir_ex_cell.innerHTML = ((opcode & 0x10)>>4).toString(16).toUpperCase();
        row.appendChild(this.ir_ex_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "- IR registers";
        row.appendChild(cell);
        this.ir_rg_cell = document.createElement("td");
        this.ir_rg_cell.innerHTML = ((opcode & 0xE0)>>5).toString(16).toUpperCase();
        row.appendChild(this.ir_rg_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Result Register";
        row.appendChild(cell);
        this.rr_cell = document.createElement("td");
        this.rr_cell.innerHTML = "-1";
        row.appendChild(this.rr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Program Counter";
        row.appendChild(cell);
        this.ip_cell = document.createElement("td");
        this.ip_cell.innerHTML = "-1";
        row.appendChild(this.ip_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Jump Register";
        row.appendChild(cell);
        this.jr_cell = document.createElement("td");
        this.jr_cell.innerHTML = "0";
        row.appendChild(this.jr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Stack Transfer High Register";
        row.appendChild(cell);
        this.sthr_cell = document.createElement("td");
        this.sthr_cell.innerHTML = "0";
        row.appendChild(this.sthr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Stack Transfer Low Register";
        row.appendChild(cell);
        this.stlr_cell = document.createElement("td");
        this.stlr_cell.innerHTML = "0";
        row.appendChild(this.stlr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Interrupt Special Register";
        row.appendChild(cell);
        this.isr_cell = document.createElement("td");
        this.isr_cell.innerHTML = "0";
        row.appendChild(this.isr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "P2 Interrupt Data Register";
        row.appendChild(cell);
        this.p2l_cell = document.createElement("td");
        this.p2l_cell.innerHTML = "0";
        row.appendChild(this.p2l_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Public Registers";
        cell.style.fontWeight="bold";
        row.appendChild(cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Stack Pointer";
        row.appendChild(cell);
        this.sp_cell = document.createElement("td");
        this.sp_cell.innerHTML = "0";
        row.appendChild(this.sp_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Base Pointer";
        row.appendChild(cell);
        this.bp_cell = document.createElement("td");
        this.bp_cell.innerHTML = "0";
        row.appendChild(this.bp_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Data Register";
        row.appendChild(cell);
        this.dr_cell = document.createElement("td");
        this.dr_cell.innerHTML = "0";
        row.appendChild(this.dr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Status Register";
        row.appendChild(cell);
        this.sr_cell = document.createElement("td");
        this.sr_cell.innerHTML = "0";
        row.appendChild(this.sr_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 0";
        row.appendChild(cell);
        this.r0_cell = document.createElement("td");
        this.r0_cell.innerHTML = "0";
        row.appendChild(this.r0_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 1";
        row.appendChild(cell);
        this.r1_cell = document.createElement("td");
        this.r1_cell.innerHTML = "0";
        row.appendChild(this.r1_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 2";
        row.appendChild(cell);
        this.r2_cell = document.createElement("td");
        this.r2_cell.innerHTML = "0";
        row.appendChild(this.r2_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 3";
        row.appendChild(cell);
        this.r3_cell = document.createElement("td");
        this.r3_cell.innerHTML = "0";
        row.appendChild(this.r3_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 4";
        row.appendChild(cell);
        this.r4_cell = document.createElement("td");
        this.r4_cell.innerHTML = "0";
        row.appendChild(this.r4_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 5";
        row.appendChild(cell);
        this.r5_cell = document.createElement("td");
        this.r5_cell.innerHTML = "0";
        row.appendChild(this.r5_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 6";
        row.appendChild(cell);
        this.r6_cell = document.createElement("td");
        this.r6_cell.innerHTML = "0";
        row.appendChild(this.r6_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "User Register 7";
        row.appendChild(cell);
        this.r7_cell = document.createElement("td");
        this.r7_cell.innerHTML = "0";
        row.appendChild(this.r7_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 0";
        row.appendChild(cell);
        this.p0_cell = document.createElement("td");
        this.p0_cell.innerHTML = "0";
        row.appendChild(this.p0_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 1";
        row.appendChild(cell);
        this.p1_cell = document.createElement("td");
        this.p1_cell.innerHTML = "0";
        row.appendChild(this.p1_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 2";
        row.appendChild(cell);
        this.p2_cell = document.createElement("td");
        this.p2_cell.innerHTML = "0";
        row.appendChild(this.p2_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 3";
        row.appendChild(cell);
        this.p3_cell = document.createElement("td");
        this.p3_cell.innerHTML = "0";
        row.appendChild(this.p3_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 4";
        row.appendChild(cell);
        this.p4_cell = document.createElement("td");
        this.p4_cell.innerHTML = "0";
        row.appendChild(this.p4_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 5";
        row.appendChild(cell);
        this.p5_cell = document.createElement("td");
        this.p5_cell.innerHTML = "0";
        row.appendChild(this.p5_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 6";
        row.appendChild(cell);
        this.p6_cell = document.createElement("td");
        this.p6_cell.innerHTML = "0";
        row.appendChild(this.p6_cell);
        rega.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = "Port Register 7";
        row.appendChild(cell);
        this.p7_cell = document.createElement("td");
        this.p7_cell.innerHTML = "0";
        row.appendChild(this.p7_cell);
        rega.appendChild(row);

        cellright.appendChild(lod);
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
        this.setAttribute("pc", (Number(parseInt(this.getAttribute("pc"),16))+1).toString(16).padStart(3,"0").toUpperCase());
        this.ip_cell.innerHTML = this.getAttribute("pc");
        var deze = this.grabInstruction(this.getAttribute("pc"));
        if(mark){
            var pickednode = this.shadow.querySelectorAll("w80-opcode.marked");
            for(var i = 0 ; i < pickednode.length ; i++){
                pickednode[i].classList.remove("marked");
            }
            deze.classList.add("marked");
        }
        this.ir_cell.innerHTML = deze.getAttribute("opcode").padStart(2,"0");
        var opcode = parseInt(this.ir_cell.innerHTML,16);
        this.ir_op_cell.innerHTML = (opcode & 0xF).toString(16).toUpperCase();
        this.ir_ex_cell.innerHTML = ((opcode & 0x10)>>4).toString(16).toUpperCase();
        this.ir_rg_cell.innerHTML = ((opcode & 0xE0)>>5).toString(16).toUpperCase();
        return deze;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
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