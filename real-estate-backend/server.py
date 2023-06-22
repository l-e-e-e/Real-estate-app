# import tornado.ioloop
# import tornado.web
# import mysql.connector
# import decimal
# import json

# # MySQL database configuration
# db_config = {
#     'host': 'localhost',
#     'user': 'Leela',
#     'password': 'Leepra388@',
#     'database': 'real_estate',
# }

# # Connect to the MySQL database
# db_conn = mysql.connector.connect(**db_config)
# db_cursor = db_conn.cursor()

# # Custom JSON encoder to handle Decimal serialization
# class DecimalEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, decimal.Decimal):
#             return float(o)
#         return super().default(o)

# # Tornado request handlers
# class ListingsHandler(tornado.web.RequestHandler):
#     def set_default_headers(self):
#         self.set_header('Access-Control-Allow-Origin', 'http://localhost:3000')
#         self.set_header('Access-Control-Allow-Headers', 'Content-Type')
#         self.set_header('Access-Control-Allow-Methods', 'GET, POST, DELETE')

#     def options(self):
#         # Respond to preflight requests
#         self.set_status(204)
#         self.finish()

#     def get(self):
#         db_cursor.execute('SELECT * FROM listings')
#         listings = []
#         for (id, title, price) in db_cursor:
#             listings.append({
#                 'title': title,
#                 'price': price,
#             })
#         self.write(json.dumps({'listings': listings}, cls=DecimalEncoder))

#     def post(self):
#         request_data = json.loads(self.request.body)
#         title = request_data.get('title')
#         price = request_data.get('price')
        
#         query = 'INSERT INTO listings (title, price) VALUES (%s, %s)'
#         db_cursor.execute(query, (title, price))
#         db_conn.commit()
#         self.write({'message': 'Listing added successfully'})

#     def delete(self, listing_id):
#         self.set_header('Access-Control-Allow-Origin', 'http://localhost:3000')
#         self.set_header('Access-Control-Allow-Headers', 'Content-Type')
#         self.set_header('Access-Control-Allow-Methods', 'GET, POST, DELETE')

#         query = 'DELETE FROM listings WHERE id = %s'
#         db_cursor.execute(query, (listing_id,))
#         db_conn.commit()
#         self.write({'message': f'Listing {listing_id} deleted successfully'})


# def make_app():
#     return tornado.web.Application([
#         (r'/api/listings/([0-9]+)', ListingsHandler),
#         (r'/api/listings', ListingsHandler),
#     ])

# if __name__ == '__main__':
#     app = make_app()
#     app.listen(8000)
#     tornado.ioloop.IOLoop.current().start()




import tornado.ioloop
import tornado.web
import mysql.connector
import decimal
import json

# MySQL database configuration
db_config = {
    'host': 'localhost',
    'user': 'Leela',
    'password': 'Leepra388@',
    'database': 'real_estate',
}

# Connect to the MySQL database
db_conn = mysql.connector.connect(**db_config)
db_cursor = db_conn.cursor()

# Custom JSON encoder to handle Decimal serialization
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super().default(o)

# Tornado request handlers
class ListingsHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', 'http://localhost:3000')
        self.set_header('Access-Control-Allow-Headers', 'Content-Type')
        self.set_header('Access-Control-Allow-Methods', 'GET, POST, DELETE')

    def options(self, listing_id=None):
        # Respond to preflight requests
        self.set_status(204)
        self.finish()

    def get(self):
        db_cursor.execute('SELECT * FROM listings')
        listings = []
        for (id, title, price) in db_cursor:
            listings.append({
                'id': id,
                'title': title,
                'price': price,
            })
        self.write(json.dumps({'listings': listings}, cls=DecimalEncoder))

    def post(self):
        request_data = json.loads(self.request.body)
        title = request_data.get('title')
        price = request_data.get('price')
        
        query = 'INSERT INTO listings (title, price) VALUES (%s, %s)'
        db_cursor.execute(query, (title, price))
        db_conn.commit()
        self.write({'message': 'Listing added successfully'})

    def delete(self, listing_id):
        query = 'DELETE FROM listings WHERE id = %s'
        db_cursor.execute(query, (listing_id,))
        db_conn.commit()
        self.write({'message': f'Listing {listing_id} deleted successfully'})


def make_app():
    return tornado.web.Application([
        (r'/api/listings/([0-9]+)', ListingsHandler),
        (r'/api/listings', ListingsHandler),
    ])

if __name__ == '__main__':
    app = make_app()
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
