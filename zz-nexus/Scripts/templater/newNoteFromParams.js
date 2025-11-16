


module.exports = async function extractContents(tp, params, replacementString = "%%Contents%%") {

    let {
        template,
        frontmatter,
        title,
        content
    } = params;

    const dv = app.plugins.plugins.dataview.api;
    const templateFiles = dv.pages('"zz-nexus/Templates/04-World Building Templates"')
    let selectedTemplate;
    if (!template) {
        selectedTemplate = (
            await tp.system.suggester((campaign) => {
                return campaign.file.name;
            }, templateFiles, false, "What template do you want to use?")
        )
    } else {
        selectedTemplate = {file: {path: template}};
    }
    selectedTemplate = selectedTemplate || templateFiles[0];
    const templateContents = await dv.io.load(selectedTemplate.file.path);



    if (!title)
        title = await tp.system.prompt("Embed Link Header", selectedText);
    await tp.file.rename(title);


    let selectedText = '\n' + content + '\n';

    const arrayEachLine = templateContents.split('\n');
    selectLine = arrayEachLine.find(line => line.includes(replacementString)) || null;
    const frontmatterStartLine = arrayEachLine.find(line => line.includes('<% "---" %>')) || null;
    let newContents;
    if (templateContents.contains(selectLine)) {
        newContents = templateContents.replace(selectLine, selectedText);
    } else {
        newContents = templateContents + '\n' + selectedText;
    }
 
    if (frontmatter) {
        let newfm = '<% --- %>'
        for (key of Object.keys) {
            if (Array.isArray(frontmatter[key])) {
                newfm = newfm + `${key}:\n`
                    + ` - ${frontmatter[key].join('\n - ')}`
            } else {
                newfm = newfm + `${key}: ${frontmatter[key]} `
            }
        }
        if (frontmatterStartLine) {
            newContents = newContents.replace(frontmatterStartLine, newfm + '\n')
        } else {
            newContents = newfm + '\n' + newContents;
        }

        return newContents;
    }
}