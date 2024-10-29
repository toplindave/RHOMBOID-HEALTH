export const findCareOptions = [
    {
        id: 1,
        title: "Who needs care?",
        elements: [
            {
                id: 1,
                selected: false,
                text: "Spouse",
                hasSub: false
            },
            {
                id: 2,
                selected: false,
                text: "Parent",
                hasSub: false
            },
            {
                id: 3,
                selected: false,
                text: "Myself",
                hasSub: false
            },
            {
                id: 4,
                selected: false,
                text: "Child",
                hasSub: false
            },
            {
                id: 5,
                selected: false,
                text: "Someone else",
                hasSub: false
            },
        ]
    },
    {
        id: 2,
        title: "What kind of help are you looking for?",
        elements: [
            {
                id: 1,
                selected: false,
                text: "Socialization and emotional support",
                hasSub: false
            },
            {
                id: 2,
                selected: false,
                text: "Someone to drive to appointments and errands",
                hasSub: false
            },
            {
                id: 3,
                selected: false,
                text: "Dementia or other special case",
                hasSub: false
            },
            {
                id: 4,
                selected: false,
                text: "Mobility assistance",
                hasSub: true,
                sub: "lift, transfers, physical activity, etc"

            },
            {
                id: 5,
                selected: false,
                text: "Personal care",
                hasSub: true,
                sub: "Bathing, dressing and feeding"
            },
        ]
    },
    {
        id: 3,
        title: "How soon do you need someone?",
        elements: [
            {
                id: 1,
                selected: false,
                text: "Right now",
                hasSub: false
            },
            {
                id: 2,
                selected: false,
                text: "Within a month",
                hasSub: false
            },
            {
                id: 3,
                selected: false,
                text: "Within 60 days",
                hasSub: false
            },
            {
                id: 4,
                selected: false,
                text: "No rush",
                hasSub: false,
                
            },
        
        ]
    },
]