(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{792:function(e,t,n){},810:function(e,t,n){},811:function(e,t,n){"use strict";n.r(t);n(353),n(354);var a=n(29),o=n(30),r=n(31),s=n(32),c=n(352),i=n(1),l=n.n(i),d=n(23),u=n.n(d),p=n(65),h=n(28),b=n(25),m=n(87),j=n(16),f=n.n(j),g=n(10),O=n(40),x=n(75),C=n.n(x),y=[5,10,15,25,50],v="Select Collection Type",w="Name",S={SELECT:"Select",NAME:w,CREATEDBY:"Created by",LASTEDITED:"Last edited",CREATEDEDITED:"Created date"},T="EntKcToken",k="YYYY-MM-DD HH:mm:ss",N=[".JPEG",".JPG",".PNG",".GIF",".SVG",".TIFF",".ICO",".DVU"],P="url",I=["createdAt","updatedAt","publishedAt","createdBy","updatedBy","id"],R="13px",F="".concat("http://localhost:1337"),B="".concat("http://localhost:8081/api","/template/"),A="".concat(F,"/content-manager/collection-types/api::"),D="&sort=createdAt:DESC",M=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(F,"/content-manager/content-types"),W({},T));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,o,r,s,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:5,o="".concat(A).concat(t,".").concat(t,"?page=").concat(n,"&pageSize=").concat(a).concat(D),e.next=5,C.a.get(o,W({},T));case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(A).concat(t,".").concat(t,"/").concat(n),e.next=3,C.a.get(a,W({},T));case 3:return o=e.sent,r=o.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(f.a.mark((function e(t,n,a){var o,r,s,c,i,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=l.length>3&&void 0!==l[3]?l[3]:1,r=l.length>4&&void 0!==l[4]?l[4]:5,t){e.next=4;break}throw new Error("collectionType is missing");case 4:return s="".concat(A).concat(t,".").concat(t,"?filters[").concat(a,"][$containsi]=").concat(n,"&page=").concat(o,"&pageSize=").concat(r),e.next=7,C.a.get(s,W({},T));case 7:return c=e.sent,i=c.data,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(B));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:localStorage.getItem("token");return console.log("ET-Widget-Config",t),t?{headers:{Authorization:"".concat(e," ").concat(t)}}:e===T?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyOTUxMzQ1LCJleHAiOjE2NTU1NDMzNDV9._WxG2-Ei7GG5VRa56BROEIdP-nCT5kFdYFKYlTBLX24")}}:{}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=z(t);return Object(O.a)(Object(O.a)({},e),n)},G=n(93),V=n(3),K=n.n(V),J=n(342),Y=n(343),Q=n(67),X=n(344),Z=n(5),$=[],q=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;Object(a.a)(this,n),(o=t.call(this,e)).totalPages=function(){var e=o.state.pagination.perPage;return Math.ceil($.length/e)},o.onPageInput=function(e){o.setState({pageChangeValue:e.target.value})},o.onSubmit=function(){o.setPage(o.state.pageChangeValue)},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onPerPageSelect=function(e,t){var n=Object.assign({},o.state.pagination);n.perPage=e,n.page=1,o.setState({pagination:n})},o.onFirstPage=function(){o.setPage(1)},o.onPreviousPage=function(){o.state.pagination.page>1&&o.setPage(o.state.pagination.page-1)},o.onNextPage=function(){o.state.pagination.page<o.totalPages()&&o.setPage(o.state.pagination.page+1)},o.onLastPage=function(){var e=o.state.pagination.page,t=o.totalPages();e<t&&o.setPage(t)},o.onSelectRow=function(e,t){var a,r,s=o.props.onRowsLogger,c=o.state,i=c.rows,l=c.selectedRows,d=i.findIndex((function(e){return e.id===t.id}));d>-1&&(t.selected?(a=l.filter((function(e){return!(e===t.id)})),r=n.deselectRow(t)):(l.push(t.id),a=l,r=n.selectRow(t)),i[d]=r,o.setState({rows:i,selectedRows:a}),s(i.filter((function(e){return e.selected}))))},o.onSelectAllRows=function(e){var t=o.props.onRowsLogger,a=o.state,r=a.rows,s=a.selectedRows,c=e.target.checked,i=o.currentRows().rows;if(c){var l=Object(G.a)(new Set([].concat(Object(G.a)(i.map((function(e){return e.id}))),Object(G.a)(s)))),d=r.map((function(e){return l.indexOf(e.id)>-1?n.selectRow(e):e}));o.setState({rows:d,selectedRows:l}),t(d.filter((function(e){return e.selected})))}else{var u=i.map((function(e){return e.id})),p=s.filter((function(e){return!(u.indexOf(e)>-1)})),h=r.map((function(e){return p.indexOf(e.id)>-1?e:n.deselectRow(e)}));o.setState({rows:h,selectedRows:p}),t(h.filter((function(e){return e.selected})))}},o.onRow=function(e,t){t.rowIndex;o.props.setSelectedContent([e],o.props.selectedCollectionType);var n=$.indexOf(e.id)>-1;return{className:K()({selected:n}),role:"row"}};var r=function(){return o.state.sortingColumns||{}},s=Q.sort({getSortingColumns:r,onSort:function(e){o.setState({sortingColumns:Q.byColumn({sortingColumns:o.state.sortingColumns,sortingOrder:g.defaultSortingOrder,selectedColumn:e})})},strategy:Q.strategies.byProperty}),c=Q.header({sortableTransform:s,getSortingColumns:r,strategy:Q.strategies.byProperty});return o.customHeaderFormatters=g.customHeaderFormattersDefinition,o.state={selectedContent:[],sortingColumns:{name:{direction:g.TABLE_SORT_DIRECTION.ASC,position:0}},columns:[{property:"select",displayName:"Select",header:{label:"select",props:{index:0,rowSpan:1,colSpan:1,id:"select"},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:0},formatters:[function(e,t){var n=t.rowData,a=t.rowIndex;return Object(g.selectionCellFormatter)({rowData:n,rowIndex:a},o.onSelectRow,"vybrat ".concat(a),"vyberte \u0159\xe1dek ".concat(a))}]}},{property:"Title",displayName:"Names",header:{label:"Name",props:{index:1,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:1},formatters:[g.tableCellFormatter]}},{property:"createdBy",header:{label:"Created by",props:{index:2,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:2},formatters:[g.tableCellFormatter]}},{property:"updatedAt",header:{label:"Last edited",props:{index:3,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:3},formatters:[g.tableCellFormatter]}},{property:"Type",header:{label:"Type",props:{index:4,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:4},formatters:[g.tableCellFormatter]}},{property:"createdAt",header:{label:"Created date",props:{index:5,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:5},formatters:[g.tableCellFormatter]}},{property:"status",header:{label:"Status",props:{index:6,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[g.sortableHeaderCellFormatter]},cell:{props:{index:6},formatters:[g.tableCellFormatter]}}],rows:o.props.mockRows,selectedRows:[],pagination:{page:1,perPage:6,perPageOptions:[6,10,15]},pageChangeValue:1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"componentDidUpdate",value:function(e,t){this.props.mockRows!==e.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"currentRows",value:function(){var e=this.state,t=e.rows,n=e.sortingColumns,a=e.columns,o=e.pagination;return Object(Y.a)(Object(g.paginate)(o),Q.sorter({columns:a,sortingColumns:n,sort:J.orderBy,strategy:Q.strategies.byProperty}))(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.pagination,o=t.sortingColumns,r=t.pageChangeValue,s=this.currentRows();return Object(Z.jsxs)(g.Grid,{fluid:!0,children:[Object(Z.jsxs)(g.Table.PfProvider,{striped:!0,bordered:!0,hover:!0,dataTable:!0,columns:n,components:{header:{cell:function(t){return e.customHeaderFormatters({cellProps:t,columns:n,sortingColumns:o,rows:s.rows,onSelectAllRows:e.onSelectAllRows})}}},children:[Object(Z.jsx)(g.Table.Header,{headerRows:X.headerRows({columns:n})}),Object(Z.jsx)(g.Table.Body,{rows:s.rows,rowKey:"id",onRow:this.onRow})]}),Object(Z.jsx)(g.PaginationRow,{viewType:g.PAGINATION_VIEW.TABLE,pagination:a,pageInputValue:r,amountOfPages:s.amountOfPages,itemCount:s.itemCount,itemsStart:s.itemsStart,itemsEnd:s.itemsEnd,onPerPageSelect:this.onPerPageSelect,onFirstPage:this.onFirstPage,onPreviousPage:this.onPreviousPage,onPageInput:this.onPageInput,onNextPage:this.onNextPage,onLastPage:this.onLastPage,onSubmit:this.onSubmit})]})}}],[{key:"selectRow",value:function(e){return Object.assign({},e,{selected:!0})}},{key:"deselectRow",value:function(e){return Object.assign({},e,{selected:!1})}}]),n}(l.a.Component),ee=n(73),te=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),o.props.runOnFilterData(o.state.values.name)},o.handleInputChange=function(e){o.setState({values:Object(ee.a)({},e.target.name,e.target.value)})},o.onClick=function(){o.setState({open:!o.state.open})},o.state={open:!1,values:{name:""}},o}return Object(o.a)(n,[{key:"handleKeyDown",value:function(){}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(Z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(Z.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(Z.jsxs)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:["Name ",Object(Z.jsx)("span",{className:"caret"})]}),Object(Z.jsx)("input",{type:"search",name:"name",value:this.state.values.name,onChange:this.handleInputChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content"})]}),Object(Z.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(Z.jsx)("button",{className:"btn btn-primary",children:"Search"})})]})})}}]),n}(l.a.Component),ne=(n(792),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).runOnFilterData=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(o.state.selectedCollectionType,t).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes.createdBy="Admin",e.attributes.status="Published",e.attributes}));o.setState({mockRows:t})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.componentDidMount=function(){},o.close=function(){o.setState({show:!1})},o.open=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setState({show:!0}),e.next=3,M();case 3:t=(t=e.sent).data.data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push(e.info)})),o.setState({collectionTypes:n});case 8:case"end":return e.stop()}}),e)}))),o.collectionTypeOnChange=function(e){e.persist(),o.state.collectionTypes.forEach(function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.singularName!==e.target.value||!e.target.value){t.next=4;break}return o.setState({selectedCollectionType:n.pluralName}),t.next=4,_(n.pluralName).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes.createdBy="Admin",e.attributes.status="Published",e.attributes}));o.setState({mockRows:t})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},o.state={show:!1,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(i.Fragment,{children:Object(Z.jsx)("div",{children:Object(Z.jsxs)(g.Modal,{dialogClassName:"ContentsFilterModal",show:this.state.show,onHide:this.close,children:[Object(Z.jsxs)(g.Modal.Header,{children:[Object(Z.jsx)("button",{className:"close",onClick:this.close,"aria-hidden":"true","aria-label":"Close",children:Object(Z.jsx)(g.Icon,{type:"pf",name:"close"})}),Object(Z.jsx)(g.Modal.Title,{children:"Select one content item"})]}),Object(Z.jsxs)(g.Modal.Body,{children:[Object(Z.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(Z.jsxs)(g.Row,{children:[Object(Z.jsx)("label",{className:"control-label col-xs-3",htmlFor:"group",children:"Collection Type"}),Object(Z.jsx)(g.Col,{xs:9,children:Object(Z.jsxs)("select",{className:"form-control",name:"group","data-testid":"TEST_ID_USER_AUTHORITY_MODAL.GROUP_FIELD",onChange:this.collectionTypeOnChange,children:[Object(Z.jsx)("option",{value:0,children:"Select Collection Type"}),this.state.collectionTypes.length&&this.state.collectionTypes.map((function(e,t){return Object(Z.jsx)("option",{value:e.singularName,children:e.pluralName},e.singularName)}))]})})]}),Object(Z.jsx)(te,{runOnFilterData:this.runOnFilterData}),Object(Z.jsx)(q,{onRowsLogger:function(){},mockRows:this.state.mockRows,selectedCollectionType:this.state.selectedCollectionType,setSelectedContent:this.props.setSelectedContent})]}),Object(Z.jsxs)(g.Modal.Footer,{children:[Object(Z.jsx)(g.Button,{bsStyle:"default",className:"btn-cancel",onClick:this.close,children:"Cancel"}),Object(Z.jsx)(g.Button,{bsStyle:"primary",onClick:this.close,children:"Choose"})]})]})})})}}]),n}(i.Component)),ae=n(92),oe=n.n(ae),re=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(Z.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(Z.jsx)("span",{className:"fa fa-angle-down"})})},o.onChangeTemplateId=function(e,t){o.setState({templateSelectedForContent:e.target.value}),o.setState({templateChangedForContent:t});var n=o.props.mappingOfContentTemplate.map((function(n){return n.contentId===t&&(n.templateId=e.target.value),n}));o.props.setContentTemplate(n)},o.onApplyToAll=function(){document.getElementsByName("modelId").forEach((function(e){e.value="".concat(o.state.templateSelectedForContent)}));var e=o.props.mappingOfContentTemplate.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{templateId:o.state.templateSelectedForContent.toString()})}));o.props.setContentTemplate(e)},o.state={templateType:[{label:"vj"}],selectedTemplateType:[],templateChangedForContent:null,templateSelectedForContent:0},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("table",{className:"table table-bordered table-datatable table-hover table-striped Contents__table-element",children:[Object(Z.jsx)("thead",{children:Object(Z.jsx)("tr",{children:Object.keys(se).map((function(e,t){return Object(Z.jsx)("th",{children:se[e]},t)}))})}),Object(Z.jsx)("tbody",{children:this.props.selectedContent.length>0&&this.props.selectedContent.map((function(t){return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:t[Object.keys(t)[1]]}),Object(Z.jsx)("td",{children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(Z.jsx)("td",{children:oe()(new Date(t.updatedAt)).format(k)}),Object(Z.jsx)("td",{children:oe()(new Date(t.publishedAt)).format(k)}),Object(Z.jsxs)("td",{width:"30%",children:[Object(Z.jsxs)("select",{defaultValue:"none",style:{display:"inline-block",width:"50%"},name:"modelId",className:"form-control",onChange:function(n){return e.onChangeTemplateId(n,t.id)},children:[Object(Z.jsx)("option",{value:"none",disabled:!0,hidden:!0,children:"Select Template"}),e.props.templateList.map((function(e){return Object(Z.jsx)("option",{value:e.id,children:e.templateName},e.id)}))]}),t.id===e.state.templateChangedForContent&&Object(Z.jsx)("div",{onClick:e.onApplyToAll,style:{display:"inline-block",width:"50%",textAlign:"center"},children:Object(Z.jsxs)(p.b,{to:"#",children:[Object(Z.jsx)("span",{className:"fa fa-copy",style:{margin:"0px 10px"}}),"Apply to all contents"]})})]})]},t.id)}))})]})})}}]),n}(l.a.Component),se={Title:"Name",createdAt:"Created by",updatedAt:"Last edited",createDate:"Created date",selectDefaultTemplate:"Select default template *"},ce="".concat("http://localhost:1337"),ie=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).setSelectedContent=function(e,t){},o.handleTypeaheadChangeContentType=function(e){var t=e.map((function(e){return e.label}));o.setState({templateList:t})},o.componentDidMount=Object(b.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:return t=(t=e.sent).data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push({label:e.info.pluralName})})),e.next=8,H();case 8:a=e.sent,r=a.data,o.setState({templateList:r,collectionTypes:r});case 11:case"end":return e.stop()}}),e)}))),o.handleAddNewContent=function(){var e="".concat(ce,"/admin/content-manager"),t=window.open(e,"_blank");t&&t.focus()},o.state={collectionTypes:[],templateList:[]},o.handleAddNewContent=o.handleAddNewContent.bind(Object(m.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){return Object(Z.jsx)("form",{className:"form-horizontal SingleContentConfigForm well",children:Object(Z.jsx)(g.Row,{children:Object(Z.jsx)(g.Col,{xs:12,children:Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{children:[Object(Z.jsx)("span",{className:"icon fa fa-puzzle-piece",title:"Widget"}),Object(Z.jsx)("h5",{className:"SingleContentConfigFormBody__widgetTitle",children:"Content List"}),Object(Z.jsx)("div",{className:"SectionTitle SectionTitle__non-collapsable",role:"button",children:Object(Z.jsx)("span",{children:"Info"})}),Object(Z.jsxs)("div",{className:"row",children:[Object(Z.jsx)(g.Col,{xs:6,children:Object(Z.jsx)("h3",{className:"SingleContentConfigFormBody__contentTitle",children:"Contents :-"})}),Object(Z.jsxs)(g.Col,{xs:6,className:"SingleContentConfigFormBody__addButtons",children:[Object(Z.jsx)(p.b,{to:"/configpage",children:Object(Z.jsxs)(g.Button,{bsStyle:"primary",children:[this.props.selectedContent.length?"Edit":"Add existing"," content"]})}),Object(Z.jsx)(g.Button,{className:"AddContentTypeFormBody__save--btn",bsStyle:"primary",onClick:this.handleAddNewContent,children:"Add new content"})]})]}),Object(Z.jsx)(ne,{rightSide:!1,setSelectedContent:this.setSelectedContent}),Object(Z.jsx)("div",{style:{marginTop:"1rem"}}),Object(Z.jsx)(re,{setTemplateId:this.props.setTemplateId,templateList:this.state.templateList,selectedContent:this.props.selectedContent,mappingOfContentTemplate:this.props.mappingOfContentTemplate,setContentTemplate:this.props.setContentTemplate})]})})})})})}}]),n}(i.Component),le=n(146),de=n(351),ue=n(89),pe=n(139),he=n(334),be=1,me=function(e){return be+=1,Object(Z.jsx)(pe.a,{accordion:!0,id:be,style:{marginBottom:"5px"},children:e&&Object.keys(e).length>0?Te(e)?ge(P,0,e.url):Object.keys(e).filter((function(e){return Ne(e)})).map((function(t,n){var a,o;return fe(e)&&t&&(Number(t)||0===Number(t))?(e[t]&&((a=je(e[t]))&&!Number(a)?delete(o=Object(O.a)({},e[t])).__component:(a=t,o=e[t])),a&&(Number(a)||0===Number(a))&&(a=(a=Number(a)+1).toString())):(a=t,o=e[t]),ge(a,n,o)})):Object(Z.jsx)("span",{children:"No data available"})})},je=function(e){if(e&&Object.keys(e).includes("__component")){var t=e.__component&&e.__component.split(".");if(t&&t.length>0)return t[1]&&t[1].indexOf("-")?t[1].replace("-","_"):t[1]}},fe=function(e){return!!e&&!!Array.isArray(e)},ge=function(e,t,n){return Object(Z.jsxs)(he.a,{eventKey:t,children:[Oe(e,n),Se(n)&&ye(n,!0)]},t)},Oe=function(e,t){return Object(Z.jsx)(he.a.Heading,{children:Se(t)&&!Te(t)?Ce(e):xe(e,t)})},xe=function(e,t){return Object(Z.jsx)(he.a.Title,{children:Object(Z.jsxs)(ue.Grid.Row,{className:"show-grid",style:{display:"flex",fontSize:R},children:[Object(Z.jsx)(ue.Grid.Col,{style:{width:"10%",marginLeft:"2.5rem",wordBreak:"break-word"},children:Object(Z.jsx)("div",{children:Object(Z.jsx)("strong",{children:Te(t)&&ke(e)?"Photo "+e.charAt(0).toUpperCase()+e.slice(1):e.charAt(0).toUpperCase()+e.slice(1)})})}),Object(Z.jsx)(ue.Grid.Col,{style:{width:"90%",marginLeft:"1rem"},children:Te(t)?ve(t[P.toLowerCase()]):ve(t)})]})})},Ce=function(e){return Object(Z.jsx)(he.a.Title,{toggle:!0,style:{marginLeft:"-1rem",fontSize:R},children:Object(Z.jsx)("span",{children:Object(Z.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.slice(1)})})})},ye=function(e,t){return t?Object(Z.jsx)(he.a.Body,{collapsible:!0,children:me(e)}):Object(Z.jsx)(he.a.Body,{collapsible:!0,children:Object(Z.jsx)("span",{children:e})})},ve=function(e){return null===e||void 0===e?Object(Z.jsx)("span",{children:" - "}):"boolean"===typeof e?Object(Z.jsx)("span",{children:e.toString()}):"string"===typeof e?we(e)?Object(Z.jsx)("img",{src:"http://localhost:1337"+e,width:"50px",height:"50px",alt:"image"}):Object(Z.jsx)("span",{style:{wordBreak:"break-word"},children:e}):"number"===typeof e?Object(Z.jsx)("span",{children:e}):"object"===typeof e?e:Object(Z.jsx)("span",{children:" - "})},we=function(e){var t,n=Object(le.a)(N);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.toUpperCase().endsWith(a))return!0}}catch(o){n.e(o)}finally{n.f()}return!1},Se=function(e){return!!e&&"object"===typeof e},Te=function(e){var t=e&&Object.keys(e);return!!(t&&t.includes("ext")&&t.includes("formats")&&t.includes("url")&&N.includes(e.ext.toUpperCase()))},ke=function(e){return!!(e&&Number(e)&&Number(e)>=0)},Ne=function(e){return!I.includes(e)},Pe=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).toggleTab=function(e){o.setState({activeTabKey:e})},o.componentDidUpdate=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.props.collectionType||!o.props.contentId){e.next=6;break}if(t.collectionType===o.props.collectionType&&t.contentId===o.props.contentId){e.next=6;break}return e.next=4,L(o.props.collectionType,o.props.contentId);case 4:a=e.sent,o.setState({dataToShowOnModal:Object(O.a)({},a)});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.state={show:!0,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null,collectionAttributes:o.props.dummyData,activeTabKey:0,dataToShowOnModal:{}},o.toggleTab=o.toggleTab.bind(Object(m.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){var e;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(g.Modal,{dialogClassName:"ContentsFilterModal",show:this.props.show,onHide:this.props.onHide,children:[Object(Z.jsxs)(g.Modal.Header,{children:[Object(Z.jsx)("button",{className:"close",onClick:this.props.onHide,"aria-hidden":"true","aria-label":"Close",children:Object(Z.jsx)(g.Icon,{type:"pf",name:"close"})}),Object(Z.jsx)(g.Modal.Title,{children:Object.keys(this.state.dataToShowOnModal).length>0&&this.state.dataToShowOnModal[Object.keys(this.state.dataToShowOnModal)[1]]})]}),Object(Z.jsxs)(g.Modal.Body,{children:[Object(Z.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(Z.jsx)("div",{children:Object(Z.jsxs)(g.Tabs,{id:"id",activeKey:this.state.activeTabKey,onSelect:this.toggleTab,children:[Object(Z.jsx)(g.Tab,{eventKey:0,title:"English",style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:me(this.state.dataToShowOnModal)}),Object(Z.jsx)(g.Tab,{eventKey:1,title:"Italiano",style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:me(this.state.dataToShowOnModal)})]})})]}),Object(Z.jsxs)(g.Modal.Footer,{children:[Object(Z.jsx)(g.Button,{bsStyle:"default",className:"btn-cancel",onClick:this.props.onHide,children:"Close"}),Object(Z.jsx)(g.Button,(e={bsStyle:"primary",onClick:this.close},Object(ee.a)(e,"onClick",this.props.onHide),Object(ee.a)(e,"children","Ok"),e))]})]})})}}]),n}(i.Component),Ie=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.setCollectionTypeState();case 2:o.shouldShowEtSaveBtn("hidden");case 3:case"end":return e.stop()}}),e)}))),o.componentDidUpdate=function(){var e=Object(b.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.selectedCollectionType===o.props.selectedCollectionType&&n.pageSize===o.state.pageSize||o.setState({page:1,pageInput:1,currPageWillUpdating:1},Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 2:case"end":return e.stop()}}),e)})))),n.page===o.state.page||o.state.searchBtnClk){e.next=4;break}return e.next=4,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.componentWillUnmount=function(){o.shouldShowEtSaveBtn("visible")},o.shouldShowEtSaveBtn=function(e){var t,n=Object(le.a)(document.getElementsByClassName("pull-right save btn btn-primary"));try{for(n.s();!(t=n.n()).done;){var a=t.value;a.style.visibility=e,console.log("Element",a)}}catch(o){n.e(o)}finally{n.f()}},o.filterUidByApiPrefix=function(e){return e.filter((function(e){return e.uid.startsWith("api::")}))},o.open=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.setState({show:!0,contentDetailsOnModal:t,contentIdForModal:t&&t.id});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.close=function(){o.setState({show:!1})},o.handleCollectionTypeChange=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t[0],o.setState({selectedCollectionType:t}),!n||!n.value){e.next=8;break}return e.next=5,o.getContentsByCollectionType(n.value);case 5:o.props.setSelectedContentName(n.value),e.next=9;break;case 8:o.props.setSelectedContentName(null);case 9:o.setState({contentIdForModal:void 0});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.getContentsByCollectionType=function(){var e=Object(b.a)(f.a.mark((function e(t,n,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n,a);case 2:r=e.sent,o.setState({contents:r.results,lastPage:r.pagination.pageCount,page:r.pagination.page,pageSize:r.pagination.pageSize,totalItems:r.pagination.total,setSearchBy:r&&r.results.length&&Object.keys(r.results[0])[1]});case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),o.renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(Z.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(Z.jsx)("span",{className:"fa fa-angle-down"})})},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onContentSearch=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!o.state.searchQuery){e.next=9;break}return e.next=4,U(o.state.selectedCollectionType[0].value,o.state.searchQuery,o.state.setSearchBy,1,5);case 4:n=e.sent,console.log("searchResult",n),o.setState({contents:n.results,lastPage:n.pagination.pageCount,page:n.pagination.page,currPageWillUpdating:n.pagination.page,pageSize:n.pagination.pageSize,totalItems:n.pagination.total,searchBtnClk:!0}),e.next=10;break;case 9:o.getContentsByCollectionType(o.state.selectedCollectionType[0].label);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleQueryChange=function(e){e.preventDefault(),o.setState({searchQuery:e.target.value})},o.onPerPageSelect=function(e){o.setState({pageSize:e})},o.onPageInput=function(e){o.setState({currPageWillUpdating:e.target.value})},o.onSubmit=function(){+o.state.currPageWillUpdating&&o.state.currPageWillUpdating<=o.state.lastPage&&o.setState({page:+o.state.currPageWillUpdating})},o.onContentListSaveHandler=function(){console.log("~~~~~",o.state.selectedContent),o.props.setContentTemplate(o.state.selectedContent.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{contentId:e.id,templateId:null})})))},o.state={page:1,currPageWillUpdating:1,pageSize:5,totalItems:20,lastPage:4,pageInput:1,pageChangeValue:1,searchBtnClk:!1,show:!1,contentDetailsOnModal:{},searchQuery:"",setSearchBy:"",collectionType:[],selectedCollectionType:[],contents:[],selectedContent:[],contentIdForModal:""},o}return Object(o.a)(n,[{key:"setCollectionTypeState",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,n=t.data,a=this.filterUidByApiPrefix(n),this.setState({collectionType:a.map((function(e){return{label:e.info.displayName,value:e.info.singularName}}))});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePage",value:function(e){this.setState({page:e,currPageWillUpdating:e})}},{key:"onContentSelect",value:function(e){if(this.state.selectedContent.find((function(t){return t.id===e.id}))){var t=this.state.selectedContent.filter((function(t){return t.id!==e.id}));this.setState({selectedContent:t})}else this.setState({selectedContent:[e].concat(Object(G.a)(this.state.selectedContent))})}},{key:"checkIfSelected",value:function(e){if(this.state.selectedContent.length&&this.state.selectedContent.find((function(t){return t.id===e.id})))return!0;return!1}},{key:"render",value:function(){var e=this;console.log("this.state.selectedContent",this.state.selectedContent);var t={page:this.state.page,perPage:this.state.pageSize,perPageOptions:y},n=0===this.state.totalItems?0:(this.state.page-1)*this.state.pageSize+1,a=Math.min(this.state.page*this.state.pageSize,this.state.totalItems);return Object(Z.jsxs)(g.Grid,{children:[Object(Z.jsx)(g.Row,{className:"mt-2",children:Object(Z.jsx)(g.Col,{lg:12,children:Object(Z.jsx)("legend",{children:"Content List"})})}),Object(Z.jsx)(g.Row,{className:"mt-2",children:Object(Z.jsx)(g.Col,{lg:3,children:Object(Z.jsx)("h6",{children:Object(Z.jsx)("b",{children:v})})})}),Object(Z.jsx)(g.Row,{children:Object(Z.jsx)(g.Col,{lg:3,children:Object(Z.jsx)(de.a,{id:"collectionTypeDropdown",placeholder:v,options:this.state.collectionType,onChange:this.handleCollectionTypeChange,selected:this.state.selectedCollectionType,children:function(t){var n=t.isMenuShown,a=t.toggleMenu;return e.renderToggleButton({isMenuShown:n,onClick:a})}})})}),Object.keys(this.state.selectedCollectionType).length>0&&Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(g.Row,{className:"mt-2",children:Object(Z.jsx)(g.Col,{lg:3,children:Object(Z.jsx)("h5",{style:{marginBottom:"0px"},children:Object(Z.jsx)("strong",{children:this.state.selectedCollectionType&&this.state.selectedCollectionType[0]&&this.state.selectedCollectionType[0].label})})})}),Object(Z.jsx)(g.Row,{children:Object(Z.jsx)(g.Col,{lg:12,children:Object(Z.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(Z.jsxs)("form",{children:[Object(Z.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(Z.jsx)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:w}),Object(Z.jsx)("input",{type:"search",name:"name",onChange:this.handleQueryChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content By Name..."})]}),Object(Z.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(Z.jsx)("button",{className:"btn btn-primary",onClick:this.onContentSearch,children:"Search"})})]})})})}),Object(Z.jsx)(g.Row,{className:"mt-2",children:Object(Z.jsxs)(g.Col,{lg:12,children:[Object(Z.jsxs)("table",{className:"table dataTable table-striped table-bordered table-hover",children:[Object(Z.jsx)("thead",{children:Object(Z.jsx)("tr",{children:Object.keys(S).map((function(e){return Object(Z.jsx)("th",{children:S[e]},e)}))})}),Object(Z.jsx)("tbody",{children:this.state.contents.map((function(t){return Object(Z.jsxs)("tr",{className:"rowCursorPointer",children:[Object(Z.jsx)("td",{width:"5%",align:"center",children:Object(Z.jsx)("input",{onClick:function(){return e.onContentSelect(t)},type:"checkbox",defaultChecked:e.checkIfSelected(t),id:t+t.id,name:"content",value:t.id})}),Object(Z.jsx)("td",{onClick:function(){return e.open(t)},children:t[Object.keys(t)[1]]}),Object(Z.jsx)("td",{onClick:function(){return e.open(t)},children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(Z.jsx)("td",{onClick:function(){return e.open(t)},children:oe()(new Date(t.updatedAt)).format(k)}),Object(Z.jsx)("td",{onClick:function(){return e.open(t)},children:oe()(new Date(t.publishedAt)).format(k)})]},t.id)}))})]}),Object(Z.jsx)("div",{className:"custom-page"}),Object(Z.jsx)(g.PaginationRow,{itemCount:this.state.totalItems,itemsStart:n,itemsEnd:a,viewType:"table",pagination:t,amountOfPages:this.state.lastPage,pageInputValue:this.state.currPageWillUpdating,onPageSet:this.changePage,onPerPageSelect:this.onPerPageSelect,onFirstPage:function(){return e.changePage(1)},onPreviousPage:function(){return e.changePage(e.state.page-1)},onPageInput:this.onPageInput,onNextPage:function(){e.setState({searchBtnClk:!1}),e.changePage(e.state.page+1)},onLastPage:function(){e.setState({searchBtnClk:!1}),e.changePage(e.state.lastPage)},onSubmit:this.onSubmit})]})}),Object(Z.jsxs)(g.Row,{className:"SingleContentConfigFormBody__actionBar row",children:[Object(Z.jsx)(g.Col,{sm:9}),Object(Z.jsx)(g.Col,{sm:3,className:"SingleContentConfigFormBody__addButtons",children:Object(Z.jsxs)(p.b,{to:"/",children:[Object(Z.jsx)("button",{className:"btn-default btn",children:"Cancel"}),Object(Z.jsx)("button",{className:"btn-primary btn AddContentTypeFormBody__save--btn",onClick:function(){return e.onContentListSaveHandler()},disabled:!this.state.selectedContent.length,children:"Save as list of Contents"})]})})]})]}),Object(Z.jsx)(Pe,{show:this.state.show,onHide:this.close,contentDetailsOnModal:this.state.contentDetailsOnModal,contentId:this.state.contentIdForModal,collectionType:this.state.selectedCollectionType&&this.state.selectedCollectionType.length&&this.state.selectedCollectionType[0].value})]})}}]),n}(i.Component),Re=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).setContentTemplate=function(e){var t=JSON.stringify(e.map((function(e){return{templateId:e.templateId,contentId:e.contentId}})));o.setState({mappingOfContentTemplate:e,contentIdAndTemplateId:encodeURI(t)})},o.setSelectedContentName=function(e){o.setState({selectedContentName:e})},o.state={selectedContentName:null,mappingOfContentTemplate:[],contentIdAndTemplateId:""},o}return Object(o.a)(n,[{key:"render",value:function(){return console.log("MAIN-STATE",this.state),Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(p.a,{children:Object(Z.jsxs)(h.c,{children:[Object(Z.jsx)(h.a,{path:"/",exact:!0,children:Object(Z.jsx)(ie,{selectedContent:this.state.mappingOfContentTemplate,mappingOfContentTemplate:this.state.mappingOfContentTemplate,setContentTemplate:this.setContentTemplate})}),Object(Z.jsx)(h.a,{path:"/configpage",exact:!0,children:Object(Z.jsx)(Ie,{setContentTemplate:this.setContentTemplate,setSelectedContentName:this.setSelectedContentName})})]})})})}}]),n}(i.Component),Fe=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).reactRootRef=l.a.createRef(),e.mountPoint=null,e}return Object(o.a)(n,[{key:"config",get:function(){return this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return this.reactRootRef.current.setState(e)}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),u.a.render(Object(Z.jsx)(Re,{ref:this.reactRootRef}),this.mountPoint)}}]),n}(Object(c.a)(HTMLElement));window.customElements.define("list-content-widget-config",Fe);n(810)}},[[811,1,2]]]);
//# sourceMappingURL=main.383152c4.chunk.js.map