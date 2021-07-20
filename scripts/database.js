const database = {

    past_projects: [
        {
            id: 1, name: "Demand Forecast - Machine Learning [Python, SQL, scikit-learn]",
            link: "https://github.com/Tingting0618/Hotel_Demand_Forecast_Machine_Learning",
            webpage: " "
        },
        {
            id: 2, name: "A Hotel Search/Recommendation Engine Using R and Web Scraping [R Shiny, Python, R]",
            link: "https://github.com/Tingting0618/Hotel_Recommendation_Engine_R_Web_Scraping",
            webpage: "https://hotelsearchnow-tingting.shinyapps.io/Hotel_Search_Now/"
        },
        {
            id: 3, name: "Image Recognition and Object Detection [Python, YOLO]",
            link: "https://github.com/Tingting0618/Object_Detection_Image_Recognition",
            webpage: " "
        },
        {
            id: 4, name: "Earthquake Since 1900 - GIS Programming and Web Scraping [GeoPandas, Python]",
            link: "https://github.com/Tingting0618/Earthquake_Analysis_GIS_And_Web_Scraping",
            webpage: " "
        },
        {
            id: 5, name: "Collaborative Filtering Recommender [Python]",
            link: "https://github.com/Tingting0618/Collaborative_Filtering_Recommender",
            webpage: " "

        },
    
        {
            id: 6, name: "Fraud Detection: Imbalanced Classification with SMOTE [Python, SMOTE]",
            link: "https://github.com/Tingting0618/Imbalanced_Classification_SMOTE",
            webpage: " "

        },


        {
            id: 7, name: "Machine Learning - Classification [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Classification_Machine_Learning",
            webpage: " "

        },
        {
            id: 8, name: "Machine Learning - Clustering and Dimensionality Reduction [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Clustering_Dimensionality_Reduction",
            webpage: " "

        },


        {
            id: 9, name: "Machine Learning - Regression [Python, scikit-learn]",
            link: "https://github.com/Tingting0618/Regression_Machine_Learning",
            webpage: " "

        },
        
        {
            id: 10, name: "Free Meme Generator Web App [React, JS, HTML, CSS]",
            link: "https://github.com/Tingting0618/react_app_meme_gen",
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

export const getCurrentProjects = () => {
    return database.current_projects.map(c => ({ ...c }))
}
export const getPastProjects = () => {
    return database.past_projects.map(p => ({ ...p }))
}