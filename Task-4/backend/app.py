from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = "dreamteam123"
jwt = JWTManager(app)

API = "AIzaSyDgBJjNkWou96G7i5WO36ANrqCQTNz2gYk" 

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    if not data:
        return jsonify({"error": "Missing data"}), 400

    username = data.get("username")
    password = data.get("password")

    if username == "dreamteam" and password == "task":
        token = create_access_token(identity=username)
        return jsonify({"token": token}), 200

    return jsonify({"error": "Invalid credentials"}), 401

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
            "thumbnail": info.get("imageLinks", {}).get("thumbnail", ""),
            "preview": info.get("previewLink")
        })

    return jsonify(books), 200


bookmarks_list = []

@app.route("/add-bookmark", methods=["POST"])
@jwt_required()
def add_bookmark():
    data = request.json

    if not data:
        return jsonify({"error": "No data provided"}), 400

    bookmarks_list.append(data)
    return jsonify({"message": "Bookmark added"}), 201


@app.route("/bookmarks")
@jwt_required()
def get_bookmarks():
    return jsonify(bookmarks_list), 200


@app.route("/search")
def search_books():
    query = request.args.get("q")

   
    if not query:
        return jsonify({"error": "Query parameter required"}), 400

    url = f"https://www.googleapis.com/books/v1/volumes?q={query}&maxResults=10&key={API}"
    res = requests.get(url).json()

    books = []

    for item in res.get("items", []):
        info = item["volumeInfo"]

        books.append({
            "title": info.get("title"),
            "author": ", ".join(info.get("authors", ["Unknown"])),
            "thumbnail": info.get("imageLinks", {}).get("thumbnail", ""),
            "preview": info.get("previewLink")
        })

    return jsonify(books), 200

if __name__ == "__main__":
    app.run(debug=False)