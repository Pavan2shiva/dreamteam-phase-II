from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API = "AIzaSyDgBJjNkWou96G7i5WO36ANrqCQTNz2gYk"   

@app.route("/books")
def get_books():
    url = f"https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10&key={API}"
    res = requests.get(url).json()

    books = []

    for item in res.get("items", []):
        info = item["volumeInfo"]

        books.append({
            "title": info.get("title"),
            "author": ", ".join(info.get("authors", ["Unknown author"])),
            "thumbnail": info.get("imageLinks", {}).get("thumbnail"),
            "preview": info.get("previewLink")
        })

    return jsonify(books)



bookmarks_list = []

@app.route("/add-bookmark", methods=["POST"])
def add_bookmark():
    data = request.json
    bookmarks_list.append(data)

    print("BOOKMARKS:", bookmarks_list)

    return {"message": "added"}


@app.route("/bookmarks")
def get_bookmarks():
    return jsonify(bookmarks_list)


@app.route("/search")
def search_books():
    query = request.args.get("q")

    url = f"https://www.googleapis.com/books/v1/volumes?q={query}&maxResults=10&key={API}"
    res = requests.get(url).json()

    books = []

    for item in res.get("items", []):
        info = item["volumeInfo"]

        books.append({
            "title": info.get("title"),
            "author": ", ".join(info.get("authors", ["Unknown"])),
            "thumbnail": info.get("imageLinks", {}).get("thumbnail"),
            "preview": info.get("previewLink")
        })

    return jsonify(books)


if __name__ == "__main__":
    app.run(debug=True)