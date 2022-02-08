const debouncedReload = foundry.utils.debounce(
    () => window.location.reload(),
    100
);

Hooks.on('init', () => {
    game.settings.register('apsj4mej', 'apsj4mejEnableParchment', {
        name: game.i18n.format('APSJ4MEJ.menuEnableParchmentName'),
        hint: game.i18n.format('APSJ4MEJ.menuEnableParchmentHint'),
        scope: 'client',
        config: true,
        default: true,
        type: Boolean,
        onChange: debouncedReload,
    });

    // game.settings.register('apsj', 'apsjTitleSize', {
    //     name: game.i18n.format('APSJ.menuTitleSizeName'),
    //     scope: 'world',
    //     config: true,
    //     type: String,
    //     default: '48',
    //     choices: {
    //         '8': '8',
    //         '10': '10',
    //         '12': '12',
    //         '14': '14',
    //         '18': '18',
    //         '24': '24',
    //         '36': '36',
    //     },
    // });

    // game.settings.register('apsj', 'apsjHeadingSize', {
    //     name: game.i18n.format('APSJ.menuHeadingSizeName'),
    //     scope: 'world',
    //     config: true,
    //     type: String,
    //     default: '36',
    //     choices: {
    //         '8': '8',
    //         '10': '10',
    //         '12': '12',
    //         '14': '14',
    //         '18': '18',
    //         '24': '24',
    //         '36': '36',
    //     },
    // });

    CONFIG.TinyMCE.plugins =
        ' advlist lists anchor searchreplace textpattern template image table hr code save link';

    CONFIG.TinyMCE.toolbar =
        'styleselect fontselect fontsizeselect formatgroup paragraphgroup insertgroup code save';

    CONFIG.TinyMCE.toolbar_groups = {
        formatgroup: {
            icon: 'format',
            tooltip: 'Formatting',
            items: 'bold italic underline strikethrough | forecolor backcolor | superscript subscript | removeformat',
        },
        paragraphgroup: {
            icon: 'paragraph',
            tooltip: 'Paragraph format',
            items: 'h1 h2 h3 | bullist numlist | alignleft aligncenter alignright | indent outdent',
        },
        insertgroup: {
            icon: 'plus',
            tooltip: 'Insert',
            items: 'link anchor image table hr | template',
        },
    };

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
            content: `
<section class="panel info">
	<header class="dnd-panel-heading">Information Heading</header>
	<main>
		<p class="dnd-data">The body of the Informational Message.</p>
	</main>
</section>
<p class="dnd-text"></p>`,
        },
        {
            title: 'Panel: Note',
            description: 'A stylish panel to provide a note.',
            content: `
<section class="panel note">
	<header class="dnd-panel-heading">Note Heading</header>
	<main>
		<p class="dnd-data">The body of the Note.</p>
	</main>
</section>
<p class="dnd-text"></p>`,
        },
        {
            title: 'Panel: Warning',
            description: 'A stylish panel to provide a warning message.',
            content: `
<section class="panel warning">
	<header class="dnd-panel-heading">Warning Heading</header>
	<main>
		<p class="dnd-data">The body of the Warning message.</p>
	</main>
</section>
<p class="dnd-text"></p>`,
        },
        {
            title: 'Panel: Bonus',
            description: 'A stylish panel to provide an Bonus message.',
            content: `
<section class="panel bonus">
	<header class="dnd-panel-heading">Bonus Heading</header>
	<main>
		<p class="dnd-data">The body of the Bnus message.</p>
	</main>
</section>
<p class="dnd-text"></p>`,
        },
        {
            title: 'Block: Magic Item',
            description:
                "A stylish block to display a magic item's description and stats.",
            content: `
<section class="block magic-item">
	<header>
		<h1 class="dnd-title">Magic Item Name</h1>
	</header>
	<div class="block-contents">
		<main>
			<h2 class="dnd-heading">Description</h2>
			<p class="dnd-text">Description of the item and its abilities.</p>
			<p class="dnd-text">Place Stats in the aside to the right, and a link to the item below the divider.</p>
		</main>
		<aside class="blue-overlay">
			<h2 class="dnd-heading">Stats</h2>
			<p class="dnd-data"></p>
			<hr>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p class="dnd-text"></p>`,
        },
        {
            title: 'Block: Read Aloud',
            description:
                'A stylish block to denote flavor text to be read aloud to the players.',
            content: `
<section class="block read-aloud">
	<main>
		<div class="icon"></div>
		<p class="dnd-text">Flavor text to read aloud to the players.</p>
	</main>
</section>
<p class="dnd-text"></p>`,
        }
    );
});

console.log(`
\r\n  _________ __          .__  .__       .__     \r\n \/   _____\/\/  |_ ___.__.|  | |__| _____|  |__  \r\n \\_____  \\\\   __<   |  ||  | |  |\/  ___\/  |  \\ \r\n \/        \\|  |  \\___  ||  |_|  |\\___ \\|   Y  \\\r\n\/_______  \/|__|  \/ ____||____\/__\/____  >___|  \/\r\n        \\\/       \\\/                  \\\/     \\\/ \r\n
`);
