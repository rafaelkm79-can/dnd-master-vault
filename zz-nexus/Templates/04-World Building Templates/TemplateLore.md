<% "---" %>
<%*

  const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))

-%>
<% await tp.file.move(`${campaignFolder}/04-Codex/04-Lore/` + tp.file.title) %>
 
<%*
const hasTitle = !tp.file.title.startsWith("NewLore");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("What's this about");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
aliases:
 - <% title %>
obsidianUIMode: preview
NoteIcon: lore
Tags: 
 - Category/Lore
 - <% campaignTag %>
  - InProgress

<% "---" %>

# `=this.file.name`
> [!infobox]
> ## Mentioned in
>   
> ```dataview
> Table FROM [[]]
> ``` 