( function () {
    'use strict';
    
    var module = {
        options: [],
        header: [ navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera ],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser),
                location =  this.getLocation()
            
            return { os: os, browser: browser, location: location };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        },
        getLocation: function () {
            var lat = null;
            var long = null;
            if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition((position)=>{
               lat  = position.coords.latitude;
               long = position.coords.longitude;
                // posStatus.innerHTML='Location';
                // locInfo.innerHTML = `Latitude: ${lat}, Longitude: ${long}`;
                // locInfo.href = `https://www.openstreetmap.org/#map=19/${lat}  /${long}`;
               });

               return { latitude: lat, longitude: long, href:  `https://www.openstreetmap.org/#map=19/${lat}  /${long}`};

            }
         }
    };
    
    var e = module.init(),
    info = {
        os: {
            name: e.os.name,
            version:  e.os.version,
        },
        browser: {
            name: e.browser.name,
            version: e.browser.version
        },
        navigator: {
            userAgent: navigator.userAgent,
            appVersion: navigator.appVersion,
            platform: navigator.platform,
            navigator: navigator.vendor,
            language: navigator.location,
        },
        location: navigator.location
    };

    var obj = {
        access: []
    }
    obj.access.push(info);

    var json = JSON.stringify(obj);

    // var fs = require('fs');

    // fs.writeFile('access_file.json', json);

    // fs.readFile('access_file.json', 'utf8', function readFileCallback(err, data){
    //     if (err){
    //         console.log(err);
    //     } else {
    //     obj = JSON.parse(data); //now it an object
    //     obj.table.push(info); //add some data
    //     json = JSON.stringify(obj); //convert it back to json
    //     fs.writeFile('access_file.json', json, 'utf8', callback); // write it back 
    // }});

}());