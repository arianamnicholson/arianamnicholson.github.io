var config = {
    style: 'mapbox://styles/arianamnicholson/ckn3de8iq23e617mla33mtenz',
    accessToken: 'pk.eyJ1IjoiYXJpYW5hbW5pY2hvbHNvbiIsImEiOiJjazVpazFndGUwMXUwM2RuanIzMW9mdGc0In0.TytBJMlpMr_WcTlolgjRtw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Harvard and TIAA Farmland Grab in Brazil Goes up in Smoke',
    subtitle: 'How Universities Fund Injustice Abroad',
    byline: 'Adapted from Friends of the Earth US, GRAIN, National Family Farm Coalition, Rede Social de Justiça e Direitos Humanos, and AidEnvironment - Mapped by Ari',
    footer: 'Data and words from AidEnvironment and GRAIN <a href="https://grain.org/en/article/6339-harvard-and-tiaa-s-farmland-grab-in-brazil-goes-up-in-smoke">here</a>. Storytelling tutorial based off of jbranigan on GitHub <a href="https://github.com/mapbox/storytelling">here</a>.',
    chapters: [
        {
            id: 'chapter_1',
            alignment: 'left',
            hidden: false,
            title: 'TIAA and Harvard Land Grabs in Brazil',
            image: '/images/storymap/brasil_table_top.jpeg',
            description: '<p>Table top mountain clearance in Brazil. Image via Mighty Earth.</p> <p>Brazil is smouldering, still. The surge of fires that raged across the Amazon in July and August has now spread to the country&#39s biodiverse savanna lands in the Cerrado, where the number of fires in September was double what it was a year ago. There&#39s no question that most of these fires are the result of human actions to clear lands for the expansion of large-scale soybean, cattle and corn agribusiness operations, with many multinational agribusiness firms and their financiers implicated in the destruction. Now, we have evidence that the Cerrado fires are also linked to other US-based financial interests: the Harvard University Endowment and TIAA, the private pension fund that invests on behalf of millions of teachers, academics, nurses and government workers nationwide.</p> <p>The Cerrado is the largest and most biodiverse tropical savanna in the world, and a vital storehouse for carbon dioxide, as well as the “birthplace of waters,” where most of Brazil’s major river systems originate. But in recent years it has become the main frontier for the expansion of large-scale, industrial plantations in Brazil. Over the past decade, the area has seen 50% more deforestation than the Amazon, with the loss of over 40,000 square miles of native tree cover. Massive fires are now an annual occurrence, used by land grabbers to expand their holdings.</p><p>It may come as a shock to Harvard students, faculty, and alumni, as well as the millions of educators and others in the United States whose pensions are managed by TIAA, to learn that these two institutions are deeply and directly invested in this destructive expansion of agribusiness. Over the past twelve years, TIAA and Harvard University have collectively spent over $1 billion on Brazilian farmland, making them two of the largest owners of farmland in the Cerrado.</p><p>Displayed in this map are the Harvard (red) and TIAA (blue) landholdings in the Cerrado during September 2019.</p>',
            location: {
              center: { lon: -46.31454, lat: -9.16379 },
              zoom: 6.14,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'harvard-farms-24looc',
                    opacity: 1
                },
                {
                    layer: 'nuveen-tiaa-9evbtk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_2',
            alignment: 'left',
            hidden: false,
            title: 'Fires burning in and around Harvard University Ipe farm in Piauí, Brazil from July-September',
            image: '/images/storymap/map4b.jpeg',
            description: 'Thanks to recently accessed court documents, we now know that Harvard University&#39s endowment owns over 1 million acres of farmland in Brazil, all of it in the Cerrado region. These maps zoom in on several farms owned by TIAA and Harvard in the Cerrado. They indicate that fires are burning on the edges and within TIAA and Harvard&#39s farms and that some of these fires have already burnt portions of forested areas within their properties, which Brazilian law requires farm owners to maintain. <p>Source: Aidenvironment, based on NASA VIIRS alerts and modified Copernicus Sentinel data 2019</p>',
            location: {
              center: { lon: -45.35521, lat: -8.41810 },
              zoom: 10.56,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'harvard-faz-sao-pedro-ipe-38gr4k',
                    opacity: 0.75
                },
                {
                    layer: 'harvard-clip-bgbq4t',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_3',
            alignment: 'left',
            hidden: false,
            title: ' Fires burning in and around Harvard University São Pedro farm in Piauí, Brazil from July-September 2019',
            image: '/images/storymap/map3b.jpeg',
            description: 'TIAA, Harvard and the other institutions buying up farmland in Brazil and elsewhere around the world must stop pretending that their practices are sustainable. They are fuelling the expansion of a model of industrial agriculture, based on mono-cropping and chemical inputs, that has toxic impacts on rural communities and that, as the Inter-governmental Panel and Climate Change has made abundantly clear, is a major driver of the climate crisis. We simply cannot resolve the climate crisis if such companies continue to pour money into agribusiness in Brazil, the southeast US and elsewhere.<p>Source: Aidenvironment, based on NASA VIIRS alerts and modified Copernicus Sentinel data 2019</p>',
            location: {
              center: { lon: -43.70880, lat: -6.87028 },
              zoom: 10.67,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_4',
            alignment: 'left',
            hidden: false,
            title: 'Fires burning in and around TIAA Santana farm in Maranhão, Brazil from July-September 2019',
            image: '/images/storymap/map5b.jpeg',
            description: 'The New York-based TIAA, which, through its subsidiary Nuveen, also manages farmland acquisitions for other pension funds in the US, Canada and Europe, owns 837,000 acres of farmland in Brazil. Within the Cerrado region, it owns 25 farms covering a total of 288,000 acres.Organisations in Brazil, the US, Canada and European countries with pension funds involved in TIAA farmland deals have made numerous efforts to alert these two institutions and their clients that their farmland acquisitions in Brazil are fuelling land grabs, human rights violations and environmental destruction. Recent reports have even exposed their connection with deforestation and displacement of rural communities in the Cerrado. But Harvard and TIAA have consistently denied any connections between their farmland purchases and such concerns.<p>Source: Aidenvironment, based on NASA VIIRS alerts and modified Copernicus Sentinel data 2019</p>',
            location: {
              center: { lon: -46.68956, lat: -8.35171 },
              zoom: 11.41,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'tiaa-faz-santana-faz-6sbbpd',
                    opacity: 0.75
                },
                {
                    layer: 'tiaa-clip-6tvc3f',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_5',
            alignment: 'left',
            hidden: false,
            title: 'Fires burning in and around TIAA Grão de Ouro farm in Bahia, Brazil from July-September 2019',
            image: '/images/storymap/map6b.jpeg',
            description: 'This map of TIAA Grão de Ouro farm in Bahia shows how fire has burnt all of the remaining forest on the farm, right up to the property lines, which would seem to indicate a deliberate, controlled fire. In these maps, the connection between Harvard and TIAA farmland purchases and the ecological destruction playing out in Brazil&#39s Cerrado is undeniable. Last year, in response to civil society pressure, TIAA instituted a No Deforestation policy for certain of its landholdings in the Cerrado; a year later, its landholdings are on fire – a clear demonstration that nothing in TIAA’s policy or its approach to land stewardship considers either the ecological or economic trends driving the continuing deforestation of the Cerrado – trends that TIAA itself is responsible for advancing.<p>Source: Aidenvironment, based on NASA VIIRS alerts and modified Copernicus Sentinel data 2019</p>',
            location: {
              center: { lon: -46.24950, lat: -13.51719 },
              zoom: 11.31,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

    ]
};
