Hooks.on('init', () => {
    game.settings.register('apsj4mej', 'apsj4mejEnableParchment', {
        name: game.i18n.format('APSJ4MEJ.menuEnableParchmentName'),
        hint: game.i18n.format('APSJ4MEJ.menuEnableParchmentHint'),
        scope: 'client',
        config: true,
        default: true,
        type: Boolean,
        onChange: () => window.location.reload(),
    });

    // game.settings.register('apsj4mej', 'apsj4mejTitleSize', {
    //     name: game.i18n.format('APSJ4MEJ.menuTitleSizeName'),
    //     scope: 'world',
    //     config: true,
    //     type: Number,
    //     default: '48',
    // });

    // game.settings.register('apsj4mej', 'apsj4mejHeadingSize', {
    //     name: game.i18n.format('APSJ4mEJ.menuHeadingSizeName'),
    //     scope: 'world',
    //     config: true,
    //     type: Number,
    //     default: '36',
    // });

    CONFIG.TinyMCE.plugins =
        ' advlist lists searchreplace textpattern template image table hr code save link';

    CONFIG.TinyMCE.toolbar =
        'styleselect fontselect fontsizeselect forecolor backcolor | bullist numlist image table hr link | removeformat template code | save';

    CONFIG.TinyMCE.content_css.push('modules/apsj4mej/styles/apsj4mej.css');
});

Hooks.on('ready', () => {
    if (game.settings.get('apsj4mej', 'apsj4mejEnableParchment')) {
        let innerHTML = '';
        let style = document.createElement('style');
        style.id = 'apsj4mej-changes';
        innerHTML += `
.monks-enhanced-journal .mainbar {
	background-image: url(modules/apsj4mej/assets/parchment-medium.webp);
}

.monks-enhanced-journal .directory-sidebar {
	background-image: url(modules/apsj4mej/assets/parchment-medium.webp) !important;
}

.monks-enhanced-journal .tab-bar .journal-tab.active {
	background-image: url(modules/apsj4mej/assets/parchment.webp);
}

.monks-journal-sheet .encounter-body {
	background-image: url(modules/apsj4mej/assets/parchment-bloody.webp);
}

.monks-journal-sheet,
.monks-journal-sheet.sheet .person-container,
.monks-journal-sheet.sheet .place-container,
.monks-journal-sheet.sheet .quest-container,
.monks-journal-sheet.sheet .organization-container,
.monks-journal-sheet.sheet .shop-container,
.monks-journal-sheet.sheet .loot-container,
.monks-journal-sheet.sheet .poi-container {
	background-image: url(modules/apsj4mej/assets/parchment.webp);
}
`;
        style.innerHTML = innerHTML;
        if (innerHTML != '') {
            document.querySelector('head').appendChild(style);
        }
    }

    CONFIG.TinyMCE.style_formats.push({
        title: 'Stylish Text',
        items: [
            {
                title: 'Stylish Heading (Title)',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'dnd-title',
            },
            {
                title: 'Stylish Heading',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'dnd-heading',
            },
            {
                title: 'Stylish Data',
                selector: 'h1,h2,h3,h4,h5,h6,th',
                classes: 'dnd-data',
            },
            {
                title: 'Stylish Paragraph',
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
                '<section class="panel info"><header><b>Information Heading</b></header><main><p>The body of the Informational Message.</p></main></section><p></p>',
        },
        {
            title: 'Panel: Note',
            description: 'A stylish panel to provide a note.',
            content:
                '<section class="panel note"><header><b>Note Heading</b></header><main><p>The body of the Note.</p></main></section><p></p>',
        },
        {
            title: 'Panel: Warning',
            description: 'A stylish panel to provide a warning message.',
            content:
                '<section class="panel warning"><header><b>Warning Heading</b></header><main><p>The body of the Warning Message.</p></main></section><p></p>',
        },
        {
            title: 'Panel: Bonus',
            description: 'A stylish panel to provide an Bonus message.',
            content:
                '<section class="panel bonus"><header><b>Bonus Heading</b></header><main><p>The body of the Bonus Message.</p></main></section><p></p>',
        },
        {
            title: 'Block: Magic Item',
            description:
                "A stylish block to display a magic item's description and stats.",
            content: `<section class="block magic-item"><header><h1>Magic Item Name</h1></header><div class="block-contents"><main><h2>Description</h2><p>Description of the item and its abilities.</p><p>Place Stats in the aside to the right, and a link to the item below the divider.</p></main><aside class="blue-overlay"><h2>Stats</h2><p></p><hr><p></p></aside></section><p></p>`,
        },
        {
            title: 'Block: Read Aloud',
            description:
                'A stylish block to denote flavor text to be read aloud to the players.',
            content: `<section class="block read-aloud"><main><div class="icon"></div><p>Flavor text to read aloud to the players.</p></main></section><p></p>`,
        }
    );
});
