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
        paramName: 'mVe',
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
        paramName: 'mVi',
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
        paramName: 'spontMVe',
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
        paramName: 'leakVol',
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
        paramName: 'rsbi',
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
        paramName: 'cStat',
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
        paramName: 'cDyn',
        html: {
            name: 'C',
            nameSuccessor: '',
            nameSub: 'dyn',
            sub: '',
            subSuccessor: '',
            subSub: ''
        }
    },
    {
        paramName: 'ti',
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
        paramName: 'te',
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
        paramName: 'pMean',
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
            showBedDetails: true
        }
    }
}

export const PatientDataCardConfig = [
    {
        name: "P",
        nameSub: "pip",
        baseText: "cmH2O",
        value: "pPip"
    },
    {
        name: "P",
        nameSub: "peep",
        baseText: "cmH2O",
        value: "pPeep"
    },
    {
        name: "P",
        nameSub: "plateau",
        baseText: "cmH2O",
        value: "pPlateau"
    },
    {
        name: "V",
        nameSub: "ti",
        sub: "insp",
        baseText: "cmH2O",
        value: "vTi"
    },
    {
        name: "V",
        nameSub: "te",
        sub: "insp",
        baseText: "cmH2O",
        value: "vTe"
    },
    {
        name: "FiO2",
        sub: "insp",
        baseText: "cmH2O",
        value: "fio2"
    },
    {
        name: "RR",
        nameSub: "",
        sub: "insp",
        baseText: "cmH2O",
        value: "rr"
    },
    {
        name: "I:E",
        nameSub: "",
        sub: "insp",
        baseText: "cmH2O",
        value: "ie"
    }
]

export const HomePageMoreItemConfig = [
    {
        name: "PACS",
        value: "PACS"
    },{
        name: "EMR",
        value: "EMR"
    },
    {
        name: "ECG",
        value: "ECG"
    },
    {
        name: "Medicines",
        value: "Medicines"
    },
    {
        name: "Risk Score",
        value: "Risk_Score"
    },
    {
        name: "History",
        value: "History"
    },
    {
        name: "Notes",
        value: "Notes"
    },
    {
        name: "Lab Reports",
        value: "Lab_Reports"
    },
    {
        name: "Additional Settings",
        value: "Additional_Settings"
    },
    {
        name: "Set Custom Alarms",
        value: "Set_Custom_Alarms"
    }
]