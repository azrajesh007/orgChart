var chart;
let nodes;
let groupKeys;
let countOfgroup;
let statusOfOverdue;
window.onload = function () {
    
    OrgChart.templates.group_grey_new = Object.assign({}, OrgChart.templates.group_grey);
    OrgChart.templates.group_red_new = Object.assign({}, OrgChart.templates.group_grey);
    OrgChart.templates.node_custom = Object.assign({}, OrgChart.templates.group_grey);

    OrgChart.templates.group_grey_new.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" /><feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.05     0     0     0     0 0     0.64     0     0     0 0     0     0.5     0     0 0     0     0     1     0 "/><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>';

    OrgChart.templates.group_grey_new.node = '<rect rx="12" x="12" y="12" filter="url(#cool-shadow)" height="{h}" width="{w}" fill="#ffffff" stroke-width="0" stroke="#aeaeae"></rect>';



    OrgChart.templates.group_red_new.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="red-shadow"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" /><feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.82     0     0     0     0 0     0.13     0     0     0 0     0     0.18     0     0 0     0     0     1     0"/><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>';

    OrgChart.templates.group_red_new.node = '<rect rx="12" x="12" y="12" filter="url(#red-shadow)" height="{h}" width="{w}" fill="#ffffff" stroke-width="0" stroke="#aeaeae"></rect>';

    OrgChart.templates.node_custom.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="custom-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0    0 0 0 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

    OrgChart.templates.node_custom.node = '<rect rx="12" x="12" y="12" filter="url(#custom-shadow)" height="{h}" width="{w}" fill="#ffffff" stroke-width="0" stroke="#aeaeae"></rect><line x1="20" y1="50" x2="255" y2="50" stroke="#AFAFAF" stroke-width="0.5" ></line><text  style="font-size: 15px;" fill="#696767" x="30" y="96">Assigned to :</text>';

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
            status: "",
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







    OrgChart.REMOVE_GROUP_IF_HAS_ONE_NODE = true;
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
                groupState: OrgChart.EXPAND,
                template: "group_grey_new"
            },
            Algorithms: {
                group: true,
                groupName: "Algorithms",
                groupState: OrgChart.COLLAPSE,

                template: "group_red_new",
                nodeBinding: {
                    typeOfInt: "typeOfInt",
                    assignData: "assignDate",
                    assignImg: "assignImg",
                    assignedTo: "assignedTo",
                    field_number_children: "field_number_children"
                }
            },
        },
        nodes: nodes
    });
    chart.on('group', function (sender, sourceId, targetId) {

        console.log(sender + "---" + sourceId + "----" + targetId)
    });



    chart.on('redraw', function () {
        groupKeys = Object.keys(chart.config.tags);
        //groupStatus = Object.
        groupKeys.forEach((ele, i)=>{
            countOfgroup =  nodes.filter(ele => ele.tags[0] == groupKeys[i]).length;
            //debugger
            statusOfOverdue = nodes.filter(ele => ele.status == "Overdue").length;
            groupInNodes = nodes.filter((ele)=>{
                return ele.tags[0] == groupKeys[i]
            })
            //console.log(groupInNodes[0])
            for (let i = 0; i < groupInNodes.length; i++) {
                console.log(groupKeys)
            }
            $('#'+ele).append('<svg id="groupNode">'+
            '<circle cx="34" cy="64" r="12" fill="#F57C00"></circle>'+
            '<text fill="#ffffff" x="34" y="70" text-anchor="middle">' + countOfgroup + '</text>'+
            '<text  fill="#000000" x="50" y="70" font-family="" font-size="14">All Tasks</text>'+
            
            '<circle cx="160" cy="64" r="12" fill="#D2222D"></circle>'+
            '<text fill="#ffffff" x="160" y="70" text-anchor="middle">' + countOfgroup + '</text>'+
            '<text  fill="#D2222D" x="178" y="70" font-family="" font-size="14">Overdue</text>'+
            
            '<circle cx="34" cy="94" r="12" fill="#4CB09C"></circle>'+
            '<text fill="#ffffff" x="34" y="100" text-anchor="middle">' + countOfgroup + '</text>'+
            '<text  fill="#4CB09C" x="50" y="100" font-family="" font-size="14">Completed</text>'+
            
            '<circle cx="160" cy="94" r="12" fill="#AFAFAF"></circle>'+
            '<text fill="#ffffff" x="160" y="100" text-anchor="middle">' + countOfgroup + '</text>'+
            '<text  fill="#AFAFAF" x="178" y="100" font-family="" font-size="14">Not Started</text>'+
            '<line x1="20" y1="50" x2="255" y2="50" stroke="#AFAFAF" stroke-width="0.5" ></line>'+
            '<clipPath id="cut-off-bottom"><circle cx="138" cy="92" r="14" /></clipPath><image x="122" y="76" xlink:href="" height="32" width="32" clip-path="url(#cut-off-bottom)" ></image>'+
            '</svg>')
        })
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


