from flask import Flask,render_template,request,jsonify

app=Flask(__name__)
books = [
    {"id": 1, "title": "Learn Python", "author": "John Doe", "available": True},
    {"id": 2, "title": "Mastering C++", "author": "Jane Smith", "available": True},
    {"id": 3, "title": "JavaScript for Beginners", "author": "Robert Brown", "available": True},
    {"id": 4, "title": "Advanced Java", "author": "Emily White", "available": True},
    {"id": 5, "title": "Data Structures in C", "author": "Michael Green", "available": True},
    {"id": 6, "title": "Algorithms in Python", "author": "Sarah Black", "available": False},
]

@app.route("/search", methods=["GET"])
def search_books():
    query = request.args.get("query", "").lower()
    filtered_books = [
        book for book in books if query in book["title"].lower() or query in book["author"].lower()
    ]
    return jsonify(filtered_books)


if __name__=='__main__':
    app.run(debug=True)