/**
 * Safe window reload after settings changes
 **/

const debouncedReload = foundry.utils.debounce(
    () => window.location.reload(),
    100
);

/**
 * Change to the selected theme in local storage
 **/
const setTheme = (theme) => (document.documentElement.className = theme);

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

    let theme = localStorage.getItem('apsj-theme');

    if (theme) {
        setTheme(theme);
    } else {
        setTheme('red');
    }

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

.dnd5e .monks-enhanced-journal .tab-bar .journal-tab.active {
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
                title: game.i18n.format('APSJ4MEJ.textHeadingTitleName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-title',
            },
            {
                title: game.i18n.format('APSJ4MEJ.textHeadingName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-heading',
            },
            {
                title: game.i18n.format('APSJ4MEJ.textDataHeadingName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-data-heading',
            },
            {
                title: game.i18n.format('APSJ4MEJ.textDataName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-data',
            },
            {
                title: game.i18n.format('APSJ4MEJ.textParagraphName'),
                selector: 'td,p',
                classes: 'dnd-text',
            },
        ],
    });

    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: game.i18n.format('APSJ4MEJ.panelBonusName'),
            description: game.i18n.format('APSJ4MEJ.panelBonusDescription'),
            content:
                `
<section class="panel bonus">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelBonusHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelEffectName'),
            description: game.i18n.format('APSJ4MEJ.panelEffectDescription'),
            content:
                `
<section class="panel effect">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelEffectHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelInformationName'),
            description: game.i18n.format(
                'APSJ4MEJ.panelInformationDescription'
            ),
            content:
                `
<section class="panel info">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelInformationHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelLootName'),
            description: game.i18n.format('APSJ4MEJ.panelLootDescription'),
            content:
                `
<section class="panel loot">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelLootHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelNoteName'),
            description: game.i18n.format('APSJ4MEJ.panelNoteDescription'),
            content:
                `
<section class="panel note">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelNoteHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelTrapName'),
            description: game.i18n.format('APSJ4MEJ.panelTrapDescription'),
            content:
                `
<section class="panel trap">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelTrapHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.panelWarningName'),
            description: game.i18n.format('APSJ4MEJ.panelWarningDescription'),
            content:
                `
<section class="panel warning">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ4MEJ.panelWarningHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ4MEJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockCardName'),
            description: game.i18n.format('APSJ4MEJ.blockCardDescription'),
            content:
                `
<section class="block deck-card">
	<div class="block-contents">
		<aside class="apsj-card">
			<p></p>
		</aside>
		<main>
			<header>
				<h1 class="dnd-title">` +
                game.i18n.format('APSJ4MEJ.blockCardHeading') +
                `</h1>
			</header>` +
                game.i18n.format('APSJ4MEJ.blockCardBody') +
                `</main>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockEncounterName'),
            description: game.i18n.format('APSJ4MEJ.blockEncounterDescription'),
            content:
                `
<section class="block encounter">
	<header><h1 class="dnd-title">` +
                game.i18n.format('APSJ4MEJ.blockEncounterHeading') +
                `</h1></header>
	<div class="block-contents">
		<main class="light-overlay">
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ4MEJ.blockDescription') +
                `</h2>` +
                game.i18n.format('APSJ4MEJ.blockEncounterBody') +
                `</main>
		<aside class="red-overlay">
			<h2 class="dnd-heading black-border">` +
                game.i18n.format('APSJ4MEJ.blockAdversaries') +
                `</h2>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockMagicItemName'),
            description: game.i18n.format('APSJ4MEJ.blockMagicItemDescription'),
            content:
                `
<section class="block magic-item">
	<header>
		<h1 class="dnd-title">` +
                game.i18n.format('APSJ4MEJ.blockMagicItemHeading') +
                `</h1>
	</header>
	<div class="block-contents">
		<main>
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ4MEJ.blockDescription') +
                `</h2>` +
                game.i18n.format('APSJ4MEJ.blockMagicItemBody') +
                `</main>
		<aside class="blue-overlay">
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ4MEJ.blockStats') +
                `</h2>
			<p class="dnd-data"></p>
			<hr>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockReadAloudName'),
            description: game.i18n.format('APSJ4MEJ.blockReadAloudDescription'),
            content:
                `
<section class="block read-aloud">
	<main>
		<div class="ra-icon"></div>` +
                game.i18n.format('APSJ4MEJ.blockReadAloudBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueBlueLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-blue">
	<main>
		<div class="dialogue-icon-left blue"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueBlueRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-blue">
	<main>
		<div class="dialogue-icon-right blue"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueCyanLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-cyan">
	<main>
		<div class="dialogue-icon-left cyan"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueCyanRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-cyan">
	<main>
		<div class="dialogue-icon-right cyan"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueGreenLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-green">
	<main>
		<div class="dialogue-icon-left green"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueGreenRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-green">
	<main>
		<div class="dialogue-icon-right green"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueOrangeLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-orange">
	<main>
		<div class="dialogue-icon-left orange"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueOrangeRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-orange">
	<main>
		<div class="dialogue-icon-right orange"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialoguePurpleLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-purple">
	<main>
		<div class="dialogue-icon-left purple"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialoguePurpleRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-purple">
	<main>
		<div class="dialogue-icon-right purple"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueRedLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-red">
	<main>
		<div class="dialogue-icon-left red"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueRedRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-red">
	<main>
		<div class="dialogue-icon-right red"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueYellowLeftName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-yellow">
	<main>
		<div class="dialogue-icon-left yellow"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ4MEJ.blockDialogueYellowRightName'),
            description: game.i18n.format('APSJ4MEJ.blockDialogueDescription'),
            content:
                `
<section class="block dialogue-yellow">
	<main>
		<div class="dialogue-icon-right yellow"></div>` +
                game.i18n.format('APSJ4MEJ.blockDialogueBody') +
                `</main>
</section>
<p></p>`,
        }
    );

    Hooks.on('renderJournalSheet', () => {
        function changeColorTheme(theme, e) {
            setTheme(theme);
            localStorage.setItem('apsj-theme', theme);

            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
        }

        function toggleThemeSwitcher() {
            var tooltip = document.getElementById('theme-switcher');
            if (tooltip.style.display === 'none') {
                tooltip.style.display = 'block';
            } else {
                tooltip.style.display = 'none';
            }
        }

        let buttons = document.getElementById('journal-buttons');
        let nba = document.createElement('div');
        nba.innerHTML = `<i class='fas fa-palette'></i>
		<div id='theme-switcher' style='display:none;'>
			<div class="ct-none" id="ct-none"></div>
			<div class="ct-blue" id="ct-blue"></div>
			<div class="ct-cyan" id="ct-cyan"></div>
			<div class="ct-green" id="ct-green"></div>
			<div class="ct-orange" id="ct-orange"></div>
			<div class="ct-purple" id="ct-purple"></div>
			<div class="ct-red" id="ct-red"></div>
			<div class="ct-yellow" id="ct-yellow"></div>
		</div>`;
        nba.title = 'Color Theme';
        nba.classList.add('nav-button');
        nba.classList.add('apsj-ct');
        nba.setAttribute('id', 'apsj-color-theme-toggle');
        buttons.parentNode.insertBefore(nba, buttons.nextSibling);

        document.getElementById('ct-none').addEventListener(
            'click',
            function (event) {
                changeColorTheme('none', event);
            },
            false
        );

        document.getElementById('ct-blue').addEventListener(
            'click',
            function (event) {
                changeColorTheme('blue', event);
            },
            false
        );

        document.getElementById('ct-cyan').addEventListener(
            'click',
            function (event) {
                changeColorTheme('cyan', event);
            },
            false
        );

        document.getElementById('ct-green').addEventListener(
            'click',
            function (event) {
                changeColorTheme('green', event);
            },
            false
        );

        document.getElementById('ct-orange').addEventListener(
            'click',
            function (event) {
                changeColorTheme('orange', event);
            },
            false
        );

        document.getElementById('ct-purple').addEventListener(
            'click',
            function (event) {
                changeColorTheme('purple', event);
            },
            false
        );

        document.getElementById('ct-red').addEventListener(
            'click',
            function (event) {
                changeColorTheme('red', event);
            },
            false
        );

        document.getElementById('ct-yellow').addEventListener(
            'click',
            function (event) {
                changeColorTheme('yellow', event);
            },
            false
        );

        document.getElementById('apsj-color-theme-toggle').onclick =
            function () {
                toggleThemeSwitcher();
            };
    });

    console.log(
        `%c Arius Planeswalker's \n%cStylish\n%cJournal`,
        'font-weight: bold;text-shadow: 1px 1px 0px rgba(0,0,0,0.6);font-size:24px;background: rgb(241, 217, 181); color: #800000; padding: 2px 28px 0 2px; width: 100%; display: inline-block;',
        'font-weight: bold;text-shadow: -2px -2px 0px rgB(255,255,255), 2px 2px 0px rgba(0,0,0,0.6);font-size:75px;background: rgb(241, 217, 181); color: #000000; padding: 2px 28px 0 2px; width: 100%; display: inline-block; margin-left: -30px;',
        'font-weight: bold;text-shadow: -2px -2px 0px rgB(255,255,255), 2px 2px 0px rgba(0,0,0,0.6);font-size:75px;background: rgb(241, 217, 181); color: #000000; padding: 2px 28px 0 2px; width: 100%; display: inline-block;'
    );
});
