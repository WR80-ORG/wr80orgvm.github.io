window.WR80X = {
    openFile : function(store){
        return (new Promise((resolve,reject) => {
            var ele = document.createElement("input");
            ele.type = "file";
            ele.onchange = function(e){
                var files = e.srcElement.files;
                if(files.length!=1){
                    return reject("There must be just one file selected");
                }
                file = files[0];
                var reader = new FileReader();
                reader.readAsArrayBuffer(file);
                reader.onload = function (evt) {
                    const view = new Uint8Array(evt.target.result);
                    var address = 0;
                    var lst = [];
                    for(var g = 0 ; g < view.length ; g++){
                        var nummer = view[g].toString(16).toUpperCase();
                        var typoid = document.createElement("w80-opcode");
                        typoid.setAttribute("opcode",nummer);
                        typoid.setAttribute("address",address);
                        typoid.style.width="100vh";
                        typoid.style.display="block";
                        lst.push(typoid);
                        address++;
                    }
                    store.updatescheck(lst);
                    resolve();
                }
                reader.onerror = function (evt) {
                    return reject("Unable to load file");
                }
            };
            ele.oncancel = function(e){
                reject("File dialog canceled");
            };
            ele.click();
        }));
    },
    
};