const database = {
    past_projects: [{
        id: 1, name: "Free Meme Generator Web App [React, JS, HTML, CSS]", 
        link: "https://github.com/Tingting0618/react_app_meme_gen",
        webpage: "http://localhost:5000/"
    }, {
        id: 2, name: "Hotel Demand Forecasting - Machine Learning [Python, SQL]", 
        link: "https://github.com/Tingting0618/Hotel_Demand_Forecast_Machine_Learning",
        webpage: null}, 
        {
        id: 3, name: "Blackpress Coffee", price: 9.49
    }
    ]
}

export const getPastProjects = () => {
    return database.past_projects.map(project => ({...project}))
}