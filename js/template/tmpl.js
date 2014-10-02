    var mytemplate = {};

    mytemplate['sample'] = '<div class="wrapArticle">\n' +
    '    <div>+ This is sample.tmpl.html</div>\n' +
    '\n' +
    '    <div class="todayInfo">\n' +
    '        <span class="week">Today</span>\n' +
    '        <span class="count"></span>\n' +
    '    </div>\n' +
    '\n' +
    '    {{? it.name === \'Kim\'}}\n' +
    '    <div>{{=it.name}}</div>\n' +
    '    {{?? it.company}}\n' +
    '    <div>{{=it.company}}</div>\n' +
    '    {{??}}\n' +
    '    <div>no name</div>\n' +
    '    {{?}}\n' +
    '\n' +
    '    {{~it.items :value :index}}\n' +
    '    <div>value is {{=value.value}}, index is {{=index}}</div>\n' +
    '    {{~}}\n' +
    '\n' +
    '</div>';
