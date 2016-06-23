var fs = require('fs'),
    packData = require('./level');

for (var packName in packData) {
    var pack = packData[packName];
    var contents = [];
    for (var index in pack) {
        var level = pack[index],
            stars = level.stars,
            line = '';
        if (stars[2]>1){
            contents.push(`##### ${level.id} ${level.title} *目标：${stars[0]}L ${stars[1]}E ${stars[2]}V*`);
        } else {
            contents.push(`##### ${level.id} ${level.title} *目标：${stars[0]}L ${stars[1]}E*`);
        }
        line += `- [查看题目](images/level/${level.image}.png) `;
        if (level.fact) {
            if (level.fact[1]) {
                line += `[知识点1](images/hints/${level.fact[0]}.png) `;
                line += `[知识点2](images/hints/${level.fact[1]}.png) `;
            } else {
                line += `[知识点](images/hints/${level.fact[0]}.png) `;
            }
        }
        if (level.draft) {
            line += `[${stars[0]}L${stars[1]}E草图](images/hints/${level.draft}.png) `;
        }
        if (level.edraft) {
            line += `[${stars[1]}E草图](images/hints/${level.edraft}.png)`;
        }
        contents.push(line);
        if (level.seq) {
            contents.push(`+ *${stars[0]}L${stars[1]}E*步骤：${level.seq}`);
            contents.push(`- 【待编辑】*${stars[0]}L${stars[1]}E*解题思路：xxx。[参考图](images/solved/${level.id}.${stars[0]}L${stars[1]}E.png)`);
        }
        if (level.lseq) {
            contents.push(`+ *${stars[0]}L*步骤：${level.lseq}`);
            contents.push(`- 【待编辑】*${stars[0]}L*解题思路：xxx。[参考图](images/solved/${level.id}.${stars[0]}L.png)`);
        }
        if (level.eseq) {
            contents.push(`+ *${stars[1]}E*步骤：${level.eseq}`);
            contents.push(`- 【待编辑】*${stars[1]}E*解题思路：xxx。[参考图](images/solved/${level.id}.${stars[1]}E.png)`);
        }

        if (stars[2]>1) {
            contents.push(`- 【待编辑】*${stars[2]}V*解题思路：xxx。[参考图](images/solved/${level.id}.${stars[2]}V.png)`);
        }
            contents.push('\n');
    }
    saveFileContent(packName+'.md', contents.join('\n'));
}


function saveFileContent(file, content) {
    fs.writeFileSync(file, content, {encoding: 'utf8'});
}