const database = {

    past_projects: [
        {
            id: 1, name: "Web Scraping with Selenium and Xpath, From Start to Finish [Python, Selenium]",
            link: "https://github.com/Tingting0618/Web_Scraping_2021_Analytics_Summit",
            webpage: " "
        },
        {
            id: 2, name: "Demand Forecast - Machine Learning [Python, SQL, scikit-learn]",
            link: "https://github.com/Tingting0618/Hotel_Demand_Forecast_Machine_Learning",
            webpage: " "
        },
        {
            id: 3, name: "A Hotel Search/Recommendation Engine Using R and Web Scraping [R Shiny, Python, R]",
            link: "https://github.com/Tingting0618/Hotel_Recommendation_Engine_R_Web_Scraping",
            webpage: "https://hotelsearchnow-tingting.shinyapps.io/Hotel_Search_Now/"
        },
        {
            id: 4, name: "Image Recognition and Object Detection [Python, YOLO]",
            link: "https://github.com/Tingting0618/Object_Detection_Image_Recognition",
            webpage: " "
        },
        {
            id: 5, name: "Earthquake Since 1900 - GIS Programming and Web Scraping [GeoPandas, Python]",
            link: "https://github.com/Tingting0618/Earthquake_Analysis_GIS_And_Web_Scraping",
            webpage: " "
        },
        {
            id: 6, name: "Collaborative Filtering Recommender [Python]",
            link: "https://github.com/Tingting0618/Collaborative_Filtering_Recommender",
            webpage: " "

        },
        {
            id: 7, name: "Machine Learning - Classification [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Classification_Machine_Learning",
            webpage: " "

        },

        {
            id: 8, name: "Fraud Detection: Imbalanced Classification with SMOTE [Python, SMOTE]",
            link: "https://github.com/Tingting0618/Imbalanced_Classification_SMOTE",
            webpage: " "

        },
        {
            id: 9, name: "Machine Learning - Regression [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Regression_Machine_Learning",
            webpage: " "

        },
        {
            id: 10, name: "Machine Learning - Tree Based Model [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Tree_Based_ML_Models",
            webpage: " "

        },
        {
            id: 11, name: "Machine Learning - Ensemble Learning [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Ensemble_Learning_Random_Forest",
            webpage: " "

        },
        {
            id: 12, name: "Machine Learning - Clustering and Dimensionality Reduction [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Clustering_Dimensionality_Reduction",
            webpage: " "

        },
        {
            id: 13, name: "Free Meme Generator Web App [React, JS, HTML, CSS]",
            link: "https://github.com/Tingting0618/react_app_meme_gen",
            webpage: " "

        },
        {
            id: 14, name: "Home Breeze (Zillow/Compass Clone) [React, React-Bootstrap, CSS]",
            link: "https://github.com/Tingting0618/HomeBreeze",
            webpage: " "

        }

    ],

    current_projects: [

        {
            id: 1, name: "Earnings Call Database and Text Analysis [Python, Natural Language Toolkit]",
            link: "https://github.com/Tingting0618/Earnings_Call_Transcript_Database_Analysis_NLTK",
            webpage: " "
        }
    ]

}

// {
//     id: 1, name: "Giffygram - A Instagram Clone to Practice HTML, CSS, and JavaScript (Class Group Project)",
//     link: "https://github.com/Tingting0618/giffygram",
//     webpage: " "
// },

export const getCurrentProjects = () => {
    return database.current_projects.map(c => ({ ...c }))
}
export const getPastProjects = () => {
    return database.past_projects.map(p => ({ ...p }))
}