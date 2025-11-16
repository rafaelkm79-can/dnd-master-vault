module.exports = async (tp, app) => {
    const dv = app.plugins.plugins.dataview.api;
    const templateFiles = dv.pages('"zz-nexus/Templates/04-World Building Templates"')
    let selectedTemplate = (
        await tp.system.suggester((campaign) => {
            return campaign.file.name;
        }, templateFiles, false, "What template do you want to use?")
    )
    selectedTemplate = selectedTemplate ||templateFiles[0];
    const templateContents =  await dv.io.load(selectedTemplate.file.path); 
    return templateContents;
};