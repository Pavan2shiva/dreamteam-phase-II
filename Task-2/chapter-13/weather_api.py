# Weather information using API
import requests

print("Weather Finder")

city = input("Enter city name: ")

# API key
api_key = "d8c1f87a21094ce282e8b53e1c3c0da9"

#weather server API URL
url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key

#requesting  data from internet
response = requests.get(url)

# convert data to dictionary
data = response.json()

# check if city found
if data["cod"] == 200:

    temperature = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    weather = data["weather"][0]["description"]

    # Kelvin → Celsius conversion
    temperature_c = temperature - 273.15

    print("\nWeather in", city)
    print("Temperature:", round(temperature_c, 2), "°C")
    print("Humidity:", humidity, "%")
    print("Condition:", weather)

else:
    print("City not found!")
