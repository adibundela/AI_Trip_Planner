export const SelectTravelersList =[
    {
        id: 1,
        title:'Just Me',
        desc:'A solo traveles in exploration',
        icon:'✈︎',
        people:'1 person'
    },
    {
        id: 2,
        title:'A couple',
        desc:'Two traceles in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id: 3,
        title:'Family',
        desc:'Three traceles in harmony',
        icon:'🏡',
        people:'3 to 5 people'
    }
]

export const selectBudgetOptions =[
    {
        id: 1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon: '💵'
    },
    {
        id: 2,
        title:'Moderate',
        desc:'Budget for a reasonable trip',
        icon: '🤑'
    }
    ,{
        id: 3,
        title:'Luxury',
        desc:"Money isn't everything But everything needs money",
        icon: '💰'
    }

]
export const AI_PROMPT ='Genrate Travel Plan for Location : {location} , for {total days} Days for {traveler}  with a {budget} budget , Give me a Hotels option List with Hotel Name ,Hotel address ,Price , Hotel image url  , geo coordinates rating , description and suggest itineary with placeName , place Details image Url, Geo Coordinates , ticket Pricing,Time to travel each of the location for {#} days with each day plan with best time to visit in JSON format'