﻿define(
	 ({
		header: {
			start: "start",
			searchStories: "Sök i dina berättelser ...",
			filter: "Filter",
			sort: "Sortera",
			sortColon: "Sortera:",
			numResults: "Resultat: {{NUM_RESULTS}}",
			sortBy: "Sortera efter",
			dateModified: "Ändrad den",
			title: "Titel",
			type: "Typ",
			views: "Vyer",
			errors: "Fel",
			filterBy: "Filtrera efter",
			filterItems: "Filtrera objekt",
			apps: "Appar",
			sharing: "Delning",
			clearAll: "Rensa alla",
			clearSearch: "Rensar sökningen",
			logOut: "Logga ut",
			mainQuote: "Berättelser är ett av de mest kraftfulla sätten att presentera idéer för världen idag.",
			quoteSource: "Robert McKee",
			checkYourStories: "Kontrollera berättelser",
			createStory: "Skapa berättelse",
			totalStories: "Totalt antal berättelser: {{NUM_STORIES}}",
			noIssues: "Bra",
			userStories: "Berättelser från {{USER_NAME}}",
			headerDisabledTooltip: "Vänta medan vi skapar lite magi ...",
			notOnTouch: "Ej tillgänglig på pekenheter",
		},
		deleteModal: {
			title: "Bekräfta borttagning",
			warningText: "Är du säker på att du vill radera denna berättelse? Du kommer inte kunna återställa den.",
			deleteText: "Ta bort",
			cancel: "Avbryt"
		},
		loading: {
			loadingText: "Läser in berättelser ..."
		},
		cantFindStories: {
			whereAreStories: "Ser du inte din berättelse?",
			notSeeExplanation: "Mina berättelser visar bara berättelsekartor i ArcGIS Online som skapats med applikationerna {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} och {{SWIPE_SPYGLASS}}. Se {{FAQ}} för mer information.",
			faq: "Vanliga frågor och svar",
			followingStoriesToUpdate: "Följande berättelser som skapats med tidigare versioner av våra applikationer behöver uppdateras för att de ska visas i Mina berättelser:",
			gettingStories: "Söker efter berättelser som skapats med tidigare versioner av våra applikationer som behöver uppdateras ...",
			title: "Titel",
			typeOfStoryMap: "Typ",
			lastModified: "Senast ändrad",
			allUpToDate: "Det finns inga berättelser som skapats med tidigare versioner av våra applikationer som behöver uppdateras.",
			updateAll: "Uppdatera alla",
			errorScanningForStories: "Ett fel uppstod vid sökningen efter dina berättelser.",
			close: "Stäng",
			updates: "Uppdateringar",
			updatingNumberOfNumber: "Uppdaterar {{CURRENT_NUMBER}} av {{TOTAL}}",
			updatingNumberOfNumberAlt: "Uppdaterar {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Uppdateringen lyckades.",
			reloadingStories: "Uppdaterar dina berättelser ...",
			errorUpdatingStories: "Ett fel uppstod vid uppdateringen av dina berättelser.",
			partialUpdateMessage: "Berättelserna har uppdaterats: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Logga in i berättelsekartor",
			signInTo: "Logga in med ditt befintliga ArcGIS Online-konto på:",
			explanationOne: "Skapa trevliga berättelsekartor för att berätta dina historier.",
			explanationTwo: "Använd dina kartor och data från ArcGIS Online i berättelsekartorna.",
			explanationThree: "Hantera dina berättelsekartor och kontrollera status för deras innehåll.",
			dontHaveAccount: "Har du inget ArcGIS Online-konto? Registrera dig för ett:",
			publicAccount: "Kostnadsfritt, icke-kommersiellt publikt konto",
			orgAccount: "Kostnadsfritt ArcGIS-provabonnemang",
			timeExpired: "Inloggningen har gått ut. Logga in igen för att fortsätta där du slutade.",
			apiDidntLoad: "Något läses inte in korrekt. Prova med att uppdatera sidan.",
			needAccount: "Behöver du ett konto?",
			letsGo: "Då sätter vi igång!"
		},
		sharingLevel: {
			publicMessage: "Allmän",
			privateMessage: "Privat",
			organization: "Organisation",
			changedSharing: "Ändrade delningsnivå.",
			unableToChange: "Det går inte att ändra delningen.",
			partOfMap: "Detta objekt ligger i en karta. Om du vill ändra dess delningsnivå måste du ändra kartans delningsnivå.",
			storyPublicContentOrg: "Din berättelse är publik så dess innehåll kan inte enbart delas inom din organisation.",
			storyPublicContentPrivate: "Din berättelse är publik så dess innehåll kan inte vara privat",
			mapOrg: "Om du delar kartan i din organisation avslöjas din berättelse",
			layerOrg: "Om du delar lagret i din organisation avslöjas din berättelse",
			mapPrivate: "Om du gör kartan privat avslöjas din berättelse",
			layerPrivate: "Om du gör lagret privat avslöjas din berättelse"
		},
		collectionList: {
			advocacy: "Humanitära insatser och uppsökande verksamhet",
			architecture: "Arkitektur och design",
			conservation: "Bevarande och hållbarhet",
			culture: "Kultur",
			destinations: "Destinationer och turism",
			disasters: "Katastrofer och återuppbyggnad",
			economy: "Ekonomi och utveckling",
			entertainment: "Nöje",
			history: "Historik",
			infrastructure: "Infrastruktur",
			marketing: "Marknadsföring",
			nature: "Natur och miljö",
			news: "Nyheter och händelser",
			oceans: "Hav",
			parks: "Parker och fritid",
			people: "Människor och samhälle",
			planning: "Planering och analys",
			publicArt: "Offentlig konst",
			science: "Vetenskap och teknik",
			sport: "Sport",
			travelogues: "Reseskildringar"
		},
		types: {
			custom: "Anpassat",
			notSpecified: "Ingen typ har angetts"
		},
		storyMap: {
			shared: "Delad",
			saveFailed: "Det gick inte att spara",
			numViews: "Visningar: {{NUM_VIEWS}}",
			editStory: "Redigera berättelse",
			viewLive: "Visa live",
			preview: "Förhandsgranska",
			deleteButton: "Ta bort",
			modified: "Ändrad {{DATE}}",
			summary: "Sammanfattning",
			loading: "Läser in...",
			collapse: "komprimera",
			close: "stäng",
			hide: "dölja",
			notAvailableWhenBroken: "Berättelsen har fel, se nedan",
			cantBeDeleted: "Denna berättelse har skydd mot borttagning aktiverat, se objektsidan på ArcGIS Online för att inaktivera det",
			shareDialog: {
				title: "Dela berättelsen med världen!",
				notPublicWarning: "Du delar din berättelse med din organisation. Enbart medlemmar i din organisation kan visa den.",
				embedStory: "Bädda in berättelsen",
				shortLink: "Kortlänk",
				hideHeaderBar: "Dölj rubrikfältet",
				copied: "Kopierad",
				small: "liten",
				medium: "medium",
				large: "stor",
				custom: "anpassad",
				widthAbbreviation: "v",
				heightAbbreviation: "h",
				emptyDimension: "Ange en dimension.",
				seeExample: "Förhandsgranska inbäddning",
				removeHeader: "Dölj applikationens rubrik"
			},
			maps: {
				unableRetrieveTitle: "Det gick inte att hämta kartor",
				unableRetrieveDescription: "Det gick inte att hämta kartor för denna berättelsekarta."
			},
			images: {
				unableRetrieveTitle: "Det gick inte att hämta bilder",
				unableRetrieveDescription: "Det gick inte att hämta bilder för denna berättelsekarta."
			},
			tags: {
				tags: "Taggar",
				collectionTags: "Ämne",
				selectASubject: "Välj ett ämne",
				save: "Spara",
				saved: "Sparad",
				errorSaving: "Det gick inte att spara",
				tagTip: "Tips: Taggar gör att människor hittar din berättelse på ArcGIS Online. Ju mer relevanta taggarna är, desto högre synlighet får ditt verk."
			},
			submitToGallery: {
				gallerySubmission: "Galleri med berättelsekartor",
				canSubmitIf: "Du kan nominera din berättelse till galleriet om den innehåller följande:",
				hasOwnImage: "En egen miniatyrbild",
				chosenSubject: "Ett ämne och några taggar",
				chosenSubjectAlt: "Ett {{SUBJECT}} och några taggar",
				storyMapTopicSubject: "ämne",
				sharedPublicly: "Delas offentligt",
				noBrokenContent: "Inget skadat innehåll",
				nominateToGallery: "Nominera till galleriet",
				comingSoon: "Kommer snart!",
				submitted: "Skickade",
				errorSubmitting: "Det gick inte att skicka",
				ourGallery: "Galleriet med berättelsekartor",
				galleryTip: "{{THE_GALLERY}} är en hanterad uppsättning berättelsekartor som visar några av de bästa exemplen. Om din berättelse väljs ut kommer den att läggas till inom 10 dagar efter att du skickat in den. På grund av det stora antalet nomineringar kan vi inte lova att din berättelse läggs till."
			},
			placeholders: {
				noSummary: "Ingen sammanfattning, klicka om du vill lägga till en."
			},
			errors: {
				cantDeleteStory: "Det gick inte att ta bort berättelsen.",
				unableToFind: "Det gick inte att hitta innehållet",
				unableToRetrieve: "Det gick inte att hämta innehållet för denna berättelsekarta."
			},
			socialSharing: {
				availableWhenPublic: "Detta alternativ blir tillgängligt när din berättelse är publik"
			},
			dialog: {
				back: "Bakom",
				close: "Stäng",
				cancel: "Avbryt"
			},
			imagePicker: {
				changeDefault: "Ändra standardbild",
				changeImage: "Byt miniatyrbild",
				uploadImage: "Ladda upp miniatyrbild",
				chooseImage: "Välj miniatyrbild",
				chooseAnImage: "Välj en bild",
				notInIEVersion: "Funktionen är inte tillgänglig i Internet Explorer {{VERSION_NUMBER}}.",
				or: "Eller",
				uploadAnImage: "Överför en bild",
				supportedFileTypes: "Stöder .png, .jpg, .gif",
				imageSizeMessage: "Bilden måste vara minst 286 px bred gånger 190 px hög.",
				minimumDimensions: "Minimum: 286 x 190 px",
				imagesLoading: "Hämtar bilder ...",
				noImages: "Denna berättelse har inga bilder",
				errorLoading: "Det går inte att hämta bilderna i denna berättelse",
				clickBelowTip: "Klicka på knappen nedan om du vill överföra en bild.",
				dragAndDrop: "Dra och släpp",
				cropImage: "Beskär bild",
				saveImage: "Spara bild",
				save: "Spara",
				savingImage: "Bilden sparas ...",
				saved: "Sparad!",
				errorSaving: "Det gick inte att spara bilden.",
				skipAndCrop: "Hoppa över och beskär åt mig",
				wrongFormat: "Den här filtypen stöds inte.",
				noCropWarning: "Denna bild kan inte beskäras men du kan fortfarande spara den som miniatyrbild till din berättelse med originalmåtten ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}}px)."
			}
		},
		content: {
			media: {
				maps: "Kartor",
				images: "Bilder",
				videos: "Videoklipp",
				webpages: "Webbsidor",
				tags: "Taggar",
				gallery: "Galleri"
			},
			headers: {
				status: "Status",
				source: "Källa",
				name: "Namn",
				shared: "Delad"
			},
			component: {
				mapTour: "Punkt nummer",
				bullet: "Punkt",
				tab: "Flik",
				accordion: "Sektion",
				mapJournal: "Sektion"
			},
			titleType: {
				mapTour: "Bildtext",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "Visa karta",
				editMap: "Redigera karta",
				fix: "Fixa",
				viewLayer: "Visa lager"
			},
			contentType: {
				mainStage: "åtgärd på huvudscenen",
				sidePanel: "beskrivning"
			},
			notification: {
				refreshExplanation: "Kontrollera berättelsen igen",
				checking: "Kontrollerar ...",
				foundSomeIssues: "Vi hittade några problem",
				noIssuesFound: "Inga problem påträffades",
				storyPublic: "Din berättelse är nu publik",
				storyOrg: "Din berättelse delas nu inom din organisation",
				storyPrivate: "Din berättelse är nu privat",
				mapPublic: "Din karta är nu publik",
				mapOrg: "Din karta delas nu inom din organisation",
				mapPrivate: "Din karta är nu privat",
				layerPublic: "Ditt lager är nu publikt",
				layerOrg: "Ditt lager delas nu inom din organisation",
				layerPrivate: "Ditt lager är nu privat",
				contentPublic: "Ditt innehåll är nu publikt",
				contentOrg: "Ditt innehåll delas nu inom din organisation",
				contentPrivate: "Ditt innehåll är nu privat",
				storyAndContentPublic: "Din berättelse och dess innehåll är nu publikt",
				storyAndContentOrg: "Din berättelse och dess innehåll delas nu inom din organisation",
				storyAndContentPrivate: "Din berättelse och dess innehåll är nu privat",
				shareBulkPrompt: "Vill du dela berättelsens innehåll?",
				layersPublic: "Vissa lager har också delats publikt",
				layersOrg: "Vissa lager har också delats inom organisationen",
				layersPrivate: "Vissa lager har också gjorts privata",
				mapsPublic: "Vissa kartor har också delats publikt",
				mapsOrg: "Vissa kartor har också delats inom organisationen",
				mapsPrivate: "Vissa kartor har också gjorts privata",
				layersAndMapsPublic: "Vissa kartor och lager har också delats publikt",
				layersAndMapsOrg: "Vissa kartor och lager har också delats inom organisationen",
				layersAndMapsPrivate: "Vissa kartor och lager har också gjorts privata",
				yes: "Ja",
				no: "Nej",
				premiumPublicSuccess: "Ditt premiuminnehåll är nu publikt tillgängligt.",
				subscriptionPublicSuccess: "Ditt abonnemangsinnehåll är nu publikt tillgängligt"
			},
			errors: {
				publicDisabled: "Publik delning har inaktiverats av administratören",
				noMapName: "Det gick inte att hämta kartans namn",
				notPublic: "INTE PUBLIK",
				inaccessible: "EJ TILLGÄNGLIG",
				deleted: "BORTTAGEN",
				cantAccessVideo: "Det gick inte att komma åt videon",
				noStoriesFound: "Vi kunde inte hitta några berättelsekartor i ditt innehåll.",
				cantShowStories: "Det gick inte att visa berättelsekartorna. Försök igen senare.",
				consolationSearch: "Vi kunde inte hitta några berättelser.",
				notCompatibleWithBrowser : "Mina berättelser kan inte användas med Internet Explorer tidigare än version {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Uppdatera webbläsaren.",
				searchTip: "Försök att förenkla lite.",
				consolationNoStories: "Välkommen till Mina berättelser!",
				noStoriesTip: "När du vill göra din första berättelsekarta går du till appsidan.",
				letsGo: "Då sätter vi igång!",
				cantChangeSharingLevel: "Det går inte att ändra delningsnivån",
				cantChangeSharingLevels: "Det går inte att ändra delningsnivåer",
				errorUpdatingTitle: "Det gick inte att uppdatera titeln",
				errorUpdatingSummary: "Det gick inte att uppdatera sammanfattningen",
				noEmptyTitle: "Titeln får inte vara tom",
				cantUpdatePremiumContent: "Det gick inte att uppdatera premiuminnehållet",
				cantUpdateSubscriptionContent: "Det gick inte att uppdatera abonnemangsinnehållet",
				createFirstStory: "Skapa min första berättelse"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Kartan har tagits bort",
				layerHasBeenDeleted: "Lagret har tagits bort",
				mapIsInaccessible: "Kartan är inte tillgänglig",
				layerIsInaccessible: "Lagret är inte tillgängligt",
				mapNotYoursNotAccessible: "Kartan ägs av någon annan och är inte tillgänglig",
				layerServiceOkItemNot: "Lagret lades till som ett objekt som är borttaget eller otillgängligt",
				layerNotYoursNotAccessible: "Lagret ägs av någon annan och är inte tillgängligt",
				mapOthersSharedBelowLevel: "Kartan ägs inte av dig och är inte publik",
				layerOthersSharedBelowLevel: "Lagret ägs inte av dig och är inte publikt",
				noMapNoDetails: "Utan kartdetaljer kan vi inte säga någonting om lagren",
				mapIsPrivate: "Kartan är privat",
				mapIsOrg: "Kartan delas bara inom din organisation",
				layerIsPrivate: "Lagret är privat",
				layerIsOrg: "Lagret delas bara inom din organisation",
				imageInaccessible: "Denna bild är inte tillgänglig",
				videoInaccessible: "Denna video är inte tillgänglig",
				webpageInaccessible: "Denna webbsida är inte tillgänglig",
				layerSecureService: "Lager är en säker tjänst",
				mapSecureService: "Karta är en säker tjänst",
				layerConsumesCredits: "Lagret är premiuminnehåll och förbrukar krediter",
				layerSubscriptionContent: "Lager är abonnemangsinnehåll",
				mapConsumesCredits: "Kartan är premiuminnehåll och förbrukar krediter",
				mapSubscriptionContent: "Karta är abonnemangsinnehåll"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Vi kan inte kontrollera denna typ av lager",
				cantScanThisType: "Lagret är inte en typ av lager som vi kan kontrollera",
				webpageNotScanned: "Webbsidor kontrolleras inte med avseende på problem"
			},
			scanningErrors: {
				deletedMap: "Borttaget innehåll",
				inaccessibleMap: "Otillgängligt kartinnehåll",
				notYoursNotAccessible: "Innehållet ägs inte av dig och är inte offentligt",
				serviceOkItemNot: "Fungerande lager men otillgängliga objekt",
				someContentNotPublic: "Innehållet delas inte publikt",
				someContentPrivate: "Privat innehåll",
				othersSharedBelowLevel: "Innehållet ägs inte av dig och är inte publikt",
				premiumContent: "Premiuminnehåll",
				subscriptionContent: "Abonnemangsinnehåll",
				secureService: "Säkra tjänster",
				inaccessibleImage: "Otillgängliga bilder",
				inaccessibleVideo: "Otillgängliga videor",
				inaccessibleWebpage: "Otillgängliga webbsidor"
			},
			scanningErrorTips: {
				deletedMapTip: "Tips! Öppna webbkartan och ta bort det skadade innehållet, eller ta bort webbkartan helt och hållet från berättelsen.",
				inaccessibleMapTip: "Tips: Öppna webbkartan och ta bort det skadade innehållet eller ta bort webbkartan från din berättelse.",
				notYoursNotAccessibleTip: "Tips: Öppna webbkartan och ta bort lagret eller kartan från berättelsen.",
				serviceOkItemNotTip: "Lager lades till som objekt som är borttagna eller otillgängliga. Lagren fungerar, men detta kan påverka din karta (popup-fönster, symbologi).",
				ignore: "{Tahoma8}Ignorera",
				fix: "Fixa",
				clickToShareOrg: "Klicka på knappen om du vill dela allt detta innehåll i organisationen, eller ändra varje objekt manuellt genom att klicka på dess delningsknappar.",
				clickToSharePublic: "Klicka på knappen om du vill dela allt detta innehåll publikt, eller ändra varje objekt manuellt genom att klicka på dess delningsknappar.",
				shareOrg: "Dela till din org.",
				sharePublicly: "Dela offentligt",
				othersSharedBelowLevelTip: "Tips: Delar av berättelsens innehåll ägs av {{USER_NAME}}, och andra som visar din berättelse kanske inte kan se det.",
				secureServiceTip: "Tips: Ta bort den säkra tjänsten från din berättelse eller följ processen som beskrivs {{HERE}}.",
				blogArticle: "här",
				premiumContentTip: "Din berättelse innehåller premiuminnehåll som förbrukar {{CREDITS}} när det görs publikt. Gör din berättelse publik och fortsätt, eller ta bort lagren från berättelsen.",
				premiumContentPublicTip: "Din berättelse innehåller premiuminnehåll som förbrukar {{CREDITS}} när det görs tillgängligt publikt. Bekräfta för att göra dessa lager publika, eller ta bort lagren från berättelsen.",
				subscriptionContentTip: "Din berättelse innehåller abonnemangsinnehåll som inte är publikt tillgängligt som standard. Bekräfta för att göra dessa lager tillgängliga (inga krediter förbrukas), eller ta bort lagren från berättelsen.",
				agolCredits: "ArcGIS Online-krediter",
				credits: "krediter",
				makePublic: "Gör publikt",
				confirm: "Bekräfta",
				inaccessibleImageTip: "Tips: Ange den saknade bilden eller ta bort referensen till den.",
				inaccessibleVideoTip: "Tips: Ange den saknade videon eller ta bort referensen till den.",
				inaccessibleWebpageTip: "Tips: Ange den saknade webbsidan eller ta bort referensen till den."
			},
			removeLayer: {
				title: "Lös lagerproblemet",
				layersWithIssue: "Lager med detta problem: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Lagret {{LAYER_NAME}} lades till som ett objekt som är borttaget eller otillgängligt. Lagret fungerar men detta kan påverka din karta (popup-fönster, symbologi). Vi kan inte avgöra om objektet var viktigt för din berättelse.",
				issueSolution: "För att lösa problemet kan du redigera kartan, ta bort lagret och lägga tillbaka lagret i kartan med hjälp av följande URL:",
				editMap: "Redigera kartan",
				clickBelowWhenDone: "När du har redigerat färdigt klickar du på knappen nedan:",
				rescanAndClose: "Läs in igen och stäng"
			},
			info: {
				ownedBy: "Detta objekt ägs av {{USER_NAME}}",
				unknownUser: "någon annan",
				untitledSection: "(Avsnitt utan rubrik)",
				introRecord: "Introduktion"
			},
			layers: {
				layersHeader: "Lager",
				noLayers: "(Inga lager)",
				basemapParens: "(baskarta)"
			},
			images: {
				thumbnails: "Miniatyrbilder",
				thumbnail: "Miniatyrbild",
				thumbnailParens: "(miniatyrbild)"
			},
			general: {
				noTitle: "(ingen titel)",
				loading: "Läser in..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "sektioner",
				secondTitle: "stil",
				secondValueA: "sidopanel",
				secondValueB: "flytande panel",
				thirdTitle: "kartor"
			},
			mapTour: {
				firstTitle: "färdpunkter",
				secondTitle: "stil",
				secondValueA: "integrerad",
				secondValueB: "trepanel",
				thirdTitle: "baskarta",
				thirdValueLoading: "Läser in...",
				thirdValueUnknown: "okänt"
			},
			mapSeries: {
				firstTitleA: "punktlista",
				firstTitleB: "avsnitt",
				firstTitleC: "flikar",
				secondTitle: "stil",
				secondValueA: "punktlista",
				secondValueB: "sidodragspel",
				secondValueC: "med flikar",
				thirdTitle: "kartor"
			},
			swipeSpyglass: {
				firstTitle: "intressanta platser",
				secondTitle: "stil",
				secondValueA: "svep",
				secondValueB: "kikare",
				thirdTitle: "kartor"
			}
		},
		progress: {
			checkingStories: "Kontrollerar om berättelserna innehåller fel ...",
			stop: "Stoppa",
			exit: "{Tahoma8}Avsluta",
			dismiss: "Stäng",
			done: "Klar.",
			noStoriesWithIssuesLower: "Inga problem påträffades",
			storiesErrorFree: "Det verkar som om dina berättelser är felfria",
			scanAllError: "Det gick inte att läsa in – det gick inte att hämta en eller flera av dina berättelser",
			scanProgress: "{{NUM_SCANNED}} av {{NUM_TOTAL}}",
			scanStopped: "Berättelser som lästs in: {{NUM_SCANNED}}, Berättelser med fel: {{ISSUE_STORIES}}",
			storiesWithIssues: "Berättelser med fel: {{NUM_STORIES}}"
		}
    })
);