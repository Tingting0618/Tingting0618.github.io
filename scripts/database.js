const database = {
<<<<<<< HEAD
    past_projects: [
        {
            id: 1, name: "Hotel Demand Forecast - Machine Learning [Python, SQL, scikit-learn]", 
            link: "https://github.com/Tingting0618/Hotel_Demand_Forecast_Machine_Learning",
            webpage: " "
        },
        {
            id: 2, name: "Earthquake Since 1900 - GIS Programming and Web Scraping [GeoPandas, Python]", 
            link: "https://github.com/Tingting0618/Earthquake_Analysis_GIS_And_Web_Scraping",
            webpage: " "
        },
        {
            id: 3, name: "A Hotel Search/Recommendation Engine Using R and Web Scraping [R Shiny, Python, R]",
            link: "https://github.com/Tingting0618/Hotel_Recommendation_Engine_R_Web_Scraping",
            webpage: "https://hotelsearchnow-tingting.shinyapps.io/Hotel_Search_Now/"
        },
        {
            id: 4, name: "Free Meme Generator Web App [React, JS, HTML, CSS]",
            link: "https://github.com/Tingting0618/react_app_meme_gen",
            webpage: " "
            
        }
=======
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
>>>>>>> 562e09cb9cefa9a5b2af57ad655c100a1fc95a08
    ]
}

export const getPastProjects = () => {
    return database.past_projects.map(project => ({ ...project }))
}