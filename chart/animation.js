var chart;
let nodes;
let groupKeys;
let countOfgroup;
let statusOfOverdue;
let statusOfCompleted;
window.onload = function () {
    
    OrgChart.templates.group_grey_new = Object.assign({}, OrgChart.templates.group_grey);
    OrgChart.templates.group_red_new = Object.assign({}, OrgChart.templates.group_grey);
    OrgChart.templates.node_custom = Object.assign({}, OrgChart.templates.group_grey);

    OrgChart.templates.group_grey_new.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" /><feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.05     0     0     0     0 0     0.64     0     0     0 0     0     0.5     0     0 0     0     0     1     0 "/><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>';

    OrgChart.templates.group_grey_new.node = '<rect rx="12" x="12" y="12" filter="url(#cool-shadow)" height="{h}" width="{w}" fill="#F9FBFC" stroke-width="0" stroke="#aeaeae"></rect>';



    OrgChart.templates.group_red_new.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="red-shadow"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" /><feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.82     0     0     0     0 0     0.13     0     0     0 0     0     0.18     0     0 0     0     0     1     0"/><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>';

    OrgChart.templates.group_red_new.node = '<rect rx="12" x="12" y="12" filter="url(#red-shadow)" height="{h}" width="{w}" fill="#F9FBFC" stroke-width="0" stroke="#aeaeae"></rect>';

    OrgChart.templates.node_custom.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="custom-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0    0 0 0 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

    OrgChart.templates.node_custom.node = '<rect rx="12" x="12" y="12" filter="url(#custom-shadow)" height="{h}" width="{w}" fill="#F9FBFC" stroke-width="0" stroke="#aeaeae"></rect><line x1="20" y1="50" x2="255" y2="50" stroke="#AFAFAF" stroke-width="0.5" ></line><text  style="font-size: 15px;" fill="#696767" x="30" y="96">Assigned to :</text>';

    //nodes data
    OrgChart.templates.node_custom.typeOfInt = '<text  style="font-size: 17px;" fill="#000000" x="30" y="36">{val}</text>';
    OrgChart.templates.node_custom.assignData = '<text  style="font-size: 11px;" fill="#AFAFAF" x="170" y="36">{val}</text>';
    OrgChart.templates.node_custom.assignImg = '<svg><clipPath id="cut-off-bottom"><circle cx="138" cy="92" r="14" /></clipPath><image x="122" y="76" xlink:href={val} height="32" width="32" clip-path="url(#cut-off-bottom)" ></image></svg>';




    OrgChart.templates.node_custom.assignedTo = '<text  style="font-size: 14px;" fill="#696767" x="160" y="96">{val}</text>';

    //group node data
    OrgChart.templates.node_custom.typeOfInt = '<text  style="font-size: 17px;" fill="#000000" x="30" y="36">{val}</text>';


     
    // OrgChart.templates.star.performance_2 = '{val}';

    // function stars(count) {
    //     console.log(count)
    //     count = parseInt(count);
    //     var stargroup = '<g transform="matrix(0.6,0,0,0.6,142,73)">';

    //     for (var i = 0; i < count; i++) {
    //         stargroup += '<g transform="matrix(1,0,0,1,' + (200 - i * 50) + ',0)">';
    //         stargroup += '<path fill="#00AAAA" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>'
    //         stargroup += '</g>';
    //     }
    //     stargroup += '</g>';
    //     return stargroup;
    // }


    nodes = [{
        id: 1,
        tags: ["Ui"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Overdue",
        startDate: "",
        endDate:""
    },
    {
        id: 2,
        tags: ["Ui"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Overdue",
        startDate: "",
        endDate:""
    },
    {
        id: 3,
        tags: ["Ui"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Completed",
        startDate: "",
        endDate:""
    },

    {
        id: 4,
        tags: [],
        pid: 1,
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Completed",
        startDate: "",
        endDate:""
    },

    {
        id: 5,
        tags: [],
        pid: 1,
        tags: ["Algorithms"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Not Started",
        startDate: "",
        endDate:""
    },
    {
        id: 6,
        tags: [],
        pid: 1,
        tags: ["Algorithms"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Completed",
        startDate: "",
        endDate:""
    },

    {
        id: 7,
        tags: [],
        pid: 1,
        tags: ["Algorithms"],
        typeOfInt: "Intigration",
        assignDate: "17th Jan 2020",
        assignImg: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
        assignedTo: "Rajesh",
        status: "Overdue",
        startDate: "",
        endDate:""

    }
    
]







    OrgChart.REMOVE_GROUP_IF_HAS_ONE_NODE = false;
    chart = new OrgChart(document.getElementById("tree"), {
        //scaleInitial: OrgChart.match.boundary,
        enableSearch: false,
        template: "node_custom",
        nodeBinding: {
            typeOfInt: "typeOfInt",
            assignData: "assignDate",
            assignImg: "assignImg",
            assignedTo: "assignedTo",
        },
        enableDragDrop: true,
        nodeMouseClick: OrgChart.action.edit,
        nodeMenu: {
            details: {
                text: "Details"
            },
            edit: {
                text: "Edit"
            },
            add: {
                text: "Add"
            },
            remove: {
                text: "Remove"
            }
        },
        dragDropMenu: {
            addInGroup: {
                text: "Add in group"
            },
            addAsChild: {
                text: "Add as child"
            }
        },

        tags: {
            Ui: {
                group: true,
                groupName: "Ui",
                groupState: OrgChart.COLLAPSE,
                template: "group_grey_new"
            },
            Algorithms: {
                group: true,
                groupName: "Algorithms",
                groupState: OrgChart.COLLAPSE,
                template: "group_red_new",
            },
        },
        nodes: nodes
    });
    chart.on('group', function (sender, sourceId, targetId) {

        console.log(sender + "---" + sourceId + "----" + targetId)
    });



    chart.on('redraw', function () {
        groupKeys = Object.keys(chart.config.tags);
        groupKeys.forEach((ele, i)=>{
            countOfgroup =  nodes.filter(ele => ele.tags[0] == groupKeys[i]);
            statusOfOverdue = countOfgroup.filter(ele => ele.status == "Overdue");
            statusOfCompleted = countOfgroup.filter(ele => ele.status == "Completed");
            statusOfNotStarted = countOfgroup.filter(ele => ele.status == "Not Started");
            $('#'+ele).append('<svg class="groupnode">'+
            '<circle cx="34" cy="64" r="12" fill="#F57C00"></circle>'+
            '<text fill="#ffffff" x="34" y="70" text-anchor="middle">' + countOfgroup.length + '</text>'+
            '<text  fill="#000000" x="50" y="70" font-family="" font-size="14">All Tasks</text>'+
            
            '<circle cx="160" cy="64" r="12" fill="#D2222D"></circle>'+
            '<text fill="#ffffff" x="160" y="70" text-anchor="middle">' + statusOfOverdue.length + '</text>'+
            '<text  fill="#D2222D" x="178" y="70" font-family="" font-size="14">Overdue</text>'+
            
            '<circle cx="34" cy="94" r="12" fill="#4CB09C"></circle>'+
            '<text fill="#ffffff" x="34" y="100" text-anchor="middle">' + statusOfCompleted.length + '</text>'+
            '<text  fill="#4CB09C" x="50" y="100" font-family="" font-size="14">Completed</text>'+
            
            '<circle cx="160" cy="94" r="12" fill="#AFAFAF"></circle>'+
            '<text fill="#ffffff" x="160" y="100" text-anchor="middle">' + statusOfNotStarted.length + '</text>'+
            '<text  fill="#AFAFAF" x="178" y="100" font-family="" font-size="14">Not Started</text>'+
            '<line x1="20" y1="50" x2="255" y2="50" stroke="#AFAFAF" stroke-width="0.5" ></line>'+
            '<svg class=groupnodeImg></svg></svg>');
            countOfgroup.forEach((elem, j)=>{
                if(j >= 3){
                    $('#'+ele +' .groupnodeImg').append('<svg><circle cx="82" cy="117" r="14" fill="#ffffff"></circle><text  fill="#0000008D" x="74" y="122" font-family="" font-size="14">4+</text></svg>')
                    j = elem.length;
                    return;
                }
                $('#'+ele +' .groupnodeImg').append('<svg><clipPath id="cut-off-bottom_'+j+'"><circle cx='+(36 + j * 16)+' cy="117" r="14" /></clipPath><image x='+(20 + j * 16)+' y="100" xlink:href="'+elem.assignImg+'" height="32" width="32" clip-path="url(#cut-off-bottom_'+j+')" ></image></svg>')
            })
        });
        
    });
            chart.on('expcollclick', function (sender, action, id, ids) {
                debugger
                if(action === 0){
                    //alert("open")
                    $('#'+id+' .groupnode').remove()
                }else {
                    //alert("close")
                }
             });  

    
    // chart.on('', function () {

    // }

    // var timeout = null;
  
  
    // window.addEventListener('resize', function(){    
    //   if (timeout){
    //     clearTimeout(timeout)
    //   }
    //   timeout = setTimeout(function(){
    //     chart.fit();
    //   }, 500);
    // })
  
  };



        // <text transform="matrix(1 0 0 1 788.5117 513.7266)" fill="#AFAFAF" font-family="'SegoeUI'" font-size="12">Not Started</text>
        // <text transform="matrix(1 0 0 1 758.6816 549.541)" fill="#AFAFAF" font-family="'SegoeUI'" font-size="11">Working together</text>
        // <text transform="matrix(1 0 0 1 689.8589 513.7266)" fill="#65AC9B" font-family="'SegoeUI'" font-size="12">Completed</text>
        // <text transform="matrix(1 0 0 1 690.1411 480.1143)" fill="#3C3C3C" font-family="'SegoeUI-Bold'" font-size="14">All Tasks</text>
        // <circle fill="#D2222D" cx="775.012" cy="475.179" r="8.5"/>
        // <circle fill="#AFAFAF" cx="775.012" cy="509.093" r="8.5"/>
        // <circle fill="none" stroke="#A1D6C7" stroke-miterlimit="10" cx="676.5" cy="475.179" r="8.5"/>
        // <path fill="none" stroke="#00B49D" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M668,475.179
        //     c0-4.693,3.806-8.5,8.5-8.5"/>
        // <circle fill="#65AC9B" cx="676.5" cy="509.093" r="8.5"/>
        // <text transform="matrix(1 0 0 1 671.5 478.9688)" fill="#00B49D" font-family="'SegoeUI-Bold'" font-size="9">22</text>
        // <text transform="matrix(1 0 0 1 670.667 512.3027)" fill="#FFFFFF" font-family="'SegoeUI-Bold'" font-size="9">11</text>
        // <text transform="matrix(1 0 0 1 769.5 512.3027)" fill="#FFFFFF" font-family="'SegoeUI-Bold'" font-size="9">11</text>
        
        //     <image xlink:href="" type="image/png" width="60" height="26" transform="matrix(0.9999 0 0 0.9999 671.6665 533.542)">
        // </image>