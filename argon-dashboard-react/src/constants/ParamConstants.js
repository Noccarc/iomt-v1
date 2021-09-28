export const paramList = [
    {
        paramName: 'pPip',
        html: {
            name: 'P',
            nameSuccessor: '',
            nameSub: 'insp',
            sub: 'cmH',
            subSuccessor: 'O',
            subSub: '2'
        }
    },
    {
        paramName: 'pPeep',
        html: {
            name: 'PEEP',
            nameSuccessor: '',
            nameSub: '',
            sub: 'cmH',
            subSuccessor: 'O',
            subSub: '2'
        }
    },
    {
        paramName: 'pPlateau',
        html: {
            name: 'P',
            nameSuccessor: '',
            nameSub: 'plateau',
            sub: 'cmH',
            subSuccessor: 'O',
            subSub: '2'
        }
    },
    {
        paramName: 'vTi',
        html: {
            name: 'V',
            nameSuccessor: '',
            nameSub: 'ti',
            sub: 'ml',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'vTe',
        html: {
            name: 'V',
            nameSuccessor: '',
            nameSub: 'te',
            sub: 'ml',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'fio2',
        html: {
            name: 'FiO',
            nameSuccessor: '',
            nameSub: '2',
            sub: '%',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'rr',
        html: {
            name: 'RR',
            nameSuccessor: '',
            nameSub: 'bpm',
            sub: '%',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'ie',
        html: {
            name: 'I:E',
            nameSuccessor: '',
            nameSub: '',
            sub: '-',
            subSuccessor: '',
            subSub: ''
        }
    }
];

export const additionalParamList = [
    {
        paramName: 'pPip',
        html: {
            name: 'MV',
            nameSuccessor: '',
            nameSub: 'e',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'MV',
            nameSuccessor: '',
            nameSub: 'i',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'Spont. MV',
            nameSuccessor: '',
            nameSub: 'e',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'Leak Vol',
            nameSuccessor: '',
            nameSub: '',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'RSBI',
            nameSuccessor: '',
            nameSub: '',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'C',
            nameSuccessor: '',
            nameSub: 'stat',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'T',
            nameSuccessor: '',
            nameSub: 'i',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'T',
            nameSuccessor: '',
            nameSub: 'e',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'pPip',
        html: {
            name: 'P',
            nameSuccessor: '',
            nameSub: 'mean',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    }
]

export const HeaderConfig = {
        HomePage: {
            mainHeader: {
                logo: true,
                showHeaderItems: true,
                headerDetails: {
                    searchBar: true,
                    attachmentsIcon: true,
                    bellIcon: true,
                    profileIcon: true
                },
                showPatientDetails: false
            },
            subHeader: {
                menu: true,
                showFilterContainer: true,
                showBedDetails: false,
            }
        },
        GraphPage: {
            mainHeader: {
                logo: true,
                showHeaderItems: false,
                showPatientDetails: true
            },
            subHeader: {
                menu: true,
                showFilterContainer: false,
                showBedDetails: true,
                // dropdown: false,
                // filterIcon: false,
                // lockIcon: false,
            }
        }
}