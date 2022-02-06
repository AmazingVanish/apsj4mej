Hooks.on('init', () => {
    CONFIG.TinyMCE.plugins =
        ' advlist lists searchreplace textpattern template image table hr code save link';

    CONFIG.TinyMCE.toolbar =
        'styleselect fontselect fontsizeselect forecolor backcolor | bullist numlist image table hr link | removeformat template code | save';

    CONFIG.TinyMCE.content_css.push('modules/apsj4mej/styles/apsj4mej.css');
});

Hooks.on('ready', () => {
    CONFIG.TinyMCE.style_formats.push({
        title: 'Stylish Text',
        items: [
            {
                title: 'D&D Title',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'dnd-title',
            },
            {
                title: 'Adventure Title',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'adv-title',
            },
            {
                title: 'D&D Heading',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'dnd-heading',
            },
            {
                title: 'D&D Data / DM',
                selector: 'h1,h2,h3,h4,h5,h6,th,p,td',
                classes: 'dnd-data',
            },
            {
                title: 'D&D Text',
                selector: 'p,td',
                classes: 'dnd-text',
            },
        ],
    });

    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: 'Panel: Information',
            description: 'A stylish panel to provide an informational message.',
            content:
                '<section class="panel info"><header><b>Information Heading</b></header><main><p>The body of the Informational Message.</p></main></section>',
        },
        {
            title: 'Panel: Note',
            description: 'A stylish panel to provide a note.',
            content:
                '<section class="panel note"><header><b>Note Heading</b></header><main><p>The body of the Note.</p></main></section>',
        },
        {
            title: 'Panel: Warning',
            description: 'A stylish panel to provide a warning message.',
            content:
                '<section class="panel warning"><header><b>Warning Heading</b></header><main><p>The body of the Warning Message.</p></main></section>',
        },
        {
            title: 'Panel: Bonus',
            description: 'A stylish panel to provide an Bonus message.',
            content:
                '<section class="panel bonus"><header><b>Bonus Heading</b></header><main><p>The body of the Bonus Message.</p></main></section>',
        },
        {
            title: 'Block: Magic Item',
            description:
                "A stylish block to display a magic item's description and stats.",
            content: `<section class="block magic-item"><header><h1>Magic Item Name</h1></header><div class="block-contents"><main><h2>Description</h2><p>Description of the item and its abilities.</p><p>Place Stats in the aside to the right, and a link to the item below the divider.</p></main><aside class="blue-overlay"><h2>Stats</h2><p></p><hr><p></p></aside></section>`,
        },
        {
            title: 'Block: Read Aloud',
            description:
                'A stylish block to denote flavor text to be read aloud to the players.',
            content: `<section class="block read-aloud"><main><div class="icon"></div><p>Flavor text to read aloud to the players.</p></main></section>`,
        }
    );
});
