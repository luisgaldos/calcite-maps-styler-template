﻿define(
	 ({
		header: {
			start: "iniciar",
			searchStories: "Procurar suas histórias...",
			filter: "Filtrar",
			sort: "Classifcar",
			sortColon: "Classificar:",
			numResults: "Resultados: {{NUM_RESULTS}}",
			sortBy: "Classificar por",
			dateModified: "Data modificada",
			title: "Título",
			type: "Tipo",
			views: "Visualizações",
			errors: "Erros",
			filterBy: "Filtrar por",
			filterItems: "Filtrar Itens",
			apps: "Aplicativos",
			sharing: "Compartilhamento",
			clearAll: "Limpar todos",
			clearSearch: "Limpa a pesquisa",
			logOut: "Sair",
			mainQuote: "A narrativa é o caminho mais eficaz para expor as idéias no mundo de hoje.",
			quoteSource: "Robert McKee",
			checkYourStories: "Verificar Histórias",
			createStory: "Criar História",
			totalStories: "Total de histórias: {{NUM_STORIES}}",
			noIssues: "Todos bem",
			userStories: "Histórias de {{USER_NAME}}",
			headerDisabledTooltip: "Aguarde enquanto trabalhamos em algo mágico...",
			notOnTouch: "Não disponível em dispositivos de toque",
		},
		deleteModal: {
			title: "Confirmar Exclusão",
			warningText: "Tem certeza que deseja excluir esta história? Você não poderá recuperá-la.",
			deleteText: "Excluir",
			cancel: "Cancelar"
		},
		loading: {
			loadingText: "Carregando suas histórias..."
		},
		cantFindStories: {
			whereAreStories: "Não visualiza sua história?",
			notSeeExplanation: "Minhas Histórias listará somente mapas históricos hospedados no ArcGIS Online criados com os aplicativos {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} e {{SWIPE_SPYGLASS}}. Consulte nosso {{FAQ}} para mais informações.",
			faq: "FAQ",
			followingStoriesToUpdate: "As seguintes histórias criadas com as primeiras versões de nossos aplicativos precisam ser atualizadas para serem listadas em Minhas Histórias:",
			gettingStories: "Procurando por histórias criadas com as primeiras versões de nossos aplicativos que precisam ser atualizadas...",
			title: "Título",
			typeOfStoryMap: "Tipo",
			lastModified: "Última modificação",
			allUpToDate: "Nenhuma história criada com as primeiras versões de nossos aplicativos precisa ser atualizada.",
			updateAll: "Atualizar Tudo",
			errorScanningForStories: "Ocorreu um erro ao procurar suas histórias.",
			close: "Fechar",
			updates: "Atualizações",
			updatingNumberOfNumber: "Atualizando {{CURRENT_NUMBER}} de {{TOTAL}}",
			updatingNumberOfNumberAlt: "Atualizando {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Atualização bem sucedida!",
			reloadingStories: "Recarregando suas histórias...",
			errorUpdatingStories: "Ocorreu um erro ao atualizar suas histórias.",
			partialUpdateMessage: "Histórias atualizadas com sucesso: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Entrar em Mapas Históricos",
			signInTo: "Registre com sua conta existente do ArcGIS Online:",
			explanationOne: "Crie mapas históricos convincentes para contar suas histórias.",
			explanationTwo: "Utilize seus mapas e dados do ArcGIS Online em seus mapas históricos.",
			explanationThree: "Gerencie seus mapas históricos e verifique o status do seu conteúdo.",
			dontHaveAccount: "Não tem uma conta do ArcGIS Online? Registre para uma:",
			publicAccount: "Conta pública gratuita não-comercial",
			orgAccount: "Assinatura de teste gratuito do ArcGIS",
			timeExpired: "Seu registro expirou. Registre novamente para selecionar de onde você parou.",
			apiDidntLoad: "Algo não está carregando corretamente. Tente atualizar a página.",
			needAccount: "Precisa de uma conta?",
			letsGo: "Vamos lá!"
		},
		sharingLevel: {
			publicMessage: "Público",
			privateMessage: "Privado",
			organization: "Organização",
			changedSharing: "Nível de compartilhamento alterado.",
			unableToChange: "Não foi possível alterar o compartilhamento.",
			partOfMap: "Este item reside em um mapa. Para alterar seu nível de compartilhamento, você deve alterar o nível de compartilhamento do mapa.",
			storyPublicContentOrg: "Sua história é pública, então seu conteúdo não pode ser compartilhado somente com sua organização",
			storyPublicContentPrivate: "Sua história é pública, então seu conteúdo não pode ser privado",
			mapOrg: "Compartilhar seu mapa na sua organização pode invalidar sua história",
			layerOrg: "Compartilhar sua camada na sua organização pode invalidar sua história",
			mapPrivate: "Tornar seu mapa privado pode invalidar sua história",
			layerPrivate: "Tornar sua camada privada pode invalidar sua história"
		},
		collectionList: {
			advocacy: "Advocacia e Colaboração",
			architecture: "Arquitetura e Design",
			conservation: "Conservação e Sustentabilidade",
			culture: "Cultura",
			destinations: "Destinos e Turismo",
			disasters: "Desastres e Recuperação",
			economy: "Economia e Desenvolvimento",
			entertainment: "Entretenimento",
			history: "Histórico",
			infrastructure: "Iinfraestrutura",
			marketing: "Marketing",
			nature: "Natureza e Ambiente",
			news: "Notícias e Eventos",
			oceans: "Oceanos",
			parks: "Parques e Recreação",
			people: "Pessoas e Sociedade",
			planning: "Planejamento e Análise",
			publicArt: "Arte Pública",
			science: "Ciência e Tecnologia",
			sport: "Esporte",
			travelogues: "Viagem"
		},
		types: {
			custom: "Personalizar",
			notSpecified: "Tipo não especificado"
		},
		storyMap: {
			shared: "Compartilhado",
			saveFailed: "Erro ao salvar",
			numViews: "Visualizações: {{NUM_VIEWS}}",
			editStory: "Editar História",
			viewLive: "Visualizar em Tempo Real",
			preview: "Visualizar",
			deleteButton: "Excluir",
			modified: "Modificado {{DATE}}",
			summary: "Resumo",
			loading: "Carregando...",
			collapse: "recolher",
			close: "fechar",
			hide: "ocultar",
			notAvailableWhenBroken: "Sua história tem o problema abaixo",
			cantBeDeleted: "Esta história tem proteção de exclusão habilitada, consulte sua página do item no ArcGIS Online para desabilitar",
			shareDialog: {
				title: "Compartilhe sua história com o mundo!",
				notPublicWarning: "Sua história está compartilhada com sua organização. Somente membros da sua organização poderão visualizá-la.",
				embedStory: "Embutir sua história",
				shortLink: "Link Curto",
				hideHeaderBar: "Ocultar barra do cabeçalho",
				copied: "Copiado",
				small: "pequeno",
				medium: "médio",
				large: "grande",
				custom: "personalizar",
				widthAbbreviation: "o",
				heightAbbreviation: "h",
				emptyDimension: "Insira uma dimensão.",
				seeExample: "Visualizar sua história embutida",
				removeHeader: "Ocultar cabeçalho do aplicativo"
			},
			maps: {
				unableRetrieveTitle: "Não foi possível recuperar os mapas",
				unableRetrieveDescription: "Não conseguimos recuperar os mapas deste mapa histórico."
			},
			images: {
				unableRetrieveTitle: "Não foi possível recuperar as imagens",
				unableRetrieveDescription: "Não conseguimos recuperar as imagens deste mapa histórico."
			},
			tags: {
				tags: "Tags",
				collectionTags: "Assunto",
				selectASubject: "Selecione um assunto",
				save: "Salvar",
				saved: "Salvo",
				errorSaving: "Erro ao salvar",
				tagTip: "Dica: As tags ajudam as pessoas a localizarem sua história no ArcGIS Online. Quanto mais relevantes forem as etiquetas, maior visibilidade receberá seu trabalho."
			},
			submitToGallery: {
				gallerySubmission: "Galeria de Mapas Históricos",
				canSubmitIf: "Você pode indicar sua história para a galeria se tiver o seguinte:",
				hasOwnImage: "Miniatura personalizada",
				chosenSubject: "Um assunto e algumas tags",
				chosenSubjectAlt: "Um {{SUBJECT}} e algumas tags",
				storyMapTopicSubject: "assunto",
				sharedPublicly: "Compartilhado publicamente",
				noBrokenContent: "Nenhum conteúdo quebrado",
				nominateToGallery: "Indicar para Galeria",
				comingSoon: "Em breve!",
				submitted: "Enviado",
				errorSubmitting: "Erro ao enviar",
				ourGallery: "A galeria de Mapas Históricos",
				galleryTip: "{{THE_GALLERY}} é um conjunto selecionado de Mapas Históricos que mostra alguns dos melhores exemplos. Se a sua história for selecionada, ela será adicionada dentro de 10 dias da sua submissão. Devido à quantidade de indicações, não podemos prometer que a sua história será adicionada."
			},
			placeholders: {
				noSummary: "Nenhum resumo, clique para adicionar um."
			},
			errors: {
				cantDeleteStory: "Nao foi possível excluir a história.",
				unableToFind: "Não foi possível localizar o conteúdo",
				unableToRetrieve: "Não conseguimos recuperar o conteúdo deste mapa histórico."
			},
			socialSharing: {
				availableWhenPublic: "Esta opção estará disponível quando sua história for pública"
			},
			dialog: {
				back: "Voltar",
				close: "Fechar",
				cancel: "Cancelar"
			},
			imagePicker: {
				changeDefault: "Alterar para imagem padrão",
				changeImage: "Alterar miniatura",
				uploadImage: "Carregar miniatura",
				chooseImage: "Escolher miniatura",
				chooseAnImage: "Escolher uma Imagem",
				notInIEVersion: "Este recurso não está disponível na Internet Explorer {{VERSION_NUMBER}}.",
				or: "Ou",
				uploadAnImage: "Carregar uma Imagem",
				supportedFileTypes: "Suporta .png, .jpg, .gif",
				imageSizeMessage: "Sua imagem precisa ter pelo menos 286 px de largura por 190 px de altura.",
				minimumDimensions: "Mínimo: 286 x 190px",
				imagesLoading: "Carregando imagens...",
				noImages: "Esta história não tem nenhuma imagem",
				errorLoading: "Não foi possível recuperar as imagens nesta história",
				clickBelowTip: "Clique no botão abaixo para carregar uma imagem.",
				dragAndDrop: "Arrastar e Soltar",
				cropImage: "Recortar Imagem",
				saveImage: "Salvar Imagem",
				save: "Salvar",
				savingImage: "Salvando sua imagem...",
				saved: "Salvo!",
				errorSaving: "Não foi possível salvar sua imagem.",
				skipAndCrop: "Pular e Recortar para mim",
				wrongFormat: "Este tipo de arquivo não tem suporte.",
				noCropWarning: "Esta imagem não pode ser recortada, mas você ainda pode salvá-la como sua miniatura de história com suas dimensões originais ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}}px)."
			}
		},
		content: {
			media: {
				maps: "Mapas",
				images: "Imagens",
				videos: "Vídeos",
				webpages: "Páginas da Web",
				tags: "Tags",
				gallery: "Galeria"
			},
			headers: {
				status: "Status",
				source: "Fonte",
				name: "Nome",
				shared: "Compartilhado"
			},
			component: {
				mapTour: "Número do Ponto",
				bullet: "Marcador",
				tab: "Guia",
				accordion: "Seção",
				mapJournal: "Seção"
			},
			titleType: {
				mapTour: "Legenda",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "Visualizar Mapa",
				editMap: "Editar Mapa",
				fix: "Corrigir",
				viewLayer: "Visualizar Camada"
			},
			contentType: {
				mainStage: "ação da fase principal",
				sidePanel: "descrição"
			},
			notification: {
				refreshExplanation: "Verifique sua história novamente",
				checking: "Verificando...",
				foundSomeIssues: "Encontramos alguns erros",
				noIssuesFound: "Nenhum erro encontrado",
				storyPublic: "Sua história é agora pública",
				storyOrg: "Sua história está agora compartilhada na sua organização",
				storyPrivate: "Sua história é agora privada",
				mapPublic: "Seu mapa é agora público",
				mapOrg: "Seu mapa está agora compartilhado na sua organização",
				mapPrivate: "Seu mapa é agora privado",
				layerPublic: "Sua camada é agora pública",
				layerOrg: "Sua camada está agora compartilhada na sua organização",
				layerPrivate: "Sua camada é agora privada",
				contentPublic: "Seu conteúdo é agora público",
				contentOrg: "Seu conteúdo está agora compartilhado na sua organização",
				contentPrivate: "Seu conteúdo é agora privado",
				storyAndContentPublic: "Sua história e seu conteúdo são agora públicos",
				storyAndContentOrg: "Sua história e seu conteúdo estão agora compartilhados na sua organização",
				storyAndContentPrivate: "Sua história e seu conteúdo são agora privados",
				shareBulkPrompt: "Você deseja compartilhar o conteúdo da sua história consequentemente?",
				layersPublic: "Algumas camadas também foram compartilhadas publicamente",
				layersOrg: "Algumas camadas também foram compartilhadas com sua organização",
				layersPrivate: "Algumas camadas também tornaram-se privadas",
				mapsPublic: "Alguns mapas também foram compartilhadas publicamente",
				mapsOrg: "Alguns mapas também foram compartilhados com sua organização",
				mapsPrivate: "Alguns mapas também tornaram-se privados",
				layersAndMapsPublic: "Alguns mapas e camadas também foram compartilhados publicamente",
				layersAndMapsOrg: "Alguns mapas e camadas também foram compartilhados com sua organização",
				layersAndMapsPrivate: "Alguns mapas e camadas também tornaram-se privados",
				yes: "Sim",
				no: "Não",
				premiumPublicSuccess: "Seu conteúdo premium é agora acessível publicamente",
				subscriptionPublicSuccess: "Seu conteúdo da assinatura é agora acessível publicamente"
			},
			errors: {
				publicDisabled: "O compartilhamento público foi desativado pelo Administrador",
				noMapName: "Não Foi Possível Recuperar o Nome do Mapa",
				notPublic: "NÃO PÚBLICO",
				inaccessible: "INACESSÍVEL",
				deleted: "EXCLUÍDO",
				cantAccessVideo: "Não Foi Possível Acessar o Vídeo",
				noStoriesFound: "Não conseguimos localizar nenhum Mapa Histórico no seu conteúdo.",
				cantShowStories: "Não foi possível mostrar seus mapas históricos. Tente novamente mais tarde.",
				consolationSearch: "Não conseguimos localizar nenhuma história.",
				notCompatibleWithBrowser : "Minhas Histórias não é suportada no Internet Explorer antes da versão {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Atualize seu navegador.",
				searchTip: "Tente e simplifique-a um pouco.",
				consolationNoStories: "Bem-Vindo à Minhas Histórias!",
				noStoriesTip: "Para criar seu primeiro mapa histórico, verifique a página de Aplicativos.",
				letsGo: "Vamos Lá",
				cantChangeSharingLevel: "Não foi possível alterar o nível de compartilhamento",
				cantChangeSharingLevels: "Não foi possível alterar os níveis de compartilhamento",
				errorUpdatingTitle: "Erro ao atualizar título",
				errorUpdatingSummary: "Erro ao atualizar resumo",
				noEmptyTitle: "O título não pode estar vazio",
				cantUpdatePremiumContent: "Não foi possível atualizar o conteúdo premium",
				cantUpdateSubscriptionContent: "Não foi possível atualizar o conteúdo da assinatura",
				createFirstStory: "Criar Minha Primeira História"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "O mapa foi excluído",
				layerHasBeenDeleted: "A camada foi excluída",
				mapIsInaccessible: "O mapa está inacessível",
				layerIsInaccessible: "A camada está inacessível",
				mapNotYoursNotAccessible: "O mapa pertence a outra pessoa e não está acessível",
				layerServiceOkItemNot: "A camada foi adicionada como um item que está excluído ou inacessível",
				layerNotYoursNotAccessible: "A camada pertence a outra pessoa e não está acessível",
				mapOthersSharedBelowLevel: "O mapa não pertence a você e não é público",
				layerOthersSharedBelowLevel: "A camada não pertence a você e não é público",
				noMapNoDetails: "Sem os detalhes do mapa, não podemos informá-lo nada sobre as camadas",
				mapIsPrivate: "O mapa é privado",
				mapIsOrg: "O mapa está compartilhado somente na sua organização",
				layerIsPrivate: "A camada é privada",
				layerIsOrg: "A camada está compartilhada somente na sua organização",
				imageInaccessible: "Esta imagem está inacessível",
				videoInaccessible: "Este vídeo está inacessível",
				webpageInaccessible: "Esta página da web está inacessível",
				layerSecureService: "A camada é um serviço seguro",
				mapSecureService: "O mapa é um serviço seguro",
				layerConsumesCredits: "A camada é conteúdo premium e consome créditos",
				layerSubscriptionContent: "A camada é conteúdo da assinatura",
				mapConsumesCredits: "O mapa é conteúdo premium e consome créditos",
				mapSubscriptionContent: "O mapa é conteúdo da assinatura"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Não conseguimos verificar este tipo de camada",
				cantScanThisType: "A camada não é um tipo de camada que podemos verificar",
				webpageNotScanned: "As páginas da web não são verificadas para erros"
			},
			scanningErrors: {
				deletedMap: "Excluir conteúdo",
				inaccessibleMap: "Conteúdo de mapa inacessível",
				notYoursNotAccessible: "O conteúdo não pertence a você e não é público",
				serviceOkItemNot: "Camadas de trabalho, mas itens inacessíveis",
				someContentNotPublic: "Conteúdo não compartilhado publicamente",
				someContentPrivate: "Conteúdo privado",
				othersSharedBelowLevel: "O conteúdo não pertence a você e não é público",
				premiumContent: "Conteúdo premium",
				subscriptionContent: "Conteúdo da assinatura",
				secureService: "Serviços seguros",
				inaccessibleImage: "Imagens inacessíveis",
				inaccessibleVideo: "Vídeos inacessíveis",
				inaccessibleWebpage: "Páginas da web inacessíveis"
			},
			scanningErrorTips: {
				deletedMapTip: "Dica: Abra seu mapa da web e remova o conteúdo inválido ou remova o mapa da web da sua história.",
				inaccessibleMapTip: "Dica: Abra seu mapa da web e remova o conteúdo inválido ou remova o mapa da web da sua história.",
				notYoursNotAccessibleTip: "Dica: Abra o mapa da web e remova a camada ou mapa da história.",
				serviceOkItemNotTip: "As camadas foram adicionadas como itens que estão excluídos ou inacessíveis. As camadas estão trabalhando, mas isto pode afetar seu mapa (pop-ups, simbologia).",
				ignore: "Ignorar",
				fix: "Corrigir",
				clickToShareOrg: "Clique no botão para compartilhar todo este conteúdo na sua organização, ou mude cada item manualmente clicando em seus botões de compartilhamento.",
				clickToSharePublic: "Clique no botão para compartilhar todo este conteúdo publicamente, ou mude cada item manualmente clicando em seus botões de compartilhamento.",
				shareOrg: "Compartilhar na sua organização",
				sharePublicly: "Compartilhar publicamente",
				othersSharedBelowLevelTip: "Dica: Alguns dos conteúdos da sua história pertencem ao {{USER_NAME}}, e outros que visualizam sua história podem não conseguir visualizá-los.",
				secureServiceTip: "Dica: Remova o serviço seguro da sua história ou siga o procedimento descrito {{HERE}}.",
				blogArticle: "aqui",
				premiumContentTip: "Sua história tem conteúdo premium que consumirá {{CREDITS}} ao torná-lo pública. Torne sua história pública e continue ou remova as camadas da sua história.",
				premiumContentPublicTip: "Sua história tem conteúdo premium que consumirá {{CREDITS}} quando disponível publicamente. Confirme para tornar estas camadas públicas ou remova as camadas da sua história.",
				subscriptionContentTip: "Sua história tem conteúdo da assinatura que não está publicamente disponível por padrão. Confirme que você deseja tornar estas camadas disponíveis (nenhum crédito será consumido) ou remova as camadas da sua história.",
				agolCredits: "Créditos do ArcGIS Online",
				credits: "créditos",
				makePublic: "Tornar público",
				confirm: "Confirmar",
				inaccessibleImageTip: "Dica: Forneça a imagem que falta ou remova sua referência.",
				inaccessibleVideoTip: "Dica: Forneça o vídeo que falta ou remova sua referência.",
				inaccessibleWebpageTip: "Dica: Forneça a página da web que falta ou remova sua referência."
			},
			removeLayer: {
				title: "Corrigir Problema da Camada",
				layersWithIssue: "Camadas com este problema: {{NUM_WITH_ISSUE}}",
				issueExplanation: "A camada {{LAYER_NAME}} foi adicionada como um item que está excluído ou inacessível. A camadas está trabalhando, mas isto pode afetar seu mapa (pop-ups, simbologia). Não podemos informar se o item foi importante para sua história.",
				issueSolution: "Para corrigir este problema, você pode editar seu mapa, remover a camada e adicionar a camada de volta no mapa utilizando a seguinte URL:",
				editMap: "Editar Seu Mapa",
				clickBelowWhenDone: "Ao terminar a edição, clique no botão abaixo:",
				rescanAndClose: "Revisar e Fechar"
			},
			info: {
				ownedBy: "Este item pertence ao {{USER_NAME}}",
				unknownUser: "alguém",
				untitledSection: "(Seção sem título)",
				introRecord: "Introdução"
			},
			layers: {
				layersHeader: "Camadas",
				noLayers: "(Nenhuma Camada)",
				basemapParens: "(mapa base)"
			},
			images: {
				thumbnails: "Miniaturas",
				thumbnail: "Miniatura",
				thumbnailParens: "(miniatura)"
			},
			general: {
				noTitle: "(nenhum título)",
				loading: "Carregando..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "seções",
				secondTitle: "estilo",
				secondValueA: "painel lateral",
				secondValueB: "painel flutuante",
				thirdTitle: "mapas"
			},
			mapTour: {
				firstTitle: "pontos do percurso",
				secondTitle: "estilo",
				secondValueA: "integrado",
				secondValueB: "três painéis",
				thirdTitle: "mapa base",
				thirdValueLoading: "Carregando...",
				thirdValueUnknown: "desconhecido"
			},
			mapSeries: {
				firstTitleA: "marcadores",
				firstTitleB: "seções",
				firstTitleC: "guias",
				secondTitle: "estilo",
				secondValueA: "com marcadores",
				secondValueB: "menu lateral",
				secondValueC: "com guias",
				thirdTitle: "mapas"
			},
			swipeSpyglass: {
				firstTitle: "pontos de interesse",
				secondTitle: "estilo",
				secondValueA: "oscilar",
				secondValueB: "lente de aumento",
				thirdTitle: "mapas"
			}
		},
		progress: {
			checkingStories: "Verificando suas histórias para erros...",
			stop: "Parar",
			exit: "Sair",
			dismiss: "Recusar",
			done: "Concluir.",
			noStoriesWithIssuesLower: "Nenhum erro encontrado!",
			storiesErrorFree: "Parece que suas histórias não têm erros",
			scanAllError: "Não foi possível escanear -- não conseguimos recuperar uma ou mais de suas histórias",
			scanProgress: "{{NUM_SCANNED}} de {{NUM_TOTAL}}",
			scanStopped: "Histórias escaneadas: {{NUM_SCANNED}}, Histórias com erros: {{ISSUE_STORIES}}",
			storiesWithIssues: "Histórias com erros: {{NUM_STORIES}}"
		}
    })
);