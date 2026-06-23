window.reactEnv.thymeleafTemplate = [
    {
        id: '01',
        name: '默认布局',
        imageUrl: '',
        getTemplate: function (headerData, entryData, detailData) {
            var tableHtml = '';
            for (let i = 0; i < entryData.length; i++) {
                tableHtml += `<div class="page_box stroke">
                                <div class="entry_title">
                                    <span class="label"></span>
                                    <span class="title">${entryData[i].name}</span>
                                </div>
                                <div class="table">
                                    <ul class="table_tab">
                                        <li class="active">`+ entryData[i].name + `</li>`;
                                        if (detailData[i]) {
                                            tableHtml += `<li>`+ detailData[i].name + `</li>`
                                        }
                                        tableHtml += `
                                    </ul>`;
                                    tableHtml += entryData[i].html;
                    if (detailData[i]) {
                        tableHtml += detailData[i].html;
                    }
                    
                    tableHtml += `
                                </div>
                            </div>`
            }

            var script = `
                (function a() { $(".stroke .table").find("table").eq(1).css("display", "none");
                // 切换tab
                $("body").on("click", ".template_page .table_tab li", function() {
                    console.log("111")
                    $(this).addClass("active").siblings().removeClass("active");
                    var index = $(this).index();
                    $(".stroke table").eq(index).show().siblings("table").hide();
                })}())
            `

            // 将script元素插入到body标签的末尾  
            // $('body').append(script);
            return `<!DOCTYPE html>
            <html xmlns:th="http://www.thymeleaf.org">
    
            <head
                <meta charset="UTF-8">
                <style>
                    .template_page .page_title {
                        height: 80px;
                        color: var(--primary-color);
                        font-size: 24px;
                        margin: 0 0 20px 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }


                    .template_page .page_box {
                        padding: 16px;
                        margin: 14px;
                    }

                    .template_page .header_box .form_item {
                        float: left;
                        width: 33.33%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        padding: 0 10px;
                    }

                    .template_page .header_box label {
                        display: inline-block;
                        width: 108px;
                        color: rgb(38, 38, 38);
                        text-align: right;
                    }

                    .template_page .header_box input {
                        flex: 1;
                        height: 32px;
                        border: 1px solid rgb(217, 217, 217);
                        padding: 0 12px;
                        color: rgba(0, 0, 0, .65);
                        background-color: rgba(0, 0, 0, .04);
                    }

                    .template_page .header_box input:focus {
                        outline: none;
                        border: none;
                        border: 1px solid var(--primary-color);
                    }


                    .template_page .entry_title,
                    .template_page .detail_title {
                        display: flex;
                        align-items: center;
                        background-color: rgba(0, 0, 0, .04);
                        padding: 5px 0;
                        margin-bottom: 5px;
                    }

                    .template_page .entry_title .title,
                    .template_page .detail_title .title {
                        display: flex;
                        padding-left: 10px;
                        color: rgb(38, 38, 38);
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .template_page .entry_title .label,
                    .template_page .detail_title .label {
                        height: 12px;
                        width: 4px;
                        background-color: var(--primary-color);
                    }

                    .template_page .table {
                        overflow: auto;
                    }

                    .template_page .table .table_tab {
                        position: relative;
                        display: flex;
                    }
                    .template_page .table .table_tab::before {
                        position: absolute;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        border-bottom: 1px solid rgba(0, 0, 0, .06);
                        content: "";
                    }

                    .template_page .table .table_tab li {
                        list-style: none;
                        padding: 9px 4px;
                        cursor: pointer;
                        border-bottom: 2px solid transparent;
                    }

                    .template_page .table .table_tab li.active {
                        border-bottom: 2px solid var(--primary-color);
                    }

                    .template_page .table thead tr {
                        background-color: #fafafa;
                        white-space: nowrap;
                    }

                    .template_page .table thead tr th {
                        font-size: 14px;
                        font-weight: 400;
                        color: #262626;
                        position: relative;
                        padding: 0 12px;
                    }

                    .template_page .table thead tr th:before {
                        content: "";
                        width: 1px;
                        height: 50%;
                        position: absolute;
                        left: 0;
                        top: 25%;
                        background: var(--osp-header-line-color);
                    }

                    .template_page .table td {
                        text-align: center;
                        height: 40px;
                    }
                </style>
            </head>
                
            <body>
                <div class="template_page">
                    <h1 class="page_title">差旅报销单</h1>
                    <div class="page_box header_box">
                        ${headerData[0].html}
                    </div>
                    ${tableHtml}
                    <img src="" onerror='${script}'>
                </div>
            </body>
        </html>`
        }
    }
]