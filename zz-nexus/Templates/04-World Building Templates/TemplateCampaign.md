<% "---" %>


<%* 
const campaignName = await tp.system.prompt("What do you want to call your campaign? (no special chars)");
await tp.file.rename(campaignName);
const tag = await tp.system.prompt("Enter a shorthand. (i.e. World of Fun -> WoF)");
await tp.file.rename(campaignName);
_%>
<% await tp.file.move(`03-Campaigns/${campaignName}/` + campaignName) %>
obsidianUIMode: preview
NoteIcon: campaign
campaignTag: Campaign/<% tag %>
tags:
  - Campaign/<% tag %>
  - Category/Campaign 
milestonesForTier: 6
campaignAbbr: <% tag %>
 
name: <% campaignName %>
publish: true
<% "---" %>

 `$= "# [[" + dv.current().file.name + "]]"`

`BUTTON[new-location, new-faction, new-journal, new-npc, new-item, new-player, new-quest]`

> [!infobox]+
> ###### `=this.file.name`
> | Attr | Value|
> | --- | --- |
> |World|  `VIEW[{world}][text(renderMarkdown)]`   |

## Players

```meta-bind-embed
![[Party Table]]
```

## Quests

 > [!tldr] 
> ```base
> properties:
>   note.numsess:
>     displayName: Number of Sessions
> views:
>   - type: table
>     name: Table
>     filters:
>       and:
>         - file.hasTag("Campaign/<% tag %>")
>         - file.hasTag("Category/Quest")
>     order:
>       - file.name
>       - questStatus
>       - numsess
>       - requiredPlayers
>     columnSize:
>       note.numsess: 104
> 
> ```
## Magic Items

> [!blank|   t-w no-t] 
>```meta-bind-embed
> ![[MagicItemTracker2]]
> ```

## Travel Speed

```meta-bind-embed
![[TravelCalc]]
```

##### Location Note Code

Copy the code below into another note and change the `258` to match the distance between Town A and Town B. 
```
Miles: `VIEW[round((258* {The Adventurer's Guild#TravelCalc}) / 60 / {The Adventurer's Guild#HoursPerDay}, 1)]`
KM: `VIEW[round(( 258 * 0.62 * {The Adventurer's Guild#TravelCalc}) / 60 / {The Adventurer's Guild#HoursPerDay}, 1)]`
```

 