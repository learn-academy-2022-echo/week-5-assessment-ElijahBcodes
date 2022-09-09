# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Pseudo code:
# Input:an array of words and a single letter
# Transformation:iterate thru the array and return aany words that match the letter
#declare the function, takes in two params an array and string.
#filter the array if the values in the aray include the letter in the string they pass thru
# Output:array of words that match the letter

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def has_o(array,str)                   #declare function that takes an array and string as args
    array.filter do |value|             #filter the array for the values    
        value.include?(str)             #if the values inlcude the given string then they get filtered
    end

end
p has_o(beverages_array, letter_o)
p has_o(beverages_array, letter_t)
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# Pseudo code
# Input:takes in a hash 
# Transformation: get rid of nested arrays, turn hash into an array and sort in alphabetical order.
#first with the fresh variable able to use the flatten method twice to un nest the arrays
#declare empty array final
#then map the array if the value is a string it is pushed onto the empty array
#use the sort method to put them in abc order.

# Output:an array that is in alphabeticalorder
us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

def usa(hash)
    fresh = hash.flatten.flatten
    final = []
    fresh.map do |value|
        if value.is_a?(String)
            final.push(value)
        end
    end
    final.sort()
end

p usa(us_states)


# us_states.each do |key, value|
#     puts "#{value}   "
# end
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# Pseudo code: make a class called Bike that is initializedwith a model
# Input:
# Transformation: model Bike will have wheels(2), current_speed(0)
# create a method that returns a sentence with all the info from the bike object 
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
#
class Bike
    attr_accessor :model, :wheels, :current_speed
    
    def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0 
    @stopped = false
    end
    
    def get_bike_story
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def faster(num)
        @current_speed = @current_speed + num
    end

    def brake(num)
        @current_speed = @current_speed - num
        if @current_speed < 0 
            @current_speed = 0
        end
    end   
end 

newBike = Bike.new ('Trek')

# 
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
newBike.faster(10)  
newBike.get_bike_story
newBike.faster(18)

newBike.get_bike_story
newBike.brake(5)
newBike.get_bike_story
newBike.brake(25)
newBike.get_bike_story
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
