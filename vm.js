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
                    window.WR80X.parseOpenFileResult(evt.target.result,store);
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
    openURL : function(store,url){
        return (new Promise((resolve,reject) => {
            fetch(url).then(response => {
                if(!response.ok){
                    return reject("Unable to fetch file");
                }
                return response.arrayBuffer();
            }).then(buffer => {
                window.WR80X.parseOpenFileResult(buffer,store);
                resolve();
            }).catch(err => {
                return reject("Unable to fetch file");
            });
        }));
    },
    fetchGitHubContents: function(store){
        return new Promise((resolve,reject) => {
            fetch("https://api.github.com/repos/WR80-ORG/WR80X-Development-Kit/contents/WDK1.0.0/Assemblers/examples").then(response => {
                if(!response.ok){
                    return reject("Unable to fetch GitHub contents");
                }
                return response.json();
            }).then(data => {
                if(!Array.isArray(data)){
                    return reject("Invalid data format received from GitHub");
                }
                var lst = [];
                data.forEach(item => {
                    if(item.type === "file" && item.name.endsWith(".bin")){
                        var link = document.createElement("a");
                        link.href = item.download_url;
                        link.textContent = item.name;
                        link.onclick = function(e){
                            e.preventDefault();
                            window.WR80X.openURL(store, item.href);
                        };
                        lst.push(link);
                    }
                });
                resolve(lst);
            }).catch(err => {
                return reject("Error fetching GitHub contents: " + err.message);
            });
        });
    },
    parseOpenFileResult: function(buffer,store){
        const view = new Uint8Array(buffer);
        var address = 0;
        var lst = [];
        for(var g = 0 ; g < view.length ; g++){
            var nummer = view[g].toString(16).toUpperCase();
            var typoid = document.createElement("w80-opcode");
            typoid.setAttribute("opcode",nummer);
            typoid.setAttribute("address",address.toString(16).toUpperCase().padStart(3,"0"));
            typoid.style.width="100%";
            typoid.style.display="block";
            lst.push(typoid);
            address++;
        }
        store.updatescheck(lst);
    }
    
};