const database = {
    past_projects: [{
        id: 1, name: "Free Meme Generator Web App [React, JS, HTML, CSS]", link: "https://github.com/Tingting0618/react_app_meme_gen"
    }, {
        id: 2, name: "Hotel Demand Forecasting", price: 8.99
    }, {
        id: 3, name: "Blackpress Coffee", price: 9.49
    }
    ]
}

export const getPastProjects = () => {
    return database.past_projects.map(project => ({...project}))
}