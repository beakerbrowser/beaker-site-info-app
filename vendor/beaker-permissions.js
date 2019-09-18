window.beakerPermissions=function(e){var r={};function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=e,a.c=r,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)a.d(t,s,function(r){return e[r]}.bind(null,s));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="",a(a.s=0)}([function(e,r){const a=/^[a-z0-9]{64}/i;r.PERMS={js:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!0,experimental:!1},network:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!0,experimental:!1},createDat:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},modifyDat:{persist:"allow",idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},deleteDat:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},media:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},geolocation:{persist:!1,idempotent:!0,alwaysDisallow:!0,requiresRefresh:!1,experimental:!1},notifications:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},midiSysex:{persist:!1,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},pointerLock:{persist:!1,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},fullscreen:{persist:!0,idempotent:!1,alwaysAllow:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},download:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},dangerousAppControl:{persist:!0,idempotent:!1,alwaysAllow:!1,requiresRefresh:!1,experimental:!1},openExternal:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!1},experimentalLibrary:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0},experimentalLibraryRequestAdd:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0},experimentalLibraryRequestRemove:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0},experimentalGlobalFetch:{persist:!0,idempotent:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0},experimentalDatPeers:{persist:!0,idempotent:!0,alwaysAllow:!0,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0},experimentalCapturePage:{persist:!1,idempotent:!1,alwaysDisallow:!1,requiresRefresh:!1,experimental:!0}},r.PERM_ICONS={js:"fas fa-code",network:"fas fa-cloud",createDat:"fas fa-folder-open",modifyDat:"fas fa-folder-open",deleteDat:"fas fa-folder-open",media:"fas fa-video",geolocation:"fas fa-map-marked",notifications:"fas fa-bell",midiSysex:"fas fa-headphones",pointerLock:"fas fa-mouse-pointer",fullscreen:"fas fa-arrows-alt",download:"fas fa-download",openExternal:"fas fa-external-link-alt",experimentalLibrary:"fas fa-book",experimentalLibraryRequestAdd:"fas fa-upload",experimentalLibraryRequestRemove:"fas fa-times",experimentalGlobalFetch:"fas fa-download",experimentalDatPeers:"fas fa-exchange-alt",experimentalCapturePage:"fas fa-camera",dangerousAppControl:"fas fa-flask"},r.renderPermDesc=function({html:e,bg:r,url:t,permId:s,permParam:i,permOpts:n}){const l=r?r.shellMenus||r.permPrompt:null,o=e=>r=>{r.preventDefault(),r.stopPropagation(),e=a.test(e)?`dat://${e}`:e,l?l.createTab(e):beaker.browser.openUrl(e,{setActive:!0})};switch(s){case"js":return"Run Javascript";case"media":return"Use your camera and microphone";case"geolocation":return"Know your location";case"notifications":return"Create desktop notifications";case"midiSysex":return"Access your MIDI devices";case"pointerLock":return"Lock your cursor";case"fullscreen":return"Go fullscreen";case"openExternal":return`Open this URL in another program: ${function(e,r=6){if(e.length>r+3)return e.slice(0,r)+"...";return e}(t,128)}`;case"experimentalLibrary":return"Read and modify your Library";case"experimentalDatPeers":return"Send and receive messages with peers";case"dangerousAppControl":return"Read and write your data, including bookmarks, archives, and files";case"network":return"*"===i?"Access the network freely":"contact "+i;case"download":return e`<span>Download ${n.filename}</span>`;case"createDat":return n.title?`Create a new Dat archive, "${n.title}"`:"Create a new Dat archive";case"modifyDat":return e`<span>Write files to <a @click=${o(i)}>${n.title}</a></span>`;case"deleteDat":return e`<span>Delete the archive <a @click=${o(i)}>${n.title}</a></span>`;case"experimentalLibraryRequestAdd":return e`<span>Seed <a @click=${o(i)}>${n.title}</a></span>`;case"experimentalLibraryRequestRemove":return e`<span>Stop seeding <a @click=${o(i)}>${n.title}</a></span>`;case"experimentalGlobalFetch":return e`<span>Fetch data from <a @click=${o(i)}>${i}</a></span>`;case"experimentalCapturePage":return e`<span>Take a screenshot of <a @click=${o(i)}>${i}</a></span>`}},r.getPermId=function(e){return e.split(":")[0]},r.getPermParam=function(e){return e.split(":").slice(1).join(":")}}]);