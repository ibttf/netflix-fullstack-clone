# Netflix Fullstack Clone
A fullstack clone of Netlflix built with a React frontend and a Ruby on Rails backend.
![image](https://user-images.githubusercontent.com/60560932/218343754-df20328c-1853-4469-9c61-51b93b39ebb5.png)
![image](https://user-images.githubusercontent.com/60560932/218343759-5c852d84-42ee-4583-9ad2-408411f1f2a9.png)

 # Signin/Signup
Signin or signup with an account that stays logged in and stored in a database.


![image](https://user-images.githubusercontent.com/60560932/218343769-4aca3e8d-d152-4f33-8746-adf5b96e1786.png)

#Slider
In each row of movies, we've included a slider that will appear when you hover over a row. This slider will dynamically allow you to flip through each row of movies.
![image](https://user-images.githubusercontent.com/60560932/190565124-1dd3795c-8e3b-47b9-ad47-366dd8ba9a5e.png)

#Profile
Create, manage, edit, and switch profiles. Each created account will start with a default "User 1" profile.

![image](https://user-images.githubusercontent.com/60560932/218343828-18a3b0d8-0b62-4c43-94b4-6b6b13c8c1b3.png)
![image](https://user-images.githubusercontent.com/60560932/218343836-1000a573-6d4f-40ea-9214-988dcf7dbb86.png)
![image](https://user-images.githubusercontent.com/60560932/218343846-49102e8d-6f50-481b-8b94-3e178b31616e.png)



# Search bar 
In our search bar, you can search up titles of different movies and have them displayed in an easy-to-use format.
![image](https://user-images.githubusercontent.com/60560932/218343861-6938164c-3777-458c-8edb-5f40f6eeaaa5.png)



# My List 
If you hover over any movie, it will ask you to add that movie item to "My List," which will then send a post request and add your movie, making it visible both in the "My List" row as well as the separate "My List tab." The add/delete button will also change dynamically depending on whether or not your movie is in "My List."
![image](https://user-images.githubusercontent.com/60560932/218343901-5898ba14-c779-4945-a712-da1a199cba54.png)
![image](https://user-images.githubusercontent.com/60560932/218343911-2c2f1935-9541-4378-8705-af0c0faee506.png)




# More Info
Upon clicking on the "more info" dropdown of a movie, you are redirected to a separate page that displays information about each movie, including the description, cast, genres, different trailer videos, and a row for recommended movies.

![image](https://user-images.githubusercontent.com/60560932/218343924-e726de8e-fbcb-47fc-b339-ec30210aa80a.png)
![image](https://user-images.githubusercontent.com/60560932/218343931-a1886a6e-f2f3-4890-9ca1-bab8f3072043.png)



#How to Run
```
$ git clone github.com:roylee0912/netflix-fullstack-clone
$ cd netflix-clone
$ bundle install
$ rails db:migrate
$ rails db: start

-- On a new terminal
$ cd client
$ npm start


