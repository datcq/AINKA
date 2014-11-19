//1.6.0.0
$(function () {
    var switchPrez = new switchPresentation();
    switchPrez.init();
});

var switchPresentation = function () {
};

switchPresentation.prototype = {
    init: function () {
        this.otherLibs = [];
        this.otherPrezs = [];
        this.selectedLibs = [];
        this.selectedPrezs = [];
        this.libraryType = "selected";
        this.prezType = "selected";
        this.curOtherLib = "";
        this.curOtherPrez = "";
        this.curSelectLib = "";
        this.curSelectPrez = "";
        this.prezSelected = "";
        var thisObj = this;
        // get localstorage
        var data = localStorage.getItem("content/infos/meeting");
        if (data) {
            data = eval("(" + data + ")");
            this.prezSelected = data.current_presentation.id;
            this.otherLibs = data.presentations.otherLibs;
            this.otherPrezs = data.presentations.otherPrezs;
            this.selectedLibs = data.presentations.selectedLibs;
            this.selectedPrezs = data.presentations.selectedPrezs;
            this.getItem(thisObj.selectedPrezs, 'presentation', "select_prezs");
            this.getItem(thisObj.otherPrezs, 'presentation', "other_prezs");
            this.getItem(thisObj.selectedLibs, 'library', "select_libraries");
            this.getItem(thisObj.otherLibs, 'library', "other_libraries");
        }

        this.render();
        this.addActionListeners();
    },
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    render: function () {
        var other_lables = (localStorage.getItem("other_label") == undefined) ? ["Selected", "Other"] : localStorage.getItem("other_label").split("|");
        this.seg = {
            id: "segmented_001",
            numberOfSegments: 2,
            titlesOfSegments: [other_lables[0], other_lables[1]],
            selectedSegment: 2,
            container: "#stackpanel_01"
        };

        this.seg2 = {
            id: "segmented_002",
            numberOfSegments: 2,
            titlesOfSegments: [other_lables[0], other_lables[1]],
            selectedSegment: 2,
            container: "#stackpanel_02"
        };

        $("#st1").UICreateSegmentedControl(this.seg);
        $("#st2").UICreateSegmentedControl(this.seg2);

        $("#sv1 segmentedcontrol").setAttribute("ui-selected-index", 0);
        $("#sv2 segmentedcontrol").setAttribute("ui-selected-index", 0);

        $("#sv1 segmentedcontrol uibutton:first-child").addClass("selected");
        $("#sv2 segmentedcontrol uibutton:first-child").addClass("selected");

        var titles = (localStorage.getItem("atitle") == undefined) ? ["Presentations", "Libraries"] : localStorage.getItem("atitle").split('|');
        for (var i = 0; i < titles.length; i++) {
            $("tabbar").append('<uibutton  ui-implements="tab"> <label>' + titles[i] + '</label> </uibutton>');
        }
        $("#main").UITabBar();

    },

    addActionListeners: function () {
        // presentation item
        this.segChildNodes = function (item) {
            if (item.getAttribute("ui-child-position") == 0) { // selected
            }
            else if (item.getAttribute("ui-child-position") == 1) { // other
            }
        };

        // library items
        this.seg2ChildNodes = function (item) {
            if (item.getAttribute("ui-child-position") == 0) { // selected
            }
            else if (item.getAttribute("ui-child-position") == 1) { // other
            }
        };

        $("#sv1 segmentedcontrol").UISegmentedControl("#stackpanel_01", this.segChildNodes);
        $("#sv2 segmentedcontrol").UISegmentedControl("#stackpanel_02", this.seg2ChildNodes);

        $$("tabbar uibutton").each(function (item) {
            item.on("click", function () {
            });
        });
    },

    getItem: function (arrData, type, parentId) {
        for (var i = 0; i < arrData.length; i++) {
            var item = arrData[i];
            if (type == 'library') {
                var supporedExtensionSendEmail = this.getUrlVars()["supporedExtensionSendEmail"].toString().toLowerCase();
                var name = item.name.length > 15 ? item.name.toString().substr(0, 15) + "..." : item.name;
                var isSendMailVideo = false;
                var isSendMailPDF = false;
                var selectedCls = "unselected_lib";

                if (supporedExtensionSendEmail.indexOf("mp4") != -1) isSendMailVideo = true;
                if (supporedExtensionSendEmail.indexOf("pdf") != -1) isSendMailPDF = true;
                if (item.id == this.prezSelected) selectedCls = "selected_lib";

                if ((item.type.toLowerCase() == "mp4" && isSendMailVideo) || (item.type.toLowerCase() == "pdf" && isSendMailPDF)) {
                    $("#" + parentId).append("<tablecell><celltitle prezid='" + item.id + "'> <div class='label'>" + name + "</div><div id='" + item.id + "' class='emailing'></div><div ui-kind='check' id='lib_" + i + "'  class='" + selectedCls + "'></div></celltitle></tablecell>");
                }
                else {
                    $("#" + parentId).append("<tablecell><celltitle prezid='" + item.id + "'> <div class='label'>" + name + "</div><div ui-kind='check' id='lib_" + i + "'  class='" + selectedCls + "'></div></celltitle></tablecell>");
                }
            }
            else {
                var name = item.title.length > 15 ? item.title.toString().substr(0, 15) + "..." : item.title;
                var selectedCls = "unselected_prez";
                if (item.id == this.prezSelected) selectedCls = "selected_prez";
                $("#" + parentId).append("<tablecell><celltitle prezid='" + item.id + "'><div class='label'>" + name + "</div><div ui-kind='check' id='prez_" + i + "'  class='" + selectedCls + "'></div></celltitle></tablecell>");
            }
        }
        if (type == "library") this.selectLib(parentId);
        this.selectPrez(parentId);

    },

    selectPrez: function (parentId) {
        var thisObj = this;
        $$("#" + parentId + " celltitle").each(function (item) {
            item.on("click", function (e) {
                if ($(e.toElement).getAttribute("class") == "label") {
                    thisObj.sendCommand("switchPresentation", item.getAttribute("prezid"));
                }
            });
        });
    },

    selectLib: function (parentId) {
        var thisObj = this;
        $$("#" + parentId + " div[class=emailing]").each(function (item) {
            item.bind("click", function (ev) {
                var rand = Math.random() * 1000 + "";
                thisObj.sendCommand("sendLibraryByEmailing", [item.id, rand]);
                ev.cancelBubble = true;
            });
        });
    },
    sendCommand: function (command, args) {
        try {
            var sendArgs = "";
            if (typeof args === 'string') {
                sendArgs = args;
            } else {
                sendArgs = args.join(':');
            }
            //command:gap:ChromiumView:memoryInfo:17uhkut1n.dqo
            var iframeCmd = parent.document.getElementById("iframeCommand");
            var commandMessage = "";
            if (iframeCmd) commandMessage = "command:gap:ChromiumBrowser:" + command + ':' + sendArgs;
            else {
                iframeCmd = parent.document.getElementById("iframeLibCmd");
                if (iframeCmd) {
                    commandMessage = "command:gap:ChromiumLibraryView:" + command + ':' + sendArgs;
                }
                else {
                    iframeCmd = parent.document.getElementsByTagName("iframe")[0];
                    if (iframeCmd) {
                        if (command == "switchPresentation") command = "loadPresentation";
                        var commandId = Math.random() * 1000;
                        commandMessage = "command:gap:LightnessView:" + command + ':' + commandId + ":" + sendArgs;
                    }
                }
            }
            iframeCmd.src = commandMessage;
        } catch (e) {
            alert("sendCommand " + e.message);
        }
    }
};

