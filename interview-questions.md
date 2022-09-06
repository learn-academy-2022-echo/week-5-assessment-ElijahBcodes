# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby? 

Your answer: In Ruby a hash is the code between the do and end block. It can have a methods inside and is treated as an object with key value pairs.

Researched answer: When working with Ruby programming language I found it very interesting the approach of OOP. I can appreciate the syntax and the hash just make sense as it represents an object. Unlike arrays hashes in Ruby do not have a zero index. Instead they make reference to the object itself. Also known as a collection or library of key value pairs. Can take in a different range of data.

2. What is a gem?
Your answer: A gem is a node module or snippets of data that allows us to run Ruby code. When running Ruby the gems are loaded into the app we create and saves us the time of having to seek these  or create them individually. 


Researched answer: They are really interesting plug ins or add ons to the Ruby library. It can allow you to add more functionality to your code. We used a ruby module called RSPEC that allowed for testing of Ruby code. Depending on what you are trying to code you can look for a gem to see if someone has built it. If not you can publish your own. There is a Ruby gems for validating things like customer location, email ect.

3. What is Ruby on Rails? 

Your answer:   Rails is a library or framework that works in conjunction with Ruby to quickly start a project using pre installed codes. Very similar to React. I have used rails to spin up an app create objects and make tables. Also was able to use SQL to run tests on top of that to make sure code is getting the return we expect.

Researched answer: Rails is an MVC or Model View Controller. In my experience using this MVC it had many files but the ones we had to actually code were not that many. It was very easy to get up and running. It has a good amount of folders and files setup so that when you run it you get a web page that is running from the start. 

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is used to convert or translate code from one language to another. SQL is a open sourced relational database. There are also operational databases or functional. I used the postrgreSQL database to create tables gather and assimilate data.

Researched answer: Uses tables and rows to generate data driven analysis. Very useful in large data management, sales, marketing. Users data can be stored and accessed using primary keys. 

5. What are primary keys? Why are they important?

Your answer:The primary keys are unique identifiers for objects in Ruby. This makes it so that each object created from a class can be unique. We created classes in ruby and used those to make objects and input or store data such as user, username and password. They are important in being able to distinguish objects.

Researched answer: These are automatically done whenever a table is created. THey use an integer column. 

## Looking Ahead: Terms for Next We
Research and define the following terms to the best of your ability.

1. RESTful routes: Based on Rest architecture. Provides mapping from HTTP actions to CRUD actions

2. JSON:JavaScript Object Notation
    It is a text based way of storing and sending data. 
    It is easy to understand in that it is self describing.
3. ERB: Easy to operate but strong template system for RUby. You can embed Ruby code into an HTML doc. 

4. Params: It is method. It returns some object like a controller and it is similar to a as. 

5. API:Application Programming Interface. Similar to a batch of URL's you can ask from your Rails app to retrieve data. An example of an API is an IP Geolocation service that can find out where a user is at. It gives the web page some really enhanced interface. 

# Interview Question From Last week
# Make a function that takes in a string and outputs the middle character of a string. If it is even output should be two characters 
 ```Ruby
 
 string= "allllloolllllla"
 string2= "heyy"

def middleLetters(str)                              #function that takes in a string 
  middle =  str.length / 2                          #declare variable for middle by dividing string in half
    if str %2 == 0                                    #
        return str[middle-1] +str[middle]
    else 
       return str[middle.round]
    end
end

p middleLetters(string)
